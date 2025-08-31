export interface LeadData {
  platforms: string[];
  objectives: string[];
  catalogSize: string;
  warehouses: number;
  volumeB2B: string;
  hasERP: boolean;
  hasCSV: boolean;
  email: string;
  phone?: string;
  company?: string;
}

export function calculateLeadScore(data: LeadData): {
  score: number;
  priority: "high" | "medium" | "low";
  reasons: string[];
} {
  let score = 0;
  const reasons: string[] = [];

  // PFS + MC cochés = +3 points
  const hasPFS = data.platforms.includes("pfs");
  const hasMC = data.platforms.includes("microstore");
  if (hasPFS && hasMC) {
    score += 3;
    reasons.push("Utilise PFS + MicroStore");
  }

  // >1 entrepôt = +2 points
  if (data.warehouses > 1) {
    score += 2;
    reasons.push("Multi-entrepôts");
  }

  // >1000 SKUs = +2 points
  if (data.catalogSize === "1000+" || data.catalogSize === "5000+") {
    score += 2;
    reasons.push("Catalogue large (>1000 SKUs)");
  }

  // Objectif synchroniser stocks = +2 points (priorité absolue)
  if (data.objectives.includes("stocks")) {
    score += 2;
    reasons.push("Synchronisation stocks prioritaire");
  }

  // Objectif éviter survente = +2 points
  if (data.objectives.includes("survente")) {
    score += 2;
    reasons.push("Éviter survente prioritaire");
  }

  // Mention prepacks/MOQ dans objectives = +2 points
  const hasPrepackObjective = data.objectives.some(obj => 
    obj.includes("prepack") || obj.includes("moq")
  );
  if (hasPrepackObjective) {
    score += 2;
    reasons.push("Besoins prepacks/MOQ");
  }

  // ERP/WMS connecté = +1 point
  if (data.hasERP) {
    score += 1;
    reasons.push("ERP/WMS existant");
  }

  // CSV/SFTP possible = +1 point
  if (data.hasCSV) {
    score += 1;
    reasons.push("Import/Export CSV disponible");
  }

  // Volume B2B élevé = +1 point
  if (data.volumeB2B === "100+" || data.volumeB2B === "500+") {
    score += 1;
    reasons.push("Volume B2B important");
  }

  // Déterminer la priorité
  let priority: "high" | "medium" | "low";
  if (score >= 5) {
    priority = "high";
  } else if (score >= 3) {
    priority = "medium";
  } else {
    priority = "low";
  }

  return { score, priority, reasons };
}