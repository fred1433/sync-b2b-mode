#!/usr/bin/env python3
"""
Configuration sécurisée pour les scripts d'envoi d'email
"""

import os
from dotenv import load_dotenv

# Charge les variables d'environnement depuis .env.local
load_dotenv('.env.local')

# Configuration Email
SMTP_SERVER = "smtp.gmail.com"
SMTP_PORT = 587
GMAIL_EMAIL = "frederic.de.choulot@gmail.com"
GMAIL_APP_PASSWORD = os.getenv('GMAIL_APP_PASSWORD')
FROM_EMAIL = "contact@sync-mode.fr"
FROM_NAME = "Frédéric - Sync Mode"

# Configuration Hunter.io
HUNTER_API_KEY = os.getenv('HUNTER_API_KEY')

# Vérification
if not GMAIL_APP_PASSWORD:
    print("❌ GMAIL_APP_PASSWORD manquant dans .env.local")
    print("Créé un nouveau mot de passe sur: https://myaccount.google.com/apppasswords")
    exit(1)

if not HUNTER_API_KEY:
    print("⚠️ HUNTER_API_KEY manquant dans .env.local (optionnel)")