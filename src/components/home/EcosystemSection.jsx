"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  Activity,
  Building2,
  Cpu,
  MapPinned,
  ArrowUpRight,
  ArrowRight,
  Layers3,
} from "lucide-react";
import { useLanguage } from "@/i18n/useLanguage";

const BASE_ITEMS = [
  {
    id: "01",
    category: "DIAGNOSTICS",
    phase: "PHASE 02",
    title: "Diagnostics, connected to care.",
    description:
      "Bringing diagnostic services closer to consultations, with a planned journey from sample collection to digital reports.",
    features: [
      "Diagnostic centre partnerships",
      "Home sample collection booking",
      "Digital test reports",
    ],
    icon: Activity,
    visual: "diagnostics",
  },
  {
    id: "02",
    category: "HOME HEALTH",
    phase: "PHASE 02",
    title: "Your health, beyond the clinic.",
    description:
      "Future device integrations may help people track everyday health measurements and share relevant information with professionals.",
    features: [
      "Blood pressure monitoring",
      "Glucose and pulse readings",
      "Health data for consultations",
    ],
    icon: Cpu,
    visual: "vitals",
  },
  {
    id: "03",
    category: "CLINICAL NETWORK",
    phase: "PLANNED",
    title: "Better connections between providers.",
    description:
      "Developing collaboration between independent professionals, hospitals and clinical partners through appropriate referral pathways.",
    features: [
      "Specialist referral pathways",
      "Authorized information sharing",
      "Consent-led collaboration",
    ],
    icon: Building2,
    visual: "network",
  },
  {
    id: "04",
    category: "EXPANSION",
    phase: "ROADMAP",
    title: "Healthcare that reaches further.",
    description:
      "A phased approach to extending access beyond the initial service areas through regional healthcare partnerships.",
    features: [
      "Greater Dhaka — initial focus",
      "Major cities — next stage",
      "Regional partnerships — future",
    ],
    icon: MapPinned,
    visual: "expansion",
  },
];

function DiagnosticsVisual({ isBangla }) {
  return (
    <div className="relative flex min-h-[290px] items-center justify-center">
      <span className="absolute left-5 top-5 text-[9px] font-bold tracking-[0.16em] text-[#829287]">
        {isBangla ? "ডায়াগনস্টিক ওয়ার্কফ্লো / ০১" : "DIAGNOSTIC WORKFLOW / 01"}
      </span>

      <div className="relative z-10 grid w-full max-w-[410px] grid-cols-[1fr_48px_1fr] items-center gap-2 px-5 sm:px-8">
        <div className="border border-[#DCE7DF] bg-white p-4 shadow-sm">
          <div className="flex h-11 w-11 items-center justify-center bg-[#EAF3EC] text-[#26704F]">
            <Activity size={21} strokeWidth={1.5} />
          </div>
          <p className="mt-5 text-[11px] font-semibold text-[#17352A]">
            {isBangla ? "স্যাম্পল সংগ্রহ" : "Sample collection"}
          </p>
          <p className="mt-1 text-[9px] text-[#829287]">
            {isBangla ? "ডায়াগনস্টিক পার্টনার" : "Diagnostic partner"}
          </p>
        </div>

        <div className="relative flex items-center">
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="h-px w-full origin-left bg-[#7FA78A]"
          />
          <ArrowRight
            size={15}
            className="absolute right-0 translate-x-1 text-[#26704F]"
          />
        </div>

        <div className="border border-[#DCE7DF] bg-white p-4 shadow-sm">
          <div className="flex h-11 w-11 items-center justify-center bg-[#EAF3EC] text-[#26704F]">
            <Layers3 size={21} strokeWidth={1.5} />
          </div>
          <p className="mt-5 text-[11px] font-semibold text-[#17352A]">
            {isBangla ? "ডিজিটাল রিপোর্ট" : "Digital report"}
          </p>
          <p className="mt-1 text-[9px] text-[#829287]">
            {isBangla ? "পর্যালোচনার জন্য প্রস্তুত" : "Ready to review"}
          </p>
        </div>
      </div>

      <div className="absolute bottom-5 left-5 flex items-center gap-2 text-[9px] text-[#829287]">
        <span className="h-2 w-2 rounded-full bg-[#19A069]" />
        {isBangla ? "সংযুক্ত ডায়াগনস্টিক যাত্রা" : "Connected diagnostic journey"}
      </div>
    </div>
  );
}

function VitalsVisual({ isBangla }) {
  const bars = [28, 42, 35, 55, 44, 67, 51, 76, 58, 69, 47, 61];

  return (
    <div className="relative flex min-h-[290px] flex-col justify-center p-6 sm:p-9">
      <span className="absolute left-5 top-5 text-[9px] font-bold tracking-[0.16em] text-[#829287]">
        {isBangla ? "হোম হেলথ ও ভাইটালস / ০২" : "HOME HEALTH / 02"}
      </span>

      <div className="relative z-10 mx-auto w-full max-w-[390px] border border-[#DCE7DF] bg-white p-5 shadow-sm">
        <div className="flex items-center justify-between border-b border-[#EDF1ED] pb-3">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#19A069] animate-pulse" />
            <p className="text-[11px] font-semibold text-[#17352A]">
              {isBangla ? "রক্তচাপ ও পালস ট্র্যাকিং" : "Blood Pressure & Pulse"}
            </p>
          </div>
          <span className="text-[9px] font-mono text-[#829287]">120/80 mmHg</span>
        </div>

        <div className="mt-5 flex h-20 items-end justify-between gap-1.5 px-1">
          {bars.map((h, i) => (
            <div key={i} className="flex-1 flex flex-col items-center gap-1">
              <div
                style={{ height: `${h}%` }}
                className={`w-full rounded-t-xs transition-all ${
                  i === bars.length - 1 ? "bg-[#19A069]" : "bg-[#D5E5DA]"
                }`}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-5 left-5 flex items-center gap-2 text-[9px] text-[#829287]">
        <span className="h-2 w-2 rounded-full bg-[#19A069]" />
        {isBangla ? "দৈনন্দিন স্বাস্থ্য মাপজোখ সংরক্ষণ" : "Everyday vital trend metrics"}
      </div>
    </div>
  );
}

function NetworkVisual({ isBangla }) {
  return (
    <div className="relative flex min-h-[290px] items-center justify-center p-6 sm:p-8">
      <span className="absolute left-5 top-5 text-[9px] font-bold tracking-[0.16em] text-[#829287]">
        {isBangla ? "ক্লিনিক্যাল নেটওয়ার্ক / ০৩" : "CLINICAL NETWORK / 03"}
      </span>

      <div className="relative z-10 flex w-full max-w-[390px] flex-col gap-3">
        <div className="flex items-center justify-between border border-[#DCE7DF] bg-white p-3.5 shadow-2xs">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center bg-[#E1F0E6] text-[#174433]">
              <Building2 size={16} />
            </div>
            <div>
              <p className="text-[11px] font-semibold text-[#132F25]">
                {isBangla ? "রেফারেল নেটওয়ার্ক" : "Specialist Referrals"}
              </p>
              <p className="text-[9px] text-[#52665A]">
                {isBangla ? "অনুমোদিত তথ্য আদান-প্রদান" : "Secure clinical pathways"}
              </p>
            </div>
          </div>
          <span className="rounded-full bg-[#E1F0E6] px-2 py-0.5 text-[9px] font-bold text-[#174433]">
            {isBangla ? "সংযুক্ত" : "Connected"}
          </span>
        </div>
      </div>

      <div className="absolute bottom-5 left-5 flex items-center gap-2 text-[9px] text-[#829287]">
        <span className="h-2 w-2 rounded-full bg-[#19A069]" />
        {isBangla ? "হাসপাতাল ও চিকিৎসকের মেলবন্ধন" : "Coordinated hospital & practitioner pathways"}
      </div>
    </div>
  );
}

function ExpansionVisual({ isBangla }) {
  const stages = [
    { number: "01", name: isBangla ? "ঢাকা মেট্রোপলিটন" : "Greater Dhaka", status: isBangla ? "চলমান" : "Active", active: true },
    { number: "02", name: isBangla ? "বিভাগীয় শহরসমূহ" : "Major Cities", status: isBangla ? "পরবর্তী ধাপ" : "Next", active: false },
    { number: "03", name: isBangla ? "সারাদেশে পার্টনারশিপ" : "Regional Expansion", status: isBangla ? "পরিকল্পিত" : "Planned", active: false },
  ];

  return (
    <div className="relative flex min-h-[290px] flex-col justify-center p-6 sm:p-9">
      <span className="absolute left-5 top-5 text-[9px] font-bold tracking-[0.16em] text-[#829287]">
        {isBangla ? "সেবা সম্প্রসারণ / ০৪" : "EXPANSION / 04"}
      </span>

      <div className="relative z-10 mx-auto w-full max-w-[390px] space-y-4">
        {stages.map((stage, index) => (
          <div key={stage.number} className="relative flex items-center gap-3">
            {index !== stages.length - 1 && (
              <div className="absolute left-[17px] top-10 h-[28px] w-px bg-[#C8D9CC]" />
            )}

            <div
              className={`relative z-10 flex h-[35px] w-[35px] shrink-0 items-center justify-center text-[10px] font-bold ${
                stage.active
                  ? "bg-[#174433] text-white"
                  : "border border-[#C8D9CC] bg-white text-[#829287]"
              }`}
            >
              {isBangla ? (index === 0 ? "০১" : index === 1 ? "০২" : "০৩") : stage.number}
            </div>

            <div className="flex-1 border-b border-[#E2EAE3] pb-2">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <p className="text-[12px] font-semibold text-[#17352A]">
                  {stage.name}
                </p>
                <span className="text-[8px] font-bold tracking-wider text-[#829287]">
                  {stage.status.toUpperCase()}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const VISUALS = {
  diagnostics: DiagnosticsVisual,
  vitals: VitalsVisual,
  network: NetworkVisual,
  expansion: ExpansionVisual,
};

export default function EcosystemSection() {
  const [activeId, setActiveId] = useState("01");
  const reduceMotion = useReducedMotion();
  const { t, isBangla, formatNumber } = useLanguage();

  const localizedItems = t("ecosystem.items");
  const items = BASE_ITEMS.map((item, index) => {
    const loc = Array.isArray(localizedItems) ? localizedItems[index] : null;
    return {
      ...item,
      category: loc?.category || item.category,
      phase: loc?.phase || item.phase,
      title: loc?.title || item.title,
      description: loc?.description || item.description,
      features: loc?.features || item.features,
    };
  });

  const active = items.find((item) => item.id === activeId) || items[0];
  const ActiveVisual = VISUALS[active.visual];

  const transition = reduceMotion
    ? { duration: 0 }
    : {
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1],
      };

  return (
    <section
      id="ecosystem"
      className="overflow-hidden border-y border-[#DCE7DF] bg-[#F5F8F4] py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
        {/* HEADER */}
        <div className="grid gap-7 lg:grid-cols-[1fr_390px] lg:items-end">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-[#19A069]" />
              <span className="text-[10px] font-bold tracking-[0.2em] text-[#174433]">
                {t("ecosystem.eyebrow")}
              </span>
            </div>

            <h2 className="max-w-[700px] text-[38px] leading-[1.1] font-semibold tracking-[-0.05em] text-[#132F25] sm:text-[48px] lg:text-[56px]">
              {isBangla ? "একটি প্ল্যাটফর্মে," : "More connected care."}
              <span className="block font-editorial-serif font-normal italic text-[#26704F]">
                {isBangla ? "স্বাস্থ্যসেবার বহুমাত্রিক সুযোগ।" : "Beyond one appointment."}
              </span>
            </h2>
          </div>

          <p className="max-w-[390px] text-[13px] leading-[1.9] text-[#52665A] lg:pb-2">
            {t("ecosystem.description")}
          </p>
        </div>

        {/* INTERACTIVE SHOWCASE */}
        <div className="mt-12 grid overflow-hidden border border-[#DCE7DF] bg-white lg:mt-16 lg:grid-cols-[0.78fr_1.22fr]">
          {/* LEFT SELECTOR */}
          <div className="flex flex-col border-b border-[#DCE7DF] lg:border-r lg:border-b-0">
            <div className="flex items-center justify-between px-6 py-5">
              <span className="text-[9px] font-bold tracking-[0.16em] text-[#829287]">
                {isBangla ? "মূল স্তম্ভসমূহ" : "EXPLORE THE PILLARS"}
              </span>
              <span className="text-[10px] tabular-nums text-[#829287]">
                {isBangla ? `${formatNumber(parseInt(active.id, 10))} / ৪` : `${active.id} / 04`}
              </span>
            </div>

            <div className="px-3 pb-3 sm:px-4">
              {items.map((item) => {
                const Icon = item.icon;
                const selected = activeId === item.id;

                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setActiveId(item.id)}
                    aria-pressed={selected}
                    className={`group relative flex w-full items-center gap-4 border-t border-[#EDF1ED] px-3 py-5 text-left transition-colors duration-200 sm:px-4 cursor-pointer ${
                      selected ? "bg-[#F0F5EF]" : "hover:bg-[#FAFCFA]"
                    }`}
                  >
                    {selected && (
                      <motion.span
                        layoutId="ecosystem-active-marker"
                        className="absolute bottom-0 left-0 top-0 w-[3px] bg-[#19A069]"
                        transition={transition}
                      />
                    )}

                    <span
                      className={`flex h-10 w-10 shrink-0 items-center justify-center transition-colors duration-200 ${
                        selected
                          ? "bg-[#174433] text-white"
                          : "bg-[#F0F5EF] text-[#64816E] group-hover:bg-[#E1F0E6]"
                      }`}
                    >
                      <Icon size={18} strokeWidth={1.6} />
                    </span>

                    <span className="min-w-0 flex-1">
                      <span className="mb-1 flex flex-wrap items-center gap-2">
                        <span className="text-[8px] font-bold tracking-[0.13em] text-[#64816E]">
                          {item.category}
                        </span>
                        <span className="text-[8px] text-[#9AA79D]">
                          {item.phase}
                        </span>
                      </span>

                      <span
                        className={`block text-[13px] font-semibold leading-5 ${
                          selected ? "text-[#17352A]" : "text-[#52665A]"
                        }`}
                      >
                        {item.title}
                      </span>
                    </span>

                    <ArrowUpRight
                      size={16}
                      className={`shrink-0 transition-all duration-200 ${
                        selected
                          ? "translate-x-0 text-[#26704F] opacity-100"
                          : "-translate-x-1 text-[#9AA79D] opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
                      }`}
                    />
                  </button>
                );
              })}
            </div>

            <div className="mt-auto border-t border-[#EDF1ED] px-6 py-5">
              <div className="flex items-center gap-2 text-[10px] font-medium text-[#64816E]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#19A069]" />
                {isBangla ? "বাংলাদেশের জন্য পরিকল্পিত" : "Designed for Bangladesh"}
              </div>
            </div>
          </div>

          {/* RIGHT DETAIL PANEL */}
          <div className="flex min-w-0 flex-col bg-[#FBFCFA]">
            <div className="relative flex min-h-[290px] flex-1 items-center justify-center overflow-hidden bg-[#F0F5EF]">
              <div className="pointer-events-none absolute inset-0 opacity-40">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#DCE7DF_1px,transparent_1px),linear-gradient(to_bottom,#DCE7DF_1px,transparent_1px)] bg-[size:32px_32px]" />
              </div>

              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={active.id}
                  initial={
                    reduceMotion
                      ? { opacity: 0 }
                      : { opacity: 0, x: 20, scale: 0.985 }
                  }
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={
                    reduceMotion
                      ? { opacity: 0 }
                      : { opacity: 0, x: -12, scale: 0.99 }
                  }
                  transition={transition}
                  className="relative z-10 min-h-[290px] w-full"
                >
                  <ActiveVisual isBangla={isBangla} />
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="p-6 sm:p-8 lg:p-9">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={`${active.id}-content`}
                  initial={{ opacity: 0, y: reduceMotion ? 0 : 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: reduceMotion ? 0 : -5 }}
                  transition={transition}
                >
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-[9px] font-bold tracking-[0.16em] text-[#26704F]">
                      {active.category}
                    </span>
                    <span className="h-1 w-1 rounded-full bg-[#A7B5AA]" />
                    <span className="text-[9px] font-semibold tracking-wider text-[#829287]">
                      {active.phase}
                    </span>
                  </div>

                  <h3 className="mt-3 max-w-[520px] text-[25px] leading-[1.2] font-semibold tracking-[-0.035em] text-[#132F25] sm:text-[30px]">
                    {active.title}
                  </h3>

                  <p className="mt-3 max-w-[540px] text-[12px] leading-[1.9] text-[#52665A]">
                    {active.description}
                  </p>

                  <div className="mt-6 grid gap-x-6 gap-y-3 sm:grid-cols-2">
                    {active.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-start gap-2.5 text-[11px] leading-5 text-[#42534A]"
                      >
                        <span className="mt-[5px] h-1.5 w-1.5 shrink-0 bg-[#19A069]" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>

              <div className="mt-7 flex items-center justify-between border-t border-[#E5ECE5] pt-5">
                <span className="text-[9px] font-semibold tracking-[0.13em] text-[#829287]">
                  {isBangla
                    ? `স্তম্ভ ${formatNumber(parseInt(active.id, 10))} / ৪`
                    : `PILLAR ${active.id} OF 04`}
                </span>

                <div className="flex items-center gap-1.5">
                  {items.map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setActiveId(item.id)}
                      aria-label={`View ${item.category}`}
                      aria-pressed={activeId === item.id}
                      className={`h-1.5 transition-all duration-300 cursor-pointer ${
                        activeId === item.id
                          ? "w-7 bg-[#26704F]"
                          : "w-3 bg-[#D5E1D7] hover:bg-[#91B69A]"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ROADMAP NOTE */}
        <div className="mt-5 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-[650px] text-[10px] leading-5 text-[#829287]">
            {isBangla
              ? "এখানে প্রদর্শিত ইকোসিস্টেমের সেবাসমূহ আমাদের পরিকল্পিত সম্প্রসারণের অংশ। এগুলো পর্যায়ক্রমে চালু করা হবে।"
              : "Ecosystem capabilities shown here represent planned development and partnerships. They should not be interpreted as currently available services."}
          </p>

          <span className="shrink-0 text-[9px] font-bold tracking-[0.14em] text-[#64816E]">
            {isBangla ? "বাংলাদেশে স্বাস্থ্যসেবাকে সংযুক্ত করছে মেডোজি" : "CONNECTING CARE IN BANGLADESH"}
          </span>
        </div>
      </div>
    </section>
  );
}
