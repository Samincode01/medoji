
"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  Activity,
  Cpu,
  Building2,
  MapPinned,
  ArrowUpRight,
} from "lucide-react";
import { useLanguage } from "@/i18n/useLanguage";

const ITEMS = [
  {
    id: "01",
    category: "DIAGNOSTICS",
    title: "A clearer picture of your health.",
    name: "Diagnostics",
    description:
      "Connecting patients with diagnostic services and digital health records.",
    detail:
      "The planned experience includes diagnostic centre partnerships, home sample collection booking, digital test reports and relevant information that can support consultations.",
    milestone: "Planned integration with diagnostic partners",
    phase: "PHASE 02",
    Icon: Activity,
  },
  {
    id: "02",
    category: "CONNECTED CARE",
    title: "Your health, beyond the clinic.",
    name: "Home health",
    description:
      "Bringing everyday health measurements into a more connected care experience.",
    detail:
      "Future device integrations may support blood pressure monitors, glucometers and pulse oximeters, helping people keep track of their measurements and share relevant information with healthcare professionals.",
    milestone: "Device integration roadmap",
    phase: "PHASE 02",
    Icon: Cpu,
  },
  {
    id: "03",
    category: "CLINICAL NETWORK",
    title: "Care works better together.",
    name: "Clinical partners",
    description:
      "Building better connections between independent professionals and healthcare facilities.",
    detail:
      "The planned ecosystem includes specialist referral pathways and secure sharing of relevant patient information with authorized healthcare partners, subject to appropriate consent.",
    milestone: "Partner onboarding and clinical collaboration",
    phase: "PLANNED",
    Icon: Building2,
  },
  {
    id: "04",
    category: "EXPANSION",
    title: "A wider network of care.",
    name: "More places",
    description:
      "A phased approach to extending access beyond the initial service areas.",
    detail:
      "The roadmap describes an initial focus on Greater Dhaka, followed by expansion into other major cities and, in later stages, broader access through regional healthcare partnerships.",
    milestone: "Geographic expansion roadmap",
    phase: "ROADMAP",
    Icon: MapPinned,
  },
];

const ease = [0.22, 1, 0.36, 1];

export default function EcosystemSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const reduceMotion = useReducedMotion();
  const { t, isBangla } = useLanguage();

  const localized = t("ecosystem.items");

  const items = ITEMS.map((item, index) => {
    const translation = Array.isArray(localized)
      ? localized[index]
      : null;

    return {
      ...item,
      category: translation?.category || item.category,
      title: translation?.title || item.title,
      name: translation?.name || item.name,
      description: translation?.description || item.description,
      detail: translation?.details || translation?.detail || item.detail,
      milestone: translation?.milestone || item.milestone,
      phase: translation?.phase || item.phase,
    };
  });

  const active = items[activeIndex];
  const ActiveIcon = active.Icon;

  const transition = reduceMotion
    ? { duration: 0 }
    : { duration: 0.65, ease };

  return (
    <section
      id="ecosystem"
      className="overflow-hidden bg-[#F0F5EF] px-5 py-14 sm:px-8 sm:py-16 lg:py-[76px]"
    >
      <div className="mx-auto max-w-[1200px]">

        {/* TOP LINE */}
        <div className="flex items-center justify-between gap-4">
          <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#438365]">
            {t("ecosystem.eyebrow") !== "ecosystem.eyebrow"
              ? t("ecosystem.eyebrow")
              : "THE MEDOJI ECOSYSTEM"}
          </p>

          <span className="text-[9px] font-medium tracking-[0.12em] text-[#829287]">
            {isBangla ? "স্বাস্থ্যসেবার ভবিষ্যৎ" : "A BIGGER PICTURE OF CARE"}
          </span>
        </div>

        {/* EDITORIAL HEADING */}
        <div className="mt-7 grid gap-5 lg:grid-cols-[1fr_330px] lg:items-end">
          <h2 className="max-w-[780px] text-[34px] font-medium leading-[1.12] tracking-[-0.05em] text-[#17352A] sm:text-[46px] lg:text-[54px]">
            {isBangla ? (
              <>
                স্বাস্থ্যসেবা শুধু একটি
                <span className="font-editorial-serif font-normal italic text-[#438365]">
                  {" "}অ্যাপয়েন্টমেন্ট নয়।
                </span>
              </>
            ) : (
              <>
                Care is more than
                <span className="block font-editorial-serif font-normal italic text-[#438365]">
                  a single appointment.
                </span>
              </>
            )}
          </h2>

          <p className="max-w-[330px] text-[12px] leading-[1.9] text-[#65756A] lg:justify-self-end lg:pb-1">
            {t("ecosystem.description") !== "ecosystem.description"
              ? t("ecosystem.description")
              : "We're building connections across diagnostics, home health, clinical partners and a wider network of care."}
          </p>
        </div>

        {/* INTERACTIVE EDITORIAL SELECTOR */}
        <div className="mt-10 border-y border-[#C9D8CB] sm:mt-12">
          <div className="grid grid-cols-2 sm:grid-cols-4">
            {items.map((item, index) => {
              const selected = activeIndex === index;

              return (
                <button
                  key={item.id}
                  type="button"
                  onMouseEnter={() => setActiveIndex(index)}
                  onFocus={() => setActiveIndex(index)}
                  onClick={() => setActiveIndex(index)}
                  aria-pressed={selected}
                  className={`group relative flex min-h-[112px] cursor-pointer flex-col justify-between px-3 py-4 text-left transition-colors duration-300 sm:min-h-[142px] sm:px-5 sm:py-5 ${
                    index % 2 === 1
                      ? "border-l border-[#DCE7DF] sm:border-l-0"
                      : ""
                  } ${
                    index > 1
                      ? "border-t border-[#DCE7DF] sm:border-t-0"
                      : ""
                  } ${
                    index > 0
                      ? "sm:border-l sm:border-[#DCE7DF]"
                      : ""
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span
                      className={`text-[10px] font-semibold tracking-[0.12em] transition-colors duration-300 ${
                        selected ? "text-[#438365]" : "text-[#9BA89E]"
                      }`}
                    >
                      {isBangla
                        ? ["০১", "০২", "০৩", "০৪"][index]
                        : item.id}
                    </span>

                    <motion.span
                      animate={{
                        rotate: selected ? 45 : 0,
                        opacity: selected ? 1 : 0.35,
                      }}
                      transition={transition}
                      className="text-[#438365]"
                    >
                      <ArrowUpRight size={15} />
                    </motion.span>
                  </div>

                  <div>
                    <p
                      className={`text-[17px] font-medium tracking-[-0.035em] transition-colors duration-300 sm:text-[20px] ${
                        selected
                          ? "text-[#17352A]"
                          : "text-[#7B8A7E] group-hover:text-[#425D4B]"
                      }`}
                    >
                      {item.name}
                    </p>

                    <div className="mt-3 h-[2px] w-full overflow-hidden bg-[#DCE7DF]">
                      <motion.div
                        className="h-full bg-[#438365]"
                        initial={false}
                        animate={{ width: selected ? "100%" : "0%" }}
                        transition={{ duration: 0.35, ease }}
                      />
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* FEATURE REVEAL */}
        <div className="relative grid min-h-[225px] gap-7 py-8 sm:py-10 lg:grid-cols-[1fr_0.72fr] lg:gap-16">

          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={active.id}
              initial={{
                opacity: 0,
                y: reduceMotion ? 0 : 15,
              }}
              animate={{ opacity: 1, y: 0 }}
              exit={{
                opacity: 0,
                y: reduceMotion ? 0 : -10,
              }}
              transition={transition}
              className="min-w-0"
            >
              <div className="flex items-center gap-2">
                <ActiveIcon
                  size={15}
                  strokeWidth={1.6}
                  className="text-[#438365]"
                />
                <span className="text-[9px] font-bold tracking-[0.17em] text-[#438365]">
                  {active.category}
                </span>
              </div>

              <h3 className="mt-4 max-w-[600px] text-[25px] font-medium leading-[1.2] tracking-[-0.04em] text-[#17352A] sm:text-[32px]">
                {active.title}
              </h3>

              <p className="mt-3 max-w-[540px] text-[12px] leading-[1.9] text-[#65756A]">
                {active.description}
              </p>

              <p className="mt-3 max-w-[570px] text-[11px] leading-[1.85] text-[#829087]">
                {active.detail}
              </p>
            </motion.div>
          </AnimatePresence>

          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={`milestone-${active.id}`}
              initial={{
                opacity: 0,
                x: reduceMotion ? 0 : 14,
              }}
              animate={{ opacity: 1, x: 0 }}
              exit={{
                opacity: 0,
                x: reduceMotion ? 0 : -8,
              }}
              transition={{ ...transition, delay: 0.06 }}
              className="flex flex-col justify-center border-t border-[#DCE7DF] pt-6 lg:border-l lg:border-t-0 lg:pl-9 lg:pt-0"
            >
              <p className="text-[9px] font-bold uppercase tracking-[0.17em] text-[#89968D]">
                {isBangla ? "পরিকল্পনার মাইলফলক" : "ROADMAP MILESTONE"}
              </p>

              <p className="mt-3 max-w-[310px] text-[16px] font-medium leading-[1.55] tracking-[-0.02em] text-[#294D38]">
                {active.milestone}
              </p>

              <p className="mt-3 text-[9px] font-semibold tracking-[0.14em] text-[#438365]">
                {active.phase}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* FOOTNOTE */}
        <div className="flex flex-col justify-between gap-2 border-t border-[#C9D8CB] pt-4 sm:flex-row sm:items-center">
          <p className="max-w-[800px] text-[9px] leading-[1.8] text-[#89968D]">
            {isBangla
              ? "এই ইকোসিস্টেমের সেবাগুলো পরিকল্পিত উন্নয়ন ও অংশীদারিত্বের অংশ; বর্তমানে চালু সেবা নয়।"
              : "These ecosystem capabilities represent planned development and partnerships, not currently available services."}
          </p>

          <span className="shrink-0 text-[9px] font-bold tracking-[0.14em] text-[#438365]">
            MEDOJI AI
          </span>
        </div>
      </div>
    </section>
  );
}
