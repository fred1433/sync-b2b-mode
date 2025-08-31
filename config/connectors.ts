export type ConnectorStatus = "stable" | "beta" | "roadmap";

export interface Connector {
  id: string;
  name: string;
  status: ConnectorStatus;
  features: {
    products: ConnectorStatus;
    inventory: ConnectorStatus;
    orders: ConnectorStatus;
    pricing: ConnectorStatus;
  };
}

export const connectors: Connector[] = [
  {
    id: "shopify",
    name: "Shopify",
    status: "stable",
    features: {
      products: "stable",
      inventory: "stable",
      orders: "stable",
      pricing: "stable",
    },
  },
  {
    id: "faire",
    name: "Faire",
    status: "stable",
    features: {
      products: "stable",
      inventory: "stable",
      orders: "stable",
      pricing: "stable",
    },
  },
  {
    id: "ankorstore",
    name: "Ankorstore",
    status: "stable",
    features: {
      products: "stable",
      inventory: "stable",
      orders: "stable",
      pricing: "stable",
    },
  },
  {
    id: "pfs",
    name: "Paris Fashion Shops",
    status: "beta",
    features: {
      products: "beta",
      inventory: "beta",
      orders: "beta",
      pricing: "beta",
    },
  },
  {
    id: "microstore",
    name: "MicroStore (MC)",
    status: "beta",
    features: {
      products: "beta",
      inventory: "beta",
      orders: "beta",
      pricing: "beta",
    },
  },
];

export const integrationPairs = [
  { from: "shopify", to: "faire", priority: 1 },
  { from: "shopify", to: "ankorstore", priority: 1 },
  { from: "shopify", to: "pfs", priority: 2 },
  { from: "shopify", to: "microstore", priority: 2 },
  { from: "pfs", to: "microstore", priority: 3 },
  { from: "pfs", to: "faire", priority: 3 },
  { from: "microstore", to: "faire", priority: 3 },
];