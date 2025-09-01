const faqs = [
  {
    question: "Êtes-vous affiliés aux plateformes mentionnées ?",
    answer: "Non, nous sommes une solution indépendante non affiliée à Shopify, Faire, Ankorstore, PFS ou MicroStore. Nous utilisons les APIs et connecteurs officiels disponibles.",
  },
  {
    question: "Comment fonctionne l'intégration Shopify ↔ Faire ?",
    answer: "Nous utilisons les applications officielles 'Sell Wholesale' et 'Buy Wholesale' de Faire, qui permettent une synchronisation native des stocks, produits et commandes avec Shopify.",
  },
  {
    question: "PFS et MicroStore ont-ils des APIs ?",
    answer: "Ces plateformes proposent différents niveaux d'intégration selon votre compte. Nous travaillons avec des flux CSV/SFTP et des partenariats directs pour assurer la synchronisation.",
  },
  {
    question: "Qu'est-ce que MicroStore (MC) ?",
    answer: "MicroStore est une application mobile dédiée aux grossistes de mode, très populaire à Aubervilliers et dans le Sentier. Elle permet aux détaillants de passer des commandes B2B directement depuis leur téléphone.",
  },
  {
    question: "Comment gérez-vous les prepacks et MOQ ?",
    answer: "Notre système gère nativement les conditionnements par taille (prepacks), les quantités minimum de commande (MOQ) et les grilles de tailles spécifiques à la mode.",
  },
  {
    question: "Quelle est votre politique de confidentialité ?",
    answer: "Nous sommes conformes RGPD et CNIL. Vos données sont hébergées en France, chiffrées et jamais partagées avec des tiers. Notre bannière cookies respecte les directives CNIL avec un refus aussi simple qu'une acceptation.",
  },
  {
    question: "Combien de temps prend la mise en place ?",
    answer: "24h chrono après votre inscription ! Vous nous donnez vos accès le matin, tout est synchronisé le soir même. Notre équipe s'occupe de tout : configuration, mapping des produits, tests. Vous n'avez rien à faire.",
  },
  {
    question: "Quels sont vos tarifs ?",
    answer: "69€/mois tout inclus pour toutes les plateformes ! Pas de frais cachés, pas de setup fee. Essai gratuit 14 jours pour tester. Plan Enterprise sur devis pour les très gros volumes (10,000+ SKUs).",
  },
];

export function FAQ() {
  return (
    <section className="bg-white py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Questions fréquentes
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Tout ce que vous devez savoir sur notre solution
          </p>
        </div>
        
        <div className="mx-auto mt-16 max-w-3xl divide-y divide-gray-900/10">
          <dl className="space-y-8 divide-y divide-gray-900/10">
            {faqs.map((faq, index) => (
              <div key={index} className="pt-8 first:pt-0">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  {faq.question}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  {faq.answer}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}