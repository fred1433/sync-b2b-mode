import { Shield, Lock, Eye, Server, CheckCircle, AlertCircle } from "lucide-react";
import { Metadata } from "next";
import { pageMetadata } from "@/config/seo";

export const metadata: Metadata = {
  title: pageMetadata.security.title,
  description: pageMetadata.security.description,
};

export default function SecurityPage() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Sécurité & Conformité RGPD
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Vos données sont en sécurité. Nous respectons les normes les plus strictes de protection des données.
          </p>
        </div>

        {/* Avertissement indépendance */}
        <div className="mx-auto mt-12 max-w-3xl rounded-lg bg-blue-50 p-6">
          <div className="flex">
            <AlertCircle className="h-6 w-6 text-blue-600 flex-shrink-0" />
            <div className="ml-3">
              <h3 className="text-sm font-medium text-blue-800">
                Solution indépendante
              </h3>
              <p className="mt-2 text-sm text-blue-700">
                Sync Mode est une solution indépendante non affiliée à Shopify, Faire, Ankorstore, Paris Fashion Shops, MicroStore, Amazon ou Zalando. 
                Nous utilisons les APIs et méthodes d'intégration officiellement disponibles.
              </p>
            </div>
          </div>
        </div>

        {/* Sécurité technique */}
        <div className="mx-auto mt-16 max-w-4xl">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Sécurité technique
          </h2>
          
          <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2">
            <div className="flex gap-x-4">
              <Lock className="h-6 w-6 text-blue-600 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-900">Chiffrement de bout en bout</h3>
                <p className="mt-2 text-gray-600">
                  Toutes les données sont chiffrées en transit (TLS 1.3) et au repos (AES-256).
                </p>
              </div>
            </div>

            <div className="flex gap-x-4">
              <Server className="h-6 w-6 text-blue-600 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-900">Hébergement en France</h3>
                <p className="mt-2 text-gray-600">
                  Vos données sont hébergées exclusivement dans des datacenters français certifiés.
                </p>
              </div>
            </div>

            <div className="flex gap-x-4">
              <Shield className="h-6 w-6 text-blue-600 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-900">Authentification sécurisée</h3>
                <p className="mt-2 text-gray-600">
                  Authentification à deux facteurs (2FA) disponible pour tous les comptes.
                </p>
              </div>
            </div>

            <div className="flex gap-x-4">
              <Eye className="h-6 w-6 text-blue-600 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-900">Audit et monitoring</h3>
                <p className="mt-2 text-gray-600">
                  Surveillance 24/7 et logs d'audit complets de toutes les actions.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Conformité RGPD */}
        <div className="mx-auto mt-16 max-w-4xl">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Conformité RGPD & CNIL
          </h2>
          
          <div className="mt-8 space-y-4">
            <div className="flex gap-x-3">
              <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-900">Déclaration CNIL</h3>
                <p className="mt-1 text-gray-600">
                  Traitement de données déclaré auprès de la CNIL conformément au RGPD.
                </p>
              </div>
            </div>

            <div className="flex gap-x-3">
              <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-900">Minimisation des données</h3>
                <p className="mt-1 text-gray-600">
                  Nous ne collectons que les données strictement nécessaires au fonctionnement du service.
                </p>
              </div>
            </div>

            <div className="flex gap-x-3">
              <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-900">Droit à l'effacement</h3>
                <p className="mt-1 text-gray-600">
                  Suppression complète de vos données sur simple demande sous 72h.
                </p>
              </div>
            </div>

            <div className="flex gap-x-3">
              <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-900">Portabilité des données</h3>
                <p className="mt-1 text-gray-600">
                  Export de toutes vos données dans un format standard à tout moment.
                </p>
              </div>
            </div>

            <div className="flex gap-x-3">
              <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-900">Cookies conformes</h3>
                <p className="mt-1 text-gray-600">
                  Bannière cookies conforme CNIL avec refus aussi simple que l'acceptation.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Engagements */}
        <div className="mx-auto mt-16 max-w-4xl">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Nos engagements
          </h2>
          
          <div className="mt-8 space-y-6">
            <div className="rounded-lg bg-gray-50 p-6">
              <h3 className="font-semibold text-gray-900">Transparence totale</h3>
              <p className="mt-2 text-gray-600">
                Nous vous informons immédiatement de tout incident de sécurité potentiel.
              </p>
            </div>

            <div className="rounded-lg bg-gray-50 p-6">
              <h3 className="font-semibold text-gray-900">Pas de revente de données</h3>
              <p className="mt-2 text-gray-600">
                Vos données ne sont jamais vendues, partagées ou utilisées à des fins publicitaires.
              </p>
            </div>

            <div className="rounded-lg bg-gray-50 p-6">
              <h3 className="font-semibold text-gray-900">Contrôle total</h3>
              <p className="mt-2 text-gray-600">
                Vous gardez le contrôle total de vos données et pouvez les supprimer à tout moment.
              </p>
            </div>
          </div>
        </div>

        {/* Contact DPO */}
        <div className="mx-auto mt-16 max-w-2xl rounded-3xl bg-blue-50 p-8 text-center">
          <h3 className="text-lg font-semibold text-gray-900">
            Délégué à la Protection des Données
          </h3>
          <p className="mt-4 text-gray-600">
            Pour toute question concernant vos données personnelles, contactez notre DPO :
          </p>
          <p className="mt-2 font-semibold text-gray-900">
            dpo@sync-mode.fr
          </p>
        </div>
      </div>
    </div>
  );
}