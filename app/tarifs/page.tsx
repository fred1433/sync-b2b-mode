import { Check } from "lucide-react";
import { Metadata } from "next";
import { pageMetadata } from "@/config/seo";
import Link from "next/link";

export const metadata: Metadata = {
  title: pageMetadata.pricing.title,
  description: pageMetadata.pricing.description,
};

const plans = [
  {
    name: "Starter",
    price: "99€",
    period: "/mois",
    description: "Pour démarrer avec 1-2 plateformes",
    features: [
      "2 connecteurs maximum",
      "Jusqu'à 500 SKUs",
      "Synchronisation toutes les 30 minutes",
      "Support par email",
      "Onboarding assisté",
    ],
  },
  {
    name: "Pro",
    price: "249€",
    period: "/mois",
    popular: true,
    description: "Pour les grossistes en croissance",
    features: [
      "4 connecteurs maximum",
      "Jusqu'à 2,000 SKUs",
      "Synchronisation toutes les 15 minutes",
      "Support prioritaire",
      "Onboarding personnalisé",
      "Mapping grilles de tailles",
      "Gestion des prepacks",
    ],
  },
  {
    name: "Enterprise",
    price: "Sur mesure",
    period: "",
    description: "Pour les gros volumes",
    features: [
      "Connecteurs illimités",
      "SKUs illimités",
      "Synchronisation temps réel",
      "Support dédié 24/7",
      "Onboarding sur site",
      "API dédiée",
      "Intégration ERP/WMS",
      "SLA garanti",
    ],
  },
];

export default function PricingPage() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Tarifs simples et transparents
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Choisissez le plan adapté à votre volume. Sans engagement, annulation à tout moment.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-3xl p-8 ring-1 ${
                plan.popular
                  ? "ring-2 ring-blue-600 shadow-xl"
                  : "ring-gray-200"
              }`}
            >
              {plan.popular && (
                <p className="mb-4 text-center text-sm font-semibold text-blue-600">
                  Le plus populaire
                </p>
              )}
              <h2 className="text-lg font-semibold leading-8 text-gray-900">
                {plan.name}
              </h2>
              <p className="mt-4 text-sm leading-6 text-gray-600">
                {plan.description}
              </p>
              <p className="mt-6 flex items-baseline gap-x-1">
                <span className="text-4xl font-bold tracking-tight text-gray-900">
                  {plan.price}
                </span>
                {plan.period && (
                  <span className="text-sm font-semibold leading-6 text-gray-600">
                    {plan.period}
                  </span>
                )}
              </p>
              <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-600">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <Check className="h-6 w-5 flex-none text-blue-600" aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                href="#demo"
                className={`mt-8 block w-full rounded-md px-3 py-2 text-center text-sm font-semibold leading-6 ${
                  plan.popular
                    ? "bg-blue-600 text-white hover:bg-blue-500"
                    : "bg-gray-50 text-gray-900 hover:bg-gray-100"
                } focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600`}
              >
                Demander une démo
              </Link>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-16 max-w-2xl rounded-3xl bg-gray-50 p-8 sm:p-10">
          <h3 className="text-lg font-semibold leading-8 text-gray-900">
            Frais d'onboarding
          </h3>
          <p className="mt-4 text-sm leading-6 text-gray-600">
            Un frais unique de mise en place de <span className="font-semibold">199€</span> par connecteur inclut :
          </p>
          <ul className="mt-4 space-y-2 text-sm text-gray-600">
            <li>• Configuration initiale et tests</li>
            <li>• Mapping des produits et variantes</li>
            <li>• Configuration des grilles de tailles</li>
            <li>• Formation de votre équipe</li>
            <li>• Support prioritaire pendant 30 jours</li>
          </ul>
        </div>
      </div>
    </div>
  );
}