import { Check, Clock, Map } from "lucide-react";
import { connectors } from "@/config/connectors";

const StatusIcon = ({ status }: { status: string }) => {
  switch (status) {
    case "stable":
      return <Check className="h-5 w-5 text-green-600" />;
    case "beta":
      return <Clock className="h-5 w-5 text-yellow-600" />;
    case "roadmap":
      return <Map className="h-5 w-5 text-gray-400" />;
    default:
      return null;
  }
};

const StatusBadge = ({ status }: { status: string }) => {
  const styles = {
    stable: "bg-green-100 text-green-800",
    beta: "bg-yellow-100 text-yellow-800",
    roadmap: "bg-gray-100 text-gray-600",
  };

  const labels = {
    stable: "✅ Stable",
    beta: "🅱️ Beta",
    roadmap: "🗺️ Roadmap",
  };

  return (
    <span className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ${styles[status as keyof typeof styles]}`}>
      {labels[status as keyof typeof labels]}
    </span>
  );
};

export function ConnectorTable() {
  return (
    <section className="py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Connecteurs disponibles
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            État actuel de nos intégrations
          </p>
        </div>

        <div className="mt-16 overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
          <table className="min-w-full divide-y divide-gray-300">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500">
                  Plateforme
                </th>
                <th scope="col" className="px-6 py-3 text-center text-xs font-medium uppercase tracking-wide text-gray-500">
                  Statut
                </th>
                <th scope="col" className="px-6 py-3 text-center text-xs font-medium uppercase tracking-wide text-gray-500">
                  Produits
                </th>
                <th scope="col" className="px-6 py-3 text-center text-xs font-medium uppercase tracking-wide text-gray-500">
                  Stock
                </th>
                <th scope="col" className="px-6 py-3 text-center text-xs font-medium uppercase tracking-wide text-gray-500">
                  Commandes
                </th>
                <th scope="col" className="px-6 py-3 text-center text-xs font-medium uppercase tracking-wide text-gray-500">
                  Prix B2B
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {connectors.map((connector) => (
                <tr key={connector.id}>
                  <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">
                    {connector.name}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-center text-sm text-gray-500">
                    <StatusBadge status={connector.status} />
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-center text-sm text-gray-500">
                    <StatusIcon status={connector.features.products} />
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-center text-sm text-gray-500">
                    <StatusIcon status={connector.features.inventory} />
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-center text-sm text-gray-500">
                    <StatusIcon status={connector.features.orders} />
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-center text-sm text-gray-500">
                    <StatusIcon status={connector.features.pricing} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            ✅ Stable : Disponible maintenant · 🅱️ Beta : Disponible selon compte · 🗺️ Roadmap : En développement
          </p>
        </div>
      </div>
    </section>
  );
}