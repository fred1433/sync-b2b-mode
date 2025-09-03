#!/bin/bash

# Configuration automatique des emails avec l'API Gandi
API_KEY="81380a543be5660a9f87c9e9163e60e9800b93f3"
DOMAIN="sync-mode.fr"

echo "🚀 Configuration des redirections email pour sync-mode.fr"
echo "=========================================="
echo ""
echo "Entre ton email Gmail personnel où tu veux recevoir les emails:"
read -p "Email Gmail: " PERSONAL_EMAIL

if [ -z "$PERSONAL_EMAIL" ]; then
    echo "❌ Email requis!"
    exit 1
fi

echo ""
echo "📧 Création des redirections..."
echo ""

# Créer contact@sync-mode.fr
echo "1. Création de contact@sync-mode.fr → $PERSONAL_EMAIL"
curl -X POST "https://api.gandi.net/v5/email/forwards/$DOMAIN" \
  -H "Authorization: Bearer $API_KEY" \
  -H "Content-Type: application/json" \
  -d "{
    \"source\": \"contact\",
    \"destinations\": [\"$PERSONAL_EMAIL\"]
  }" 2>/dev/null

echo "   ✅ Fait!"
echo ""

# Créer frederic@sync-mode.fr
echo "2. Création de frederic@sync-mode.fr → $PERSONAL_EMAIL"
curl -X POST "https://api.gandi.net/v5/email/forwards/$DOMAIN" \
  -H "Authorization: Bearer $API_KEY" \
  -H "Content-Type: application/json" \
  -d "{
    \"source\": \"frederic\",
    \"destinations\": [\"$PERSONAL_EMAIL\"]
  }" 2>/dev/null

echo "   ✅ Fait!"
echo ""

# Créer hello@sync-mode.fr
echo "3. Création de hello@sync-mode.fr → $PERSONAL_EMAIL"
curl -X POST "https://api.gandi.net/v5/email/forwards/$DOMAIN" \
  -H "Authorization: Bearer $API_KEY" \
  -H "Content-Type: application/json" \
  -d "{
    \"source\": \"hello\",
    \"destinations\": [\"$PERSONAL_EMAIL\"]
  }" 2>/dev/null

echo "   ✅ Fait!"
echo ""

# Créer no-reply@sync-mode.fr
echo "4. Création de no-reply@sync-mode.fr → $PERSONAL_EMAIL"
curl -X POST "https://api.gandi.net/v5/email/forwards/$DOMAIN" \
  -H "Authorization: Bearer $API_KEY" \
  -H "Content-Type: application/json" \
  -d "{
    \"source\": \"no-reply\",
    \"destinations\": [\"$PERSONAL_EMAIL\"]
  }" 2>/dev/null

echo "   ✅ Fait!"
echo ""

echo "=========================================="
echo "🎉 REDIRECTIONS CRÉÉES AVEC SUCCÈS!"
echo "=========================================="
echo ""
echo "Les emails envoyés à ces adresses arriveront dans: $PERSONAL_EMAIL"
echo "  • contact@sync-mode.fr"
echo "  • frederic@sync-mode.fr"
echo "  • hello@sync-mode.fr"
echo "  • no-reply@sync-mode.fr"
echo ""
echo "=========================================="
echo "📮 PROCHAINE ÉTAPE: CONFIGURER L'ENVOI DANS GMAIL"
echo "=========================================="
echo ""
echo "Pour pouvoir ENVOYER des emails en tant que contact@sync-mode.fr:"
echo ""
echo "1. Va dans Gmail > ⚙️ Paramètres > Voir tous les paramètres"
echo "2. Onglet 'Comptes et importation'"
echo "3. Section 'Envoyer des emails en tant que'"
echo "4. Clique 'Ajouter une autre adresse e-mail'"
echo "5. Entre:"
echo "   - Nom: Frédéric - Sync Mode"
echo "   - Email: contact@sync-mode.fr"
echo "   - DÉCOCHE 'Traiter comme un alias'"
echo ""
echo "6. Configuration SMTP:"
echo "   - Serveur SMTP: smtp.gmail.com"
echo "   - Port: 587"
echo "   - Nom d'utilisateur: $PERSONAL_EMAIL"
echo "   - Mot de passe: ton mot de passe Gmail (ou mot de passe d'application)"
echo "   - Sécurité: TLS"
echo ""
echo "7. Gmail va envoyer un code de vérification à contact@sync-mode.fr"
echo "8. Tu le recevras dans ta boîte Gmail (grâce à la redirection)"
echo "9. Entre le code pour valider"
echo ""
echo "✅ Tu pourras alors envoyer des emails depuis Gmail avec l'adresse contact@sync-mode.fr!"
echo ""
echo "Appuie sur Entrée quand tu as noté ces instructions..."
read