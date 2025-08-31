import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, ExternalLink } from "lucide-react";
import { pageMetadata } from "@/config/seo";

export const metadata: Metadata = {
  title: pageMetadata.shopifyAnkorstore.title,
  description: pageMetadata.shopifyAnkorstore.description,
  openGraph: {
    title: pageMetadata.shopifyAnkorstore.title,
    description: pageMetadata.shopifyAnkorstore.description,
  },
};

export default function ShopifyAnkorstorePage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-green-50 to-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Shopify ↔ Ankorstore Sales Channel
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Intégration officielle via Ankorstore Sales Channel. Publiez vos produits,
              synchronisez stocks et commandes automatiquement.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/#demo"
                className="rounded-md bg-green-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-green-500"
              >
                Activer l'intégration
                <ArrowRight className="ml-2 inline h-4 w-4" />
              </Link>
              <a
                href="https://support.ankorstore.com/contents/Comment-installer-l-integration-Shopify-fgNXX_Oc"
                target="_blank"
                rel="noopener noreferrer"
                className="text-base font-semibold text-gray-900 hover:text-gray-700"
              >
                Documentation officielle
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
            Capacités du Sales Channel Ankorstore
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-green-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Publication de produits
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-600 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Sélection des produits à publier</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-600 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Mapping automatique des catégories</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-600 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Gestion des images et descriptions</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-green-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Synchronisation stocks
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-600 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Mise à jour temps réel</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-600 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Gestion multi-entrepôts</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-600 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Réservation de stock B2B</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-green-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Gestion des commandes
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-600 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Import automatique dans Shopify</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-600 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Statuts synchronisés</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-600 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Factures et documents</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Spécificités Mode */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Optimisé pour la mode et le prêt-à-porter
          </h2>
          
          <div className="mx-auto max-w-4xl">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Gestion des variantes mode
                </h3>
                <p className="text-gray-600 mb-4">
                  Synchronisation parfaite des tailles, couleurs et autres variantes spécifiques à la mode.
                  Grilles de tailles européennes supportées.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-600 mr-2" />
                    <span className="text-sm text-gray-700">Tailles EU/FR/UK/US</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-600 mr-2" />
                    <span className="text-sm text-gray-700">Coloris et matières</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-600 mr-2" />
                    <span className="text-sm text-gray-700">Références fournisseur</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Prix et conditions B2B
                </h3>
                <p className="text-gray-600 mb-4">
                  Gérez vos conditions commerciales spécifiques au wholesale directement depuis Shopify.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-600 mr-2" />
                    <span className="text-sm text-gray-700">Prix wholesale différenciés</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-600 mr-2" />
                    <span className="text-sm text-gray-700">MOQ par produit</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-600 mr-2" />
                    <span className="text-sm text-gray-700">Remises volume</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Témoignage */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <blockquote className="text-xl italic text-gray-700">
              "L'intégration Shopify-Ankorstore nous a permis de toucher 300 nouveaux revendeurs en 6 mois,
              sans aucune survente grâce à la synchronisation temps réel."
            </blockquote>
            <p className="mt-4 text-gray-600">
              — Marie L., Grossiste textile à Aubervilliers
            </p>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="bg-green-600 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white">
              Connectez Shopify et Ankorstore dès aujourd'hui
            </h2>
            <p className="mt-4 text-lg text-green-100">
              Configuration en 48h, accompagnement personnalisé inclus
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Link
                href="/#demo"
                className="rounded-md bg-white px-6 py-3 text-base font-semibold text-green-600 shadow-sm hover:bg-green-50"
              >
                Planifier une démo
              </Link>
              <Link
                href="/shopify-faire"
                className="rounded-md bg-green-500 px-6 py-3 text-base font-semibold text-white hover:bg-green-400"
              >
                Voir aussi Shopify ↔ Faire
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}