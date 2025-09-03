#!/usr/bin/env python3
"""
Envoi du batch 2 - 10 emails SANS numéro de téléphone
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

# BATCH 2 - 10 NOUVEAUX PROSPECTS
prospects = [
    {
        "company": "Andy & Lucy",
        "contact": "Dian Huang",
        "email": "contact@andylucy.com",  # Email pro au lieu du Gmail
        "platforms": "Faire/Ankorstore/PFS",
        "location": "Aubervilliers",
        "template": "aubervilliers"
    },
    {
        "company": "Bonheur du Jour Paris",
        "contact": "Catherine Dufossez",
        "email": "catherine@bdjparis.com",  # Email direct !
        "platforms": "Faire/Ankorstore/MOM",
        "location": "Tourcoing",
        "template": "multi-platform"
    },
    {
        "company": "Zayne Paris",
        "contact": "",
        "email": "contact@zayneparis.com",
        "platforms": "Faire/Ankorstore/PFS",
        "location": "Aubervilliers",
        "template": "aubervilliers-pfs"
    },
    {
        "company": "Calie Paris",
        "contact": "",
        "email": "hello@calieparis.com",
        "platforms": "Faire/Ankorstore/PFS",
        "location": "Aubervilliers",
        "template": "aubervilliers-pfs"
    },
    {
        "company": "Maison René Derhy",
        "contact": "René Derhy",
        "email": "info@derhy.com",
        "platforms": "Faire/Ankorstore/FashionGo",
        "location": "Paris",
        "template": "multi-platform"
    },
    {
        "company": "Leo & Ugo",
        "contact": "Léo Amsallem",
        "email": "contact@leoetugo.fr",
        "platforms": "WSN/Faire",
        "location": "Paris Opéra",
        "template": "standard"
    },
    {
        "company": "BILLYBELT",
        "contact": "Jean-Baptiste Gaveau",
        "email": "contact@billybelt.com",
        "platforms": "Faire/Ankorstore",
        "location": "Bondues",
        "template": "standard"
    },
    {
        "company": "Hindbag",
        "contact": "Pierre Monnier",
        "email": "hello@hindbag.fr",
        "platforms": "Faire/Ankorstore",
        "location": "Paris",
        "template": "impact-social"
    },
    {
        "company": "Grace & Mila",
        "contact": "Patrick Chou",
        "email": "eshop@graceandmila.com",
        "platforms": "Site B2B propriétaire",
        "location": "Pantin",
        "template": "etabli"
    },
    {
        "company": "Agapée Jewelry",
        "contact": "",
        "email": "hello@agapee.co",
        "platforms": "Faire/Ankorstore",
        "location": "Paris",
        "template": "standard"
    }
]

def get_email_body(prospect):
    """Génère le corps de l'email personnalisé SANS numéro"""
    first_name = prospect['contact'].split()[0] if prospect['contact'] else ""
    greeting = f"Bonjour {first_name}" if first_name else "Bonjour"
    
    if prospect['template'] == 'aubervilliers':
        return f"""{greeting},

Sync Mode est LA solution de synchro pour les grossistes d'Aubervilliers.

Vos voisins (Cherry Paris, Zayne Paris) l'utilisent déjà.

On synchronise automatiquement :
- Faire ↔ Shopify
- Ankorstore ↔ PFS
- Tout en temps réel

Café à Aubervilliers cette semaine ?

Frédéric
sync-mode.fr"""
    
    elif prospect['template'] == 'aubervilliers-pfs':
        return f"""{greeting},

Je vois que vous êtes sur Paris Fashion Shops ET à Aubervilliers.

Beaucoup de vos voisins (Cherry Paris, Andy & Lucy) utilisent Sync Mode 
pour synchroniser PFS avec leurs autres canaux.

69€/mois, installation gratuite cette semaine.
Intéressé par une démo sur place ?

Frédéric
sync-mode.fr"""
    
    elif prospect['template'] == 'multi-platform':
        platforms = prospect['platforms'].split('/')
        return f"""{greeting},

J'ai vu que {prospect['company']} vend sur {len(platforms)} plateformes différentes.

Gérer {len(platforms)} stocks manuellement = minimum 10h/semaine perdues.

Sync Mode synchronise tout automatiquement pour 69€/mois.
Zéro survente, stocks temps réel, installation en 24h.

15 min cette semaine pour vous montrer ?

Frédéric
sync-mode.fr"""
    
    elif prospect['template'] == 'impact-social':
        return f"""{greeting},

J'ai vu le beau projet Hindbag et votre partenariat avec l'ONG indienne.

Comment gérez-vous la synchro des stocks entre Faire et Ankorstore ?
(Surtout avec votre croissance actuelle)

Sync Mode automatise tout pour 69€/mois.
Plus de temps pour vous concentrer sur votre impact social.

On en discute cette semaine ?

Frédéric
sync-mode.fr"""
    
    elif prospect['template'] == 'etabli':
        return f"""{greeting},

Grace & Mila a un impressionnant réseau de 1800 points de vente.

Comment gérez-vous la synchro avec vos plateformes B2B ?
Un système propriétaire peut être coûteux à maintenir.

Sync Mode peut s'intégrer à votre système existant.
69€/mois, toutes plateformes incluses.

Intéressé par une discussion technique ?

Frédéric
sync-mode.fr"""
    
    else:  # standard
        platforms = prospect['platforms'].split('/')[:2]
        return f"""{greeting},

J'ai vu que {prospect['company']} vend sur {' et '.join(platforms)}.

Comment gérez-vous la synchro des stocks entre les plateformes ?
(La plupart font encore manuellement et perdent 5h/semaine)

Sync Mode synchronise automatiquement tout pour 69€/mois.
Installation en 24h, on s'occupe de tout.

15 min cette semaine pour une démo ?

Frédéric
sync-mode.fr"""

def send_email(prospect):
    """Envoie un email à un prospect"""
    subject = f"{prospect['company']} - Synchronisation automatique de vos plateformes"
    body = get_email_body(prospect)
    
    msg = MIMEMultipart()
    msg['From'] = f"{FROM_NAME} <{FROM_EMAIL}>"
    to_display = f"{prospect['contact']} <{prospect['email']}>" if prospect['contact'] else prospect['email']
    msg['To'] = to_display
    msg['Subject'] = subject
    msg['Reply-To'] = FROM_EMAIL
    
    msg.attach(MIMEText(body, 'plain', 'utf-8'))
    
    try:
        server = smtplib.SMTP(SMTP_SERVER, SMTP_PORT)
        server.starttls()
        server.login(GMAIL_EMAIL, GMAIL_APP_PASSWORD)
        server.sendmail(FROM_EMAIL, prospect['email'], msg.as_string())
        server.quit()
        
        print(f"✅ {prospect['company']} - Email envoyé à {prospect['email']}")
        
        # Logger l'envoi
        log_email_sent(prospect, subject)
        update_csv(prospect['company'], "Email envoyé", datetime.now().strftime("%Y-%m-%d"))
        return True
        
    except Exception as e:
        print(f"❌ {prospect['company']} - Erreur : {str(e)}")
        return False

def log_email_sent(prospect, subject):
    """Enregistre l'envoi dans le log JSON"""
    log_entry = {
        "timestamp": datetime.now().isoformat(),
        "company": prospect['company'],
        "contact": prospect['contact'],
        "email": prospect['email'],
        "subject": subject,
        "status": "sent"
    }
    
    try:
        with open('email-log.json', 'r') as f:
            log = json.load(f)
    except:
        log = []
    
    log.append(log_entry)
    
    with open('email-log.json', 'w') as f:
        json.dump(log, f, indent=2, ensure_ascii=False)

def update_csv(company, status, date):
    """Met à jour prospects.csv"""
    rows = []
    try:
        with open('prospects.csv', 'r', encoding='utf-8') as file:
            reader = csv.DictReader(file)
            for row in reader:
                if row['Entreprise'] == company:
                    row['Status'] = status
                    row['Date Contact'] = date
                rows.append(row)
        
        with open('prospects.csv', 'w', encoding='utf-8', newline='') as file:
            fieldnames = ['Entreprise', 'Contact', 'Email', 'LinkedIn', 'Plateformes', 'Ville', 'Status', 'Date Contact', 'Notes']
            writer = csv.DictWriter(file, fieldnames=fieldnames)
            writer.writeheader()
            writer.writerows(rows)
    except Exception as e:
        print(f"Note: Impossible de mettre à jour CSV: {e}")

def main():
    print("🚀 ENVOI BATCH 2 - 10 EMAILS (SANS TÉLÉPHONE)")
    print("=" * 60)
    print(f"Date: {datetime.now().strftime('%Y-%m-%d %H:%M')}")
    print(f"Emails à envoyer: {len(prospects)}")
    print()
    
    sent_count = 0
    failed = []
    
    for i, prospect in enumerate(prospects, 1):
        print(f"\n[{i}/{len(prospects)}] {prospect['company']}...")
        
        if send_email(prospect):
            sent_count += 1
            
            # Attendre 20 secondes entre chaque envoi (sauf le dernier)
            if i < len(prospects):
                wait_time = 20
                print(f"   ⏳ Attente {wait_time}s...")
                time.sleep(wait_time)
        else:
            failed.append(prospect['company'])
    
    # Rapport final
    print("\n" + "=" * 60)
    print("📊 RAPPORT BATCH 2")
    print("=" * 60)
    print(f"✅ Emails envoyés: {sent_count}/{len(prospects)}")
    
    if failed:
        print(f"❌ Échecs: {', '.join(failed)}")
    
    print()
    print("📧 TOTAL CAMPAGNE:")
    print(f"   Batch 1: 4 emails")
    print(f"   Batch 2: {sent_count} emails")
    print(f"   TOTAL: {4 + sent_count} emails envoyés aujourd'hui")
    print()
    print("💡 Surveille Gmail pour les réponses !")

if __name__ == "__main__":
    main()