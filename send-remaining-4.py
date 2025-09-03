#!/usr/bin/env python3
"""
Envoi des 4 derniers emails du batch 2 qui n'ont pas été envoyés
"""

import smtplib
import time
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from datetime import datetime
import json
import csv

# Configuration
SMTP_SERVER = "smtp.gmail.com"
SMTP_PORT = 587
GMAIL_EMAIL = "frederic.de.choulot@gmail.com"
# Password removed for security - use .env.local
FROM_EMAIL = "contact@sync-mode.fr"
FROM_NAME = "Frédéric - Sync Mode"

# LES 4 QUI RESTENT
prospects = [
    {
        "company": "BILLYBELT",
        "contact": "Jean-Baptiste Gaveau",
        "email": "contact@billybelt.com",
        "platforms": "Faire/Ankorstore",
        "template": "standard"
    },
    {
        "company": "Hindbag",
        "contact": "Pierre Monnier",
        "email": "hello@hindbag.fr",
        "platforms": "Faire/Ankorstore",
        "template": "impact"
    },
    {
        "company": "Grace & Mila",
        "contact": "Patrick Chou",
        "email": "eshop@graceandmila.com",
        "platforms": "Site B2B propriétaire",
        "template": "etabli"
    },
    {
        "company": "Agapée Jewelry",
        "contact": "",
        "email": "hello@agapee.co",
        "platforms": "Faire/Ankorstore",
        "template": "standard"
    }
]

def get_email_body(prospect):
    """Email court sans numéro"""
    first_name = prospect['contact'].split()[0] if prospect['contact'] else ""
    greeting = f"Bonjour {first_name}" if first_name else "Bonjour"
    
    if prospect['template'] == 'impact':
        return f"""{greeting},

J'ai vu le beau projet Hindbag et votre partenariat avec l'ONG indienne.

Comment gérez-vous la synchro entre Faire et Ankorstore avec votre croissance ?

Sync Mode automatise tout pour 69€/mois.
Plus de temps pour votre impact social.

On en discute ?

Frédéric
sync-mode.fr"""
    
    elif prospect['template'] == 'etabli':
        return f"""{greeting},

1800 points de vente, impressionnant !

Comment synchronisez-vous tout ça ?

Sync Mode peut s'intégrer à votre système.
69€/mois, toutes plateformes.

Intéressé ?

Frédéric
sync-mode.fr"""
    
    else:
        return f"""{greeting},

{prospect['company']} sur Faire et Ankorstore.

Synchro manuelle = 5h/semaine perdues.

Sync Mode : 69€/mois, tout automatique.

Démo cette semaine ?

Frédéric
sync-mode.fr"""

def send_email(prospect):
    """Envoi rapide"""
    subject = f"{prospect['company']} - Synchronisation automatique"
    body = get_email_body(prospect)
    
    msg = MIMEMultipart()
    msg['From'] = f"{FROM_NAME} <{FROM_EMAIL}>"
    msg['To'] = prospect['email']
    msg['Subject'] = subject
    msg['Reply-To'] = FROM_EMAIL
    
    msg.attach(MIMEText(body, 'plain', 'utf-8'))
    
    try:
        server = smtplib.SMTP(SMTP_SERVER, SMTP_PORT)
        server.starttls()
        server.login(GMAIL_EMAIL, GMAIL_APP_PASSWORD)
        server.sendmail(FROM_EMAIL, prospect['email'], msg.as_string())
        server.quit()
        
        print(f"✅ {prospect['company']} envoyé!")
        
        # Log
        with open('email-log.json', 'r') as f:
            log = json.load(f)
        log.append({
            "timestamp": datetime.now().isoformat(),
            "company": prospect['company'],
            "contact": prospect['contact'],
            "email": prospect['email'],
            "subject": subject,
            "status": "sent"
        })
        with open('email-log.json', 'w') as f:
            json.dump(log, f, indent=2, ensure_ascii=False)
        
        return True
    except Exception as e:
        print(f"❌ Erreur: {e}")
        return False

# Envoi rapide
print("🚀 ENVOI DES 4 DERNIERS")
print("=" * 40)

for p in prospects:
    print(f"📧 {p['company']}...", end=" ")
    if send_email(p):
        time.sleep(10)  # Seulement 10 secondes

print("\n✅ Terminé! Total campagne: 14 emails")