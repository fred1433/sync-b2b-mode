#!/bin/bash

# Configuration email professionnel sur Gandi
# Ce script configure une redirection email gratuite

echo "🚀 Configuration de l'email professionnel sync-mode.fr"
echo "================================================"

# Vérifier si l'API key est définie
if [ -z "$GANDI_API_KEY" ]; then
    echo "❌ Erreur: GANDI_API_KEY n'est pas définie"
    echo "Exécute d'abord: export GANDI_API_KEY=ta_clé_api"
    exit 1
fi

API_KEY=$GANDI_API_KEY
DOMAIN="sync-mode.fr"

echo ""
echo "📧 Création de redirections email..."
echo "Quelle est ton adresse email personnelle (Gmail) ?"
read -p "Email: " PERSONAL_EMAIL

# Créer les redirections via l'API Gandi
echo ""
echo "Création de contact@sync-mode.fr → $PERSONAL_EMAIL"

curl -X POST "https://api.gandi.net/v5/email/forwards/$DOMAIN" \
  -H "Authorization: Bearer $API_KEY" \
  -H "Content-Type: application/json" \
  -d "{
    \"source\": \"contact\",
    \"destinations\": [\"$PERSONAL_EMAIL\"]
  }"

echo ""
echo "Création de frederic@sync-mode.fr → $PERSONAL_EMAIL"

curl -X POST "https://api.gandi.net/v5/email/forwards/$DOMAIN" \
  -H "Authorization: Bearer $API_KEY" \
  -H "Content-Type: application/json" \
  -d "{
    \"source\": \"frederic\",
    \"destinations\": [\"$PERSONAL_EMAIL\"]
  }"

echo ""
echo "Création de hello@sync-mode.fr → $PERSONAL_EMAIL"

curl -X POST "https://api.gandi.net/v5/email/forwards/$DOMAIN" \
  -H "Authorization: Bearer $API_KEY" \
  -H "Content-Type: application/json" \
  -d "{
    \"source\": \"hello\",
    \"destinations\": [\"$PERSONAL_EMAIL\"]
  }"

echo ""
echo "✅ Redirections créées !"
echo ""
echo "📬 Configuration SPF pour améliorer la délivrabilité..."

# Ajouter l'enregistrement SPF
curl -X POST "https://api.gandi.net/v5/domains/$DOMAIN/records" \
  -H "Authorization: Bearer $API_KEY" \
  -H "Content-Type: application/json" \
  -d "{
    \"rrset_name\": \"@\",
    \"rrset_type\": \"TXT\",
    \"rrset_values\": [\"v=spf1 include:_spf.gandi.net include:_spf.google.com ~all\"],
    \"rrset_ttl\": 300
  }"

echo ""
echo "🎉 Configuration terminée !"
echo ""
echo "=========================================="
echo "📨 PROCHAINES ÉTAPES DANS GMAIL:"
echo "=========================================="
echo ""
echo "1. Va dans Gmail > Paramètres (roue dentée) > Voir tous les paramètres"
echo "2. Onglet 'Comptes et importation'"
echo "3. Section 'Envoyer des emails en tant que'"
echo "4. Clique sur 'Ajouter une autre adresse e-mail'"
echo "5. Entre:"
echo "   - Nom: Frédéric - Sync Mode"
echo "   - Email: contact@sync-mode.fr"
echo "6. Décoche 'Traiter comme un alias'"
echo "7. Clique Suivant"
echo "8. Serveur SMTP: smtp.gmail.com"
echo "   - Port: 587"
echo "   - Nom d'utilisateur: $PERSONAL_EMAIL"
echo "   - Mot de passe: ton mot de passe Gmail"
echo "9. Un email de vérification sera envoyé"
echo "10. Clique sur le lien de confirmation"
echo ""
echo "Tu pourras alors:"
echo "✅ Recevoir sur: contact@sync-mode.fr → $PERSONAL_EMAIL"
echo "✅ Envoyer depuis Gmail avec: contact@sync-mode.fr"
echo ""
echo "=========================================="