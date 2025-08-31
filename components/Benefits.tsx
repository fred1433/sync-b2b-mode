import { Shield, Package, Zap } from "lucide-react";

const benefits = [
  {
    name: "Synchronisation des stocks en temps réel",
    description: "Évitez la survente avec une synchronisation automatique des stocks entre toutes vos plateformes B2B",
    icon: Shield,
  },
  {
    name: "Synchronisation des prix par canal",
    description: "Synchronisez vos prix B2B différenciés : tarifs grossistes, remises volume, prix par plateforme",
    icon: Package,
  },
  {
    name: "Synchronisation des commandes centralisée",
    description: "Toutes vos commandes B2B synchronisées en un seul endroit. Compatible ERP/WMS pour automatiser vos opérations",
    icon: Zap,
  },
];

export function Benefits() {
  return (
    <section className="py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Conçu pour les grossistes mode français
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Une solution qui comprend vos besoins spécifiques
          </p>
        </div>
        
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {benefits.map((benefit) => (
              <div key={benefit.name} className="flex flex-col">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600">
                    <benefit.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {benefit.name}
                </dt>
                <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{benefit.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}