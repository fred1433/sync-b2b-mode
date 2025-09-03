#!/usr/bin/env python3
"""
Script pour envoyer un email test
"""

import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import getpass

def send_test_email():
    # Configuration
    SMTP_SERVER = "smtp.gmail.com"
    SMTP_PORT = 587
    
    print("📧 Test d'envoi d'email pour Sync Mode")
    print("=" * 50)
    
    # Email test pour Frédéric
    TO_EMAIL = "frederic.de.choulot@gmail.com"
    FROM_EMAIL = "contact@sync-mode.fr"
    FROM_NAME = "Frédéric - Sync Mode"
    
    # Template comme pour Cherry Paris
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
    
    print(f"\n📮 Envoi de l'email test à : {TO_EMAIL}")
    print(f"Expéditeur : {FROM_EMAIL}")
    print(f"Objet : {SUBJECT}\n")
    
    # Demander les credentials
    print("Pour envoyer via Gmail, j'ai besoin de tes identifiants")
    print("(ou utilise un mot de passe d'application)")
    gmail_email = input("Ton email Gmail: ").strip()
    gmail_password = getpass.getpass("Mot de passe Gmail (caché): ").strip()
    
    # Créer le message
    msg = MIMEMultipart()
    msg['From'] = f"{FROM_NAME} <{FROM_EMAIL}>"
    msg['To'] = TO_EMAIL
    msg['Subject'] = SUBJECT
    msg.attach(MIMEText(BODY, 'plain'))
    
    try:
        # Connexion SMTP
        server = smtplib.SMTP(SMTP_SERVER, SMTP_PORT)
        server.starttls()
        server.login(gmail_email, gmail_password)
        
        # Envoyer
        server.send_message(msg)
        server.quit()
        
        print("\n✅ Email test envoyé avec succès !")
        print("\n📬 Vérifie ta boîte Gmail")
        print("L'email devrait arriver dans quelques secondes")
        print("\nSi tu ne le vois pas, vérifie les spams")
        
    except smtplib.SMTPAuthenticationError:
        print("\n❌ Erreur d'authentification Gmail")
        print("\nSolutions :")
        print("1. Active l'authentification à 2 facteurs sur Gmail")
        print("2. Crée un mot de passe d'application :")
        print("   https://myaccount.google.com/apppasswords")
        print("3. Utilise ce mot de passe au lieu de ton mot de passe normal")
        
    except Exception as e:
        print(f"\n❌ Erreur : {str(e)}")

if __name__ == "__main__":
    send_test_email()