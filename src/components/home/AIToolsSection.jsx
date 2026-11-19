"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  motion,
  AnimatePresence,
  useReducedMotion,
} from "framer-motion";
import {
  ArrowUpRight,
  MessageCircle,
  AudioLines,
  Stethoscope,
  Sparkles,
  UserRound,
  ShieldCheck,
  Languages,
} from "lucide-react";
import { useLanguage } from "@/i18n/useLanguage";

const conversations = {
  EN: {
    question:
      "I've been having recurring headaches. Which specialist should I speak to?",
    answer:
      "A primary care doctor or medicine specialist can help assess your symptoms and guide you towards an appropriate specialist if needed.",
    suggestions: ["Find a doctor", "Explore specialists"],
    label: "English conversation",
  },
  BN: {
    question:
      "আমার বারবার মাথাব্যথা হচ্ছে। কোন বিশেষজ্ঞের পরামর্শ নেওয়া উচিত?",
    answer:
      "প্রথমে একজন মেডিসিন বিশেষজ্ঞের পরামর্শ নিতে পারেন। তিনি আপনার লক্ষণ মূল্যায়ন করে প্রয়োজন অনুযায়ী উপযুক্ত পরামর্শ ও সঠিক পদক্ষেপ জানাবেন।",
    suggestions: ["ডাক্তার খুঁজুন", "বিশেষজ্ঞ দেখুন"],
    label: "বাংলা কথোপকথন",
  },
};

export default function AIToolsSection() {
  const { language: globalLang, setLanguage: setGlobalLanguage, isBangla, t } = useLanguage();
  const [activeLang, setActiveLang] = useState(isBangla ? "BN" : "EN");
  const reduceMotion = useReducedMotion();

  // Sync with global language changes
  useEffect(() => {
    setActiveLang(globalLang === "bn" ? "BN" : "EN");
  }, [globalLang]);

  const handleLangToggle = (langCode) => {
    setActiveLang(langCode);
    setGlobalLanguage(langCode.toLowerCase());
  };

  const current = conversations[activeLang] || conversations.EN;

  const features = [
    {
      number: "01",
      icon: Languages,
      title: t("aiTools.feature1Title"),
      description: t("aiTools.feature1Desc"),
    },
    {
      number: "02",
      icon: AudioLines,
      title: t("aiTools.feature2Title"),
      description: t("aiTools.feature2Desc"),
    },
    {
      number: "03",
      icon: Stethoscope,
      title: t("aiTools.feature3Title"),
      description: t("aiTools.feature3Desc"),
    },
  ];

  const reveal = {
    hidden: {
      opacity: 0,
      y: reduceMotion ? 0 : 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.65,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section
      id="ai-tools"
      className="relative overflow-hidden bg-[#17352A] py-16 text-white sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8">

        {/* SECTION HEADER */}
        <div className="grid gap-6 border-b border-white/15 pb-9 lg:grid-cols-[1fr_0.65fr] lg:items-end lg:pb-12">

          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-[#8CC9A7]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#A8D9BC]">
                {t("aiTools.eyebrow")}
              </span>
            </div>

            <h2 className="max-w-[650px] text-[38px] leading-[1.12] font-semibold tracking-[-0.045em] sm:text-[48px] lg:text-[56px]">
              {isBangla ? "চিকিৎসাসেবা," : "Healthcare,"}
              <span className="block font-editorial-serif font-normal italic text-[#A8D9BC]">
                {isBangla ? "নতুন ও সহজ অভিজ্ঞতায়।" : "understood differently."}
              </span>
            </h2>
          </motion.div>

          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.1 }}
          >
            <p className="max-w-[380px] text-[14px] leading-[1.9] text-[#CFDED4]">
              {t("aiTools.description")}
            </p>
            <p className="mt-4 text-[10px] font-semibold uppercase tracking-[0.15em] text-[#A8D9BC]">
              {isBangla
                ? "বাংলা · ইংরেজি · মানবকেন্দ্রিক দৃষ্টিভঙ্গি"
                : "Bangla · English · Human-centered"}
            </p>
          </motion.div>
        </div>

        {/* MAIN COMPOSITION */}
        <div className="grid gap-12 pt-9 lg:grid-cols-[0.72fr_1.28fr] lg:items-center lg:gap-16 lg:pt-12">

          {/* LEFT: CAPABILITIES */}
          <div>
            <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.18em] text-[#8CC9A7]">
              {isBangla ? "আপনার প্রয়োজন অনুসারে" : "Built around you"}
            </p>

            <div>
              {features.map((feature, index) => {
                const Icon = feature.icon;

                return (
                  <motion.div
                    key={feature.number}
                    variants={reveal}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ delay: index * 0.1 }}
                    className="group flex gap-4 border-t border-white/15 py-5 last:border-b"
                  >
                    <span className="pt-1 text-[10px] font-semibold tracking-widest text-[#8CC9A7]">
                      {feature.number}
                    </span>

                    <div className="flex h-9 w-9 shrink-0 items-center justify-center border border-[#8CC9A7]/30 text-[#A8D9BC] transition-colors duration-300 group-hover:bg-[#E1F0E6] group-hover:text-[#174433]">
                      <Icon size={17} strokeWidth={1.6} />
                    </div>

                    <div>
                      <h3 className="text-[15px] font-semibold text-white">
                        {feature.title}
                      </h3>
                      <p className="mt-1 text-[12px] leading-5 text-[#B9D0C1]">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mt-7"
            >
              <Link
                href="/doctors"
                className="group inline-flex items-center gap-4 border-b border-[#8CC9A7] pb-2 text-[13px] font-semibold text-[#E1F0E6] transition-colors hover:text-white"
              >
                {t("aiTools.cta")}
                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </Link>
            </motion.div>
          </div>

          {/* RIGHT: AI CONVERSATION EXPERIENCE */}
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="relative"
          >
            <div className="border border-[#668674]/40 bg-[#FDFDFD] text-[#132F25]">

              {/* CONVERSATION TOP BAR */}
              <div className="flex items-center justify-between border-b border-[#DCE7DF] px-5 py-4 sm:px-7">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center bg-[#E1F0E6] text-[#174433]">
                    <Sparkles size={18} />
                  </div>
                  <div>
                    <p className="text-[13px] font-bold text-[#132F25]">
                      Medoji AI
                    </p>
                    <p className="mt-0.5 text-[10px] text-[#52665A]">
                      {isBangla ? "কথোপকথন প্রিভিউ" : "Conversation preview"}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-1 border border-[#DCE7DF] bg-white p-1">
                  {["EN", "BN"].map((item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() => handleLangToggle(item)}
                      aria-pressed={activeLang === item}
                      className={`px-3 py-1.5 text-[10px] font-bold transition-colors cursor-pointer ${
                        activeLang === item
                          ? "bg-[#174433] text-white"
                          : "text-[#52665A] hover:bg-[#F0F5EF]"
                      }`}
                    >
                      {item === "BN" ? "বাংলা" : "EN"}
                    </button>
                  ))}
                </div>
              </div>

              {/* CONVERSATION BODY */}
              <div className="relative px-5 py-7 sm:px-8 sm:py-8">

                {/* Timeline and signature motion */}
                <div className="absolute bottom-[76px] left-[42px] top-[58px] w-px bg-[#DCE7DF] sm:left-[55px]" />

                {!reduceMotion && (
                  <motion.div
                    className="absolute left-[40px] top-[58px] z-10 h-5 w-[3px] bg-[#19A069] sm:left-[53px]"
                    initial={{ y: 0, opacity: 0 }}
                    whileInView={{ y: 135, opacity: [0, 1, 0] }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 1.5,
                      ease: "easeInOut",
                    }}
                  />
                )}

                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeLang}
                    initial={{
                      opacity: 0,
                      y: reduceMotion ? 0 : 8,
                    }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{
                      opacity: 0,
                      y: reduceMotion ? 0 : -8,
                    }}
                    transition={{ duration: 0.25 }}
                    className="relative space-y-8"
                  >

                    {/* PATIENT MESSAGE */}
                    <div className="relative flex gap-4 sm:gap-5">
                      <div className="z-10 flex h-9 w-9 shrink-0 items-center justify-center border border-[#DCE7DF] bg-white text-[#174433]">
                        <UserRound size={16} />
                      </div>

                      <div className="min-w-0 flex-1">
                        <div className="mb-2 flex items-center justify-between">
                          <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#52665A]">
                            {isBangla ? "আপনার প্রশ্ন" : "Your question"}
                          </span>
                          <span className="text-[10px] text-[#819187]">
                            {current.label}
                          </span>
                        </div>

                        <div className="max-w-[440px] bg-[#F0F5EF] px-4 py-3.5 sm:px-5">
                          <p
                            lang={activeLang === "BN" ? "bn" : "en"}
                            className="text-[13px] leading-[1.85] text-[#132F25]"
                          >
                            {current.question}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* AI RESPONSE */}
                    <div className="relative flex gap-4 sm:gap-5">
                      <div className="z-10 flex h-9 w-9 shrink-0 items-center justify-center bg-[#174433] text-white">
                        <Sparkles size={16} />
                      </div>

                      <div className="min-w-0 flex-1">
                        <div className="mb-2 flex items-center gap-2">
                          <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#174433]">
                            {isBangla ? "মেডোজির উত্তর" : "Medoji response"}
                          </span>
                          <span className="h-1.5 w-1.5 rounded-full bg-[#19A069]" />
                        </div>

                        <p
                          lang={activeLang === "BN" ? "bn" : "en"}
                          className="max-w-[460px] text-[13px] leading-[1.9] text-[#42534A]"
                        >
                          {current.answer}
                        </p>

                        {/* SUGGESTED ACTIONS */}
                        <div className="mt-5 border-t border-[#DCE7DF] pt-4">
                          <p className="mb-3 text-[9px] font-bold uppercase tracking-[0.16em] text-[#819187]">
                            {isBangla ? "পরবর্তী পদক্ষেপ" : "Possible next steps"}
                          </p>

                          <div className="flex flex-wrap gap-2">
                            {current.suggestions.map((suggestion, index) => (
                              <Link
                                key={suggestion}
                                href="/doctors"
                                className="inline-flex items-center gap-2 border border-[#DCE7DF] bg-white px-3 py-2 text-[10px] font-semibold text-[#174433] hover:border-[#174433] transition-colors"
                              >
                                {suggestion}
                                <ArrowUpRight size={12} />
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* BOTTOM INPUT PREVIEW */}
              <div className="mx-5 mb-5 flex items-center justify-between border border-[#DCE7DF] px-4 py-3 sm:mx-7 sm:mb-7">
                <span className="text-[11px] text-[#819187]">
                  {t("aiTools.inputPlaceholder")}
                </span>
                <div className="flex h-8 w-8 items-center justify-center bg-[#174433] text-white">
                  <MessageCircle size={15} />
                </div>
              </div>

            </div>

            {/* SAFETY NOTE */}
            <div className="mt-4 flex items-start gap-2">
              <ShieldCheck
                size={14}
                className="mt-0.5 shrink-0 text-[#A8D9BC]"
              />
              <p className="max-w-[500px] text-[10px] leading-[1.7] text-[#B9D0C1]">
                {t("aiTools.disclaimer")}
              </p>
            </div>
          </motion.div>
        </div>

        {/* SECTION FOOTER */}
        <div className="mt-10 flex items-center justify-between border-t border-white/15 pt-5">
          <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#A8D9BC]">
            {isBangla ? "মেডোজি এআই · সংযুক্ত স্বাস্থ্যসেবা" : "MEDOJI AI · CARE, CONNECTED"}
          </span>
          <span className="text-[10px] text-[#B9D0C1]">
            {isBangla ? "স্বাস্থ্যসেবা পাওয়ার আধুনিক ও সহজ মাধ্যম" : "A new way to navigate care"}
          </span>
        </div>

      </div>
    </section>
  );
}
