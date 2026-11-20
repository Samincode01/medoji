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
          className="object-cover object-right md:object-[90%_center] lg:object-[96%_center]"
        />

        {/* Soft Left-to-Right Panoramic Blend Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#FDFDFD]/95 via-[#FDFDFD]/85 to-[#FDFDFD]/90 md:hidden" />
        <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-[#FDFDFD] via-[#FDFDFD]/90 via-30% to-transparent to-50%" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="flex min-h-[620px] sm:min-h-[660px] lg:min-h-[720px] items-center py-12 sm:py-16 lg:py-20">
          <div className="max-w-[620px] lg:max-w-[560px] lg:-translate-x-[45px]">

            {/* Eyebrow */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{
                ...transition,
                delay: shouldReduceMotion ? 0 : 0.1,
              }}
              className="inline-flex items-center gap-2 rounded-full border border-[#DCE7DF] bg-[#FFFFFF]/90 px-3.5 py-1.5 backdrop-blur-xs shadow-2xs"
            >
              <span className="h-2 w-2 rounded-full bg-[#19A069] animate-pulse" />
              <span className="text-[11px] sm:text-[12px] font-bold uppercase tracking-[0.16em] text-[#174433]">
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
              className="mt-5 text-[40px] sm:text-[48px] lg:text-[70px] font-bold tracking-tight text-[#132F25] leading-[1.08]"
            >
              {t("hero.titleLine1")}
              <br />
              <span className="font-editorial-serif italic font-normal text-[#174433]">
                {t("hero.titleLine2")}
              </span>
            </motion.h1>

            {/* Bangla Tagline */}
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{
                ...transition,
                delay: shouldReduceMotion ? 0 : 0.3,
              }}
              className="mt-4 font-bengali text-[17px] sm:text-[19px] font-medium text-[#174433] leading-[1.6]"
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
              className="mt-3 text-[16px] sm:text-[18px] text-[#42534A] leading-[1.55] max-w-[520px]"
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
              className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5"
            >
              <Link
                href="/specialist"
                className="group inline-flex h-[50px] items-center justify-center gap-2 rounded-xl bg-[#174433] px-6 text-[15px] font-semibold text-[#FFFFFF] shadow-sm transition-all duration-200 hover:bg-[#103629] active:bg-[#0A281D] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#087A52] focus-visible:ring-offset-2"
              >
                <span>{t("hero.primaryCta")}</span>
                <ArrowRight
                  size={17}
                  className="transition-transform duration-200 group-hover:translate-x-0.5"
                />
              </Link>

              <Link
                href="/#ai-tools"
                className="inline-flex h-[50px] items-center justify-center gap-2 rounded-xl border border-[#7A9182]/50 bg-[#FFFFFF] px-6 text-[15px] font-semibold text-[#174433] shadow-2xs transition-all duration-200 hover:bg-[#F0F5EF] hover:border-[#174433] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#087A52] focus-visible:ring-offset-2"
              >
                <Sparkles size={16} className="text-[#19A069]" />
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
              className="mt-10 pt-6 border-t border-[#DCE7DF]/80 flex flex-wrap items-center gap-y-2 gap-x-6 text-[13px] text-[#52665A]"
            >
              <div className="flex items-center gap-1.5 font-medium">
                <HeartHandshake size={15} className="text-[#19A069]" />
                <span>{t("hero.proofVisits")}</span>
              </div>

              <span className="text-[#DCE7DF] hidden sm:inline">•</span>

              <div className="flex items-center gap-1.5 font-medium">
                <Pill size={15} className="text-[#19A069]" />
                <span>{t("hero.proofPharmacy")}</span>
              </div>

              <span className="text-[#DCE7DF] hidden sm:inline">•</span>

              <div className="flex items-center gap-1.5 font-medium">
                <ShieldCheck size={15} className="text-[#19A069]" />
                <span>{t("hero.proofPrivacy")}</span>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
