
"use client";

import Image from "next/image";
import pharmacyPrescriptionImg from "@/images/pharmacy-prescription.png";
import { useState } from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";
import { useLanguage } from "@/i18n/useLanguage";

const fallbackSteps = [
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

const ease = [0.22, 1, 0.36, 1];

export default function PharmacySection() {
  const [activeStep, setActiveStep] = useState(0);
  const reduceMotion = useReducedMotion();
  const { t, isBangla } = useLanguage();

  const translatedSteps = t("pharmacy.steps");
  const steps = Array.isArray(translatedSteps)
    ? translatedSteps
    : fallbackSteps;

  const active = steps[activeStep] || steps[0];

  const transition = reduceMotion
    ? { duration: 0 }
    : { duration: 0.65, ease };

  const reveal = {
    hidden: {
      opacity: 0,
      y: reduceMotion ? 0 : 22,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.75, ease },
    },
  };

  return (
    <section
      id="pharmacy"
      className="overflow-hidden bg-[#FDFDFB] px-5 py-16 sm:px-8 sm:py-20 lg:py-[88px]"
    >
      <div className="mx-auto max-w-[1200px]">

        {/* INTRO */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={transition}
          className="grid gap-5 lg:grid-cols-[1fr_380px] lg:items-end"
        >
          <div>
            <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#438365]">
              {t("pharmacy.eyebrow")}
            </p>

            <h2 className="max-w-[720px] text-[36px] font-medium leading-[1.12] tracking-[-0.05em] text-[#17352A] sm:text-[46px] lg:text-[54px]">
              {t("pharmacy.headingLine1")}{" "}
              <span className="font-editorial-serif font-normal italic text-[#438365]">
                {t("pharmacy.headingLine2")}
              </span>
            </h2>
          </div>

          <p className="max-w-[370px] text-[13px] leading-[1.9] text-[#66756B] lg:justify-self-end lg:pb-1">
            {t("pharmacy.description")}
          </p>
        </motion.div>

        {/* MAIN TWO-COLUMN EXPERIENCE */}
        <div className="mt-10 grid items-center gap-9 sm:mt-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">

          {/* LEFT: INTERACTIVE PROCESS */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ ...transition, delay: reduceMotion ? 0 : 0.1 }}
            className="min-w-0"
          >
            <div className="mb-8">
              <p className="text-[10px] font-semibold uppercase tracking-[0.17em] text-[#438365]">
                {t("pharmacy.panelTag")}
              </p>

              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={activeStep}
                  initial={{
                    opacity: 0,
                    y: reduceMotion ? 0 : 12,
                    filter: reduceMotion ? "none" : "blur(4px)",
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)",
                  }}
                  exit={{
                    opacity: 0,
                    y: reduceMotion ? 0 : -8,
                    filter: reduceMotion ? "none" : "blur(3px)",
                  }}
                  transition={transition}
                >
                  <h3 className="mt-3 max-w-[420px] text-[25px] font-medium leading-[1.2] tracking-[-0.04em] text-[#17352A] sm:text-[32px]">
                    {active?.title}
                  </h3>

                  <p className="mt-3 max-w-[390px] text-[13px] leading-[1.9] text-[#718076]">
                    {active?.description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* PROGRESS LINE */}
            <div className="relative mb-7 h-px w-full bg-[#E3E9E2]">
              <motion.div
                className="absolute left-0 top-0 h-px bg-[#438365]"
                animate={{
                  width: `${((activeStep + 1) / steps.length) * 100}%`,
                }}
                transition={transition}
              />
            </div>

            {/* STEP SELECTORS */}
            <div className="grid grid-cols-3 gap-3">
              {steps.map((step, index) => {
                const selected = activeStep === index;

                return (
                  <button
                    key={`${step.title}-${index}`}
                    type="button"
                    onClick={() => setActiveStep(index)}
                    aria-pressed={selected}
                    className="group min-w-0 cursor-pointer text-left"
                  >
                    <motion.span
                      animate={{
                        backgroundColor: selected ? "#438365" : "#E7EDE6",
                        color: selected ? "#FFFFFF" : "#748278",
                        scale: selected ? 1 : 0.94,
                      }}
                      transition={transition}
                      className="mb-3 flex h-8 w-8 items-center justify-center rounded-full text-[9px] font-semibold"
                    >
                      {selected ? (
                        <Check size={13} strokeWidth={2} />
                      ) : (
                        isBangla
                          ? ["০১", "০২", "০৩"][index]
                          : step.number || `0${index + 1}`
                      )}
                    </motion.span>

                    <span
                      className={`block text-[11px] font-semibold leading-[1.55] transition-colors duration-300 sm:text-[13px] ${
                        selected
                          ? "text-[#17352A]"
                          : "text-[#929C94] group-hover:text-[#52665A]"
                      }`}
                    >
                      {step.title}
                    </span>

                    <motion.span
                      className="mt-2 block h-px origin-left bg-[#438365]"
                      initial={false}
                      animate={{
                        scaleX: selected ? 1 : 0,
                        opacity: selected ? 1 : 0,
                      }}
                      transition={transition}
                    />
                  </button>
                );
              })}
            </div>

            {/* OPTIONAL SUPPORTING DESCRIPTION */}
            <p className="mt-7 border-t border-[#E3E9E2] pt-5 text-[10px] leading-[1.8] text-[#849087]">
              {t("pharmacy.panelNotice")}
            </p>

            <a
              href="#pharmacy-process"
              className="group mt-5 inline-flex items-center gap-2 text-[11px] font-semibold text-[#438365] transition-colors duration-300 hover:text-[#17352A]"
            >
              {isBangla ? "আরও জানুন" : "Explore the process"}
              <ArrowUpRight
                size={14}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </motion.div>

          {/* RIGHT: PHOTOGRAPH */}
          <motion.div
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                    x: 28,
                    clipPath: "inset(0 0 0 8%)",
                  }
            }
            whileInView={{
              opacity: 1,
              x: 0,
              clipPath: "inset(0 0 0 0%)",
            }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: reduceMotion ? 0 : 1,
              ease,
              delay: reduceMotion ? 0 : 0.12,
            }}
            className="relative min-w-0 overflow-hidden bg-[#E8EFE9]"
          >
            <motion.div
              className="relative aspect-[1.375/1] w-full"
              whileHover={reduceMotion ? {} : { scale: 1.025 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
            >
              <Image
                src={pharmacyPrescriptionImg}
                alt={
                  isBangla
                    ? "স্মার্টফোনে প্রেসক্রিপশনের ছবি তোলার দৃশ্য"
                    : "A person photographing a prescription with a smartphone"
                }
                fill
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover object-center"
              />
            </motion.div>

            {/* SUBTLE IMAGE CAPTION */}
            <div className="flex items-center justify-between gap-4 bg-[#F3F6F1] px-4 py-3 sm:px-5">
              <span className="text-[9px] font-semibold uppercase tracking-[0.15em] text-[#64766A]">
                {t("pharmacy.imageTag")}
              </span>

              <span className="text-[10px] font-medium text-[#438365]">
                {isBangla ? "মেডোজি এআই" : "MEDOJI AI"}
              </span>
            </div>
          </motion.div>
        </div>

        <div id="pharmacy-process" className="scroll-mt-24" />
      </div>
    </section>
  );
}
