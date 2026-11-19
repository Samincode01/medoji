"use client";

import Image from "next/image";
import pharmacyPrescriptionImg from "@/images/pharmacy-prescription.png";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  FileCheck2,
  ShieldCheck,
  ClipboardCheck,
  Pill,
} from "lucide-react";
import { useLanguage } from "@/i18n/useLanguage";

export default function PharmacySection() {
  const reduceMotion = useReducedMotion();
  const { t, isBangla, formatNumber } = useLanguage();

  const stepIcons = [FileCheck2, ClipboardCheck, ShieldCheck];

  // Retrieve localized steps array
  const localizedSteps = t("pharmacy.steps");
  const stepsList = Array.isArray(localizedSteps)
    ? localizedSteps
    : [
        {
          number: "01",
          title: "Share your prescription",
          description:
            "Capture or upload a clear image of your doctor's prescription.",
        },
        {
          number: "02",
          title: "Pharmacist review",
          description:
            "A pharmacist reviews the prescription and checks the requested items.",
        },
        {
          number: "03",
          title: "Continue with confidence",
          description:
            "Receive guidance on the next steps after the review process.",
        },
      ];

  const reveal = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.65, ease: "easeOut" },
    },
  };

  return (
    <section
      id="pharmacy"
      className="overflow-hidden border-b border-[#DCE7DF] bg-[#F0F5EF] py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8">

        {/* SECTION INTRO */}
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mb-12 flex flex-col justify-between gap-6 lg:mb-16 lg:flex-row lg:items-end"
        >
          <div className="max-w-[690px]">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-[2px] w-8 bg-[#19A069]" />
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#174433]">
                {t("pharmacy.eyebrow")}
              </span>
            </div>

            <h2 className="text-[34px] leading-[1.15] font-semibold tracking-[-0.045em] text-[#132F25] sm:text-[44px] lg:text-[52px]">
              {t("pharmacy.headingLine1")}
              <span className="block font-editorial-serif font-normal italic text-[#26704F]">
                {t("pharmacy.headingLine2")}
              </span>
            </h2>
          </div>

          <p className="max-w-[390px] text-[15px] leading-[1.9] text-[#52665A]">
            {t("pharmacy.description")}
          </p>
        </motion.div>

        {/* FEATURE COMPOSITION */}
        <div className="grid items-stretch gap-5 lg:grid-cols-[1.08fr_0.92fr] lg:gap-7">

          {/* IMAGE */}
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="group relative min-h-[380px] overflow-hidden bg-[#E1F0E6] sm:min-h-[480px] lg:min-h-[560px]"
          >
            <Image
              src={pharmacyPrescriptionImg}
              alt={isBangla ? "স্মার্টফোনে প্রেসক্রিপশনের ছবি তোলার দৃশ্য" : "A person photographing a prescription with a smartphone"}
              fill
              sizes="(max-width: 1024px) 100vw, 55vw"
              className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.025]"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#132F25]/65 via-transparent to-transparent" />

            <div className="absolute left-5 top-5 sm:left-7 sm:top-7">
              <span className="inline-flex items-center gap-2 border border-white/40 bg-white/90 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.15em] text-[#174433] backdrop-blur-sm">
                <Pill size={13} />
                {t("pharmacy.badge")}
              </span>
            </div>

            <div className="absolute bottom-6 left-6 right-6 sm:bottom-9 sm:left-9 sm:right-9">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#E1F0E6]">
                {t("pharmacy.imageTag")}
              </p>
              <h3 className="mt-3 max-w-[420px] text-[27px] leading-[1.2] font-semibold tracking-[-0.035em] text-white sm:text-[36px]">
                {t("pharmacy.imageHeading1")}
                <br />
                {t("pharmacy.imageHeading2")}
              </h3>
            </div>
          </motion.div>

          {/* DARK INFORMATION PANEL */}
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col justify-between bg-[#17352A] p-7 text-white sm:p-10 lg:p-11"
          >
            <div>
              <div className="flex items-center justify-between border-b border-white/15 pb-6">
                <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#B9D5C5]">
                  {t("pharmacy.panelTag")}
                </span>
                <FileCheck2 size={21} className="text-[#8CC9A7]" />
              </div>

              <h3 className="mt-8 max-w-[400px] text-[29px] leading-[1.2] font-semibold tracking-[-0.035em] sm:text-[36px]">
                {t("pharmacy.panelHeading")}
              </h3>

              <p className="mt-4 max-w-[390px] text-[14px] leading-[1.9] text-[#D3E2D9]">
                {t("pharmacy.panelDesc")}
              </p>

              <div className="mt-9 space-y-7">
                {stepsList.map((step, index) => {
                  const Icon = stepIcons[index] || ShieldCheck;
                  const stepNum = isBangla
                    ? (index === 0 ? "০১" : index === 1 ? "০২" : "০৩")
                    : step.number || `0${index + 1}`;

                  return (
                    <motion.div
                      key={index}
                      initial={{
                        opacity: 0,
                        x: reduceMotion ? 0 : 14,
                      }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.45,
                        delay: reduceMotion ? 0 : index * 0.12,
                      }}
                      className="flex gap-4"
                    >
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-[#8CC9A7]/30 bg-[#E1F0E6]/10 text-[#A8D9BC]">
                        <Icon size={19} strokeWidth={1.7} />
                      </div>

                      <div className="min-w-0">
                        <div className="flex items-center gap-3">
                          <span className="text-[10px] font-semibold tracking-[0.12em] text-[#8CC9A7]">
                            {stepNum}
                          </span>
                          <h4 className="text-[15px] font-semibold text-white">
                            {step.title}
                          </h4>
                        </div>

                        <p className="mt-1.5 max-w-[330px] text-[13px] leading-[1.8] text-[#C2D6CA]">
                          {step.description}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            <div className="mt-10 border-t border-white/15 pt-6">
              <a
                href="#pharmacy-process"
                className="group inline-flex items-center gap-3 text-[13px] font-semibold text-white transition-colors hover:text-[#A8D9BC]"
              >
                {isBangla ? "প্রক্রিয়াটি বিস্তারিত দেখুন" : "Explore the process"}
                <ArrowUpRight
                  size={17}
                  className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </a>

              <p className="mt-4 text-[11px] leading-5 text-[#A9C3B3]">
                {t("pharmacy.panelNotice")}
              </p>
            </div>
          </motion.div>
        </div>

        {/* PROCESS FOOTER */}
        <motion.div
          id="pharmacy-process"
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mt-8 flex flex-col justify-between gap-5 border-t border-[#DCE7DF] pt-6 sm:flex-row sm:items-center"
        >
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#E1F0E6] text-[#174433]">
              <ShieldCheck size={17} />
            </span>
            <p className="max-w-[430px] text-[12px] leading-5 text-[#52665A]">
              {t("pharmacy.panelNotice")}
            </p>
          </div>

          <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#174433]">
            {isBangla ? "মেডোজি এআই · ফার্মেসি" : "MEDOJI AI · PHARMACY"}
          </span>
        </motion.div>
      </div>
    </section>
  );
}
