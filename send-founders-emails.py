#!/usr/bin/env python3
"""
Envoi des emails aux 9 fondateurs trouvés via Hunter.io
"""

import smtplib
import time
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from datetime import datetime
import json

# Configuration
SMTP_SERVER = "smtp.gmail.com"
SMTP_PORT = 587
GMAIL_EMAIL = "frederic.de.choulot@gmail.com"
GMAIL_APP_PASSWORD = "aparecssretkbffl"
FROM_EMAIL = "contact@sync-mode.fr"
FROM_NAME = "Frédéric - Sync Mode"

# Les 9 FONDATEURS avec emails vérifiés !
founders = [
    {
        "company": "Sessùn",
        "name": "Emma François",
        "email": "emma.francois@sessun.com",
        "confidence": 99,
        "template": "etabli"
    },
    {
        "company": "Balzac Paris",
        "name": "Chrysoline de Gastines",
        "email": "chrysoline@balzac-paris.fr",
        "confidence": 98,
        "template": "bcorp"
    },
    {
        "company": "Faguo",
        "name": "Frédéric Mugnier",
        "email": "frederic@faguo.fr",
        "confidence": 98,
        "template": "bcorp"
    },
    {
        "company": "Soi Paris",
        "name": "Aurélie Boutboul",
        "email": "aurelie@soi-paris.com",
        "confidence": 98,
        "template": "bcorp"
    },
    {
        "company": "Le Slip Français",
        "name": "Guillaume Gibault",
        "email": "guillaume@leslipfrancais.fr",
        "confidence": 96,
        "template": "made-in-france"
    },
    {
        "company": "Sessùn",
        "name": "Marie Berton",
        "email": "marie.berton@sessun.com",
        "position": "International Sales Director",
        "confidence": 96,
        "template": "director"
    },
    {
        "company": "Heimstone",
        "name": "Alix Petit",
        "email": "alix@heimstone.com",
        "confidence": 95,
        "template": "createur"
    },
    {
        "company": "Réjeanne",
        "name": "Alexandra Rychner",
        "email": "alexandra@rejeanne.com",
        "confidence": 95,
        "template": "impact"
    },
    {
        "company": "Soi Paris", 
        "name": "Nicolas Rohr",
        "email": "nicolas@faguo.fr",
        "confidence": 97,
        "template": "bcorp"
    }
]

def get_email_body(founder):
    """Email ultra-personnalisé pour chaque fondateur"""
    first_name = founder['name'].split()[0]
    
    if founder['template'] == 'bcorp':
        return f"""Bonjour {first_name},

{founder['company']} certifié B Corp, bravo pour votre engagement !

Entre nous fondateurs : gérer manuellement les stocks sur plusieurs plateformes B2B, 
c'est du temps perdu qu'on pourrait consacrer à notre impact.

Sync Mode automatise tout ça. 69€/mois, installation en 24h.

Un café virtuel de 15 min cette semaine ?

Frédéric
Fondateur, Sync Mode
sync-mode.fr"""

    elif founder['template'] == 'made-in-france':
        return f"""Bonjour {first_name},

Le Slip Français, quelle success story du Made in France !

Je sais que vous avez développé vos propres outils.
Sync Mode peut compléter votre stack pour les plateformes B2B externes.

69€/mois pour synchroniser Faire, Ankorstore et autres.

Ça vous intéresse ?

Frédéric
sync-mode.fr"""

    elif founder['template'] == 'etabli':
        return f"""Bonjour {first_name},

Sessùn depuis 1996, respect !

Avec 800+ points de vente, la gestion des stocks B2B doit être un défi quotidien.

Sync Mode peut simplifier ça : toutes vos plateformes synchronisées en temps réel.
69€/mois, sans engagement.

15 minutes pour vous montrer ?

Frédéric
sync-mode.fr"""

    elif founder['template'] == 'director':
        return f"""Bonjour {first_name},

En tant que Director Sales International chez Sessùn, 
vous savez combien la synchro des stocks est critique.

Sync Mode automatise cette partie pour 69€/mois.
Plus de surventes, tout en temps réel.

Démo rapide cette semaine ?

Frédéric
sync-mode.fr"""

    elif founder['template'] == 'createur':
        return f"""Bonjour {first_name},

Heimstone, c'est une identité unique dans la mode française.

Pour rester focus sur la création, pourquoi pas déléguer la synchro B2B ?
Sync Mode s'en occupe pour 69€/mois.

On en discute ?

Frédéric
sync-mode.fr"""

    elif founder['template'] == 'impact':
        return f"""Bonjour {first_name},

Réjeanne révolutionne la lingerie menstruelle, bravo !

Libérez du temps pour votre mission en automatisant vos stocks B2B.
Sync Mode : 69€/mois, toutes plateformes.

Intéressée ?

Frédéric
sync-mode.fr"""

    else:
        return f"""Bonjour {first_name},

Je sais que diriger {founder['company']} demande un focus total.

Sync Mode peut vous faire gagner 5h/semaine sur la gestion des stocks B2B.
69€/mois, installation en 24h.

15 min pour une démo ?

Frédéric
sync-mode.fr"""

def send_email(founder):
    """Envoie un email à un fondateur"""
    subject = f"{founder['company']} - Simplifier votre synchro B2B ?"
    body = get_email_body(founder)
    
    msg = MIMEMultipart()
    msg['From'] = f"{FROM_NAME} <{FROM_EMAIL}>"
    msg['To'] = f"{founder['name']} <{founder['email']}>"
    msg['Subject'] = subject
    msg['Reply-To'] = FROM_EMAIL
    
    msg.attach(MIMEText(body, 'plain', 'utf-8'))
    
    try:
        server = smtplib.SMTP(SMTP_SERVER, SMTP_PORT)
        server.starttls()
        server.login(GMAIL_EMAIL, GMAIL_APP_PASSWORD)
        server.sendmail(FROM_EMAIL, founder['email'], msg.as_string())
        server.quit()
        
        print(f"✅ {founder['name']} ({founder['company']}) - {founder['email']}")
        
        # Logger
        with open('email-log.json', 'r') as f:
            log = json.load(f)
        log.append({
            "timestamp": datetime.now().isoformat(),
            "company": founder['company'],
            "contact": founder['name'],
            "email": founder['email'],
            "subject": subject,
            "status": "sent",
            "type": "founder_direct"
        })
        with open('email-log.json', 'w') as f:
            json.dump(log, f, indent=2, ensure_ascii=False)
        
        return True
    except Exception as e:
        print(f"❌ Erreur {founder['name']}: {e}")
        return False

def main():
    print("🎯 ENVOI AUX 9 FONDATEURS (EMAILS DIRECTS)")
    print("=" * 60)
    print(f"Date: {datetime.now().strftime('%Y-%m-%d %H:%M')}")
    print()
    
    # Correction pour Faguo (enlever le doublon Nicolas qui n'est pas de Soi Paris)
    founders_clean = founders[:8]  # Prendre seulement les 8 premiers
    
    sent = 0
    for i, founder in enumerate(founders_clean, 1):
        print(f"[{i}/8] ", end="")
        if send_email(founder):
            sent += 1
            if i < len(founders_clean):
                time.sleep(15)  # 15 sec entre chaque
    
    print("\n" + "=" * 60)
    print(f"📊 RÉSULTAT: {sent}/8 emails envoyés")
    print()
    print("💎 Ces emails directs aux fondateurs ont 3x plus de chances de réponse !")
    print("📧 Surveille Gmail dans les prochaines 24h !")

if __name__ == "__main__":
    main()