
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
  ArrowRight,
  Sparkles,
  ShieldCheck,
} from "lucide-react";
import { useLanguage } from "@/i18n/useLanguage";

const conversations = {
  EN: {
    question:
      "I've been having recurring headaches. Which specialist should I speak to?",
    answer:
      "A medicine specialist can help assess your symptoms and guide you towards the appropriate care if needed.",
    label: "YOUR QUESTION",
    response: "MEDOJI AI",
  },
  BN: {
    question:
      "আমার বারবার মাথাব্যথা হচ্ছে। কোন বিশেষজ্ঞের পরামর্শ নেওয়া উচিত?",
    answer:
      "একজন মেডিসিন বিশেষজ্ঞ আপনার লক্ষণ মূল্যায়ন করে প্রয়োজন অনুযায়ী উপযুক্ত পরামর্শ দিতে পারবেন।",
    label: "আপনার প্রশ্ন",
    response: "মেডোজি এআই",
  },
};

export default function AIToolsSection() {
  const {
    language: globalLang,
    setLanguage: setGlobalLanguage,
    isBangla,
    t,
  } = useLanguage();

  const [activeLang, setActiveLang] = useState(
    isBangla ? "BN" : "EN"
  );

  const reduceMotion = useReducedMotion();

  useEffect(() => {
    setActiveLang(globalLang === "bn" ? "BN" : "EN");
  }, [globalLang]);

  const changeLanguage = (lang) => {
    setActiveLang(lang);
    setGlobalLanguage(lang.toLowerCase());
  };

  const current = conversations[activeLang];

  const ease = [0.22, 1, 0.36, 1];

  return (
    <section
      id="ai-tools"
      className="overflow-hidden bg-[#F0F5EF]"
    >
      <div className="mx-auto max-w-[1200px] px-5 py-14 sm:px-8 sm:py-16 lg:py-[76px]">

        <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">

          {/* LEFT: INTRODUCTION */}
          <motion.div
            initial={{
              opacity: 0,
              y: reduceMotion ? 0 : 22,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: reduceMotion ? 0 : 0.7,
              ease,
            }}
          >
            <div className="flex items-center gap-3">
              <span className="h-[2px] w-8 bg-[#19A069]" />

              <span className="text-[10px] font-bold tracking-[0.19em] text-[#52665A]">
                {t("aiTools.eyebrow")}
              </span>
            </div>

            <h2
              className={`mt-7 max-w-[510px] text-[39px] font-semibold leading-[1.12] tracking-[-0.045em] text-[#132F25] sm:text-[48px] lg:text-[55px] ${
                isBangla ? "font-bengali" : ""
              }`}
            >
              {isBangla ? (
                <>
                  স্বাস্থ্যবিষয়ক
                  <span className="block font-editorial-serif font-normal italic text-[#19A069]">
                    প্রশ্নের সহজ উত্তর।
                  </span>
                </>
              ) : (
                <>
                  A little more
                  <span className="block font-editorial-serif font-normal italic text-[#19A069]">
                    clarity in care.
                  </span>
                </>
              )}
            </h2>

            <p
              className={`mt-5 max-w-[440px] text-[13px] leading-[1.9] text-[#52665A] sm:text-[14px] ${
                isBangla ? "font-bengali" : ""
              }`}
            >
              {t("aiTools.description")}
            </p>

            <Link
              href="/specialist"
              className="group mt-8 inline-flex h-[48px] items-center gap-4 rounded-lg bg-[#174433] px-6 text-[12px] font-semibold text-white transition-colors hover:bg-[#0F3527]"
            >
              {t("aiTools.cta")}

              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

            <p className="mt-6 flex items-center gap-2 text-[10px] text-[#718276]">
              <ShieldCheck size={14} className="text-[#19A069]" />
              {t("aiTools.disclaimer")}
            </p>
          </motion.div>

          {/* RIGHT: CONVERSATION PREVIEW */}
          <motion.div
            initial={{
              opacity: 0,
              x: reduceMotion ? 0 : 28,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: reduceMotion ? 0 : 0.85,
              ease,
            }}
            className="relative min-w-0"
          >

            {/* HEADER */}
            <div className="flex items-center justify-between border-b border-[#D4E0D6] pb-5">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#174433] text-white">
                  <Sparkles size={17} />
                </div>

                <div>
                  <p className="text-[13px] font-bold text-[#17352A]">
                    Medoji AI
                  </p>
                  <p className="mt-0.5 text-[10px] text-[#718276]">
                    {isBangla
                      ? "স্বাস্থ্যবিষয়ক কথোপকথন"
                      : "Healthcare conversation"}
                  </p>
                </div>
              </div>

              {/* LANGUAGE */}
              <div className="flex items-center gap-3">
                {["EN", "BN"].map((lang) => (
                  <button
                    key={lang}
                    type="button"
                    onClick={() => changeLanguage(lang)}
                    aria-pressed={activeLang === lang}
                    className={`pb-1 text-[11px] font-semibold transition-colors ${
                      activeLang === lang
                        ? "border-b-2 border-[#174433] text-[#174433]"
                        : "text-[#87948B] hover:text-[#174433]"
                    }`}
                  >
                    {lang === "BN" ? "বাংলা" : "EN"}
                  </button>
                ))}
              </div>
            </div>

            {/* QUESTION AND RESPONSE */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeLang}
                initial={{
                  opacity: 0,
                  y: reduceMotion ? 0 : 12,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: reduceMotion ? 0 : -8,
                }}
                transition={{
                  duration: reduceMotion ? 0 : 0.35,
                  ease,
                }}
                className="py-7 sm:py-9"
              >
                {/* QUESTION */}
                <div className="ml-auto max-w-[88%]">
                  <p className="mb-3 text-right text-[9px] font-bold tracking-[0.16em] text-[#819187]">
                    {current.label}
                  </p>

                  <div className="rounded-tl-2xl rounded-bl-2xl rounded-br-2xl bg-white px-5 py-4 sm:px-6 sm:py-5">
                    <p
                      lang={activeLang === "BN" ? "bn" : "en"}
                      className={`text-[13px] leading-[1.85] text-[#17352A] sm:text-[14px] ${
                        activeLang === "BN" ? "font-bengali" : ""
                      }`}
                    >
                      {current.question}
                    </p>
                  </div>
                </div>

                {/* RESPONSE */}
                <div className="mt-7 max-w-[92%]">
                  <div className="mb-3 flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-[#19A069]" />

                    <p className="text-[9px] font-bold tracking-[0.16em] text-[#174433]">
                      {current.response}
                    </p>
                  </div>

                  <p
                    lang={activeLang === "BN" ? "bn" : "en"}
                    className={`text-[14px] leading-[1.95] text-[#42534A] sm:text-[15px] ${
                      activeLang === "BN" ? "font-bengali" : ""
                    }`}
                  >
                    {current.answer}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* BOTTOM CAPABILITY LINE */}
            <div className="flex items-center justify-between border-t border-[#D4E0D6] pt-5">
              <span className="text-[9px] font-semibold tracking-[0.13em] text-[#718276]">
                {isBangla
                  ? "বাংলা · ইংরেজি"
                  : "BANGLA · ENGLISH"}
              </span>

              <Link
                href="/specialist"
                className="group inline-flex items-center gap-2 text-[11px] font-semibold text-[#174433] hover:text-[#19A069]"
              >
                {isBangla ? "বিশেষজ্ঞ খুঁজুন" : "Find a Specialist"}

                <ArrowUpRight
                  size={14}
                  className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
