import { Metadata } from "next";
import { pageMetadata } from "@/config/seo";
import { Building2, Smartphone, Zap, TrendingUp } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: pageMetadata.pfsMicrostore.title,
  description: pageMetadata.pfsMicrostore.description,
};

export default function PfsMicrostorePage() {
  return (
    <main>
      <section className="bg-gradient-to-b from-green-50 to-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Synchroniser PFS avec MicroStore
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              La connexion parfaite entre Paris Fashion Shops et MicroStore.
              Dominez le marché B2B d'Aubervilliers et du Sentier.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold text-gray-900">Le duo gagnant du wholesale parisien</h2>
            
            <div className="mt-8 space-y-8">
              <div className="flex gap-4">
                <Building2 className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900">PFS : La plateforme historique</h3>
                  <p className="mt-2 text-gray-600">
                    Paris Fashion Shops, c'est 5000+ grossistes, la référence du B2B mode.
                    Votre catalogue PFS disponible instantanément sur MicroStore.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Smartphone className="h-6 w-6 text-purple-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900">MicroStore : L'app mobile moderne</h3>
                  <p className="mt-2 text-gray-600">
                    Les détaillants commandent depuis leur téléphone.
                    Vos produits PFS accessibles partout, tout le temps.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Zap className="h-6 w-6 text-yellow-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900">Synchronisation instantanée</h3>
                  <p className="mt-2 text-gray-600">
                    Une vente sur PFS = stock mis à jour sur MicroStore.
                    Une commande MicroStore = stock décrémenté sur PFS.
                    Zéro double vente, zéro problème.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <TrendingUp className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900">Doublez vos ventes</h3>
                  <p className="mt-2 text-gray-600">
                    Clients PFS + Clients MicroStore = 2x plus d'opportunités.
                    Sans effort supplémentaire, sans risque de survente.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2">
              <div className="rounded-lg bg-blue-50 p-6">
                <h3 className="font-semibold text-gray-900">Pour les vendeurs PFS</h3>
                <p className="mt-2 text-sm text-gray-600">
                  Accédez aux milliers de détaillants sur MicroStore sans effort.
                </p>
              </div>
              <div className="rounded-lg bg-purple-50 p-6">
                <h3 className="font-semibold text-gray-900">Pour les vendeurs MicroStore</h3>
                <p className="mt-2 text-sm text-gray-600">
                  Profitez de la puissance et de la notoriété de PFS.
                </p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <Link
                href="/#demo"
                className="rounded-md bg-green-600 px-8 py-3 text-base font-semibold text-white shadow-sm hover:bg-green-500"
              >
                Connecter PFS et MicroStore
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}