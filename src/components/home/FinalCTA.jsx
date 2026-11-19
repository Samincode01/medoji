
"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  ShieldCheck,
  HeartHandshake,
  CheckCircle2,
  Plus,
} from "lucide-react";

const trustPoints = [
  {
    icon: CheckCircle2,
    title: "Verified professionals",
    description: "Credential-focused discovery",
  },
  {
    icon: ShieldCheck,
    title: "Privacy-conscious care",
    description: "Your information matters",
  },
  {
    icon: HeartHandshake,
    title: "Care in two languages",
    description: "Bangla and English",
  },
];

export default function FinalCTA() {
  const reduceMotion = useReducedMotion();

  const transition = reduceMotion
    ? { duration: 0 }
    : { duration: 0.65, ease: [0.22, 1, 0.36, 1] };

  const reveal = {
    hidden: reduceMotion
      ? { opacity: 0 }
      : { opacity: 0, y: 18 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8">

        {/* MAIN CTA */}
        <div className="relative isolate overflow-hidden rounded-[24px] bg-[#17352A] shadow-[0_24px_70px_rgba(23,53,42,0.13)] sm:rounded-[30px]">

          {/* BACKGROUND DECORATION */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[inherit]">
            <div className="absolute -right-32 -top-40 h-[440px] w-[440px] rounded-full border border-white/[0.07]" />

            <div className="absolute -right-12 -top-20 h-[310px] w-[310px] rounded-full border border-white/[0.07]" />

            <div className="absolute right-12 top-10 h-[170px] w-[170px] rounded-full border border-white/[0.05]" />

            <div className="absolute -bottom-32 left-[25%] h-[280px] w-[280px] rounded-full bg-[#19A069]/10 blur-[90px]" />

            <div className="absolute -right-20 bottom-0 h-[250px] w-[250px] rounded-full bg-[#19A069]/10 blur-[90px]" />

            <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-[#19A069]/50 to-transparent" />
          </div>

          <div className="relative z-10 grid lg:grid-cols-[1.15fr_0.85fr]">

            {/* LEFT CONTENT */}
            <div className="px-6 py-12 sm:px-10 sm:py-16 lg:px-14 lg:py-[76px]">

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
                variants={reveal}
                transition={transition}
              >
                {/* EYEBROW */}
                <div className="inline-flex items-center gap-2 rounded-full border border-[#6CA58A]/35 bg-[#204536] px-4 py-2">
                  <Sparkles size={13} className="text-[#9BC9AA]" />

                  <span className="text-[9px] font-bold tracking-[0.17em] text-[#D4E8D9]">
                    YOUR NEXT STEP TOWARDS BETTER CARE
                  </span>
                </div>

                {/* HEADLINE */}
                <h2 className="mt-7 max-w-[650px] text-[36px] leading-[1.12] font-semibold tracking-[-0.045em] text-white sm:text-[46px] lg:text-[54px]">
                  Healthcare should feel
                  <span className="block font-serif font-normal italic text-[#9BC9AA]">
                    closer to you.
                  </span>
                </h2>

                {/* DESCRIPTION */}
                <p className="mt-5 max-w-[510px] text-[13px] leading-[1.9] text-[#C0D3C7] sm:text-[14px]">
                  Find a doctor or counsellor, explore digital healthcare
                  tools and take a more connected approach to your care.
                  Start with the professional you need.
                </p>

                {/* BANGLA */}
                <p className="mt-4 font-bengali text-[15px] leading-[1.8] text-[#D9E9DD] sm:text-[17px]">
                  বিশ্বস্ত চিকিৎসা সেবার পথে আপনার পরবর্তী পদক্ষেপ নিন।
                </p>

                {/* BUTTONS */}
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">

                  <Link
                    href="/doctors"
                    className="group inline-flex h-[52px] items-center justify-center gap-4 rounded-xl bg-white px-6 text-[12px] font-bold text-[#17352A] shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#E1F0E6] hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#17352A]"
                  >
                    Find a professional

                    <ArrowRight
                      size={16}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </Link>

                  <Link
                    href="/#ai-tools"
                    className="group inline-flex h-[52px] items-center justify-center gap-3 rounded-xl border border-[#668575]/50 bg-white/[0.04] px-6 text-[12px] font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-[#9BC9AA] hover:bg-white/[0.09] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9BC9AA]"
                  >
                    <Sparkles size={15} className="text-[#9BC9AA]" />

                    Explore Medoji AI

                    <ArrowUpRight
                      size={14}
                      className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </Link>

                </div>
              </motion.div>
            </div>

            {/* RIGHT VISUAL */}
            <div className="relative flex min-h-[390px] flex-col justify-between overflow-hidden border-t border-white/10 px-7 py-9 sm:px-10 lg:min-h-full lg:border-l lg:border-t-0 lg:px-10 lg:py-12">

              {/* INTRO */}
              <motion.div
                initial={reduceMotion ? { opacity: 0 } : { opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ ...transition, delay: 0.15 }}
              >
                <span className="text-[9px] font-bold tracking-[0.18em] text-[#9BC9AA]">
                  THE MEDOJI APPROACH
                </span>

                <p className="mt-4 max-w-[270px] text-[21px] leading-[1.4] font-medium tracking-[-0.025em] text-white sm:text-[24px]">
                  Care that connects people, not just appointments.
                </p>
              </motion.div>

              {/* ORGANIC CONNECTION VISUAL */}
              <div className="relative my-10 flex h-[155px] items-center justify-center lg:my-5">

                {/* CONNECTION LINES */}
                <svg
                  viewBox="0 0 360 150"
                  className="absolute inset-0 h-full w-full"
                  fill="none"
                  aria-hidden="true"
                >
                  {[
                    "M180 75 L55 25",
                    "M180 75 L305 25",
                    "M180 75 L55 125",
                    "M180 75 L305 125",
                  ].map((path, index) => (
                    <motion.path
                      key={index}
                      d={path}
                      stroke="#79B38D"
                      strokeWidth="1.2"
                      strokeDasharray="4 5"
                      initial={{ pathLength: 0, opacity: 0 }}
                      whileInView={{ pathLength: 1, opacity: 0.8 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: reduceMotion ? 0 : 0.8,
                        delay: reduceMotion ? 0 : 0.2 + index * 0.1,
                      }}
                    />
                  ))}
                </svg>

                {/* CENTRAL MEDOJI SYMBOL */}
                <motion.div
                  initial={{ scale: 0.75, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={transition}
                  className="relative z-10 flex h-[78px] w-[78px] items-center justify-center rounded-full border border-[#83B497]/50 bg-[#214C39] text-[#C7E4D0] shadow-[0_10px_35px_rgba(0,0,0,0.16)]"
                >
                  <Plus size={32} strokeWidth={1.4} />

                  <span className="absolute -bottom-7 text-[8px] font-bold tracking-[0.18em] text-[#A9CDB5]">
                    MEDOJI
                  </span>
                </motion.div>

                {/* CONNECTED NODES */}
                {[
                  { left: "8%", top: "5%" },
                  { right: "8%", top: "5%" },
                  { left: "8%", bottom: "5%" },
                  { right: "8%", bottom: "5%" },
                ].map((position, index) => (
                  <motion.span
                    key={index}
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: reduceMotion ? 0 : 0.4,
                      delay: reduceMotion ? 0 : 0.35 + index * 0.1,
                    }}
                    style={position}
                    className="absolute flex h-10 w-10 items-center justify-center rounded-full border border-[#6D9E7E]/50 bg-[#214735] shadow-md"
                  >
                    <span className="h-2 w-2 rounded-full bg-[#9BC9AA]" />
                  </motion.span>
                ))}

              </div>

              {/* TRUST POINTS */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={{
                  hidden: {},
                  visible: {
                    transition: {
                      staggerChildren: reduceMotion ? 0 : 0.12,
                    },
                  },
                }}
                className="space-y-4 border-t border-white/10 pt-6"
              >
                {trustPoints.map((point) => {
                  const Icon = point.icon;

                  return (
                    <motion.div
                      key={point.title}
                      variants={reveal}
                      transition={transition}
                      className="group flex items-center gap-3"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#719A7E]/35 bg-[#204536] text-[#A8CEB3] transition-colors duration-300 group-hover:bg-[#2B6047]">
                        <Icon size={17} strokeWidth={1.6} />
                      </div>

                      <div>
                        <p className="text-[11px] font-semibold text-[#E7F0E9]">
                          {point.title}
                        </p>

                        <p className="mt-0.5 text-[9px] text-[#A7C0AF]">
                          {point.description}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>

            </div>
          </div>

          {/* BOTTOM BRAND STRIP */}
          <div className="relative z-10 flex flex-col gap-2 border-t border-white/10 px-6 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-10 lg:px-14">
            <span className="text-[9px] font-bold tracking-[0.18em] text-[#9BC9AA]">
              MEDOJI AI
            </span>

            <span className="text-[9px] tracking-wide text-[#A7C0AF]">
              A more connected healthcare experience for Bangladesh.
            </span>
          </div>

        </div>
      </div>
    </section>
  );
}
