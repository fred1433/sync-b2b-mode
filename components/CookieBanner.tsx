"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const acceptAll = () => {
    localStorage.setItem("cookie-consent", JSON.stringify({
      necessary: true,
      analytics: true,
      marketing: true,
      timestamp: new Date().toISOString(),
    }));
    setIsVisible(false);
    
    // Activer GA4 et Consent Mode v2
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("consent", "update", {
        analytics_storage: "granted",
        ad_storage: "granted",
        ad_user_data: "granted",
        ad_personalization: "granted",
      });
    }
  };

  const rejectAll = () => {
    localStorage.setItem("cookie-consent", JSON.stringify({
      necessary: true,
      analytics: false,
      marketing: false,
      timestamp: new Date().toISOString(),
    }));
    setIsVisible(false);
    
    // Désactiver GA4 et tracking
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("consent", "update", {
        analytics_storage: "denied",
        ad_storage: "denied",
        ad_user_data: "denied",
        ad_personalization: "denied",
      });
    }
  };

  const acceptNecessary = () => {
    localStorage.setItem("cookie-consent", JSON.stringify({
      necessary: true,
      analytics: false,
      marketing: false,
      timestamp: new Date().toISOString(),
    }));
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white shadow-lg border-t border-gray-200">
      <div className="mx-auto max-w-7xl px-6 py-6 lg:px-8">
        <div className="sm:flex sm:items-start sm:justify-between">
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-900">
              Nous respectons votre vie privée
            </h3>
            <p className="mt-2 text-sm text-gray-600">
              Nous utilisons des cookies pour améliorer votre expérience, analyser le trafic et personnaliser le contenu.
              Conformément à la directive CNIL, vous pouvez choisir vos préférences.
            </p>
            
            {showDetails && (
              <div className="mt-4 space-y-3">
                <div className="flex items-start">
                  <input
                    type="checkbox"
                    checked
                    disabled
                    className="mt-1 h-4 w-4 rounded border-gray-300 text-blue-600"
                  />
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">Cookies nécessaires</p>
                    <p className="text-xs text-gray-500">Essentiels au fonctionnement du site (toujours actifs)</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <input
                    type="checkbox"
                    className="mt-1 h-4 w-4 rounded border-gray-300 text-blue-600"
                  />
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">Cookies analytiques</p>
                    <p className="text-xs text-gray-500">Google Analytics, statistiques de visite</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <input
                    type="checkbox"
                    className="mt-1 h-4 w-4 rounded border-gray-300 text-blue-600"
                  />
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">Cookies marketing</p>
                    <p className="text-xs text-gray-500">Google Ads, remarketing, personnalisation</p>
                  </div>
                </div>
              </div>
            )}
            
            <button
              onClick={() => setShowDetails(!showDetails)}
              className="mt-3 text-sm text-blue-600 hover:text-blue-500"
            >
              {showDetails ? "Masquer les détails" : "Voir les détails"}
            </button>
          </div>
          
          <div className="mt-4 flex flex-col gap-2 sm:mt-0 sm:ml-6 sm:flex-row sm:flex-shrink-0">
            <button
              onClick={rejectAll}
              className="rounded-md bg-white px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
            >
              Refuser tout
            </button>
            <button
              onClick={acceptNecessary}
              className="rounded-md bg-gray-600 px-4 py-2 text-sm font-semibold text-white hover:bg-gray-500"
            >
              Nécessaires uniquement
            </button>
            <button
              onClick={acceptAll}
              className="rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-500"
            >
              Accepter tout
            </button>
          </div>
        </div>
        
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-500"
        >
          <X className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}