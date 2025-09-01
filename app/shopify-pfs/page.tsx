import { Metadata } from "next";
import { pageMetadata } from "@/config/seo";
import { Hero } from "@/components/Hero";
import { CheckCircle, AlertCircle, Zap, Package } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: pageMetadata.shopifyPfs.title,
  description: pageMetadata.shopifyPfs.description,
};

export default function ShopifyPfsPage() {
  return (
    <main>
      <section className="bg-gradient-to-b from-blue-50 to-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Connecter Shopify avec Paris Fashion Shops
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Synchronisation automatique entre votre boutique Shopify et PFS.
              Idéal pour les grossistes d'Aubervilliers et du Sentier.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold text-gray-900">Comment ça marche</h2>
            
            <div className="mt-8 space-y-8">
              <div className="flex gap-4">
                <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900">Synchronisation bidirectionnelle</h3>
                  <p className="mt-2 text-gray-600">
                    Vos produits Shopify apparaissent sur PFS et vice-versa. 
                    Les stocks se mettent à jour en temps réel des deux côtés.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Package className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900">Gestion des prepacks</h3>
                  <p className="mt-2 text-gray-600">
                    PFS utilise beaucoup les prepacks et quantités minimum. 
                    Notre système gère automatiquement ces conditionnements spéciaux.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Zap className="h-6 w-6 text-yellow-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900">Installation 24h</h3>
                  <p className="mt-2 text-gray-600">
                    Notre équipe configure tout pour vous. Mapping des produits, 
                    grilles de tailles, tout est prêt en 24h.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 rounded-lg bg-orange-50 p-6">
              <div className="flex">
                <AlertCircle className="h-6 w-6 text-orange-600 flex-shrink-0" />
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-orange-800">
                    Note sur PFS
                  </h3>
                  <p className="mt-2 text-sm text-orange-700">
                    Paris Fashion Shops propose différents niveaux d'intégration selon votre compte.
                    Nous travaillons avec leur équipe pour assurer la meilleure synchronisation possible.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <Link
                href="/#demo"
                className="rounded-md bg-blue-600 px-8 py-3 text-base font-semibold text-white shadow-sm hover:bg-blue-500"
              >
                Démarrer l'intégration
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}