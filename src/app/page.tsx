import Hero from "@/components/Hero";
import LineasNegocio from "@/components/LineasNegocio";
import Servicios from "@/components/Servicios";
import SobreNosotros from "@/components/SobreNosotros";
import ContactoSection from "@/components/ContactoSection";

export default function Home() {
  return (
    <>
      <Hero />
      <LineasNegocio />
      <Servicios />
      <SobreNosotros />
      <ContactoSection />
    </>
  );
}
