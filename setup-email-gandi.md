# Configuration Email Professionnel sur Gandi

## Option 1 : Utiliser la redirection email de Gandi (GRATUIT)

1. **Se connecter à Gandi**
   - Va sur https://admin.gandi.net
   - Connecte-toi à ton compte

2. **Accéder aux emails**
   - Dans le menu, clique sur "Domaines"
   - Clique sur "sync-mode.fr"
   - Va dans l'onglet "Email"

3. **Créer une redirection**
   - Clique sur "Créer une adresse email"
   - Crée : contact@sync-mode.fr
   - Redirige vers ton email personnel
   - Active la redirection

4. **Pour envoyer avec cette adresse**
   - Dans Gmail : Paramètres > Comptes et importation
   - "Ajouter une autre adresse email"
   - Ajoute contact@sync-mode.fr
   - Valide avec le code de confirmation

## Option 2 : Gandi Mail (2€/mois)

1. **Activer Gandi Mail**
   - Dans l'onglet Email de ton domaine
   - Clique sur "Commander Gandi Mail"
   - Choisis le pack 3GB (2€/mois)

2. **Créer ta boîte**
   - Adresse : frederic@sync-mode.fr
   - Mot de passe fort

3. **Configuration dans ton client mail**
   - IMAP : mail.gandi.net (port 993, SSL)
   - SMTP : mail.gandi.net (port 465, SSL)
   - Login : frederic@sync-mode.fr

## Option 3 : Google Workspace (6€/mois)

Plus pro mais plus cher. Gmail interface + 30GB stockage.

## RECOMMANDATION

**Pour commencer : Option 1 (redirection gratuite)**
- Suffisant pour la prospection
- Tu peux envoyer depuis Gmail avec contact@sync-mode.fr
- Upgrade plus tard si besoin

## Configuration SPF/DKIM pour meilleure délivrabilité

Ajoute ces enregistrements DNS dans Gandi :

```
Type: TXT
Nom: @
Valeur: v=spf1 include:_spf.gandi.net ~all
```

Ça améliore la délivrabilité de tes emails.