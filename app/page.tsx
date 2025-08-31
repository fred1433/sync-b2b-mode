import { Hero } from "@/components/Hero";
import { Benefits } from "@/components/Benefits";
import { HowItWorks } from "@/components/HowItWorks";
import { ConnectorTable } from "@/components/ConnectorTable";
import { QualificationForm } from "@/components/QualificationForm";
import { FAQ } from "@/components/FAQ";

export default function Home() {
  return (
    <>
      <Hero />
      <Benefits />
      <HowItWorks />
      <ConnectorTable />
      <QualificationForm />
      <FAQ />
    </>
  );
}