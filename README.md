# SyncMode - Hub de Synchronisation B2B pour la Mode

Landing page façade pour capturer des leads qualifiés dans le secteur de la mode B2B en France.

## 🎯 Objectif

Générer des leads qualifiés pour un service de synchronisation entre :
- **Shopify**
- **Faire** 
- **Ankorstore**
- **Paris Fashion Shops (PFS)**
- **MicroStore (MC)**

## 🚀 Démarrage rapide

```bash
# Installation
npm install

# Développement
npm run dev

# Build production
npm run build
npm start
```

Ouvrir [http://localhost:3000](http://localhost:3000)

## 📊 Lead Scoring Automatique

Le système score automatiquement les leads :
- **PFS + MC cochés** : +3 points
- **>1 entrepôt** : +2 points  
- **>1000 SKUs** : +2 points
- **Besoins prepacks/MOQ** : +2 points
- **ERP/WMS existant** : +1 point
- **CSV/SFTP possible** : +1 point

**Score ≥5** = Redirection automatique vers Calendly

## 🛡️ Conformité RGPD/CNIL

- Bannière cookies conforme CNIL
- Bouton "Refuser" aussi accessible qu'"Accepter"
- Consent Mode v2 pour Google Ads/Analytics
- Double opt-in email

## 📈 SEO & Marketing

### Pages d'atterrissage par paires
- `/shopify-faire` - Intégration officielle
- `/shopify-ankorstore` - Sales Channel  
- `/shopify-pfs` - Paris Fashion Shops
- `/shopify-microstore` - App grossistes
- `/pfs-microstore` - Aubervilliers/Sentier

### Mots-clés ciblés
- Synchronisation B2B mode
- Shopify Faire intégration
- Grossiste Aubervilliers
- Survente stock mode
- Prepack taille mode

## 🔧 Configuration

### Google Analytics
Remplacer `G-XXXXXXXXXX` dans `app/layout.tsx`

### Calendly
Mettre à jour le lien dans `config/seo.ts`

### Domaine
Suggestions :
- synchro-mode.fr
- mode-sync.fr
- fashion-b2b.fr

## 📝 Structure du projet

```
/
├── app/                    # Pages Next.js
│   ├── shopify-faire/     # Pages SEO par paires
│   ├── shopify-ankorstore/
│   └── ...
├── components/            # Composants React
│   ├── Hero.tsx          # Section principale
│   ├── QualificationForm.tsx # Formulaire avec scoring
│   └── CookieBanner.tsx  # RGPD/CNIL
├── config/               # Configuration
│   ├── connectors.ts    # État des connecteurs
│   └── seo.ts          # Métadonnées SEO
└── lib/                 # Utilitaires
    └── lead-scoring.ts  # Logique de scoring
```

## 🎨 Stack technique

- **Next.js 14** (App Router)
- **TypeScript**
- **TailwindCSS**
- **React Hook Form** + Zod
- **Consent Mode v2**

## 📊 Suivi des conversions

Le formulaire envoie automatiquement les events :
- `form_submit` - Soumission formulaire
- `high_value_lead` - Score ≥5
- `calendly_redirect` - Redirection démo

## ⚡ Optimisations

- Images optimisées avec Next/Image
- Lazy loading des composants
- Minification CSS/JS en production
- Cache CDN via Cloudflare

## 🚦 Déploiement

### Vercel (recommandé)
```bash
vercel --prod
```

### Cloudflare Pages
```bash
npm run build
# Upload dossier .next/
```

## 📧 Emails de nurturing

**J0** : Confirmation + questions de qualification
**J2** : Relance si pas de RDV pris
**J7** : Case study / témoignage client

## 🔗 Ressources

- [Shopify Faire App](https://apps.shopify.com/faire-sell-wholesale)
- [Ankorstore Sales Channel](https://support.ankorstore.com)
- [CNIL - Cookies](https://www.cnil.fr)
- [Google Consent Mode v2](https://support.google.com/tagmanager/answer/13695607)

---

*Solution indépendante, non affiliée aux marques citées*
