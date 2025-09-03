# Configuration Email Professionnel - Guide Complet

## 🔴 IMPORTANT: Comment ça marche

**Redirection email = GRATUIT sur Gandi**
- Les emails envoyés à contact@sync-mode.fr arrivent dans ton Gmail
- Tu peux répondre DEPUIS Gmail en tant que contact@sync-mode.fr
- Pas besoin de payer Gandi Mail ou Google Workspace

## Option 1: Via le script automatique (RECOMMANDÉ)

```bash
# 1. Récupère ta clé API Gandi
# Va sur: https://account.gandi.net/en/users/[ton-user]/security
# Crée une nouvelle clé API avec permissions "Manage domain name services"

# 2. Dans le terminal:
export GANDI_API_KEY="ta_clé_api_ici"

# 3. Lance le script
./setup-email-gandi.sh

# 4. Entre ton email Gmail quand demandé
```

## Option 2: Configuration manuelle dans Gandi

1. **Connecte-toi à Gandi**
   - https://admin.gandi.net
   - Va dans Domaines > sync-mode.fr > Email

2. **Crée les redirections** (GRATUIT)
   - Clique "Gérer les redirections"
   - Ajoute:
     - contact@sync-mode.fr → ton.email@gmail.com
     - frederic@sync-mode.fr → ton.email@gmail.com
     - hello@sync-mode.fr → ton.email@gmail.com

3. **Configure SPF** (pour la délivrabilité)
   - Va dans Domaines > sync-mode.fr > Enregistrements DNS
   - Ajoute un enregistrement TXT:
     ```
     Nom: @
     Type: TXT
     Valeur: v=spf1 include:_spf.gandi.net include:_spf.google.com ~all
     TTL: 300
     ```

## Configuration Gmail pour ENVOYER

Une fois les redirections créées:

1. **Dans Gmail**
   - Paramètres > Voir tous les paramètres
   - Onglet "Comptes et importation"
   - "Envoyer des emails en tant que" > "Ajouter une autre adresse"

2. **Entre ces infos**
   - Nom: `Frédéric - Sync Mode`
   - Email: `contact@sync-mode.fr`
   - Décoche "Traiter comme alias"

3. **Configuration SMTP**
   - Serveur: `smtp.gmail.com`
   - Port: `587`
   - Nom d'utilisateur: ton.email@gmail.com
   - Mot de passe: ton mot de passe Gmail
   - Sécurité: TLS

4. **Validation**
   - Gmail envoie un code de vérification
   - Tu le reçois dans ta boîte Gmail (via la redirection)
   - Entre le code

## ✅ Résultat final

- **Réception**: Tous les emails à @sync-mode.fr arrivent dans Gmail
- **Envoi**: Tu peux choisir l'expéditeur dans Gmail:
  - Ton email perso
  - contact@sync-mode.fr
  - frederic@sync-mode.fr

## 📧 Pour la prospection

Quand tu envoies tes emails de prospection:
1. Dans Gmail, clique "Nouveau message"
2. Clique sur "De:" et choisis `contact@sync-mode.fr`
3. Les prospects verront `contact@sync-mode.fr` comme expéditeur
4. Les réponses arriveront dans ton Gmail

## ⚠️ Si ça ne marche pas

**Problème**: "Erreur d'authentification SMTP"
**Solution**: Active l'authentification à 2 facteurs Gmail et utilise un mot de passe d'application

**Problème**: Les emails arrivent en spam
**Solution**: 
- Vérifie que le SPF est bien configuré
- Évite les mots spam ("gratuit", "urgent", "$$")
- Envoie max 50 emails/jour au début

**Problème**: Pas de code de vérification reçu
**Solution**: Vérifie dans les spams, ou que la redirection est bien active sur Gandi