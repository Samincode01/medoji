
"use client";

import Link from "next/link";
import { useLanguage } from "@/i18n/useLanguage";
import {
  ArrowLeft,
  ArrowUpRight,
  Clock3,
  PhoneCall,
  Check,
  AlertCircle,
  CalendarDays,
} from "lucide-react";

export default function BookingRefundPolicyPage() {
  const { isBangla } = useLanguage();

  const content = {
    en: {
      back: "Back to home",
      eyebrow: "MEDOJI HEALTHCARE",
      title: "Booking & Refund Policy",
      subtitle:
        "Clear information about cancellations, refunds and what happens when a session cannot take place.",
      online: "ONLINE SESSIONS",
      outcomesTitle: "What happens if a session is cancelled?",
      earlyTitle: "Cancelled in advance",
      earlyDescription: "At least 12 hours before the scheduled start.",
      fullRefund: "100% refund",
      lateTitle: "Late cancellation or absence",
      lateDescription:
        "Less than 12 hours before the session, or the client misses it.",
      partialRefund: "95% refund",
      providerTitle: "M​​edoji or professional issue",
      providerDescription:
        "M​​edoji or the selected professional cannot deliver the session.",
      providerRefund: "100% refund",
      exampleLabel: "Refund example",
      example: "BDT 1,000 paid",
      fee: "5% fee",
      returned: "BDT 950 returned",
      detailsTitle: "The details",
      fullHeading: "When you receive a full refund",
      fullText:
        "Cancel at least 12 hours before your scheduled online session and we will refund the full amount you paid.",
      providerText:
        "If Medoji or your professional cannot deliver the session, we will refund the full amount you paid.",
      lateHeading: "Late cancellation or missed session",
      lateText:
        "If you cancel less than 12 hours before your scheduled online session or miss a confirmed session, we will deduct 5% of the session fee you paid and refund the remaining 95%.",
      timingHeading: "When and how the refund is sent",
      timingText:
        "We send eligible refunds to your original payment method within 12 hours of receiving your cancellation or confirming a cancellation on our side. For missed sessions or sessions that cannot take place without prior notice, the 12 hours start at the scheduled end time.",
      cancelHeading: "How to cancel a booking",
      cancelText:
        "Contact our support team with your booking reference. Include your scheduled session date and time so we can identify your booking.",
      inPersonHeading: "What about in-person visits?",
      inPersonText:
        "This policy applies to online sessions. Please review the separate cancellation and refund terms provided for an in-person visit before confirming that booking.",
      supportTitle: "Need help with a booking?",
      supportText:
        "Our support team can help with questions about cancellations and refunds.",
      supportLink: "Help & Complaints",
      footerNote: "All session times are in Bangladesh Standard Time (BST).",
      hours: "12-hour cancellation window",
      refundTime: "Refund within 12 hours",
      originalMethod: "Returned to original payment method",
    },
    bn: {
      back: "হোমে ফিরে যান",
      eyebrow: "মেডোজি হেলথকেয়ার",
      title: "বুকিং ও রিফান্ড নীতিমালা",
      subtitle:
        "বুকিং বাতিল, রিফান্ড এবং সেশন অনুষ্ঠিত না হলে কী হবে—জেনে নিন সহজভাবে।",
      online: "অনলাইন সেশন",
      outcomesTitle: "সেশন বাতিল হলে কী হবে?",
      earlyTitle: "সময়মতো বাতিল",
      earlyDescription: "নির্ধারিত সময়ের অন্তত ১২ ঘণ্টা আগে বাতিল করলে।",
      fullRefund: "১০০% রিফান্ড",
      lateTitle: "দেরিতে বাতিল বা অনুপস্থিতি",
      lateDescription:
        "সেশনের ১২ ঘণ্টার কম আগে বাতিল করলে অথবা সেশনে উপস্থিত না হলে।",
      partialRefund: "৯৫% রিফান্ড",
      providerTitle: "মেডোজি বা পেশাজীবীর সমস্যা",
      providerDescription:
        "মেডোজি বা নির্বাচিত পেশাজীবী সেশনটি দিতে অসমর্থ হলে।",
      providerRefund: "১০০% রিফান্ড",
      exampleLabel: "রিফান্ডের উদাহরণ",
      example: "১,০০০ টাকা প্রদান",
      fee: "৫% ফি",
      returned: "৯৫০ টাকা ফেরত",
      detailsTitle: "বিস্তারিত নীতিমালা",
      fullHeading: "কখন সম্পূর্ণ রিফান্ড পাবেন",
      fullText:
        "আপনার নির্ধারিত অনলাইন সেশনের অন্তত ১২ ঘণ্টা আগে বাতিল করলে, আপনাকে সম্পূর্ণ অর্থ ফেরত দেওয়া হবে।",
      providerText:
        "মেডোজি বা আপনার নির্বাচিত পেশাজীবী সেশনটি দিতে অসমর্থ হলে, আপনাকে সম্পূর্ণ অর্থ ফেরত দেওয়া হবে।",
      lateHeading: "দেরিতে বাতিল বা সেশনে অনুপস্থিতি",
      lateText:
        "নির্ধারিত অনলাইন সেশনের ১২ ঘণ্টার কম সময় আগে বাতিল করলে অথবা নিশ্চিত সেশনে উপস্থিত না হলে, প্রদত্ত সেশন ফি থেকে ৫% কেটে বাকি ৯৫% অর্থ ফেরত দেওয়া হবে।",
      timingHeading: "রিফান্ডের সময় ও পদ্ধতি",
      timingText:
        "আপনার বাতিলের অনুরোধ পাওয়ার অথবা আমাদের পক্ষ থেকে বাতিল নিশ্চিত হওয়ার ১২ ঘণ্টার মধ্যে যোগ্য রিফান্ড মূল পেমেন্ট পদ্ধতিতে পাঠানো হবে। পূর্ব ঘোষণা ছাড়া সেশন অনুষ্ঠিত না হলে বা আপনি অনুপস্থিত থাকলে, নির্ধারিত সেশনের শেষ সময় থেকে ১২ ঘণ্টা গণনা করা হবে।",
      cancelHeading: "কীভাবে বুকিং বাতিল করবেন",
      cancelText:
        "বুকিং রেফারেন্সসহ আমাদের সাপোর্ট টিমের সঙ্গে যোগাযোগ করুন। বুকিং শনাক্ত করার জন্য সেশনের নির্ধারিত তারিখ ও সময় উল্লেখ করুন।",
      inPersonHeading: "সরাসরি চিকিৎসাসেবার ক্ষেত্রে",
      inPersonText:
        "এই নীতিমালা শুধুমাত্র অনলাইন সেশনের জন্য প্রযোজ্য। সরাসরি চিকিৎসাসেবা বুক করার আগে সেই বুকিংয়ের জন্য দেওয়া পৃথক বাতিল ও রিফান্ড নীতিমালা দেখে নিন।",
      supportTitle: "বুকিং নিয়ে সাহায্য প্রয়োজন?",
      supportText:
        "বাতিল বা রিফান্ড সম্পর্কে কোনো প্রশ্ন থাকলে আমাদের সাপোর্ট টিমের সঙ্গে যোগাযোগ করুন।",
      supportLink: "সহায়তা ও অভিযোগ",
      footerNote: "সকল সেশনের সময় বাংলাদেশ স্ট্যান্ডার্ড টাইম (BST) অনুযায়ী।",
      hours: "১২ ঘণ্টার বাতিলের সময়সীমা",
      refundTime: "১২ ঘণ্টার মধ্যে রিফান্ড",
      originalMethod: "মূল পেমেন্ট পদ্ধতিতে ফেরত",
    },
  };

  const c = isBangla ? content.bn : content.en;

  const policies = [
    {
      number: "01",
      title: c.earlyTitle,
      description: c.earlyDescription,
      result: c.fullRefund,
      tone: "green",
    },
    {
      number: "02",
      title: c.lateTitle,
      description: c.lateDescription,
      result: c.partialRefund,
      tone: "amber",
    },
    {
      number: "03",
      title: c.providerTitle,
      description: c.providerDescription,
      result: c.providerRefund,
      tone: "green",
    },
  ];

  const details = [
    {
      icon: Check,
      title: c.fullHeading,
      paragraphs: [c.fullText, c.providerText],
    },
    {
      icon: AlertCircle,
      title: c.lateHeading,
      paragraphs: [c.lateText],
    },
    {
      icon: Clock3,
      title: c.timingHeading,
      paragraphs: [c.timingText],
    },
    {
      icon: CalendarDays,
      title: c.cancelHeading,
      paragraphs: [c.cancelText],
    },
  ];

  return (
    <main className="min-h-screen bg-[#FDFDFD] text-[#17352A]">
      <div className="mx-auto max-w-[1080px] px-5 pb-12 pt-8 sm:px-8 sm:pb-16 sm:pt-12">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-[#718278] transition hover:text-[#174B38]"
        >
          <ArrowLeft size={16} />
          {c.back}
        </Link>

        {/* Page introduction */}
        <header className="mb-10 mt-10 max-w-[760px] sm:mb-12 sm:mt-14">
          <p className="mb-4 text-[11px] font-semibold tracking-[0.2em] text-[#19815C]">
            {c.eyebrow}
          </p>

          <h1 className="text-[38px] font-semibold leading-[1.12] tracking-[-0.045em] text-[#17352A] sm:text-5xl lg:text-[58px]">
            {c.title}
          </h1>

          <p className="mt-5 max-w-[620px] text-[15px] leading-7 text-[#64766C] sm:text-base sm:leading-8">
            {c.subtitle}
          </p>

          <span className="mt-6 inline-flex items-center rounded-full bg-[#EAF3ED] px-3 py-1.5 text-[11px] font-semibold tracking-[0.12em] text-[#276247]">
            {c.online}
          </span>
        </header>

        {/* Refund outcomes */}
        <section>
          <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
            <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
              {c.outcomesTitle}
            </h2>
            <span className="text-xs text-[#829087]">{c.hours}</span>
          </div>

          <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
            {policies.map((policy) => (
              <article
                key={policy.number}
                className="flex min-h-[190px] flex-col border-t-2 border-[#DCE8DF] bg-[#F7F9F7] px-5 py-5 sm:px-6"
              >
                <span className="text-xs font-medium tracking-wider text-[#8A9A90]">
                  {policy.number}
                </span>

                <h3 className="mt-5 text-base font-semibold leading-snug text-[#17352A]">
                  {policy.title}
                </h3>

                <p className="mt-2 flex-1 text-sm leading-6 text-[#68796F]">
                  {policy.description}
                </p>

                <div
                  className={`mt-5 text-lg font-semibold tracking-tight ${
                    policy.tone === "amber"
                      ? "text-[#A87926]"
                      : "text-[#19815C]"
                  }`}
                >
                  {policy.result}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Simple refund calculation */}
        <section className="my-10 border-y border-[#E3EAE4] py-6 sm:my-12 sm:py-7">
          <p className="mb-4 text-[11px] font-semibold tracking-[0.16em] text-[#84938A]">
            {c.exampleLabel}
          </p>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-3">
            <span className="text-xl font-semibold tracking-tight sm:text-2xl">
              {c.example}
            </span>
            <span className="text-sm text-[#A87926]">− {c.fee}</span>
            <span className="text-[#9BA79F]">=</span>
            <span className="text-xl font-semibold tracking-tight text-[#19815C] sm:text-2xl">
              {c.returned}
            </span>
          </div>
        </section>

        {/* Policy details */}
        <section>
          <h2 className="mb-7 text-2xl font-semibold tracking-tight sm:text-3xl">
            {c.detailsTitle}
          </h2>

          <div className="divide-y divide-[#E5EBE6]">
            {details.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="grid grid-cols-1 gap-3 py-6 sm:grid-cols-[220px_1fr] sm:gap-8 sm:py-7"
                >
                  <div className="flex items-center gap-3">
                    <Icon size={17} className="shrink-0 text-[#19815C]" />
                    <h3 className="text-[15px] font-semibold text-[#244637]">
                      {item.title}
                    </h3>
                  </div>

                  <div className="space-y-3">
                    {item.paragraphs.map((paragraph) => (
                      <p
                        key={paragraph}
                        className="text-sm leading-7 text-[#64766C] sm:text-[15px]"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* In-person policy */}
        <section className="mt-8 border-l-2 border-[#19815C] bg-[#F3F7F3] px-5 py-5 sm:px-7 sm:py-6">
          <h2 className="text-base font-semibold text-[#244637]">
            {c.inPersonHeading}
          </h2>
          <p className="mt-2 max-w-[760px] text-sm leading-7 text-[#64766C]">
            {c.inPersonText}
          </p>
        </section>

        {/* Support */}
        <section className="mt-12 flex flex-col justify-between gap-5 border-t border-[#DCE8DF] pt-7 sm:flex-row sm:items-center">
          <div>
            <div className="flex items-center gap-2">
              <PhoneCall size={16} className="text-[#19815C]" />
              <h2 className="text-lg font-semibold">{c.supportTitle}</h2>
            </div>
            <p className="mt-2 max-w-[520px] text-sm leading-6 text-[#718278]">
              {c.supportText}
            </p>
          </div>

          <Link
            href="/help-and-complaints"
            className="inline-flex min-h-11 w-fit items-center gap-3 rounded-full bg-[#174B38] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#216348]"
          >
            {c.supportLink}
            <ArrowUpRight size={16} />
          </Link>
        </section>

        <footer className="mt-8 flex items-center gap-2 border-t border-[#E8EDE9] pt-5 text-xs text-[#89968E]">
          <Clock3 size={14} />
          <p>{c.footerNote}</p>
        </footer>
      </div>
    </main>
  );
}
