#!/usr/bin/env python3
"""
Script pour vérifier et enrichir les emails des prospects
"""

import re
import dns.resolver
import socket
import smtplib

def is_valid_email_format(email):
    """Vérifie le format de l'email"""
    pattern = r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'
    return re.match(pattern, email) is not None

def check_mx_record(domain):
    """Vérifie si le domaine a des enregistrements MX"""
    try:
        mx_records = dns.resolver.resolve(domain, 'MX')
        return len(mx_records) > 0
    except:
        return False

def verify_email_smtp(email):
    """Vérifie si l'email existe via SMTP (peut être bloqué)"""
    domain = email.split('@')[1]
    
    try:
        # Obtenir le serveur MX
        mx_records = dns.resolver.resolve(domain, 'MX')
        mx_host = str(mx_records[0].exchange)
        
        # Connexion SMTP
        server = smtplib.SMTP()
        server.set_debuglevel(0)
        server.connect(mx_host)
        server.helo('sync-mode.fr')
        
        # Vérifier l'email
        server.mail('verify@sync-mode.fr')
        code, message = server.rcpt(email)
        server.quit()
        
        return code == 250
    except:
        return None  # Ne peut pas vérifier

def generate_email_variants(company_name, contact_name, domain):
    """Génère des variantes d'emails possibles"""
    variants = []
    
    # Nettoyer le nom de l'entreprise
    company_clean = company_name.lower().replace(' ', '').replace('&', '')
    
    # Emails génériques toujours utiles
    variants.extend([
        f"info@{domain}",
        f"contact@{domain}",
        f"hello@{domain}",
        f"bonjour@{domain}",
        f"wholesale@{domain}",
        f"b2b@{domain}",
    ])
    
    # Si on a un nom de contact
    if contact_name:
        parts = contact_name.lower().split()
        if len(parts) >= 2:
            first = parts[0]
            last = parts[-1]
            
            variants.extend([
                f"{first}@{domain}",
                f"{last}@{domain}",
                f"{first}.{last}@{domain}",
                f"{last}.{first}@{domain}",
                f"{first[0]}{last}@{domain}",
                f"{first}{last[0]}@{domain}",
            ])
    
    return variants

# Prospects à vérifier
prospects = [
    {
        "company": "Cherry Paris",
        "contact": "Pascal He", 
        "email": "info@pinkiss-paris.com",
        "linkedin": "https://www.linkedin.com/company/cherry-paris",
        "website": "https://www.cherryparis.fr"
    },
    {
        "company": "Andy & Lucy",
        "contact": "Dian Huang",
        "email": "andylucy.paris@gmail.com",
        "linkedin": "",
        "website": "https://andylucy.com"
    },
    {
        "company": "La Petite Étoile",
        "contact": "Min Xu",
        "email": "min@lapetiteetoile.com",
        "linkedin": "",
        "website": "https://lapetiteetoile.com"
    },
    {
        "company": "Zayne Paris",
        "contact": "",
        "email": "contact@zayneparis.com",
        "linkedin": "",
        "website": "https://zayneparis.com"
    },
    {
        "company": "Calie Paris",
        "contact": "",
        "email": "hello@calieparis.com",
        "linkedin": "",
        "website": "https://calieparis.com"
    }
]

print("🔍 Vérification et enrichissement des emails")
print("=" * 60)

for prospect in prospects:
    print(f"\n📧 {prospect['company']}")
    print(f"   Contact: {prospect['contact'] or 'Non spécifié'}")
    print(f"   Email actuel: {prospect['email']}")
    
    # Vérifier le format
    if is_valid_email_format(prospect['email']):
        print(f"   ✅ Format valide")
        
        # Vérifier le domaine
        domain = prospect['email'].split('@')[1]
        if domain == 'gmail.com':
            print(f"   ⚠️  Email Gmail (personnel?) - Chercher email pro")
            
            # Suggérer des alternatives
            if prospect['website']:
                website_domain = prospect['website'].replace('https://', '').replace('http://', '').replace('www.', '').split('/')[0]
                print(f"   💡 Domaine possible: {website_domain}")
                
                variants = generate_email_variants(
                    prospect['company'],
                    prospect['contact'],
                    website_domain
                )
                
                print(f"   📮 Emails alternatifs suggérés:")
                for v in variants[:5]:
                    print(f"      - {v}")
        else:
            if check_mx_record(domain):
                print(f"   ✅ Domaine a des serveurs mail")
            else:
                print(f"   ❌ Pas de serveur mail trouvé")
    else:
        print(f"   ❌ Format invalide")

print("\n" + "=" * 60)
print("\n💡 RECOMMANDATIONS:")
print("\n1. EMAILS À MODIFIER:")
print("   - Andy & Lucy: andylucy.paris@gmail.com → contact@andylucy.com")
print("     (Gmail = personnel, mieux vaut l'email pro)")
print("\n2. RECHERCHE LINKEDIN:")
print("   Pour trouver les emails directs des décideurs:")
print("   - Recherche: '[Nom] [Entreprise] CEO'")
print("   - Utiliser Sales Navigator si possible")
print("   - Chercher dans 'À propos' ou 'Contact'")
print("\n3. OUTILS UTILES:")
print("   - Hunter.io : Pour trouver les emails")
print("   - Clearbit Connect : Extension Gmail gratuite")
print("   - LinkedIn Sales Navigator : Contacts directs")
print("\n4. STRATÉGIE EMAIL:")
print("   - Email générique (info@) : OK pour premier contact")
print("   - Email direct (prenom@) : Meilleur taux de réponse")
print("   - Toujours CC le générique si tu as le direct")