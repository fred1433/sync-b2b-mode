import { NextResponse } from "next/server";
import { Resend } from "resend";
import { calculateLeadScore } from "@/lib/lead-scoring";

// IMPORTANT: Crée un compte gratuit sur https://resend.com
// 1. Va sur https://resend.com/signup
// 2. Confirme ton email
// 3. Va dans "API Keys" et crée une clé
// 4. Ajoute RESEND_API_KEY="re_xxxxx" dans ton fichier .env.local
// 5. Ajoute ton email dans NOTIFICATION_EMAIL="ton-email@example.com"

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const leadScore = calculateLeadScore(data);
    
    // Format des plateformes et objectifs pour l'email
    const platformNames: Record<string, string> = {
      shopify: "Shopify",
      faire: "Faire",
      ankorstore: "Ankorstore",
      pfs: "Paris Fashion Shops",
      microstore: "MicroStore (MC)",
      efashion: "eFashion",
      amazon: "Amazon",
      zalando: "Zalando",
    };
    
    const objectiveNames: Record<string, string> = {
      stocks: "Synchroniser les stocks",
      survente: "Éviter la survente",
      centraliser: "Centraliser les commandes",
      prix: "Prix différenciés par canal",
      prepacks: "Gérer les prepacks/MOQ",
      "multi-entrepot": "Multi-entrepôts",
    };
    
    const platforms = data.platforms.map((p: string) => platformNames[p] || p).join(", ");
    const objectives = data.objectives.map((o: string) => objectiveNames[o] || o).join(", ");
    
    // Si Resend est configuré, envoie l'email
    if (resend && process.env.NOTIFICATION_EMAIL) {
      const priorityEmoji = leadScore.priority === "high" ? "🔥" : leadScore.priority === "medium" ? "⭐" : "📝";
      
      await resend.emails.send({
        from: "Sync Mode <onboarding@resend.dev>", // Domain par défaut de Resend
        to: process.env.NOTIFICATION_EMAIL,
        subject: `${priorityEmoji} Nouveau lead Sync Mode - Score ${leadScore.score}/10 - ${data.company}`,
        html: `
          <h2>Nouveau lead reçu sur Sync Mode</h2>
          
          <h3>Score: ${leadScore.score}/10 (${leadScore.priority === "high" ? "PRIORITÉ HAUTE" : leadScore.priority === "medium" ? "Priorité moyenne" : "Priorité faible"})</h3>
          
          <h4>Informations de contact:</h4>
          <ul>
            <li><strong>Entreprise:</strong> ${data.company}</li>
            <li><strong>Contact:</strong> ${data.fullName}</li>
            <li><strong>Email:</strong> <a href="mailto:${data.email}">${data.email}</a></li>
            <li><strong>Téléphone:</strong> <a href="tel:${data.phone}">${data.phone}</a></li>
          </ul>
          
          <h4>Profil business:</h4>
          <ul>
            <li><strong>Plateformes utilisées:</strong> ${platforms}</li>
            <li><strong>Objectifs:</strong> ${objectives}</li>
            <li><strong>Nombre d'entrepôts:</strong> ${data.warehouses}</li>
            <li><strong>Taille du catalogue:</strong> ${data.catalogSize} SKUs</li>
            <li><strong>ERP/WMS:</strong> ${data.hasERP ? "✅ Oui" : "❌ Non"}</li>
            <li><strong>Import CSV/SFTP:</strong> ${data.hasCSV ? "✅ Oui" : "❌ Non"}</li>
          </ul>
          
          <h4>Raisons du score:</h4>
          <ul>
            ${leadScore.reasons.map(r => `<li>${r}</li>`).join("")}
          </ul>
          
          ${leadScore.priority === "high" ? `
            <div style="background: #10b981; color: white; padding: 10px; border-radius: 5px; margin-top: 20px;">
              <strong>⚡ ACTION REQUISE:</strong> Ce lead a un score élevé. Contactez-le rapidement !
            </div>
          ` : ""}
        `,
      });
    } else {
      // Fallback: Log dans la console si Resend n'est pas configuré
      console.log("=== NOUVEAU LEAD REÇU ===");
      console.log("Score:", leadScore.score, "/10");
      console.log("Priorité:", leadScore.priority);
      console.log("Entreprise:", data.company);
      console.log("Contact:", data.fullName);
      console.log("Email:", data.email);
      console.log("Téléphone:", data.phone);
      console.log("========================");
      console.log("⚠️  RESEND NON CONFIGURÉ - Configure RESEND_API_KEY et NOTIFICATION_EMAIL dans .env.local");
    }
    
    return NextResponse.json({ 
      success: true, 
      leadScore,
      message: resend ? "Lead envoyé par email" : "Lead enregistré (email non configuré)"
    });
    
  } catch (error) {
    console.error("Erreur traitement lead:", error);
    return NextResponse.json(
      { success: false, error: "Erreur lors du traitement" },
      { status: 500 }
    );
  }
}