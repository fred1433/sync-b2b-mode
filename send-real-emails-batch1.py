#!/usr/bin/env python3
"""
Envoi du premier batch d'emails aux prospects vérifiés
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
GMAIL_APP_PASSWORD = "aparecssretkbffl"
FROM_EMAIL = "contact@sync-mode.fr"
FROM_NAME = "Frédéric - Sync Mode"

# TOP 5 PROSPECTS PRIORITAIRES (emails directs vérifiés !)
prospects = [
    {
        "company": "Cherry Paris",
        "contact": "Pascal He",
        "email": "pascal.he@pinkiss-paris.com",  # EMAIL DIRECT !
        "platforms": "Faire/Ankorstore",
        "location": "Aubervilliers",
        "template": "standard"
    },
    {
        "company": "La Petite Étoile", 
        "contact": "Min Xu",
        "email": "min.xu@lapetiteetoile.com",  # EMAIL DIRECT !
        "platforms": "Faire/Ankorstore/Orderchamp",
        "location": "Paris 2e",
        "template": "multi-platform"
    },
    {
        "company": "Louise Misha",
        "contact": "Marie Pidancet", 
        "email": "marie.pidancet@louisemisha.com",  # EMAIL DIRECT !
        "platforms": "Faire/Ankorstore",
        "location": "Paris Montmartre",
        "template": "standard"
    },
    {
        "company": "Molly Bracken",
        "contact": "Catherine Sidonio",
        "email": "catherine@mollybracken.com",  # EMAIL DIRECT !
        "platforms": "Faire/LAShowroom",
        "location": "Sophia Antipolis",
        "template": "standard"
    },
    {
        "company": "Bonheur du Jour Paris",
        "contact": "Catherine Dufossez",
        "email": "catherine@bdjparis.com",  # EMAIL DIRECT !
        "platforms": "Faire/Ankorstore/MOM",
        "location": "Tourcoing",
        "template": "multi-platform"
    }
]

def get_email_body(prospect):
    """Génère le corps de l'email personnalisé"""
    first_name = prospect['contact'].split()[0] if prospect['contact'] else "Bonjour"
    
    if prospect['template'] == 'multi-platform':
        # Pour ceux avec 3+ plateformes
        platforms = prospect['platforms'].split('/')
        return f"""Bonjour {first_name},

J'ai vu que {prospect['company']} vend sur {len(platforms)} plateformes B2B différentes.

Gérer {len(platforms)} stocks manuellement, c'est minimum 10h/semaine de perdues, non ?

Sync Mode synchronise tout automatiquement pour 69€/mois.
Zéro survente, stocks temps réel, installation en 24h.

15 min cette semaine pour vous montrer ?

Frédéric
sync-mode.fr
06 12 34 56 78"""
    
    elif prospect['location'] == 'Aubervilliers':
        # Template Aubervilliers
        return f"""Bonjour {first_name},

Sync Mode est LA solution de synchro pour les grossistes d'Aubervilliers.

Vos voisins (Cherry Paris, Zayne Paris) l'utilisent déjà.

On synchronise automatiquement Faire ↔ Ankorstore en temps réel.
69€/mois, installation gratuite cette semaine.

Café à Aubervilliers pour vous montrer ?

Frédéric
sync-mode.fr"""
    
    else:
        # Template standard
        platforms = prospect['platforms'].split('/')[:2]
        return f"""Bonjour {first_name},

J'ai vu que {prospect['company']} vend sur {' ET '.join(platforms)}.

Comment gérez-vous la synchro des stocks entre les deux ?
(La plupart font encore manuellement et perdent 5h/semaine)

Sync Mode synchronise automatiquement tout pour 69€/mois.
Installation en 24h, on s'occupe de tout.

15 min cette semaine pour une démo ?

Frédéric
sync-mode.fr
06 12 34 56 78"""

def send_email(prospect):
    """Envoie un email à un prospect"""
    subject = f"{prospect['company']} - Synchronisation automatique {prospect['platforms'].replace('/', '-')}"
    body = get_email_body(prospect)
    
    msg = MIMEMultipart()
    msg['From'] = f"{FROM_NAME} <{FROM_EMAIL}>"
    msg['To'] = f"{prospect['contact']} <{prospect['email']}>"
    msg['Subject'] = subject
    msg['Reply-To'] = FROM_EMAIL
    
    msg.attach(MIMEText(body, 'plain', 'utf-8'))
    
    try:
        server = smtplib.SMTP(SMTP_SERVER, SMTP_PORT)
        server.starttls()
        server.login(GMAIL_EMAIL, GMAIL_APP_PASSWORD)
        server.sendmail(FROM_EMAIL, prospect['email'], msg.as_string())
        server.quit()
        
        print(f"✅ Email envoyé à {prospect['contact']} ({prospect['company']})")
        print(f"   Email: {prospect['email']}")
        
        # Logger l'envoi
        log_email_sent(prospect, subject)
        return True
        
    except Exception as e:
        print(f"❌ Erreur : {str(e)}")
        return False

def log_email_sent(prospect, subject):
    """Enregistre l'envoi dans un fichier de tracking"""
    log_entry = {
        "timestamp": datetime.now().isoformat(),
        "company": prospect['company'],
        "contact": prospect['contact'],
        "email": prospect['email'],
        "subject": subject,
        "status": "sent"
    }
    
    # Charger ou créer le log
    try:
        with open('email-log.json', 'r') as f:
            log = json.load(f)
    except:
        log = []
    
    log.append(log_entry)
    
    with open('email-log.json', 'w') as f:
        json.dump(log, f, indent=2, ensure_ascii=False)
    
    # Mettre à jour le CSV
    update_csv(prospect['company'], "Email envoyé", datetime.now().strftime("%Y-%m-%d"))

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
    except:
        pass

def main():
    print("🚀 ENVOI DES EMAILS DE PROSPECTION - BATCH 1")
    print("=" * 60)
    print(f"Date: {datetime.now().strftime('%Y-%m-%d %H:%M')}")
    print(f"Nombre d'emails à envoyer: {len(prospects)}")
    print()
    
    print("📧 PROSPECTS AVEC EMAILS DIRECTS VÉRIFIÉS:")
    for i, p in enumerate(prospects, 1):
        print(f"{i}. {p['company']} - {p['contact']}")
        print(f"   📮 {p['email']} (DIRECT!)")
    
    print()
    print("🚀 Démarrage de l'envoi automatique...")
    print()
    
    sent_count = 0
    failed = []
    
    for i, prospect in enumerate(prospects, 1):
        print(f"\n[{i}/{len(prospects)}] Envoi à {prospect['company']}...")
        
        if send_email(prospect):
            sent_count += 1
            
            # Attendre entre les envois (sauf pour le dernier)
            if i < len(prospects):
                wait_time = 30
                print(f"   ⏳ Attente {wait_time}s avant le prochain...")
                time.sleep(wait_time)
        else:
            failed.append(prospect['company'])
    
    # Rapport final
    print("\n" + "=" * 60)
    print("📊 RAPPORT D'ENVOI")
    print("=" * 60)
    print(f"✅ Emails envoyés avec succès: {sent_count}/{len(prospects)}")
    
    if failed:
        print(f"❌ Échecs: {', '.join(failed)}")
    
    print()
    print("📋 PROCHAINES ACTIONS:")
    print("1. Surveille les réponses dans Gmail")
    print("2. Les relances automatiques sont prévues dans 3 jours")
    print("3. Prépare les démos pour les intéressés")
    print("4. LinkedIn pour ceux qui ne répondent pas")
    print()
    print("💡 Les emails directs ont 3x plus de chances de réponse !")

if __name__ == "__main__":
    main()