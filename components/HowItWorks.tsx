import { Link2, Map, RefreshCw } from "lucide-react";

const steps = [
  {
    id: "01",
    name: "Connectez vos plateformes",
    description: "Reliez Shopify, Faire, Ankorstore, PFS et MicroStore pour synchroniser vos données",
    icon: Link2,
  },
  {
    id: "02",
    name: "Configurez la synchronisation",
    description: "Définissez comment synchroniser stocks, prix, variantes et règles de synchronisation par canal",
    icon: Map,
  },
  {
    id: "03",
    name: "Synchronisation automatique",
    description: "Vos stocks, prix et commandes se synchronisent en temps réel. Zéro survente, zéro erreur",
    icon: RefreshCw,
  },
];

export function HowItWorks() {
  return (
    <section className="bg-gray-50 py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Comment ça marche
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Démarrage simple en 3 étapes
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {steps.map((step) => (
              <div key={step.name} className="relative">
                <dt>
                  <div className="flex items-center gap-x-3">
                    <span className="text-5xl font-bold text-gray-200">{step.id}</span>
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600">
                      <step.icon className="h-6 w-6 text-white" aria-hidden="true" />
                    </div>
                  </div>
                  <p className="mt-4 text-lg font-semibold leading-7 text-gray-900">
                    {step.name}
                  </p>
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  {step.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}