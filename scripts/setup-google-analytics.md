# Configuration Google Analytics 4 - Guide Rapide

## Option 1: Configuration Express (2 minutes)

1. **Ouvre ce lien direct** pour créer une propriété GA4:
   https://analytics.google.com/analytics/web/#/a/create/account

2. **Remplis le formulaire:**
   - Nom du compte: `Sync Mode`
   - Nom de la propriété: `sync-mode.fr`
   - Fuseau horaire: `France`
   - Devise: `EUR`
   - URL du site: `https://sync-mode.fr`

3. **Récupère ton ID de mesure:**
   - Après création, va dans: Admin → Flux de données → Web
   - Copie l'ID (format: `G-XXXXXXXXXX`)

4. **Active l'ID dans ton site:**
   ```bash
   echo "NEXT_PUBLIC_GA_ID=G-TONIDICI" >> .env.local
   ```

## Option 2: Utiliser un ID existant

Si tu as déjà un compte Google Analytics, tu peux créer une nouvelle propriété ou utiliser une existante.

## Option 3: Alternative simple - Plausible Analytics

Si tu trouves GA4 trop complexe, je recommande Plausible:
- Plus simple, conforme RGPD par défaut
- Essai gratuit 30 jours
- 9€/mois après
- Installation en 30 secondes

---

## Test de configuration

Une fois configuré, teste avec:
```bash
npm run dev
# Ouvre http://localhost:3000
# Vérifie dans l'onglet Network que les requêtes vers google-analytics.com se font
```

## Vérification dans GA4

1. Va sur https://analytics.google.com
2. Sélectionne ta propriété
3. Va dans "Temps réel"
4. Visite ton site
5. Tu devrais voir ta visite apparaître

---

💡 **Astuce:** Si tu veux que je configure Plausible à la place (plus simple), dis-le moi !