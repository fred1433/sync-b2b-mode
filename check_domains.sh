#!/bin/bash
check_domain() {
    domain=$1
    # Check if domain resolves
    if host "$domain" > /dev/null 2>&1; then
        echo "❌ $domain - PRIS"
    else
        # Double check with nslookup
        if nslookup "$domain" > /dev/null 2>&1; then
            echo "❌ $domain - PRIS"
        else
            echo "✅ $domain - PEUT-ÊTRE DISPONIBLE"
        fi
    fi
}

# Test domains
for name in syncly stockly syncio stockio syncza modza fashly stockza syncpro prosync ezsync quicksync; do
    for ext in .com .fr .io; do
        check_domain "${name}${ext}"
    done
done
