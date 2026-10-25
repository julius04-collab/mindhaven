import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import Therapists from "@/components/Therapists";
import { FinalCta, Hero, HowItWorks, Pricing, Services, Testimonials, Trust, Why } from "@/components/sections";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="main">
        <Hero />
        <Trust />
        <HowItWorks />
        <Services />
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
