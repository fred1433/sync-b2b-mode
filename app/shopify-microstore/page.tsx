import { Metadata } from "next";
import { pageMetadata } from "@/config/seo";
import { CheckCircle, Smartphone, TrendingUp, Users } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: pageMetadata.shopifyMicrostore.title,
  description: pageMetadata.shopifyMicrostore.description,
};

export default function ShopifyMicrostorePage() {
  return (
    <main>
      <section className="bg-gradient-to-b from-purple-50 to-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Connecter Shopify avec MicroStore (MC)
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Synchronisation parfaite entre votre Shopify et l'app MicroStore.
              La solution préférée des grossistes d'Aubervilliers.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold text-gray-900">Pourquoi MicroStore + Shopify ?</h2>
            
            <div className="mt-8 space-y-8">
              <div className="flex gap-4">
                <Smartphone className="h-6 w-6 text-purple-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900">App mobile populaire</h3>
                  <p className="mt-2 text-gray-600">
                    MicroStore est l'app préférée des détaillants pour commander en B2B.
                    Des milliers de boutiques l'utilisent quotidiennement.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Users className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900">Communauté Aubervilliers</h3>
                  <p className="mt-2 text-gray-600">
                    Très populaire dans le quartier des grossistes d'Aubervilliers.
                    Vos voisins l'utilisent déjà, rejoignez le mouvement !
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <TrendingUp className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900">Augmentez vos ventes</h3>
                  <p className="mt-2 text-gray-600">
                    En synchronisant avec MicroStore, vous accédez à des milliers
                    de détaillants qui commandent directement depuis leur téléphone.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900">Synchronisation temps réel</h3>
                  <p className="mt-2 text-gray-600">
                    Stock mis à jour instantanément. Une vente sur MicroStore = 
                    stock décrémenté sur Shopify. Zéro survente garantie.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 rounded-lg bg-purple-50 p-8 text-center">
              <h3 className="text-lg font-semibold text-gray-900">
                Spécial grossistes Aubervilliers
              </h3>
              <p className="mt-2 text-gray-600">
                Configuration adaptée aux pratiques locales : prepacks, 
                quantités minimum, tarifs dégressifs.
              </p>
            </div>

            <div className="mt-12 text-center">
              <Link
                href="/#demo"
                className="rounded-md bg-purple-600 px-8 py-3 text-base font-semibold text-white shadow-sm hover:bg-purple-500"
              >
                Commencer avec MicroStore
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}