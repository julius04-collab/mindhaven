import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";

export const metadata: Metadata = { title: "Privacy & Terms — MindHaven" };

export default function LegalPage() {
  return (
    <>
      <Nav />
      <main id="main" className="container-page max-w-3xl flex-1 py-16">
        <p className="sample-tag">Placeholder for design concept</p>
        <section id="privacy" className="mt-8">
          <h1 className="h-section">Privacy Policy</h1>
          <p className="mt-4 leading-relaxed text-muted">
            MindHaven is a design concept. In a live product, this page would explain what personal and health
            information is collected, how it is stored and protected, who can access it, and how you can request
            access to or deletion of your data. This demo does not collect, send or store any information you enter.
          </p>
        </section>
        <section id="terms" className="mt-14">
          <h2 className="h-section">Terms of Service</h2>
          <p className="mt-4 leading-relaxed text-muted">
            In a live product, this page would set out how sessions are booked, rescheduled and cancelled, payment
            terms, therapist responsibilities, and the limits of the service, including that MindHaven is not an
            emergency service.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
