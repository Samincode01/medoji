
"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { useLanguage } from "@/i18n/useLanguage";

const stats = [
  {
    value: 100,
    suffix: "+",
    labelEN: "Satisfied patients",
    labelBN: "সন্তুষ্ট রোগী",
  },
  {
    value: 20,
    suffix: "+",
    labelEN: "Doctors & counsellors",
    labelBN: "চিকিৎসক ও কাউন্সেলর",
  },
  {
    value: 5000,
    suffix: "+",
    labelEN: "Registered users",
    labelBN: "নিবন্ধিত ব্যবহারকারী",
  },
];

function AnimatedNumber({ value, suffix, start, reducedMotion }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (value == null || !start) return;

    if (reducedMotion) {
      setCount(value);
      return;
    }

    let frame;
    let startTime;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;

      const progress = Math.min((timestamp - startTime) / 1400, 1);
      const eased = 1 - Math.pow(1 - progress, 4);

      setCount(Math.floor(eased * value));

      if (progress < 1) {
        frame = requestAnimationFrame(animate);
      } else {
        setCount(value);
      }
    };

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [value, start, reducedMotion]);

  if (value == null) return "—";

  return `${count.toLocaleString()}${suffix}`;
}

export default function ImpactSection() {
  const { isBangla } = useLanguage();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.25 });
  const reducedMotion = useReducedMotion();

  return (
    <section
      ref={sectionRef}
      className="overflow-hidden bg-[#17352A] px-5 py-16 text-[#F7F8F4] sm:px-8 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-[1200px]">

        {/* Heading */}
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="text-center"
        >
          <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#80C9A5] sm:text-xs">
            {isBangla ? "আমাদের অগ্রযাত্রা" : "OUR GROWING IMPACT"}
          </p>

          <h2
            className={`font-medium tracking-[-0.045em] text-[#F7F8F4] ${
              isBangla
                ? "text-[30px] leading-[1.5] sm:text-4xl"
                : "text-[clamp(30px,4.1vw,54px)] leading-[1.15] whitespace-normal"
            }`}
          >
            {isBangla ? (
              "আরও উন্নত স্বাস্থ্যসেবা, একসাথে এগিয়ে চলা।"
            ) : (
              <>
                Better care,{" "}
                <span className="font-serif font-normal italic text-[#80C9A5]">
                  growing together.
                </span>
              </>
            )}
          </h2>

          <p className="mx-auto mt-4 max-w-[520px] text-sm leading-7 text-[#C0CEC6] sm:text-base">
            {isBangla
              ? "বাংলাদেশে আরও সহজলভ্য ও সংযুক্ত স্বাস্থ্যসেবা গড়ে তোলার পথে।"
              : "Growing towards a more accessible and connected healthcare experience for Bangladesh."}
          </p>
        </motion.div>

        {/* Impact numbers */}
        <div className="mt-14 grid grid-cols-1 gap-10 sm:mt-16 sm:grid-cols-3 sm:gap-6 lg:mt-[72px]">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.labelEN}
              initial={reducedMotion ? false : { opacity: 0, y: 18 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.65,
                delay: reducedMotion ? 0 : 0.12 + index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-center"
            >
              <div className="text-[52px] font-medium leading-none tracking-[-0.06em] text-[#F7F8F4] sm:text-5xl lg:text-[64px]">
                <AnimatedNumber
                  value={stat.value}
                  suffix={stat.suffix}
                  start={isInView}
                  reducedMotion={reducedMotion}
                />
              </div>

              <p className="mt-4 text-sm font-medium text-[#B9C9BF] sm:text-base">
                {isBangla ? stat.labelBN : stat.labelEN}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
