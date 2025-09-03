#!/usr/bin/env python3
"""
Script pour envoyer les emails de prospection
"""

import smtplib
import ssl
import time
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from datetime import datetime
import csv
import os

# Configuration
SMTP_SERVER = "smtp.gmail.com"
SMTP_PORT = 587
FROM_EMAIL = "contact@sync-mode.fr"
FROM_NAME = "Frédéric - Sync Mode"

# Template 1 : Pour ceux sur Faire + Ankorstore
def get_email_template(company_name, contact_name, platforms):
    """Génère le template email personnalisé"""
    
    # Extrait le prénom du contact
    first_name = contact_name.split()[0] if contact_name else "Bonjour"
    
    # Détermine les plateformes principales
    platform_list = platforms.split('/')
    main_platforms = []
    if "Faire" in platform_list:
        main_platforms.append("Faire")
    if "Ankorstore" in platform_list:
        main_platforms.append("Ankorstore")
    if "PFS" in platform_list:
        main_platforms.append("Paris Fashion Shops")
    
    platforms_str = " ET ".join(main_platforms[:2]) if len(main_platforms) >= 2 else platforms
    
    subject = f"{company_name} - Synchronisation {'/'.join(main_platforms[:2])} automatique"
    
    body = f"""Bonjour {first_name},

J'ai vu que {company_name} vend sur {platforms_str}.

Comment gérez-vous la synchro des stocks entre les plateformes ?
(La plupart font encore manuellement et perdent 5h/semaine)

Sync Mode synchronise automatiquement tout pour 69€/mois.
Installation en 24h, on s'occupe de tout.

15 min cette semaine pour une démo ?

Frédéric
sync-mode.fr
06 XX XX XX XX"""
    
    return subject, body

def send_email(smtp_connection, to_email, subject, body, to_name=""):
    """Envoie un email via SMTP"""
    
    msg = MIMEMultipart()
    msg['From'] = f"{FROM_NAME} <{FROM_EMAIL}>"
    msg['To'] = to_email if not to_name else f"{to_name} <{to_email}>"
    msg['Subject'] = subject
    
    msg.attach(MIMEText(body, 'plain'))
    
    try:
        smtp_connection.send_message(msg)
        return True
    except Exception as e:
        print(f"❌ Erreur envoi à {to_email}: {str(e)}")
        return False

def update_csv_status(company, status, notes=""):
    """Met à jour le statut dans prospects.csv"""
    rows = []
    with open('prospects.csv', 'r', encoding='utf-8') as file:
        reader = csv.DictReader(file)
        for row in reader:
            if row['Entreprise'] == company:
                row['Status'] = status
                row['Date Contact'] = datetime.now().strftime("%Y-%m-%d")
                if notes:
                    row['Notes'] = notes
            rows.append(row)
    
    with open('prospects.csv', 'w', encoding='utf-8', newline='') as file:
        fieldnames = ['Entreprise', 'Contact', 'Email', 'LinkedIn', 'Plateformes', 'Ville', 'Status', 'Date Contact', 'Notes']
        writer = csv.DictWriter(file, fieldnames=fieldnames)
        writer.writeheader()
        writer.writerows(rows)

def main():
    print("🚀 Démarrage de la campagne d'emails")
    print("=" * 50)
    
    # Demander les credentials Gmail
    print("\n📧 Configuration Gmail")
    print("Entre ton email Gmail complet:")
    gmail_email = input("Email: ").strip()
    
    print("\nPour le mot de passe, utilise un 'Mot de passe d'application':")
    print("1. Va sur: https://myaccount.google.com/apppasswords")
    print("2. Crée un nouveau mot de passe d'application")
    print("3. Copie le code à 16 caractères (sans espaces)")
    gmail_password = input("Mot de passe d'application: ").strip()
    
    # Batch 1 - Les meilleurs prospects
    prospects = [
        {"company": "Cherry Paris", "contact": "Pascal He", "email": "info@pinkiss-paris.com", "platforms": "Faire/Ankorstore"},
        {"company": "Andy & Lucy", "contact": "Dian Huang", "email": "andylucy.paris@gmail.com", "platforms": "Faire/Ankorstore/PFS"},
        {"company": "La Petite Étoile", "contact": "Min Xu", "email": "min@lapetiteetoile.com", "platforms": "Faire/Ankorstore/Orderchamp"},
        {"company": "Zayne Paris", "contact": "", "email": "contact@zayneparis.com", "platforms": "Faire/Ankorstore/PFS"},
        {"company": "Calie Paris", "contact": "", "email": "hello@calieparis.com", "platforms": "Faire/Ankorstore/PFS"},
    ]
    
    print(f"\n📬 Envoi de {len(prospects)} emails...")
    print("=" * 50)
    
    # Connexion SMTP
    try:
        context = ssl.create_default_context()
        server = smtplib.SMTP(SMTP_SERVER, SMTP_PORT)
        server.starttls(context=context)
        server.login(gmail_email, gmail_password)
        print("✅ Connecté à Gmail SMTP\n")
    except Exception as e:
        print(f"❌ Erreur connexion Gmail: {str(e)}")
        print("\nVérifie que:")
        print("- L'authentification à 2 facteurs est activée")
        print("- Tu as créé un mot de passe d'application")
        print("- Tu as copié le code sans espaces")
        return
    
    # Envoyer les emails
    sent_count = 0
    for prospect in prospects:
        subject, body = get_email_template(
            prospect['company'],
            prospect['contact'],
            prospect['platforms']
        )
        
        print(f"📤 Envoi à {prospect['company']} ({prospect['email']})...")
        
        if send_email(server, prospect['email'], subject, body, prospect['contact']):
            print(f"   ✅ Envoyé!")
            update_csv_status(prospect['company'], "Email envoyé", "Template 1")
            sent_count += 1
            
            # Attendre entre les envois (éviter d'être marqué comme spam)
            if sent_count < len(prospects):
                print("   ⏳ Attente 5 secondes...")
                time.sleep(5)
        else:
            update_csv_status(prospect['company'], "Erreur envoi")
    
    # Fermer la connexion
    server.quit()
    
    print("\n" + "=" * 50)
    print(f"✅ Campagne terminée: {sent_count}/{len(prospects)} emails envoyés")
    print(f"📊 Le fichier prospects.csv a été mis à jour")
    print("\n💡 Prochaines étapes:")
    print("- Surveille les réponses dans Gmail")
    print("- Relance dans 3 jours ceux qui n'ont pas répondu")
    print("- Prépare les démos pour les intéressés")

if __name__ == "__main__":
    main()