#!/usr/bin/env python3
"""
Test d'envoi avec Gmail configuré pour @sync-mode.fr
"""

import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from datetime import datetime

# Configuration
SMTP_SERVER = "smtp.gmail.com"
SMTP_PORT = 587
GMAIL_EMAIL = "frederic.de.choulot@gmail.com"
# Password removed for security - use .env.local

TO_EMAIL = "frederic.de.choulot@gmail.com"
FROM_EMAIL = "contact@sync-mode.fr"
FROM_NAME = "Frédéric - Sync Mode"

SUBJECT = f"TEST FINAL - Email depuis sync-mode.fr - {datetime.now().strftime('%H:%M')}"

BODY = """Bonjour Frédéric,

Ceci est un test avec Gmail maintenant configuré pour envoyer depuis @sync-mode.fr.

Si tu vois cet email avec l'expéditeur "contact@sync-mode.fr" SANS theaipipe.com, 
alors c'est parfait ! On peut envoyer les vrais emails de prospection.

Test envoyé automatiquement par le script Python.

Frédéric
sync-mode.fr
06 12 34 56 78

PS: Prêt pour envoyer à Cherry Paris et les autres ?"""

print("📧 Envoi du test avec Gmail configuré...")
print(f"De : {FROM_EMAIL}")
print(f"À : {TO_EMAIL}")
print(f"Heure : {datetime.now().strftime('%H:%M:%S')}")
print()

# Créer le message
msg = MIMEMultipart()
msg['From'] = f"{FROM_NAME} <{FROM_EMAIL}>"
msg['To'] = TO_EMAIL
msg['Subject'] = SUBJECT
msg['Reply-To'] = FROM_EMAIL

msg.attach(MIMEText(BODY, 'plain', 'utf-8'))

try:
    # Connexion et envoi
    server = smtplib.SMTP(SMTP_SERVER, SMTP_PORT)
    server.starttls()
    server.login(GMAIL_EMAIL, GMAIL_APP_PASSWORD)
    
    # Envoi avec l'adresse from correcte
    server.sendmail(FROM_EMAIL, TO_EMAIL, msg.as_string())
    server.quit()
    
    print("✅ Email test envoyé avec succès !")
    print()
    print("📬 Vérifie ta boîte Gmail")
    print("L'expéditeur devrait maintenant être :")
    print("   contact@sync-mode.fr (SANS theaipipe.com)")
    print()
    print("Si c'est bon, on peut envoyer les vrais emails !")
    
except Exception as e:
    print(f"❌ Erreur : {str(e)}")