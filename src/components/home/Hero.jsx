"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Sparkles,
  ShieldCheck,
  HeartHandshake,
  Pill,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import heroCareImg from "@/images/hero-care.png";
import { useLanguage } from "@/i18n/useLanguage";

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const { t, isBangla } = useLanguage();

  const fadeUp = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 22,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  const transition = {
    duration: shouldReduceMotion ? 0 : 0.7,
    ease: [0.22, 1, 0.36, 1],
  };

  return (
    <section className="relative w-full overflow-hidden bg-[#FDFDFD] border-b border-[#DCE7DF]/60">
      {/* Background Panoramic Healthcare Photograph */}
      <div className="absolute inset-0 z-0">
        <Image
          src={heroCareImg}
          alt={isBangla ? "চিকিৎসক ও রোগীর পরামর্শ পর্ব" : "Healthcare doctor and patient in consultation"}
          fill
          priority
          sizes="100vw"
          className="object-cover object-[75%_center] md:object-right"
        />

        {/* Soft Mobile Readability Overlay (Desktop uses the crisp card surface) */}
        <div className="absolute inset-0 bg-[#FDFDFD]/75 md:bg-transparent" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <div className="flex min-h-[540px] sm:min-h-[580px] lg:min-h-[610px] items-center py-8 sm:py-10 lg:py-12">
          <div className="w-full max-w-[595px] rounded-[24px] border border-[#DCE7DF] bg-[#FAF9F4]/96 p-6 sm:p-8 lg:px-9 lg:py-8 shadow-[0_14px_40px_rgba(19,47,37,0.08)] backdrop-blur-xs">

            {/* Eyebrow */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{
                ...transition,
                delay: shouldReduceMotion ? 0 : 0.1,
              }}
              className="inline-flex items-center gap-2 rounded-full border border-[#DCE7DF] bg-[#FFFFFF] px-3.5 py-1.5 shadow-2xs"
            >
              <span className="h-2 w-2 rounded-full bg-[#19A069]" />
              <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#174433]">
                {t("hero.eyebrow")}
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{
                ...transition,
                delay: shouldReduceMotion ? 0 : 0.2,
              }}
              className="mt-5 text-[36px] sm:text-[46px] lg:text-[46px] font-bold tracking-tight text-[#132F25] leading-[1.08]"
            >
              {t("hero.titleLine1")}
              <br />
              <span className="mt-1 inline-block font-lora italic font-medium text-[1.05em] leading-[1.08] text-[#174433]">
                {t("hero.titleLine2")}
              </span>
            </motion.h1>

            {/* Sub-headline / Tagline */}
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{
                ...transition,
                delay: shouldReduceMotion ? 0 : 0.3,
              }}
              className={`mt-3.5 text-[16px] sm:text-[18px] font-semibold text-[#132F25] leading-[1.5] ${
                isBangla ? "font-bengali" : ""
              }`}
            >
              {t("hero.banglaTagline")}
            </motion.p>

            {/* Description */}
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{
                ...transition,
                delay: shouldReduceMotion ? 0 : 0.4,
              }}
              className="mt-2.5 text-[14px] sm:text-[15px] text-[#42534A] leading-[1.55] max-w-[460px]"
            >
              {t("hero.description")}
            </motion.p>

            {/* Actions: Primary and Secondary Buttons */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{
                ...transition,
                delay: shouldReduceMotion ? 0 : 0.5,
              }}
              className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-3"
            >
              <Link
                href="/specialist"
                className="group inline-flex h-[46px] items-center justify-center gap-2 rounded-xl bg-[#174433] px-5 text-[14px] font-semibold text-[#FFFFFF] shadow-sm transition-all duration-200 hover:bg-[#103629] active:bg-[#0A281D] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#087A52] focus-visible:ring-offset-2"
              >
                <span>{t("hero.primaryCta")}</span>
                <ArrowRight
                  size={16}
                  className="transition-transform duration-200 group-hover:translate-x-0.5"
                />
              </Link>

              <Link
                href="/#ai-tools"
                className="inline-flex h-[46px] items-center justify-center gap-2 rounded-xl border border-[#DCE7DF] bg-[#FFFFFF] px-5 text-[14px] font-semibold text-[#174433] shadow-2xs transition-all duration-200 hover:bg-[#F0F5EF] hover:border-[#174433] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#087A52] focus-visible:ring-offset-2"
              >
                <Sparkles size={15} className="text-[#19A069]" />
                <span>{t("hero.secondaryCta")}</span>
              </Link>
            </motion.div>

            {/* Three Value Proofs */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{
                ...transition,
                delay: shouldReduceMotion ? 0 : 0.65,
              }}
              className="mt-7 pt-5 border-t border-[#DCE7DF] flex flex-wrap sm:flex-nowrap items-center gap-y-2.5 gap-x-3 text-[11.5px] sm:text-[12px] text-[#52665A]"
            >
              <div className="flex items-center gap-1.5 font-medium whitespace-nowrap">
                <HeartHandshake size={14} className="text-[#19A069] shrink-0" />
                <span>{t("hero.proofVisits")}</span>
              </div>

              <span className="h-3.5 w-px bg-[#DCE7DF] hidden sm:inline-block shrink-0" aria-hidden="true" />

              <div className="flex items-center gap-1.5 font-medium whitespace-nowrap">
                <Pill size={14} className="text-[#19A069] shrink-0" />
                <span>{t("hero.proofPharmacy")}</span>
              </div>

              <span className="h-3.5 w-px bg-[#DCE7DF] hidden sm:inline-block shrink-0" aria-hidden="true" />

              <div className="flex items-center gap-1.5 font-medium whitespace-nowrap">
                <ShieldCheck size={14} className="text-[#19A069] shrink-0" />
                <span>{t("hero.proofPrivacy")}</span>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
