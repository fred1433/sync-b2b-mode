import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de confidentialité | Sync Mode",
  description: "Politique de confidentialité et protection des données personnelles",
};

export default function PrivacyPage() {
  return (
    <main className="bg-white py-24">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900">Politique de confidentialité</h1>
        <p className="mt-4 text-sm text-gray-600">Dernière mise à jour : Janvier 2025</p>
        
        <div className="mt-8 space-y-6 text-gray-600">
          <section>
            <h2 className="text-xl font-semibold text-gray-900">1. Collecte des données</h2>
            <p className="mt-2">
              Nous collectons uniquement les données nécessaires au fonctionnement du service :
            </p>
            <ul className="mt-2 list-disc pl-6">
              <li>Nom et prénom</li>
              <li>Email professionnel</li>
              <li>Numéro de téléphone</li>
              <li>Nom de l'entreprise</li>
              <li>Informations sur vos plateformes de vente</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">2. Utilisation des données</h2>
            <p className="mt-2">Vos données sont utilisées pour :</p>
            <ul className="mt-2 list-disc pl-6">
              <li>Vous contacter concernant votre demande</li>
              <li>Configurer votre compte Sync Mode</li>
              <li>Assurer le support technique</li>
              <li>Vous informer des mises à jour du service</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">3. Protection des données</h2>
            <p className="mt-2">
              Vos données sont hébergées en France et protégées par chiffrement.
              Nous ne vendons jamais vos données à des tiers.
              Accès strictement limité aux personnes autorisées.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">4. Vos droits RGPD</h2>
            <p className="mt-2">Conformément au RGPD, vous disposez des droits suivants :</p>
            <ul className="mt-2 list-disc pl-6">
              <li>Droit d'accès à vos données</li>
              <li>Droit de rectification</li>
              <li>Droit à l'effacement</li>
              <li>Droit à la portabilité</li>
              <li>Droit d'opposition</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">5. Cookies</h2>
            <p className="mt-2">
              Nous utilisons des cookies pour améliorer votre expérience et analyser 
              le trafic via Google Analytics. Vous pouvez refuser les cookies à tout moment.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">6. Contact DPO</h2>
            <p className="mt-2">
              Pour exercer vos droits ou toute question sur vos données :<br />
              Email : dpo@sync-mode.fr
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">7. Modifications</h2>
            <p className="mt-2">
              Cette politique peut être mise à jour. Nous vous informerons de tout 
              changement significatif par email.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}