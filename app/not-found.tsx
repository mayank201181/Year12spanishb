import Link from "next/link";
import { SUBJECT } from "@/lib/subject";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-md py-16 text-center">
      <div className="text-5xl" aria-hidden>
        {SUBJECT.icon}
      </div>
      <h1 className="mt-2 text-2xl font-extrabold">404 — Page not found</h1>
      <p className="mt-2 text-ink-2">That address wasn&apos;t found in the {SUBJECT.fullName} hub.</p>
      <Link href="/" className="btn btn-primary mt-6">
        Back to {SUBJECT.shortName} Home
      </Link>
    </div>
  );
}
