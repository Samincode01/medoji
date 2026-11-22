
"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "@/images/logo.png";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/i18n/useLanguage";

export default function ComingSoonPage() {
  const { isBangla } = useLanguage();

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#FDFDFD] px-5 py-12 text-[#17352A]">
      <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-[#F0F5EF] blur-3xl" />
      <div className="absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-[#F0F5EF] blur-3xl" />

      <div className="relative z-10 flex w-full max-w-[620px] flex-col items-center text-center">
        <Link href="/" className="mb-16">
          <Image
            src={logo}
            alt="M​​edoji Healthcare"
            width={820}
            height={360}
            priority
            className="h-auto w-[170px] object-contain sm:w-[190px]"
          />
        </Link>

        <span className="rounded-full border border-[#DCE7DF] px-4 py-2 text-[11px] font-semibold tracking-[0.18em] text-[#19815C]">
          {isBangla ? "শীঘ্রই আসছে" : "COMING SOON"}
        </span>

        <h1 className="mt-7 text-5xl font-semibold tracking-[-0.055em] text-[#17352A] sm:text-7xl">
          {isBangla ? (
            <>নতুন কিছু<br />আসছে।</>
          ) : (
            <>Something<br />better is coming.</>
          )}
        </h1>

        <p className="mt-6 max-w-[430px] text-sm leading-7 text-[#64766C] sm:text-base">
          {isBangla
            ? "আমরা আপনার জন্য আরও সহজ ও সংযুক্ত স্বাস্থ্যসেবা অভিজ্ঞতা তৈরি করছি। আমাদের সঙ্গেই থাকুন।"
            : "We're working on something to make your healthcare experience simpler and more connected. Stay with us."}
        </p>

        <Link
          href="/"
          className="mt-10 inline-flex items-center gap-3 rounded-full bg-[#174B38] px-6 py-3.5 text-sm font-semibold text-white transition duration-300 hover:bg-[#216348]"
        >
          <ArrowLeft size={16} />
          {isBangla ? "হোমে ফিরে যান" : "Back to home"}
        </Link>

        <p className="mt-20 text-[11px] tracking-wide text-[#9AA79F]">
         © Medoji Healthcare
        </p>
      </div>
    </main>
  );
}
