import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Conditions Générales de Vente | Sync Mode",
  description: "CGV de Sync Mode - Service de synchronisation B2B",
};

export default function TermsPage() {
  return (
    <main className="bg-white py-24">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900">Conditions Générales de Vente</h1>
        <p className="mt-4 text-sm text-gray-600">En vigueur au 1er janvier 2025</p>
        
        <div className="mt-8 space-y-6 text-gray-600">
          <section>
            <h2 className="text-xl font-semibold text-gray-900">Article 1 - Objet</h2>
            <p className="mt-2">
              Les présentes CGV régissent les relations entre Sync Mode et ses clients 
              dans le cadre de la fourniture d'un service de synchronisation de données 
              entre plateformes B2B.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">Article 2 - Prix</h2>
            <p className="mt-2">
              Le service est proposé à 69€ HT par mois pour le plan standard.
              Les tarifs Enterprise sont établis sur devis.
              Les prix sont susceptibles d'être modifiés avec un préavis de 30 jours.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">Article 3 - Essai gratuit</h2>
            <p className="mt-2">
              Un essai gratuit de 14 jours est proposé sans engagement.
              Aucun paiement n'est requis pendant la période d'essai.
              L'abonnement démarre automatiquement à la fin de l'essai sauf annulation.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">Article 4 - Paiement</h2>
            <p className="mt-2">
              Le paiement s'effectue mensuellement par prélèvement automatique.
              Les factures sont envoyées par email.
              En cas de défaut de paiement, le service peut être suspendu après 7 jours.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">Article 5 - Résiliation</h2>
            <p className="mt-2">
              Le client peut résilier à tout moment sans préavis.
              La résiliation prend effet à la fin de la période de facturation en cours.
              Aucun remboursement partiel n'est effectué.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">Article 6 - Responsabilités</h2>
            <p className="mt-2">
              Sync Mode s'engage à maintenir un taux de disponibilité de 99%.
              Nous ne sommes pas responsables des interruptions dues aux plateformes tierces.
              Le client reste responsable de la véracité de ses données.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">Article 7 - Données</h2>
            <p className="mt-2">
              Le client reste propriétaire de ses données.
              Sync Mode s'engage à ne pas utiliser les données à d'autres fins.
              Les données sont supprimées 30 jours après la résiliation.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">Article 8 - Support</h2>
            <p className="mt-2">
              Support par email inclus dans tous les plans.
              Temps de réponse : 24h ouvrées maximum.
              Support téléphonique disponible pour les plans Enterprise.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">Article 9 - Modifications</h2>
            <p className="mt-2">
              Sync Mode se réserve le droit de modifier les CGV.
              Les clients seront informés 30 jours avant l'entrée en vigueur.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">Article 10 - Loi applicable</h2>
            <p className="mt-2">
              Les présentes CGV sont soumises au droit français.
              En cas de litige, les tribunaux de Paris sont compétents.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}