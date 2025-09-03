#!/usr/bin/env python3
"""
Script pour trouver les emails des prospects avec Hunter.io API
"""

import requests
import json
import time
import csv

# Configuration
# API Key removed for security - use .env.local
BASE_URL = "https://api.hunter.io/v2"

# Nos 27 prospects prioritaires
prospects = [
    {"company": "Balzac Paris", "domain": "balzac-paris.fr", "founders": ["Chrysoline de Gastines", "Charles Fourmaux"]},
    {"company": "Faguo", "domain": "faguo.fr", "founders": ["Frédéric Mugnier", "Nicolas Rohr"]},
    {"company": "Sessùn", "domain": "sessun.com", "founders": ["Emma François"]},
    {"company": "Le Slip Français", "domain": "leslipfrancais.fr", "founders": ["Guillaume Gibault"]},
    {"company": "Musier Paris", "domain": "musier-paris.com", "founders": ["Anne-Laure Mais"]},
    {"company": "Heimstone", "domain": "heimstone.com", "founders": ["Alix Petit"]},
    {"company": "Réjeanne", "domain": "rejeanne.com", "founders": ["Alexandra Rychner", "Wye Morter"]},
    {"company": "Soi Paris", "domain": "soi-paris.com", "founders": ["Aurélie Boutboul", "Julia Stegner"]},
    {"company": "Parisienne Et Alors", "domain": "parisienne-et-alors.com", "founders": ["Laury Thilleman"]},
    {"company": "An'ge", "domain": "angefashion.com", "founders": []},
    {"company": "Flowrette", "domain": "flowrette.com", "founders": []},
    {"company": "MY LOVELY THING", "domain": "mylovelything.com", "founders": ["Marie Pertriaux"]},
]

def search_domain(domain):
    """Recherche tous les emails d'un domaine"""
    url = f"{BASE_URL}/domain-search"
    params = {
        "domain": domain,
        "api_key": API_KEY
    }
    
    try:
        response = requests.get(url, params=params)
        if response.status_code == 200:
            return response.json()
        else:
            print(f"❌ Erreur {response.status_code} pour {domain}")
            return None
    except Exception as e:
        print(f"❌ Erreur: {e}")
        return None

def find_email(domain, first_name, last_name):
    """Trouve l'email spécifique d'une personne"""
    url = f"{BASE_URL}/email-finder"
    params = {
        "domain": domain,
        "first_name": first_name,
        "last_name": last_name,
        "api_key": API_KEY
    }
    
    try:
        response = requests.get(url, params=params)
        if response.status_code == 200:
            data = response.json()
            return data.get("data", {})
        return None
    except:
        return None

def verify_email(email):
    """Vérifie si un email existe"""
    url = f"{BASE_URL}/email-verifier"
    params = {
        "email": email,
        "api_key": API_KEY
    }
    
    try:
        response = requests.get(url, params=params)
        if response.status_code == 200:
            data = response.json()
            return data.get("data", {})
        return None
    except:
        return None

def main():
    print("🔍 RECHERCHE DES EMAILS AVEC HUNTER.IO")
    print("=" * 60)
    
    results = []
    requests_count = 0
    
    for prospect in prospects[:12]:  # Limité à 12 pour économiser les crédits
        print(f"\n📧 {prospect['company']} ({prospect['domain']})")
        print("-" * 40)
        
        # 1. Recherche du domaine
        domain_data = search_domain(prospect['domain'])
        requests_count += 1
        
        if domain_data and domain_data.get("data"):
            data = domain_data["data"]
            
            # Pattern d'email
            pattern = data.get("pattern", "Unknown")
            print(f"   Pattern: {pattern}")
            
            # Emails trouvés
            emails = data.get("emails", [])
            print(f"   Emails trouvés: {len(emails)}")
            
            # Afficher les emails pertinents
            for email_data in emails[:5]:  # Max 5 emails
                email = email_data.get("value")
                name = f"{email_data.get('first_name', '')} {email_data.get('last_name', '')}".strip()
                position = email_data.get("position", "")
                confidence = email_data.get("confidence", 0)
                
                # Filtrer les emails intéressants (fondateurs, CEO, etc.)
                if position and any(keyword in position.lower() for keyword in ["founder", "ceo", "director", "chief", "head"]):
                    print(f"   ⭐ {email} - {name} ({position}) - Confiance: {confidence}%")
                    results.append({
                        "company": prospect['company'],
                        "email": email,
                        "name": name,
                        "position": position,
                        "confidence": confidence
                    })
                elif confidence >= 90:
                    print(f"   ✅ {email} - {name} - Confiance: {confidence}%")
            
            # 2. Chercher les emails des fondateurs si on les connaît
            for founder in prospect['founders'][:1]:  # Limité à 1 fondateur pour économiser
                if founder:
                    names = founder.split()
                    if len(names) >= 2:
                        first_name = names[0]
                        last_name = names[-1]
                        
                        print(f"\n   🔎 Recherche de {founder}...")
                        email_data = find_email(prospect['domain'], first_name, last_name)
                        requests_count += 1
                        
                        if email_data and email_data.get("email"):
                            email = email_data["email"]
                            confidence = email_data.get("score", 0)
                            print(f"   💎 TROUVÉ: {email} (Confiance: {confidence}%)")
                            results.append({
                                "company": prospect['company'],
                                "email": email,
                                "name": founder,
                                "position": "Founder/CEO",
                                "confidence": confidence
                            })
        
        # Attendre entre les requêtes
        time.sleep(1)
        
        # Limite de sécurité
        if requests_count >= 20:
            print("\n⚠️ Limite de 20 requêtes atteinte (pour économiser les crédits)")
            break
    
    # Sauvegarder les résultats
    print("\n" + "=" * 60)
    print(f"📊 RÉSULTATS: {len(results)} emails trouvés")
    print("=" * 60)
    
    # Créer un CSV avec les résultats
    with open('hunter-results.csv', 'w', newline='', encoding='utf-8') as file:
        fieldnames = ['company', 'name', 'email', 'position', 'confidence']
        writer = csv.DictWriter(file, fieldnames=fieldnames)
        writer.writeheader()
        writer.writerows(results)
    
    print("\n✅ Résultats sauvegardés dans hunter-results.csv")
    
    # Afficher le top 10
    print("\n🏆 TOP EMAILS TROUVÉS:")
    for r in sorted(results, key=lambda x: x['confidence'], reverse=True)[:10]:
        print(f"• {r['company']}: {r['email']} ({r['name']}) - {r['confidence']}%")

if __name__ == "__main__":
    main()