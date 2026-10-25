import type { Metadata } from "next";
import Link from "next/link";
import { Logo } from "@/components/icons";

export const metadata: Metadata = { title: "Log In — MindHaven" };

export default function LoginPage() {
  return (
    <main id="main" className="grid flex-1 place-items-center px-5 py-16">
      <div className="w-full max-w-sm">
        <Link href="/" className="text-forest-deep" aria-label="MindHaven home">
          <Logo />
        </Link>
        <h1 className="mt-10 font-serif text-4xl tracking-tight text-forest-deep">Welcome back</h1>
        <p className="mt-2 text-muted">Log in to manage your sessions and messages.</p>
        <form className="mt-8 space-y-4" action="/">
          <label className="block">
            <span className="text-sm font-semibold text-forest-deep">Email</span>
            <input type="email" autoComplete="email" className="mt-2 w-full rounded-xl border border-line bg-white px-4 py-3 outline-none focus:border-forest focus:ring-2 focus:ring-forest/20" />
          </label>
          <label className="block">
            <span className="text-sm font-semibold text-forest-deep">Password</span>
            <input type="password" autoComplete="current-password" className="mt-2 w-full rounded-xl border border-line bg-white px-4 py-3 outline-none focus:border-forest focus:ring-2 focus:ring-forest/20" />
          </label>
          <button type="submit" className="btn-primary w-full !py-3.5">Log In</button>
        </form>
        <p className="mt-4 rounded-xl bg-sand/70 p-3 text-center text-sm text-muted">Demo only. Accounts aren&apos;t live in this concept.</p>
        <p className="mt-8 text-center text-sm text-muted">
          New to MindHaven?{" "}
          <Link href="/find" className="font-semibold text-forest underline underline-offset-4">Find your therapist</Link>
        </p>
      </div>
    </main>
  );
}
