
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
  Plus,
  Layers3,
} from "lucide-react";

const ITEMS = [
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

function DiagnosticsVisual() {
  return (
    <div className="relative flex min-h-[290px] items-center justify-center">
      <span className="absolute left-5 top-5 text-[9px] font-bold tracking-[0.16em] text-[#829287]">
        DIAGNOSTIC WORKFLOW / 01
      </span>

      <div className="relative z-10 grid w-full max-w-[410px] grid-cols-[1fr_48px_1fr] items-center gap-2 px-5 sm:px-8">
        <div className="border border-[#DCE7DF] bg-white p-4 shadow-sm">
          <div className="flex h-11 w-11 items-center justify-center bg-[#EAF3EC] text-[#26704F]">
            <Activity size={21} strokeWidth={1.5} />
          </div>
          <p className="mt-5 text-[11px] font-semibold text-[#17352A]">
            Sample collection
          </p>
          <p className="mt-1 text-[9px] text-[#829287]">
            Diagnostic partner
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
            Digital report
          </p>
          <p className="mt-1 text-[9px] text-[#829287]">
            Ready to review
          </p>
        </div>
      </div>

      <div className="absolute bottom-5 left-5 flex items-center gap-2 text-[9px] text-[#829287]">
        <span className="h-2 w-2 rounded-full bg-[#19A069]" />
        Connected diagnostic journey
      </div>
    </div>
  );
}

function VitalsVisual() {
  const bars = [28, 42, 35, 55, 44, 67, 51, 76, 58, 69, 47, 61];

  return (
    <div className="relative flex min-h-[290px] flex-col justify-center p-6 sm:p-9">
      <span className="absolute left-5 top-5 text-[9px] font-bold tracking-[0.16em] text-[#829287]">
        HOME HEALTH / 02
      </span>

      <div className="grid grid-cols-2 gap-3">
        <div className="border border-[#DCE7DF] bg-white p-4">
          <div className="flex items-center gap-2 text-[#64816E]">
            <Activity size={14} />
            <span className="text-[10px]">Blood pressure</span>
          </div>
          <p className="mt-4 text-[25px] font-semibold text-[#17352A]">
            -- / --
          </p>
          <p className="mt-1 text-[9px] text-[#829287]">Example reading</p>
        </div>

        <div className="border border-[#DCE7DF] bg-white p-4">
          <div className="flex items-center gap-2 text-[#64816E]">
            <Activity size={14} />
            <span className="text-[10px]">Glucose</span>
          </div>
          <p className="mt-4 text-[25px] font-semibold text-[#17352A]">
            --.-
          </p>
          <p className="mt-1 text-[9px] text-[#829287]">Example reading</p>
        </div>
      </div>

      <div className="mt-4 border border-[#DCE7DF] bg-white p-4">
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-semibold text-[#52665A]">
            Measurement history
          </span>
          <span className="text-[8px] tracking-wider text-[#829287]">
            ILLUSTRATIVE
          </span>
        </div>

        <div className="mt-5 flex h-[52px] items-end gap-2">
          {bars.map((height, index) => (
            <motion.div
              key={index}
              initial={{ height: 0 }}
              animate={{ height: `${height}%` }}
              transition={{
                duration: 0.45,
                delay: index * 0.035,
                ease: "easeOut",
              }}
              className="flex-1 bg-[#8AB99A]"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function NetworkVisual() {
  const nodes = [
    { x: "8%", y: "19%", icon: Building2, label: "Hospitals" },
    { x: "70%", y: "19%", icon: Activity, label: "Clinicians" },
    { x: "8%", y: "72%", icon: Cpu, label: "Technology" },
    { x: "70%", y: "72%", icon: Plus, label: "Care partners" },
  ];

  const lines = [
    "M210 130 L80 70",
    "M210 130 L340 70",
    "M210 130 L80 205",
    "M210 130 L340 205",
  ];

  return (
    <div className="relative flex min-h-[290px] items-center justify-center overflow-hidden">
      <span className="absolute left-5 top-5 text-[9px] font-bold tracking-[0.16em] text-[#829287]">
        CLINICAL NETWORK / 03
      </span>

      <svg
        viewBox="0 0 420 260"
        className="absolute inset-0 h-full w-full"
        fill="none"
        aria-hidden="true"
      >
        {lines.map((path, index) => (
          <motion.path
            key={path}
            d={path}
            stroke="#91B69A"
            strokeWidth="1.5"
            strokeDasharray="5 5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 0.7,
              delay: index * 0.12,
            }}
          />
        ))}
      </svg>

      <div className="relative z-10 flex h-[76px] w-[76px] flex-col items-center justify-center bg-[#174433] text-white shadow-lg">
        <Layers3 size={25} strokeWidth={1.5} />
        <span className="mt-1 text-[8px] font-bold tracking-wider">
          MEDOJI
        </span>
      </div>

      {nodes.map(({ x, y, icon: Icon, label }, index) => (
        <motion.div
          key={label}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.35, delay: 0.15 + index * 0.1 }}
          className="absolute z-10 flex w-[88px] flex-col items-center gap-2"
          style={{ left: x, top: y }}
        >
          <div className="flex h-10 w-10 items-center justify-center border border-[#DCE7DF] bg-white text-[#26704F] shadow-sm">
            <Icon size={18} strokeWidth={1.5} />
          </div>
          <span className="text-center text-[9px] font-medium text-[#52665A]">
            {label}
          </span>
        </motion.div>
      ))}
    </div>
  );
}

function ExpansionVisual() {
  const stages = [
    {
      number: "01",
      name: "Greater Dhaka",
      status: "Initial focus",
      active: true,
    },
    {
      number: "02",
      name: "Major cities",
      status: "Next stage",
      active: false,
    },
    {
      number: "03",
      name: "Regional access",
      status: "Future roadmap",
      active: false,
    },
  ];

  return (
    <div className="relative flex min-h-[290px] flex-col justify-center px-6 py-12 sm:px-10">
      <span className="absolute left-5 top-5 text-[9px] font-bold tracking-[0.16em] text-[#829287]">
        GEOGRAPHIC EXPANSION / 04
      </span>

      <div className="space-y-5">
        {stages.map((stage, index) => (
          <div key={stage.number} className="relative flex items-center gap-4">
            {index !== stages.length - 1 && (
              <div className="absolute left-[17px] top-10 h-[38px] w-px bg-[#C8D9CC]" />
            )}

            <div
              className={`relative z-10 flex h-[35px] w-[35px] shrink-0 items-center justify-center text-[10px] font-bold ${
                stage.active
                  ? "bg-[#174433] text-white"
                  : "border border-[#C8D9CC] bg-white text-[#829287]"
              }`}
            >
              {stage.number}
            </div>

            <div className="flex-1 border-b border-[#E2EAE3] pb-3">
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

  const active = ITEMS.find((item) => item.id === activeId) || ITEMS[0];
  const ActiveIcon = active.icon;
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
                THE MEDOJI ECOSYSTEM
              </span>
            </div>

            <h2 className="max-w-[700px] text-[38px] leading-[1.1] font-semibold tracking-[-0.05em] text-[#132F25] sm:text-[48px] lg:text-[56px]">
              More connected care.
              <span className="block font-serif font-normal italic text-[#26704F]">
                Beyond one appointment.
              </span>
            </h2>
          </div>

          <p className="max-w-[390px] text-[13px] leading-[1.9] text-[#52665A] lg:pb-2">
            We are working towards a healthcare ecosystem that brings
            professionals, diagnostics, technology and clinical partners
            closer together.
          </p>
        </div>

        {/* INTERACTIVE SHOWCASE */}
        <div className="mt-12 grid overflow-hidden border border-[#DCE7DF] bg-white lg:mt-16 lg:grid-cols-[0.78fr_1.22fr]">
          {/* LEFT SELECTOR */}
          <div className="flex flex-col border-b border-[#DCE7DF] lg:border-r lg:border-b-0">
            <div className="flex items-center justify-between px-6 py-5">
              <span className="text-[9px] font-bold tracking-[0.16em] text-[#829287]">
                EXPLORE THE PILLARS
              </span>
              <span className="text-[10px] tabular-nums text-[#829287]">
                {active.id} / 04
              </span>
            </div>

            <div className="px-3 pb-3 sm:px-4">
              {ITEMS.map((item) => {
                const Icon = item.icon;
                const selected = activeId === item.id;

                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setActiveId(item.id)}
                    aria-pressed={selected}
                    className={`group relative flex w-full items-center gap-4 border-t border-[#EDF1ED] px-3 py-5 text-left transition-colors duration-200 sm:px-4 ${
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
                Designed for Bangladesh
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
                  <ActiveVisual />
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
                  PILLAR {active.id} OF 04
                </span>

                <div className="flex items-center gap-1.5">
                  {ITEMS.map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setActiveId(item.id)}
                      aria-label={`View ${item.category}`}
                      aria-pressed={activeId === item.id}
                      className={`h-1.5 transition-all duration-300 ${
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
            Ecosystem capabilities shown here represent planned development
            and partnerships. They should not be interpreted as currently
            available services.
          </p>

          <span className="shrink-0 text-[9px] font-bold tracking-[0.14em] text-[#64816E]">
            CONNECTING CARE IN BANGLADESH
          </span>
        </div>
      </div>
    </section>
  );
}
