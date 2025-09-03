#!/usr/bin/env python3
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

# Configuration
SMTP_SERVER = "smtp.gmail.com"
SMTP_PORT = 587
GMAIL_EMAIL = "frederic.de.choulot@gmail.com"
# Password removed for security - use .env.local  # Sans espaces

TO_EMAIL = "frederic.de.choulot@gmail.com"
FROM_EMAIL = "contact@sync-mode.fr"
FROM_NAME = "Frédéric - Sync Mode"

SUBJECT = "TEST - Cherry Paris - Synchronisation Faire/Ankorstore automatique"

BODY = """Bonjour Pascal,

J'ai vu que Cherry Paris vend sur Faire ET Ankorstore.

Comment gérez-vous la synchro des stocks entre les deux ?
(La plupart font encore manuellement et perdent 5h/semaine)

Sync Mode synchronise automatiquement tout pour 69€/mois.
Installation en 24h, on s'occupe de tout.

15 min cette semaine pour une démo ?

Frédéric
sync-mode.fr
06 12 34 56 78

PS: Ceci est un email TEST envoyé à frederic.de.choulot@gmail.com pour vérifier le format"""

print("📧 Envoi de l'email test...")

# Créer le message
msg = MIMEMultipart()
msg['From'] = f"{FROM_NAME} <{FROM_EMAIL}>"
msg['To'] = TO_EMAIL
msg['Subject'] = SUBJECT
msg.attach(MIMEText(BODY, 'plain', 'utf-8'))

try:
    # Connexion et envoi
    server = smtplib.SMTP(SMTP_SERVER, SMTP_PORT)
    server.starttls()
    server.login(GMAIL_EMAIL, GMAIL_APP_PASSWORD)
    server.send_message(msg)
    server.quit()
    
    print("✅ Email envoyé avec succès !")
    print("📬 Vérifie ta boîte Gmail (frederic.de.choulot@gmail.com)")
    print("L'email devrait arriver dans quelques secondes")
    
except Exception as e:
    print(f"❌ Erreur : {str(e)}")