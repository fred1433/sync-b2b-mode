"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { calculateLeadScore, type LeadData } from "@/lib/lead-scoring";
import { Loader2, CheckCircle } from "lucide-react";

const formSchema = z.object({
  platforms: z.array(z.string()).min(1, "Sélectionnez au moins une plateforme"),
  objectives: z.array(z.string()).min(1, "Sélectionnez au moins un objectif"),
  catalogSize: z.string().min(1, "Sélectionnez la taille de votre catalogue"),
  warehouses: z.coerce.number().min(1),
  volumeB2B: z.string().min(1, "Sélectionnez votre volume de commandes"),
  hasERP: z.boolean(),
  hasCSV: z.boolean(),
  email: z.string().email("Email invalide"),
  phone: z.string().optional(),
  company: z.string().optional(),
  consent: z.boolean().refine((val) => val === true, "Vous devez accepter les conditions"),
});

type FormData = z.infer<typeof formSchema>;

export function QualificationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [leadScore, setLeadScore] = useState<ReturnType<typeof calculateLeadScore> | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      platforms: [],
      objectives: [],
      hasERP: false,
      hasCSV: false,
      consent: false,
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    const leadData: LeadData = {
      ...data,
      warehouses: data.warehouses,
    };
    
    const score = calculateLeadScore(leadData);
    setLeadScore(score);

    // Ici on enverrait les données à HubSpot/CRM
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);

    // Si score >= 5, rediriger vers Google Calendar
    if (score.score >= 5) {
      setTimeout(() => {
        window.open("https://calendar.app.google/TYAMqj2b8WFD6Mzx9", "_blank");
      }, 2000);
    }
  };

  if (isSubmitted && leadScore) {
    return (
      <section id="demo" className="bg-gray-50 py-20 sm:py-32">
        <div className="mx-auto max-w-2xl px-6 lg:px-8">
          <div className="rounded-lg bg-white p-8 shadow-lg">
            <div className="text-center">
              <CheckCircle className="mx-auto h-12 w-12 text-green-600" />
              <h3 className="mt-4 text-2xl font-bold text-gray-900">
                Merci pour votre demande !
              </h3>
              
              {leadScore.priority === "high" ? (
                <div className="mt-6">
                  <p className="text-lg text-gray-600">
                    Votre profil correspond parfaitement à notre solution.
                  </p>
                  <p className="mt-2 text-sm text-gray-500">
                    Vous allez être redirigé vers notre calendrier de démonstration...
                  </p>
                  <div className="mt-4 rounded-lg bg-green-50 p-4">
                    <p className="text-sm font-medium text-green-800">
                      Score de qualification : {leadScore.score}/10 (Priorité haute)
                    </p>
                  </div>
                </div>
              ) : (
                <div className="mt-6">
                  <p className="text-lg text-gray-600">
                    Nous vous contacterons dans les 24h pour planifier une démonstration.
                  </p>
                  <div className="mt-4 rounded-lg bg-blue-50 p-4">
                    <p className="text-sm font-medium text-blue-800">
                      Score de qualification : {leadScore.score}/10
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="demo" className="bg-gray-50 py-20 sm:py-32">
      <div className="mx-auto max-w-2xl px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Demander une démonstration
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Quelques questions pour personnaliser votre démo
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="mt-12 space-y-8">
          <div className="rounded-lg bg-white p-8 shadow-lg">
            {/* Plateformes */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Quelles plateformes utilisez-vous ? *
              </label>
              <div className="mt-2 space-y-2">
                {["shopify", "faire", "ankorstore", "pfs", "microstore", "efashion"].map((platform) => (
                  <label key={platform} className="flex items-center">
                    <input
                      type="checkbox"
                      value={platform}
                      {...register("platforms")}
                      className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="ml-2 text-sm text-gray-700">
                      {platform === "pfs" ? "Paris Fashion Shops" : 
                       platform === "microstore" ? "MicroStore (MC)" :
                       platform.charAt(0).toUpperCase() + platform.slice(1)}
                    </span>
                  </label>
                ))}
              </div>
              {errors.platforms && (
                <p className="mt-1 text-sm text-red-600">{errors.platforms.message}</p>
              )}
            </div>

            {/* Objectifs */}
            <div className="mt-6">
              <label className="block text-sm font-medium text-gray-700">
                Vos objectifs principaux *
              </label>
              <div className="mt-2 space-y-2">
                {[
                  { value: "survente", label: "Éviter la survente" },
                  { value: "centraliser", label: "Centraliser les commandes" },
                  { value: "prix", label: "Prix différenciés par canal" },
                  { value: "prepacks", label: "Gérer les prepacks/MOQ" },
                  { value: "multi-entrepot", label: "Multi-entrepôts" },
                ].map((objective) => (
                  <label key={objective.value} className="flex items-center">
                    <input
                      type="checkbox"
                      value={objective.value}
                      {...register("objectives")}
                      className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="ml-2 text-sm text-gray-700">{objective.label}</span>
                  </label>
                ))}
              </div>
              {errors.objectives && (
                <p className="mt-1 text-sm text-red-600">{errors.objectives.message}</p>
              )}
            </div>

            {/* Catalogue */}
            <div className="mt-6">
              <label htmlFor="catalogSize" className="block text-sm font-medium text-gray-700">
                Taille du catalogue (SKUs) *
              </label>
              <select
                id="catalogSize"
                {...register("catalogSize")}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
              >
                <option value="">Sélectionner...</option>
                <option value="0-100">0-100</option>
                <option value="100-500">100-500</option>
                <option value="500-1000">500-1000</option>
                <option value="1000+">1000-5000</option>
                <option value="5000+">5000+</option>
              </select>
              {errors.catalogSize && (
                <p className="mt-1 text-sm text-red-600">{errors.catalogSize.message}</p>
              )}
            </div>

            {/* Entrepôts */}
            <div className="mt-6">
              <label htmlFor="warehouses" className="block text-sm font-medium text-gray-700">
                Nombre d'entrepôts *
              </label>
              <input
                type="number"
                id="warehouses"
                {...register("warehouses")}
                min="1"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
              />
            </div>

            {/* Volume B2B */}
            <div className="mt-6">
              <label htmlFor="volumeB2B" className="block text-sm font-medium text-gray-700">
                Commandes B2B/mois *
              </label>
              <select
                id="volumeB2B"
                {...register("volumeB2B")}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
              >
                <option value="">Sélectionner...</option>
                <option value="0-10">0-10</option>
                <option value="10-50">10-50</option>
                <option value="50-100">50-100</option>
                <option value="100+">100-500</option>
                <option value="500+">500+</option>
              </select>
              {errors.volumeB2B && (
                <p className="mt-1 text-sm text-red-600">{errors.volumeB2B.message}</p>
              )}
            </div>

            {/* Options */}
            <div className="mt-6 space-y-2">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  {...register("hasERP")}
                  className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <span className="ml-2 text-sm text-gray-700">ERP/WMS existant</span>
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  {...register("hasCSV")}
                  className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <span className="ml-2 text-sm text-gray-700">Import/Export CSV possible</span>
              </label>
            </div>

            {/* Contact */}
            <div className="mt-8 border-t pt-8">
              <h3 className="text-lg font-medium text-gray-900">Vos coordonnées</h3>
              
              <div className="mt-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email professionnel *
                </label>
                <input
                  type="email"
                  id="email"
                  {...register("email")}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  placeholder="contact@votreentreprise.com"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                )}
              </div>

              <div className="mt-4">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  Téléphone
                </label>
                <input
                  type="tel"
                  id="phone"
                  {...register("phone")}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  placeholder="+33 6 12 34 56 78"
                />
              </div>

              <div className="mt-4">
                <label htmlFor="company" className="block text-sm font-medium text-gray-700">
                  Entreprise
                </label>
                <input
                  type="text"
                  id="company"
                  {...register("company")}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                />
              </div>
            </div>

            {/* RGPD */}
            <div className="mt-6">
              <label className="flex items-start">
                <input
                  type="checkbox"
                  {...register("consent")}
                  className="mt-1 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <span className="ml-2 text-sm text-gray-600">
                  J'accepte que mes données soient utilisées pour me recontacter concernant ma demande.
                  Conformément au RGPD, vous pouvez exercer vos droits à tout moment.
                </span>
              </label>
              {errors.consent && (
                <p className="mt-1 text-sm text-red-600">{errors.consent.message}</p>
              )}
            </div>

            {/* Submit */}
            <div className="mt-8">
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex w-full justify-center rounded-md bg-blue-600 px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Traitement en cours...
                  </>
                ) : (
                  "Demander une démonstration"
                )}
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}