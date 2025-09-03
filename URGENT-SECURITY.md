# 🚨 ACTIONS DE SÉCURITÉ URGENTES

## Secrets exposés sur GitHub PUBLIC :

1. **Mot de passe d'application Gmail**
   - Compte : frederic.de.choulot@gmail.com
   - Password : aparecssretkbffl
   - Fichiers : Tous les scripts Python d'envoi d'email

2. **Clé API Hunter.io**
   - API Key : c0fecb577d1d5b8af9d5f376a5ce51813e9ed88e
   - Fichier : hunter-search.py

## ACTIONS IMMÉDIATES (DANS CET ORDRE) :

### 1. RÉVOQUER le mot de passe Gmail (MAINTENANT!)
- Va sur : https://myaccount.google.com/apppasswords
- SUPPRIME le mot de passe "aparecssretkbffl"
- Crée un NOUVEAU mot de passe d'application

### 2. RÉVOQUER la clé Hunter.io
- Connecte-toi sur Hunter.io
- Va dans Settings > API
- Régénère une nouvelle clé API
- L'ancienne sera invalidée

### 3. NE JAMAIS mettre les nouveaux mots de passe dans le code
- Utilise des variables d'environnement
- Crée un fichier .env.local (jamais commité)
- Exemple :
  ```
  GMAIL_APP_PASSWORD=ton_nouveau_password
  HUNTER_API_KEY=ta_nouvelle_cle
  ```

### 4. Nettoyer l'historique Git (OPTIONNEL mais recommandé)
Pour supprimer complètement les secrets de l'historique :
```bash
git filter-branch --force --index-filter \
  "git rm --cached --ignore-unmatch *.py" \
  --prune-empty --tag-name-filter cat -- --all
```

## POURQUOI C'EST CRITIQUE :
- Ton repo est PUBLIC
- N'importe qui peut voir ces mots de passe
- Des bots scannent GitHub pour trouver des secrets
- GitGuardian t'a alerté = d'autres l'ont peut-être déjà vu

## RÈGLE D'OR :
**JAMAIS de mots de passe/clés API dans le code source**
Toujours utiliser des variables d'environnement !