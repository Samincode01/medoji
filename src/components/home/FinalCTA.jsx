
"use client";
import medojiCare from "@/images/medojicare.png";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  ShieldCheck,
  HeartHandshake,
} from "lucide-react";
import { useLanguage } from "@/i18n/useLanguage";

export default function FinalCTA() {
  const reduceMotion = useReducedMotion();
  const { t, isBangla } = useLanguage();

  const trustIcons = [
    CheckCircle2,
    ShieldCheck,
    HeartHandshake,
  ];

  const fallbackTrust = [
    {
      title: "Verified professionals",
      description: "Credential-focused discovery",
    },
    {
      title: "Privacy-conscious care",
      description: "Your information matters",
    },
    {
      title: "Care in two languages",
      description: "Bangla and English",
    },
  ];

  const localizedTrust = t("finalCta.trustPoints");

  const trustList = Array.isArray(localizedTrust)
    ? localizedTrust
    : fallbackTrust;

  const ease = [0.22, 1, 0.36, 1];

  const fadeUp = {
    hidden: {
      opacity: 0,
      y: reduceMotion ? 0 : 28,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reduceMotion ? 0 : 0.8,
        ease,
      },
    },
  };

  return (
    <section className="relative overflow-hidden bg-[#F0F5EF]">

      <div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 sm:py-20 lg:px-16 lg:py-28">

        {/* MAIN EDITORIAL LAYOUT */}
        <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">

          {/* LEFT CONTENT */}
          <div className="relative z-10">

            {/* EYEBROW */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={fadeUp}
              className="flex items-center gap-3"
            >
              <span className="h-[2px] w-8 bg-[#19A069]" />

              <span className="text-[10px] font-bold tracking-[0.2em] text-[#52665A]">
                {t("finalCta.eyebrow")}
              </span>
            </motion.div>

            {/* HEADLINE */}
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.35 }}
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: reduceMotion ? 0 : 0.13,
                  },
                },
              }}
              className={`mt-8 max-w-[650px] text-[40px] font-semibold leading-[1.13] tracking-[-0.045em] text-[#132F25] sm:text-[54px] lg:text-[64px] ${
                isBangla ? "font-bengali" : ""
              }`}
            >
              <motion.span
                variants={fadeUp}
                className="block"
              >
                {isBangla
                  ? "স্বাস্থ্যসেবা হোক"
                  : "Healthcare should"}
              </motion.span>

              <motion.span
                variants={fadeUp}
                className="block"
              >
                {isBangla ? "আরও কাছের।" : "feel closer"}
              </motion.span>

              {!isBangla && (
                <motion.span
                  variants={fadeUp}
                  className="block font-editorial-serif font-normal italic text-[#19A069]"
                >
                  to you.
                </motion.span>
              )}
            </motion.h2>

            {/* DESCRIPTION */}
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className={`mt-7 max-w-[510px] text-[14px] leading-[1.95] text-[#42534A] sm:text-[16px] ${
                isBangla ? "font-bengali" : ""
              }`}
            >
              {t("finalCta.description")}
            </motion.p>

            {/* BANGLA TAGLINE */}
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="mt-4 max-w-[510px] font-bengali text-[15px] leading-[1.9] text-[#52665A] sm:text-[17px]"
            >
              {t("finalCta.banglaTagline")}
            </motion.p>

            {/* BUTTONS */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="mt-9 flex flex-col gap-3 sm:flex-row"
            >
              <Link
                href="/specialist"
                className="group inline-flex h-[54px] items-center justify-center gap-5 rounded-xl bg-[#174433] px-7 text-[13px] font-semibold text-white transition-colors duration-300 hover:bg-[#0F3527] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#174433] focus-visible:ring-offset-2"
              >
                {t("finalCta.primaryCta")}

                <ArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="/#ai-tools"
                className="group inline-flex h-[54px] items-center justify-center gap-3 px-5 text-[13px] font-semibold text-[#174433] transition-colors duration-300 hover:text-[#19A069] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#174433]"
              >
                {t("finalCta.secondaryCta")}

                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>
            </motion.div>

            {/* SMALL SUPPORTING LINE */}
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="mt-12 text-[10px] font-semibold tracking-[0.15em] text-[#718276]"
            >
              MEDOJI · BANGLADESH
            </motion.p>
          </div>

          {/* RIGHT PHOTOGRAPH */}
          <motion.div
            initial={{
              opacity: 0,
              clipPath: reduceMotion
                ? "inset(0)"
                : "inset(12% 0 0 12%)",
            }}
            whileInView={{
              opacity: 1,
              clipPath: "inset(0)",
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: reduceMotion ? 0 : 1.1,
              ease,
            }}
            className="relative min-h-[360px] overflow-hidden rounded-tl-[110px] rounded-br-[110px] sm:min-h-[480px] lg:min-h-[570px]"
          >
            <img
               src={medojiCare.src}
              alt={
                isBangla
                  ? "চিকিৎসক ও রোগীর আন্তরিক পরামর্শ"
                  : "A doctor providing personal care to a patient"
              }
              className="absolute inset-0 h-full w-full object-cover object-center"
            />

            {/* Subtle photographic treatment */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#102B20]/35 via-transparent to-transparent" />
          </motion.div>
        </div>

        {/* TRUST POINTS */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: reduceMotion ? 0 : 0.15,
              },
            },
          }}
          className="mt-16 grid gap-8 border-t border-[#DCE7DF] pt-9 sm:grid-cols-3 lg:mt-20 lg:pt-10"
        >
          {trustList.map((point, index) => {
            const Icon = trustIcons[index] || ShieldCheck;

            return (
              <motion.div
                key={index}
                variants={fadeUp}
                className="flex items-start gap-4"
              >
                <Icon
                  size={20}
                  strokeWidth={1.6}
                  className="mt-0.5 shrink-0 text-[#19A069]"
                />

                <div>
                  <h3 className="text-[13px] font-semibold text-[#17352A]">
                    {point.title}
                  </h3>

                  <p className="mt-1 text-[12px] leading-relaxed text-[#52665A]">
                    {point.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
