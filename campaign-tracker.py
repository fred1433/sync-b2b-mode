#!/usr/bin/env python3
"""
Système de suivi complet pour la campagne de prospection
"""

import csv
import json
from datetime import datetime, timedelta
import os

class CampaignTracker:
    def __init__(self):
        self.tracking_file = "campaign-tracking.json"
        self.prospects_file = "prospects.csv"
        self.load_or_create_tracking()
    
    def load_or_create_tracking(self):
        """Charge ou crée le fichier de tracking"""
        if os.path.exists(self.tracking_file):
            with open(self.tracking_file, 'r') as f:
                self.tracking = json.load(f)
        else:
            self.tracking = {
                "emails_sent": [],
                "responses": [],
                "statistics": {
                    "total_sent": 0,
                    "total_responses": 0,
                    "total_interested": 0,
                    "total_demos": 0
                },
                "next_actions": []
            }
    
    def save_tracking(self):
        """Sauvegarde le tracking"""
        with open(self.tracking_file, 'w') as f:
            json.dump(self.tracking, f, indent=2, ensure_ascii=False)
    
    def log_email_sent(self, company, email, template, subject):
        """Enregistre un email envoyé"""
        entry = {
            "company": company,
            "email": email,
            "template": template,
            "subject": subject,
            "sent_date": datetime.now().isoformat(),
            "status": "sent",
            "follow_up_date": (datetime.now() + timedelta(days=3)).isoformat()
        }
        self.tracking["emails_sent"].append(entry)
        self.tracking["statistics"]["total_sent"] += 1
        self.save_tracking()
        
        # Mise à jour du CSV
        self.update_csv_status(company, "Email envoyé", f"Template: {template}")
    
    def update_csv_status(self, company, status, notes=""):
        """Met à jour le statut dans prospects.csv"""
        rows = []
        with open(self.prospects_file, 'r', encoding='utf-8') as file:
            reader = csv.DictReader(file)
            for row in reader:
                if row['Entreprise'] == company:
                    row['Status'] = status
                    row['Date Contact'] = datetime.now().strftime("%Y-%m-%d")
                    if notes:
                        row['Notes'] = notes
                rows.append(row)
        
        with open(self.prospects_file, 'w', encoding='utf-8', newline='') as file:
            fieldnames = ['Entreprise', 'Contact', 'Email', 'LinkedIn', 'Plateformes', 'Ville', 'Status', 'Date Contact', 'Notes']
            writer = csv.DictWriter(file, fieldnames=fieldnames)
            writer.writeheader()
            writer.writerows(rows)
    
    def get_pending_followups(self):
        """Retourne les relances à faire"""
        pending = []
        now = datetime.now()
        
        for email in self.tracking["emails_sent"]:
            if email["status"] == "sent":
                follow_up_date = datetime.fromisoformat(email["follow_up_date"])
                if follow_up_date <= now:
                    pending.append(email)
        
        return pending
    
    def get_statistics(self):
        """Retourne les statistiques de la campagne"""
        stats = self.tracking["statistics"]
        
        # Calcul du taux de réponse
        if stats["total_sent"] > 0:
            response_rate = (stats["total_responses"] / stats["total_sent"]) * 100
            conversion_rate = (stats["total_demos"] / stats["total_sent"]) * 100
        else:
            response_rate = 0
            conversion_rate = 0
        
        return {
            "📧 Emails envoyés": stats["total_sent"],
            "💬 Réponses reçues": stats["total_responses"],
            "✅ Intéressés": stats["total_interested"],
            "🎯 Démos planifiées": stats["total_demos"],
            "📊 Taux de réponse": f"{response_rate:.1f}%",
            "🚀 Taux de conversion": f"{conversion_rate:.1f}%"
        }
    
    def generate_daily_report(self):
        """Génère un rapport quotidien"""
        report = []
        report.append("📊 RAPPORT QUOTIDIEN DE PROSPECTION")
        report.append("=" * 50)
        report.append(f"Date: {datetime.now().strftime('%Y-%m-%d %H:%M')}")
        report.append("")
        
        # Statistiques
        stats = self.get_statistics()
        for key, value in stats.items():
            report.append(f"{key}: {value}")
        
        report.append("")
        report.append("📋 RELANCES À FAIRE AUJOURD'HUI:")
        report.append("-" * 30)
        
        # Relances
        pending = self.get_pending_followups()
        if pending:
            for p in pending:
                report.append(f"• {p['company']} ({p['email']})")
                report.append(f"  Envoyé le: {p['sent_date'][:10]}")
        else:
            report.append("Aucune relance pour aujourd'hui")
        
        return "\n".join(report)

# Test
if __name__ == "__main__":
    tracker = CampaignTracker()
    print(tracker.generate_daily_report())