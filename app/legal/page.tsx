import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions légales | Sync Mode",
  description: "Mentions légales de Sync Mode",
};

export default function LegalPage() {
  return (
    <main className="bg-white py-24">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900">Mentions légales</h1>
        
        <div className="mt-8 space-y-6 text-gray-600">
          <section>
            <h2 className="text-xl font-semibold text-gray-900">Éditeur du site</h2>
            <p className="mt-2">
              Sync Mode<br />
              Solution de synchronisation B2B<br />
              Email : contact@sync-mode.fr
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">Hébergement</h2>
            <p className="mt-2">
              Ce site est hébergé par Vercel Inc.<br />
              340 S Lemon Ave #4133<br />
              Walnut, CA 91789<br />
              United States
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">Propriété intellectuelle</h2>
            <p className="mt-2">
              L'ensemble de ce site relève de la législation française et internationale 
              sur le droit d'auteur et la propriété intellectuelle. Tous les droits de 
              reproduction sont réservés.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">Marques citées</h2>
            <p className="mt-2">
              Sync Mode est une solution indépendante. Les marques Shopify, Faire, Ankorstore, 
              Paris Fashion Shops, MicroStore, Amazon et Zalando sont la propriété de leurs 
              détenteurs respectifs. Sync Mode n'est pas affilié à ces marques.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">Responsabilité</h2>
            <p className="mt-2">
              Les informations fournies sur ce site le sont à titre indicatif. Sync Mode 
              ne saurait garantir l'exactitude, la complétude, l'actualité des informations 
              diffusées sur son site.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}