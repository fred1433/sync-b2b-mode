#!/usr/bin/env python3
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from email.utils import formataddr

# Configuration
SMTP_SERVER = "smtp.gmail.com"
SMTP_PORT = 587
GMAIL_EMAIL = "frederic.de.choulot@gmail.com"
# Password removed for security - use .env.local

TO_EMAIL = "frederic.de.choulot@gmail.com"

SUBJECT = "TEST 2 - Cherry Paris - Synchronisation automatique"

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

PS: Test v2 - l'expéditeur devrait maintenant être uniquement contact@sync-mode.fr"""

print("📧 Envoi de l'email test corrigé...")

# Créer le message avec headers corrects
msg = MIMEMultipart()
msg['From'] = formataddr(("Frédéric - Sync Mode", "contact@sync-mode.fr"))
msg['Reply-To'] = "contact@sync-mode.fr"
msg['To'] = TO_EMAIL
msg['Subject'] = SUBJECT

# IMPORTANT: Headers pour masquer Gmail
msg['X-Google-Original-From'] = msg['From']
msg['Sender'] = "contact@sync-mode.fr"

msg.attach(MIMEText(BODY, 'plain', 'utf-8'))

try:
    # Connexion et envoi
    server = smtplib.SMTP(SMTP_SERVER, SMTP_PORT)
    server.starttls()
    server.login(GMAIL_EMAIL, GMAIL_APP_PASSWORD)
    
    # Envoyer avec l'adresse sync-mode comme envelope sender
    server.send_message(msg, from_addr="contact@sync-mode.fr")
    server.quit()
    
    print("✅ Email v2 envoyé !")
    print("📬 Vérifie si maintenant l'expéditeur est uniquement contact@sync-mode.fr")
    
except Exception as e:
    print(f"❌ Erreur : {str(e)}")