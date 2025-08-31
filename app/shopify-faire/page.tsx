import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, ExternalLink } from "lucide-react";
import { pageMetadata } from "@/config/seo";

export const metadata: Metadata = {
  title: pageMetadata.shopifyFaire.title,
  description: pageMetadata.shopifyFaire.description,
  openGraph: {
    title: pageMetadata.shopifyFaire.title,
    description: pageMetadata.shopifyFaire.description,
  },
};

export default function ShopifyFairePage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Intégration Shopify ↔ Faire
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Synchronisation native et officielle entre votre boutique Shopify et la marketplace Faire.
              Apps "Sell Wholesale" et "Buy Wholesale" supportées.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/#demo"
                className="rounded-md bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-blue-500"
              >
                Configurer maintenant
                <ArrowRight className="ml-2 inline h-4 w-4" />
              </Link>
              <a
                href="https://apps.shopify.com/faire-sell-wholesale"
                target="_blank"
                rel="noopener noreferrer"
                className="text-base font-semibold text-gray-900 hover:text-gray-700"
              >
                Voir sur Shopify App Store
                <ExternalLink className="ml-1 inline h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Fonctionnalités */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Fonctionnalités de l'intégration Shopify ↔ Faire
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Depuis Shopify vers Faire
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Publication automatique de vos produits sur Faire</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Synchronisation des stocks en temps réel</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Import des commandes Faire dans Shopify</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Gestion des prix B2B spécifiques</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Depuis Faire vers Shopify
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Découverte de nouveaux produits wholesale</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Import direct dans votre catalogue Shopify</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Mise à jour automatique des disponibilités</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Suivi des commandes centralisé</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Spécifique */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Questions fréquentes Shopify ↔ Faire
          </h2>
          
          <div className="mx-auto max-w-3xl">
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Comment éviter la survente entre Shopify et Faire ?
                </h3>
                <p className="mt-2 text-gray-600">
                  Notre système synchronise les stocks en temps réel. Dès qu'une vente est effectuée sur l'une des plateformes,
                  le stock est immédiatement mis à jour sur l'autre, évitant ainsi toute survente.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Les variantes (tailles/couleurs) sont-elles synchronisées ?
                </h3>
                <p className="mt-2 text-gray-600">
                  Oui, toutes les variantes de produits sont parfaitement synchronisées. Les tailles, couleurs et autres
                  attributs sont mappés automatiquement entre les deux plateformes.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Puis-je avoir des prix différents pour le B2B et le B2C ?
                </h3>
                <p className="mt-2 text-gray-600">
                  Absolument. Vous pouvez définir des prix B2B spécifiques pour Faire tout en conservant vos prix B2C
                  sur votre boutique Shopify publique.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Combien de temps prend la mise en place ?
                </h3>
                <p className="mt-2 text-gray-600">
                  L'intégration Shopify ↔ Faire peut être opérationnelle en 24-48h. Nous nous occupons de la configuration,
                  du mapping des produits et des tests pour vous.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="rounded-2xl bg-blue-600 px-8 py-16 text-center">
            <h2 className="text-3xl font-bold text-white">
              Prêt à synchroniser Shopify et Faire ?
            </h2>
            <p className="mt-4 text-lg text-blue-100">
              Démarrez avec une démo gratuite et découvrez comment automatiser vos ventes wholesale
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Link
                href="/#demo"
                className="rounded-md bg-white px-6 py-3 text-base font-semibold text-blue-600 shadow-sm hover:bg-blue-50"
              >
                Demander une démo
              </Link>
              <Link
                href="/"
                className="rounded-md bg-blue-500 px-6 py-3 text-base font-semibold text-white hover:bg-blue-400"
              >
                Voir toutes les intégrations
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}