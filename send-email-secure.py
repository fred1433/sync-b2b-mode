#!/usr/bin/env python3
"""
Script sécurisé pour envoyer des emails avec le nouveau mot de passe
"""

import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

# Configuration
SMTP_SERVER = "smtp.gmail.com"
SMTP_PORT = 587
GMAIL_EMAIL = "frederic.de.choulot@gmail.com"
GMAIL_APP_PASSWORD = "CHANGE_ME_IN_ENV_LOCAL"  # NE JAMAIS mettre le vrai mot de passe ici!
FROM_EMAIL = "contact@sync-mode.fr"
FROM_NAME = "Frédéric - Sync Mode"

def send_test_email():
    """Envoie un email de test pour vérifier que tout marche"""
    
    msg = MIMEMultipart()
    msg['From'] = f"{FROM_NAME} <{FROM_EMAIL}>"
    msg['To'] = GMAIL_EMAIL
    msg['Subject'] = "Test - Nouveau mot de passe configuré ✅"
    msg['Reply-To'] = FROM_EMAIL
    
    body = """Parfait !

Le nouveau mot de passe fonctionne.
Tu peux maintenant continuer la prospection en toute sécurité.

Les anciens mots de passe ont été supprimés des fichiers.

Frédéric
"""
    
    msg.attach(MIMEText(body, 'plain', 'utf-8'))
    
    try:
        server = smtplib.SMTP(SMTP_SERVER, SMTP_PORT)
        server.starttls()
        server.login(GMAIL_EMAIL, GMAIL_APP_PASSWORD)
        server.sendmail(FROM_EMAIL, GMAIL_EMAIL, msg.as_string())
        server.quit()
        print("✅ Email de test envoyé avec succès !")
        print("Le nouveau mot de passe fonctionne parfaitement.")
        return True
    except Exception as e:
        print(f"❌ Erreur : {e}")
        return False

if __name__ == "__main__":
    print("🔐 Test du nouveau mot de passe Gmail...")
    send_test_email()