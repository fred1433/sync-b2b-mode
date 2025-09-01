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
    name: "Tout Inclus",
    price: "69€",
    period: "/mois",
    popular: true,
    description: "Accès complet à toutes les plateformes",
    features: [
      "✅ TOUTES les plateformes incluses",
      "Shopify, Faire, Ankorstore, PFS, MicroStore",
      "Amazon, Zalando, eFashion",
      "Jusqu'à 5,000 SKUs",
      "Synchronisation toutes les 10 minutes",
      "Support prioritaire par email",
      "Mapping grilles de tailles",
      "Gestion des prepacks/MOQ",
      "Multi-entrepôts",
    ],
  },
  {
    name: "Enterprise",
    price: "Sur devis",
    period: "",
    description: "Pour les très gros volumes",
    features: [
      "Tout du plan Tout Inclus +",
      "SKUs illimités (10,000+)",
      "Synchronisation temps réel (1 min)",
      "Support téléphonique dédié",
      "Compte manager personnel",
      "API personnalisée",
      "Intégration ERP/WMS sur mesure",
      "Formation équipe sur site",
      "SLA 99.9% garanti",
    ],
  },
];

export default function PricingPage() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Un seul prix, toutes les plateformes
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            69€/mois pour synchroniser TOUTES vos plateformes. Sans engagement, essai 14 jours gratuit.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-2">
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
                href="/#demo"
                className={`mt-8 block w-full rounded-md px-3 py-2 text-center text-sm font-semibold leading-6 ${
                  plan.popular
                    ? "bg-blue-600 text-white hover:bg-blue-500"
                    : "bg-gray-50 text-gray-900 hover:bg-gray-100"
                } focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600`}
              >
                {plan.name === "Enterprise" ? "Contactez-nous" : "Commencer l'essai gratuit"}
              </Link>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-16 max-w-2xl text-center">
          <p className="text-base text-gray-600">
            <span className="font-semibold">Essai gratuit 14 jours</span> • Sans engagement • Annulation à tout moment
          </p>
          <p className="mt-2 text-sm text-gray-500">
            Configuration et onboarding inclus, notre équipe vous accompagne gratuitement
          </p>
        </div>
      </div>
    </div>
  );
}