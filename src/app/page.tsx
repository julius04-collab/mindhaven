import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import Breathe from "@/components/Breathe";
import Nav from "@/components/Nav";
import Therapists from "@/components/Therapists";
import { FinalCta, Hero, HowItWorks, Pricing, Services, Testimonials, Why } from "@/components/sections";

export default function Home() {
  return (
    <>
      <Nav transparent />
      <main id="main">
        <Hero />
        <HowItWorks />
        <Services />
        <Breathe />
        <Why />
        <Therapists />
        <Testimonials />
        <Pricing />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
