
"use client";

import { useState } from "react";
import { useLanguage } from "@/i18n/useLanguage";
import {
  ArrowLeft,
  ArrowUpRight,
  ChevronDown,
  MessageCircle,
  ShieldCheck,
} from "lucide-react";
import Link from "next/link";

const WHATSAPP_URL = "https://wa.me/8801604502782";

export default function PrivacyPolicyPage() {
  const { isBangla } = useLanguage();
  const [activeQuestion, setActiveQuestion] = useState(0);

  const content = {
    en: {
      eyebrow: "MEDOJI HEALTHCARE",
      title: "Your privacy matters.",
      intro:
        "We believe healthcare should feel personal and private. Here's how we handle the information you share when booking with Medoji.",
      summary: "A simple promise",
      summaryText:
        "Your booking information helps us coordinate appointments, verify payments and connect you with your selected professional.",

      heading: "Privacy, without the complicated language.",
      subheading: "A few things you may want to know.",

      questions: [
        {
          q: "What information do we collect?",
          a: "We collect your contact details and appointment information through Google Forms. We use these details to arrange bookings, verify online payments, provide support and coordinate follow-up sessions.",
        },
        {
          q: "Who can see my information?",
          a: "Only authorised Medoji staff who handle bookings can access form responses. Any health concern you share is provided only to your selected doctor or psychologist for that appointment.",
        },
        {
          q: "Can anyone join my online session?",
          a: "No. Your Google Meet session is intended only for you and your selected doctor or psychologist. Medoji staff and other people do not join your session.",
        },
        {
          q: "Are my sessions recorded?",
          a: "No. Sessions are not recorded, and participants must not record them. The meeting link should only be shared with you and your selected professional.",
        },
      ],

      meetHeading: "About your online consultations",
      meetText:
        "Your online consultation takes place through Google Meet. Only you and your selected professional attend. Medoji staff do not join your consultation, sessions are not recorded, and the meeting link should only be shared with the two participants.",

      contactHeading: "Have a question about your privacy?",
      contactText:
        "If you have concerns about your booking information or online session privacy, our team is here to help.",
      contactButton: "Contact support",
      phoneLabel: "WhatsApp",
      phone: "01604 502782",
      note:
        "Google Form changes and administration are handled separately by the Medoji team.",
      back: "Back to home",
    },

    bn: {
      eyebrow: "মেডোজি হেলথকেয়ার",
      title: "আপনার গোপনীয়তা গুরুত্বপূর্ণ।",
      intro:
        "আমরা বিশ্বাস করি স্বাস্থ্যসেবা হওয়া উচিত ব্যক্তিগত ও গোপনীয়। মেডোজির মাধ্যমে বুকিং করার সময় আপনার শেয়ার করা তথ্য কীভাবে ব্যবহার করা হয়, তা এখানে সহজভাবে ব্যাখ্যা করা হয়েছে।",
      summary: "আমাদের প্রতিশ্রুতি",
      summaryText:
        "আপনার বুকিংয়ের তথ্য অ্যাপয়েন্টমেন্ট সমন্বয়, পেমেন্ট যাচাই এবং আপনার নির্বাচিত পেশাজীবীর সঙ্গে যোগাযোগের জন্য ব্যবহার করা হয়।",

      heading: "সহজ ভাষায় গোপনীয়তা নীতিমালা।",
      subheading: "আপনার কিছু সাধারণ প্রশ্নের উত্তর।",

      questions: [
        {
          q: "আমরা কী ধরনের তথ্য সংগ্রহ করি?",
          a: "Google Forms-এর মাধ্যমে আমরা আপনার যোগাযোগের তথ্য ও অ্যাপয়েন্টমেন্টের বিবরণ সংগ্রহ করি। বুকিংয়ের ব্যবস্থা, অনলাইন পেমেন্ট যাচাই, সহায়তা প্রদান এবং পরবর্তী সেশন সমন্বয়ের জন্য এসব তথ্য ব্যবহার করা হয়।",
        },
        {
          q: "আমার তথ্য কারা দেখতে পারেন?",
          a: "শুধুমাত্র বুকিং পরিচালনার দায়িত্বে থাকা অনুমোদিত মেডোজি কর্মীরা ফর্মের উত্তর দেখতে পারেন। আপনার দেওয়া স্বাস্থ্যসংক্রান্ত উদ্বেগ শুধুমাত্র সংশ্লিষ্ট অ্যাপয়েন্টমেন্টের জন্য আপনার নির্বাচিত চিকিৎসক বা মনোবিজ্ঞানীর সঙ্গে শেয়ার করা হয়।",
        },
        {
          q: "আমার অনলাইন সেশনে কি অন্য কেউ যোগ দিতে পারেন?",
          a: "না। আপনার Google Meet সেশনে শুধুমাত্র আপনি এবং আপনার নির্বাচিত চিকিৎসক বা মনোবিজ্ঞানীর অংশগ্রহণের কথা। মেডোজির কর্মী বা অন্য কোনো ব্যক্তি সেশনে যোগ দেন না।",
        },
        {
          q: "আমার সেশন কি রেকর্ড করা হয়?",
          a: "না। সেশন রেকর্ড করা হয় না এবং অংশগ্রহণকারীদেরও রেকর্ড করা উচিত নয়। মিটিং লিংক শুধুমাত্র আপনার এবং আপনার নির্বাচিত পেশাজীবীর সঙ্গে শেয়ার করা উচিত।",
        },
      ],

      meetHeading: "আপনার অনলাইন পরামর্শ সম্পর্কে",
      meetText:
        "আপনার অনলাইন পরামর্শ Google Meet-এর মাধ্যমে অনুষ্ঠিত হয়। শুধুমাত্র আপনি এবং আপনার নির্বাচিত পেশাজীবী অংশ নেন। মেডোজির কর্মীরা সেশনে যোগ দেন না, সেশন রেকর্ড করা হয় না এবং মিটিং লিংক শুধুমাত্র দুই অংশগ্রহণকারীর সঙ্গে শেয়ার করা উচিত।",

      contactHeading: "গোপনীয়তা নিয়ে কোনো প্রশ্ন আছে?",
      contactText:
        "আপনার বুকিংয়ের তথ্য বা অনলাইন সেশনের গোপনীয়তা নিয়ে কোনো উদ্বেগ থাকলে আমাদের টিম আপনাকে সহায়তা করবে।",
      contactButton: "সাপোর্ট টিমের সঙ্গে যোগাযোগ করুন",
      phoneLabel: "WhatsApp",
      phone: "01604 502782",
      note:
        "Google Form-এর পরিবর্তন ও পরিচালনা মেডোজি টিম আলাদাভাবে করে থাকে।",
      back: "হোমে ফিরে যান",
    },
  };

  const c = isBangla ? content.bn : content.en;

  return (
    <main className="min-h-screen bg-[#FDFDFD] text-[#17352A]">
      <div className="mx-auto max-w-[1050px] px-5 py-10 sm:px-8 sm:py-16">

        {/* Back link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-[#71877C] transition hover:text-[#174B38] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#19A069]"
        >
          <ArrowLeft size={15} />
          {c.back}
        </Link>

        {/* Introduction */}
        <header className="mb-16 mt-12 max-w-[760px]">
          <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#19A069]">
            {c.eyebrow}
          </p>

          <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl lg:text-[60px]">
            {c.title}
          </h1>

          <p className="mt-6 text-base leading-[1.9] text-[#52665A] sm:text-lg">
            {c.intro}
          </p>

          <div className="mt-9 flex max-w-[650px] gap-4 border-l-[3px] border-[#19A069] py-2 pl-5">
            <ShieldCheck
              size={21}
              className="mt-0.5 shrink-0 text-[#19A069]"
            />
            <div>
              <h2 className="text-sm font-bold text-[#17352A]">
                {c.summary}
              </h2>
              <p className="mt-1 text-sm leading-[1.8] text-[#52665A]">
                {c.summaryText}
              </p>
            </div>
          </div>
        </header>

        {/* Privacy FAQ */}
        <section className="max-w-[820px]">
          <div className="mb-7">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              {c.heading}
            </h2>
            <p className="mt-2 text-sm text-[#71877C]">
              {c.subheading}
            </p>
          </div>

          <div className="border-t border-[#DCE7DF]">
            {c.questions.map((item, index) => {
              const isOpen = activeQuestion === index;

              return (
                <div
                  key={item.q}
                  className="border-b border-[#DCE7DF]"
                >
                  <button
                    type="button"
                    onClick={() =>
                      setActiveQuestion(isOpen ? null : index)
                    }
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-5 py-6 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#19A069]"
                  >
                    <span className="text-[15px] font-semibold text-[#17352A] transition-colors hover:text-[#19815C] sm:text-base">
                      {item.q}
                    </span>

                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-200 ${
                        isOpen
                          ? "rotate-180 bg-[#E1F0E6] text-[#174B38]"
                          : "bg-transparent text-[#81948A] hover:bg-[#F0F5EF]"
                      }`}
                    >
                      <ChevronDown size={18} />
                    </span>
                  </button>

                  <div
                    className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="max-w-[720px] pb-6 pr-8 text-sm leading-[1.9] text-[#52665A] sm:text-[15px]">
                        {item.a}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Online consultations */}
        <section className="mt-16 max-w-[820px] border-t border-[#DCE7DF] pt-9">
          <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#19A069]">
            MEDOJI / GOOGLE MEET
          </p>

          <h2 className="mt-4 text-2xl font-bold tracking-tight">
            {c.meetHeading}
          </h2>

          <p className="mt-4 text-sm leading-[1.9] text-[#52665A] sm:text-base">
            {c.meetText}
          </p>
        </section>

        {/* Contact */}
        <section className="mt-16 max-w-[820px] rounded-xl bg-[#F0F5EF] p-6 sm:p-8">
          <h2 className="text-xl font-bold tracking-tight sm:text-2xl">
            {c.contactHeading}
          </h2>

          <p className="mt-3 max-w-[580px] text-sm leading-[1.8] text-[#52665A]">
            {c.contactText}
          </p>

          <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-[#174B38] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#216449] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#19A069] focus-visible:ring-offset-2"
            >
              <MessageCircle size={16} />
              {c.contactButton}
              <ArrowUpRight size={15} />
            </a>

            <span className="text-sm text-[#52665A]">
              {c.phoneLabel}: <strong>{c.phone}</strong>
            </span>
          </div>
        </section>

        {/* Note */}
        <p className="mt-8 max-w-[820px] text-xs leading-[1.8] text-[#81948A]">
          {c.note}
        </p>
      </div>
    </main>
  );
}
