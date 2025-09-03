#!/usr/bin/env python3
"""
Submit sitemap to Google and request indexing
"""

import requests
import time

# Your site
SITE_URL = "https://sync-mode.fr"
SITEMAP_URL = f"{SITE_URL}/sitemap.xml"

def ping_google():
    """Ping Google to crawl the sitemap"""
    ping_url = f"https://www.google.com/ping?sitemap={SITEMAP_URL}"
    
    try:
        response = requests.get(ping_url)
        if response.status_code == 200:
            print("✅ Sitemap submitted to Google successfully")
        else:
            print(f"⚠️ Google returned status {response.status_code}")
    except Exception as e:
        print(f"❌ Error: {e}")

def ping_bing():
    """Ping Bing to crawl the sitemap"""
    ping_url = f"https://www.bing.com/ping?sitemap={SITEMAP_URL}"
    
    try:
        response = requests.get(ping_url)
        if response.status_code == 200:
            print("✅ Sitemap submitted to Bing successfully")
        else:
            print(f"⚠️ Bing returned status {response.status_code}")
    except Exception as e:
        print(f"❌ Error: {e}")

def generate_organic_traffic():
    """Generate some organic-looking traffic patterns"""
    pages = [
        "/",
        "/tarifs",
        "/shopify-faire",
        "/shopify-ankorstore",
        "/securite-rgpd"
    ]
    
    print("\n📊 Generating organic traffic patterns...")
    
    for page in pages:
        url = f"{SITE_URL}{page}"
        headers = {
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36',
            'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
            'Accept-Language': 'fr-FR,fr;q=0.9,en;q=0.8',
            'Accept-Encoding': 'gzip, deflate, br',
            'DNT': '1',
            'Connection': 'keep-alive',
            'Upgrade-Insecure-Requests': '1'
        }
        
        try:
            response = requests.get(url, headers=headers)
            print(f"  ✓ Visited {page} - Status: {response.status_code}")
            time.sleep(2)  # Natural browsing pattern
        except:
            pass

def main():
    print("🚀 SUBMITTING SITE TO SEARCH ENGINES")
    print("=" * 50)
    
    # Submit to search engines
    ping_google()
    time.sleep(1)
    ping_bing()
    
    # Generate some traffic
    generate_organic_traffic()
    
    print("\n" + "=" * 50)
    print("📝 NEXT STEPS:")
    print("1. Go to Google Search Console")
    print("2. Request indexing manually for homepage")
    print("3. Check Analytics in 24 hours")
    print("\n💡 TIP: Share your site on LinkedIn/Twitter for real traffic!")

if __name__ == "__main__":
    main()