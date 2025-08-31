import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-8 inline-flex items-center rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
            <CheckCircle className="mr-2 h-4 w-4" />
            Solution indépendante, non affiliée aux marques citées
          </div>
          
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Le hub de synchronisation B2B pour la mode
          </h1>
          
          <p className="mt-6 text-lg leading-8 text-gray-600">
            <strong>PFS, MicroStore (MC), Faire, Ankorstore & Shopify alignés :</strong>
            <br />
            stocks, variantes, prix & commandes.
          </p>

          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="#demo"
              className="rounded-md bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-colors"
            >
              Demander une démo
              <ArrowRight className="ml-2 inline h-4 w-4" />
            </Link>
            <Link
              href="#waitlist"
              className="text-base font-semibold leading-6 text-gray-900 hover:text-gray-700 transition-colors"
            >
              Rejoindre la liste d'attente <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>

        <div className="mt-16 flex justify-center gap-8 opacity-60 grayscale">
          <div className="flex items-center justify-center">
            <span className="text-xl font-bold text-gray-400">Shopify</span>
          </div>
          <div className="flex items-center justify-center">
            <span className="text-xl font-bold text-gray-400">Faire</span>
          </div>
          <div className="flex items-center justify-center">
            <span className="text-xl font-bold text-gray-400">Ankorstore</span>
          </div>
          <div className="flex items-center justify-center">
            <span className="text-xl font-bold text-gray-400">PFS</span>
          </div>
          <div className="flex items-center justify-center">
            <span className="text-xl font-bold text-gray-400">MicroStore</span>
          </div>
        </div>
      </div>
    </section>
  );
}