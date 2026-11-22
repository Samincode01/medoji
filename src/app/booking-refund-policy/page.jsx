
"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "@/images/logo.png";
import { useLanguage } from "@/i18n/useLanguage";
import { ArrowLeft, PhoneCall, Clock3, CreditCard } from "lucide-react";

export default function BookingRefundPolicyPage() {
  const { isBangla } = useLanguage();

  const content = {
    en: {
      back: "Back to home",
      title: "Booking & Refund Policy",
      subtitle:
        "Understand our cancellation and refund process before booking an online session.",
      online: "Online sessions",

      decisionTitle: "Why did the session not take place?",
      earlyTitle: "Client cancels early",
      earlyDescription:
        "At least 12 hours before the scheduled start.",
      fullRefund: "100% refund",

      lateTitle: "Late cancellation or absence",
      lateDescription:
        "Less than 12 hours before the scheduled start, or the client misses the session.",
      partialRefund: "95% refund",

      providerTitle: "Med​oji or provider issue",
      providerDescription:
        "Med​oji or the professional cannot deliver the session.",
      refundSent: "Refund sent within 12 hours",
      originalMethod: "To your original payment method",
      example: "Example: BDT 1,000 paid − BDT 50 fee = BDT 950 refunded",

      fullHeading: "Full refund",
      fullText:
        "Cancel at least 12 hours before your scheduled online session and we will refund the full amount you paid.",
      providerText:
        "If Medoji or your professional cannot deliver the session, we will refund the full amount you paid.",

      lateHeading: "Late cancellation or missed session",
      lateText:
        "If you cancel less than 12 hours before your scheduled online session or miss a confirmed session, we will deduct 5% of the session fee you paid and refund the remaining 95%.",

      timingHeading: "Refund timing and method",
      timingText:
        "We send eligible refunds to your original payment method within 12 hours of receiving your cancellation or confirming a cancellation on our side. For missed sessions or sessions that cannot take place without prior notice, the 12 hours start at the scheduled end time.",

      cancelHeading: "How to cancel",
      cancelText:
        "To cancel, contact our support team with your booking reference. Please include your scheduled session date and time so we can identify your booking.",

      inPersonHeading: "In-person visits",
      inPersonText:
        "This policy applies to online sessions. Please review the separate cancellation and refund terms provided for an in-person visit before confirming that booking.",

      support: "Need help?",
      supportText:
        "Contact our support team if you have questions about a booking or refund.",
      supportLink: "Help & Complaints",
      footerNote: "All session times are in Bangladesh Standard Time (BST).",
    },

    bn: {
      back: "হোমে ফিরে যান",
      title: "বুকিং ও রিফান্ড নীতিমালা",
      subtitle:
        "অনলাইন সেশন বুক করার আগে বাতিল ও রিফান্ড প্রক্রিয়া সম্পর্কে জেনে নিন।",
      online: "অনলাইন সেশন",

      decisionTitle: "সেশনটি কেন অনুষ্ঠিত হয়নি?",
      earlyTitle: "সময়মতো বুকিং বাতিল",
      earlyDescription:
        "নির্ধারিত সময়ের অন্তত ১২ ঘণ্টা আগে বাতিল করলে।",
      fullRefund: "১০০% রিফান্ড",

      lateTitle: "দেরিতে বাতিল বা অনুপস্থিতি",
      lateDescription:
        "নির্ধারিত সময়ের ১২ ঘণ্টার কম আগে বাতিল করলে অথবা সেশনে উপস্থিত না হলে।",
      partialRefund: "৯৫% রিফান্ড",

      providerTitle: "মেডোজি বা প্রোভাইডারের সমস্যা",
      providerDescription:
        "মেডোজি বা সংশ্লিষ্ট পেশাজীবী সেশনটি দিতে অসমর্থ হলে।",
      refundSent: "১২ ঘণ্টার মধ্যে রিফান্ড পাঠানো হবে",
      originalMethod: "আপনার মূল পেমেন্ট পদ্ধতিতে",
      example:
        "উদাহরণ: ১,০০০ টাকা প্রদান − ৫০ টাকা ফি = ৯৫০ টাকা রিফান্ড",

      fullHeading: "সম্পূর্ণ রিফান্ড",
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

      cancelHeading: "কীভাবে বাতিল করবেন",
      cancelText:
        "বুকিং বাতিল করতে আপনার বুকিং রেফারেন্সসহ আমাদের সাপোর্ট টিমের সঙ্গে যোগাযোগ করুন। বুকিং শনাক্ত করার জন্য সেশনের নির্ধারিত তারিখ ও সময় উল্লেখ করুন।",

      inPersonHeading: "সরাসরি চিকিৎসাসেবা",
      inPersonText:
        "এই নীতিমালা শুধুমাত্র অনলাইন সেশনের জন্য প্রযোজ্য। সরাসরি চিকিৎসাসেবা বুক করার আগে সেই বুকিংয়ের জন্য দেওয়া পৃথক বাতিল ও রিফান্ড নীতিমালা দেখে নিন।",

      support: "সাহায্য প্রয়োজন?",
      supportText:
        "বুকিং বা রিফান্ড সম্পর্কে কোনো প্রশ্ন থাকলে আমাদের সাপোর্ট টিমের সঙ্গে যোগাযোগ করুন।",
      supportLink: "সহায়তা ও অভিযোগ",
      footerNote: "সকল সেশনের সময় বাংলাদেশ স্ট্যান্ডার্ড টাইম (BST) অনুযায়ী।",
    },
  };

  const c = isBangla ? content.bn : content.en;

  return (
    <main className="min-h-screen bg-[#F5F8F5] text-[#17352A]">
      <div className="mx-auto max-w-[1200px] px-5 py-10 sm:px-8 sm:py-14">

        {/* Header */}
        <div className="mb-8">
          <Link
            href="/"
            className="mb-5 inline-flex items-center gap-2 text-sm font-medium text-[#668074] transition hover:text-[#174433] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#19A069] rounded"
          >
            <ArrowLeft size={16} />
            {c.back}
          </Link>

          <h1 className="text-3xl font-bold tracking-tight text-[#17352A] sm:text-4xl lg:text-[44px]">
            {c.title}
          </h1>

          <p className="mt-3 max-w-3xl text-base leading-relaxed text-[#526A60] sm:text-lg">
            {c.subtitle}
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">

          {/* Refund Flowchart */}
          <section className="lg:col-span-7">
            <div className="rounded-xl border border-[#DCE8DF] bg-white p-5 shadow-sm sm:p-7">

              {/* Small browser-style header */}
              <div className="mb-7 flex items-center gap-2 border-b border-[#E6EEE8] pb-4">
                <div className="flex gap-1">
                  <span className="h-2 w-2 rounded-full bg-[#8AB7A0]" />
                  <span className="h-2 w-2 rounded-full bg-[#8AB7A0]" />
                  <span className="h-2 w-2 rounded-full bg-[#8AB7A0]" />
                </div>
                <span className="text-[11px] font-medium text-[#668074]">
                  Medoji Healthcare / {c.title}
                </span>
              </div>

              <div className="mb-8 flex items-center gap-3">
                <Image
                  src={logo}
                  alt="M​edoji Healthcare"
                  width={820}
                  height={360}
                  className="h-auto w-[105px] object-contain"
                />
              </div>

              <h2 className="text-2xl font-bold tracking-tight sm:text-[30px]">
                {c.title}
              </h2>
              <p className="mt-2 text-sm text-[#668074]">
                {c.online}
              </p>

              {/* Decision flow */}
              <div className="mt-8">
                <div className="mx-auto max-w-[280px] rounded-lg bg-[#173F30] px-4 py-3 text-center text-sm font-semibold text-white">
                  {c.decisionTitle}
                </div>

                {/* Connector */}
                <div className="relative mx-auto h-11 max-w-[80%]">
                  <div className="absolute left-1/2 top-0 h-5 w-px -translate-x-1/2 bg-[#19815C]" />
                  <div className="absolute left-[16.66%] right-[16.66%] top-5 h-px bg-[#19815C]" />
                  <div className="absolute left-[16.66%] top-5 h-6 w-px bg-[#19815C]" />
                  <div className="absolute left-1/2 top-5 h-6 w-px bg-[#19815C]" />
                  <div className="absolute right-[16.66%] top-5 h-6 w-px bg-[#19815C]" />
                  <div className="absolute left-[calc(16.66%-4px)] top-[23px] h-2 w-2 rotate-45 border-b-2 border-r-2 border-[#19815C]" />
                  <div className="absolute left-[calc(50%-4px)] top-[23px] h-2 w-2 rotate-45 border-b-2 border-r-2 border-[#19815C]" />
                  <div className="absolute right-[calc(16.66%-4px)] top-[23px] h-2 w-2 rotate-45 border-b-2 border-r-2 border-[#19815C]" />
                </div>

                {/* Three decision cards */}
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-3">
                  <div className="flex min-h-[170px] flex-col rounded-xl border border-[#D3E4D8] bg-[#EAF3ED] p-3">
                    <h3 className="text-sm font-bold leading-snug">
                      {c.earlyTitle}
                    </h3>
                    <p className="mt-3 flex-1 text-xs leading-relaxed text-[#5C7468]">
                      {c.earlyDescription}
                    </p>
                    <div className="mt-3 rounded-md bg-[#174B38] px-2 py-2 text-center text-xs font-bold text-white">
                      {c.fullRefund}
                    </div>
                  </div>

                  <div className="flex min-h-[170px] flex-col rounded-xl border border-[#E9DDB8] bg-[#FFF5D8] p-3">
                    <h3 className="text-sm font-bold leading-snug">
                      {c.lateTitle}
                    </h3>
                    <p className="mt-3 flex-1 text-xs leading-relaxed text-[#766B4E]">
                      {c.lateDescription}
                    </p>
                    <div className="mt-3 rounded-md bg-[#174B38] px-2 py-2 text-center text-xs font-bold text-white">
                      {c.partialRefund}
                    </div>
                  </div>

                  <div className="flex min-h-[170px] flex-col rounded-xl border border-[#D3E4D8] bg-[#EAF3ED] p-3">
                    <h3 className="text-sm font-bold leading-snug">
                      {c.providerTitle}
                    </h3>
                    <p className="mt-3 flex-1 text-xs leading-relaxed text-[#5C7468]">
                      {c.providerDescription}
                    </p>
                    <div className="mt-3 rounded-md bg-[#174B38] px-2 py-2 text-center text-xs font-bold text-white">
                      {c.fullRefund}
                    </div>
                  </div>
                </div>

                {/* Downward connectors */}
                <div className="relative mx-auto h-10 max-w-[80%]">
                  <div className="absolute left-[16.66%] top-0 h-5 w-px bg-[#19815C]" />
                  <div className="absolute left-1/2 top-0 h-5 w-px bg-[#19815C]" />
                  <div className="absolute right-[16.66%] top-0 h-5 w-px bg-[#19815C]" />
                  <div className="absolute left-[16.66%] right-[16.66%] top-5 h-px bg-[#19815C]" />
                  <div className="absolute left-1/2 top-5 h-5 w-px bg-[#19815C]" />
                  <div className="absolute left-[calc(50%-4px)] top-[21px] h-2 w-2 rotate-45 border-b-2 border-r-2 border-[#19815C]" />
                </div>

                {/* Refund result */}
                <div className="mx-auto max-w-[440px] rounded-xl bg-[#174B38] px-4 py-4 text-center text-white">
                  <p className="text-base font-bold sm:text-lg">
                    {c.refundSent}
                  </p>
                  <p className="mt-1 text-xs text-[#C9DED2]">
                    {c.originalMethod}
                  </p>
                </div>

                {/* Example */}
                <div className="mt-5 rounded-lg border border-[#D3E4D8] bg-[#F2F7F3] px-4 py-4 text-center">
                  <p className="text-xs font-semibold leading-relaxed text-[#244B3A] sm:text-sm">
                    {c.example}
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Policy Details */}
          <section className="space-y-7 lg:col-span-5">

            <article>
              <h2 className="text-lg font-bold text-[#174B38]">
                {c.fullHeading}
              </h2>
              <p className="mt-2 text-[15px] leading-[1.65] text-[#344F43]">
                {c.fullText}
              </p>
              <p className="mt-2 text-[15px] leading-[1.65] text-[#344F43]">
                {c.providerText}
              </p>
            </article>

            <article>
              <h2 className="text-lg font-bold text-[#174B38]">
                {c.lateHeading}
              </h2>
              <p className="mt-2 text-[15px] leading-[1.65] text-[#344F43]">
                {c.lateText}
              </p>
            </article>

            <article>
              <h2 className="text-lg font-bold text-[#174B38]">
                {c.timingHeading}
              </h2>
              <p className="mt-2 text-[15px] leading-[1.65] text-[#344F43]">
                {c.timingText}
              </p>
            </article>

            <article>
              <h2 className="text-lg font-bold text-[#174B38]">
                {c.cancelHeading}
              </h2>
              <p className="mt-2 text-[15px] leading-[1.65] text-[#344F43]">
                {c.cancelText}
              </p>
            </article>

            <article className="rounded-xl border border-[#DCE8DF] bg-[#EDF4EF] p-5">
              <h2 className="text-base font-bold text-[#174B38]">
                {c.inPersonHeading}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-[#526A60]">
                {c.inPersonText}
              </p>
            </article>

            {/* Support */}
            <article className="rounded-xl bg-[#173F30] p-5 text-white">
              <div className="flex items-center gap-2">
                <PhoneCall size={17} className="text-[#70C59A]" />
                <h2 className="font-bold">{c.support}</h2>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-[#C3D5CB]">
                {c.supportText}
              </p>
              <Link
                href="/help-and-complaints"
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#8BD5AD] transition hover:text-white"
              >
                {c.supportLink}
                <ArrowLeft size={14} className="rotate-180" />
              </Link>
            </article>

          </section>
        </div>

        {/* Bottom note */}
        <div className="mt-10 flex items-center gap-2 border-t border-[#DCE8DF] pt-5 text-xs text-[#71877C]">
          <Clock3 size={14} />
          <p>{c.footerNote}</p>
        </div>
      </div>
    </main>
  );
}
