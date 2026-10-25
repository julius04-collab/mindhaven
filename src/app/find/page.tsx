import type { Metadata } from "next";
import { Suspense } from "react";
import Nav from "@/components/Nav";
import FindFlow from "./FindFlow";

export const metadata: Metadata = {
  title: "Find Your Therapist — MindHaven",
  description: "Answer a few questions and see therapists who fit your needs and schedule.",
};

export default function FindPage() {
  return (
    <>
      <Nav />
      <main id="main" className="flex-1">
        <Suspense fallback={<div className="container-page max-w-3xl py-16 text-muted">Loading…</div>}>
          <FindFlow />
        </Suspense>
      </main>
    </>
  );
}
