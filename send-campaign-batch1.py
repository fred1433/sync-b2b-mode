#!/usr/bin/env python3
"""
Envoi automatique du premier batch d'emails
"""

import smtplib
import time
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from email.utils import formataddr
from datetime import datetime
from campaign_tracker import CampaignTracker

# Configuration
SMTP_SERVER = "smtp.gmail.com"
SMTP_PORT = 587
GMAIL_EMAIL = "frederic.de.choulot@gmail.com"
# Password removed for security - use .env.local

# Initialiser le tracker
tracker = CampaignTracker()

# Premier email à envoyer (Cherry Paris)
prospect = {
    "company": "Cherry Paris",
    "contact": "Pascal He",
    "email": "info@pinkiss-paris.com",
    "platforms": "Faire/Ankorstore",
    "location": "Aubervilliers"
}

def send_prospect_email(prospect):
    """Envoie un email à un prospect"""
    
    # Préparer le nom du contact
    first_name = prospect['contact'].split()[0] if prospect['contact'] else "Bonjour"
    
    # Sujet personnalisé
    subject = f"{prospect['company']} - Synchronisation Faire/Ankorstore automatique"
    
    # Corps de l'email
    body = f"""Bonjour {first_name},

J'ai vu que {prospect['company']} vend sur Faire ET Ankorstore.

Comment gérez-vous la synchro des stocks entre les deux ?
(La plupart font encore manuellement et perdent 5h/semaine)

Sync Mode synchronise automatiquement tout pour 69€/mois.
Installation en 24h, on s'occupe de tout.

15 min cette semaine pour une démo ?

Frédéric
sync-mode.fr
06 12 34 56 78"""
    
    # Créer le message
    msg = MIMEMultipart()
    msg['From'] = formataddr(("Frédéric - Sync Mode", "contact@sync-mode.fr"))
    msg['Reply-To'] = "contact@sync-mode.fr"
    msg['To'] = formataddr((prospect['contact'], prospect['email']))
    msg['Subject'] = subject
    msg['X-Google-Original-From'] = msg['From']
    
    msg.attach(MIMEText(body, 'plain', 'utf-8'))
    
    try:
        # Connexion et envoi
        server = smtplib.SMTP(SMTP_SERVER, SMTP_PORT)
        server.starttls()
        server.login(GMAIL_EMAIL, GMAIL_APP_PASSWORD)
        server.send_message(msg, from_addr="contact@sync-mode.fr")
        server.quit()
        
        # Logger l'envoi
        tracker.log_email_sent(
            prospect['company'],
            prospect['email'],
            "Template 1",
            subject
        )
        
        print(f"✅ Email envoyé à {prospect['company']} ({prospect['email']})")
        return True
        
    except Exception as e:
        print(f"❌ Erreur envoi à {prospect['company']}: {str(e)}")
        return False

def main():
    print("🚀 ENVOI DU PREMIER EMAIL DE PROSPECTION")
    print("=" * 50)
    print(f"Date: {datetime.now().strftime('%Y-%m-%d %H:%M')}")
    print()
    
    print(f"📧 Destinataire: {prospect['company']}")
    print(f"   Contact: {prospect['contact']}")
    print(f"   Email: {prospect['email']}")
    print(f"   Plateformes: {prospect['platforms']}")
    print()
    
    print("Envoi en cours...")
    success = send_prospect_email(prospect)
    
    if success:
        print()
        print("✅ SUCCESS!")
        print()
        print("📊 PROCHAINES ÉTAPES:")
        print("1. Surveiller les réponses dans Gmail")
        print("2. Relance automatique dans 3 jours si pas de réponse")
        print("3. Envoyer les 4 autres emails du batch")
        print()
        print("💡 Pour envoyer le batch complet (5 emails):")
        print("   python3 send-full-batch.py")
        print()
        
        # Afficher le rapport
        print(tracker.generate_daily_report())
    else:
        print("❌ L'envoi a échoué. Vérifie la configuration.")

if __name__ == "__main__":
    main()