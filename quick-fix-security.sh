#!/bin/bash

echo "🔐 RÉPARATION RAPIDE DE SÉCURITÉ (2 minutes)"
echo "============================================"
echo ""
echo "📝 ÉTAPE 1: Créer un nouveau mot de passe Gmail"
echo "1. Ouvre ce lien: https://myaccount.google.com/apppasswords"
echo "2. Supprime l'ancien mot de passe"
echo "3. Crée un nouveau (nom: 'Sync Mode')"
echo "4. Copie le nouveau mot de passe (16 caractères)"
echo ""
read -p "Colle le nouveau mot de passe ici: " NEW_PASSWORD

# Créer .env.local
echo "Creating .env.local..."
cat > .env.local << EOF
# Configuration Resend (emails des leads)
RESEND_API_KEY=YOUR_RESEND_API_KEY_HERE
NOTIFICATION_EMAIL=frederic.de.choulot@gmail.com

# Google Analytics
NEXT_PUBLIC_GA_ID=G-35LE527JR2

# Gmail (NOUVEAU mot de passe)
GMAIL_APP_PASSWORD=$NEW_PASSWORD

# Hunter.io (on garde l'ancien pour l'instant, on changera plus tard)
HUNTER_API_KEY=c0fecb577d1d5b8af9d5f376a5ce51813e9ed88e
EOF

echo "✅ .env.local créé avec le nouveau mot de passe"

# Installer python-dotenv
echo ""
echo "📦 Installation de python-dotenv..."
pip3 install python-dotenv

# Modifier tous les scripts Python
echo ""
echo "🔧 Mise à jour des scripts Python..."
for file in send-*.py hunter-search.py; do
    if [ -f "$file" ]; then
        # Remplacer les lignes de config
        sed -i '' 's/GMAIL_APP_PASSWORD = .*/from secure_config import GMAIL_APP_PASSWORD, GMAIL_EMAIL, FROM_EMAIL, FROM_NAME/' "$file"
        sed -i '' 's/API_KEY = .*/from secure_config import HUNTER_API_KEY as API_KEY/' "$file"
        echo "  ✓ $file mis à jour"
    fi
done

echo ""
echo "🚀 PRESQUE FINI!"
echo ""
echo "📝 DERNIÈRE ÉTAPE: Push les changements"
echo "Copie-colle ces commandes:"
echo ""
echo "git add -A"
echo "git commit -m 'SECURITY: Remove exposed credentials'"
echo "git push --force"
echo ""
echo "✅ Après ça, tes secrets seront en sécurité!"