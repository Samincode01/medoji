
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#FDFDFD] px-5 py-16 text-[#17352A]">
      <div className="mx-auto w-full max-w-[680px] text-center">

        {/* BRAND */}
        <Link
          href="/"
          className="inline-block text-lg font-bold tracking-[-0.04em] text-[#015238]"
        >
          Medoji Healthcare
        </Link>

        {/* ERROR NUMBER */}
        <div className="relative mt-16">
          <p className="select-none text-[140px] font-semibold leading-none tracking-[-0.09em] text-[#EAF1EB] sm:text-[190px]">
            404
          </p>

          <div className="absolute inset-0 flex items-center justify-center">
            <span className="rounded-full border border-[#DCE7DF] bg-[#FDFDFD] px-4 py-2 text-[11px] font-semibold tracking-[0.2em] text-[#19815C]">
              PAGE NOT FOUND
            </span>
          </div>
        </div>

        {/* MESSAGE */}
        <h1 className="mt-7 text-3xl font-semibold tracking-[-0.045em] sm:text-4xl">
          Looks like you've taken a wrong turn.
        </h1>

        <p className="mx-auto mt-4 max-w-[440px] text-sm leading-7 text-[#718278] sm:text-base">
          The page you're looking for may have moved, been removed, or
          doesn't exist. Let's get you back on track.
        </p>

        {/* ACTIONS */}
        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-[#174433] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#103629]"
          >
            <ArrowLeft size={16} />
            Back to home
          </Link>

          <Link
            href="/specialist"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-[#DCE7DF] px-6 py-3 text-sm font-semibold text-[#174433] transition hover:bg-[#F0F5EF]"
          >
            Find a specialist
            <ArrowUpRight size={15} />
          </Link>
        </div>

        {/* FOOTER */}
        <p className="mt-20 text-xs text-[#9AA79F]">
          © {new Date().getFullYear()} Medoji Healthcare
        </p>
      </div>
    </main>
  );
}
