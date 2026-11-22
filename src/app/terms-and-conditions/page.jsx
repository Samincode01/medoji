
"use client";

import Link from "next/link";
import { useLanguage } from "@/i18n/useLanguage";
import {
  ArrowLeft,
  ArrowUpRight,
  CalendarCheck,
  CreditCard,
  MessageCircle,
  RefreshCw,
  Stethoscope,
  ShieldCheck,
} from "lucide-react";

const WHATSAPP_URL = "https://wa.me/8801604502782";

export default function TermsAndConditionsPage() {
  const { isBangla } = useLanguage();

  const content = {
    en: {
      back: "Back to home",
      eyebrow: "MEDOJI HEALTHCARE / WEBSITE TERMS",
      title: "Terms & Conditions",
      intro:
        "These terms explain how Medoji Healthcare coordinates your access to independent healthcare professionals, appointments, payments and refunds.",
      updated: "Please read these terms before requesting a booking.",

      roleLabel: "01 / OUR ROLE",
      roleTitle: "M​​edoji and your clinician",
      roleText:
        "Your chosen doctor or psychologist provides your consultation and professional care. Medoji Healthcare coordinates appointment requests, payments and refunds between clients and independent professionals.",
      roleText2:
        "M​​edoji may receive a commission from the professional for coordinating bookings and related services.",

      bookingLabel: "02 / APPOINTMENTS",
      bookingTitle: "Booking and confirmation",
      bookingText:
        "Submitting a booking request does not automatically mean your appointment is confirmed. Every request is subject to the professional's availability.",
      onlineTitle: "Online sessions",
      onlineText:
        "Online sessions require verified advance payment before the booking can be confirmed.",
      inPersonTitle: "In-person visits",
      inPersonText:
        "In-person sessions do not require advance payment. Any payment arrangements will be communicated as part of your booking.",

      paymentLabel: "03 / PAYMENTS",
      paymentTitle: "Payments and booking status",
      paymentText:
        "For online sessions, your booking is confirmed after the required advance payment has been verified. Please follow the payment instructions provided during the booking process.",
      paymentText2:
        "If a booking cannot be confirmed, or a payment needs to be reviewed, contact our support team with your booking reference.",

      refundLabel: "04 / CANCELLATIONS",
      refundTitle: "Cancellations and refunds",
      refundText:
        "Cancellation deadlines, applicable deductions and refund eligibility are explained in our separate Booking & Refund Policy.",
      refundLink: "Read Booking & Refund Policy",
      refundNote:
        "Please review the refund policy before making an online booking.",

      responsibilityLabel: "05 / PROFESSIONAL CARE",
      responsibilityTitle: "Your healthcare professional",
      responsibilityText:
        "The doctor or psychologist you choose is responsible for providing your consultation and professional services. Medoji coordinates the booking and related administrative processes.",
      responsibilityText2:
        "Please provide accurate information when requesting an appointment and communicate any relevant booking requirements to your chosen professional.",

      supportLabel: "06 / SUPPORT",
      supportTitle: "Help and complaints",
      supportText:
        "For questions about bookings, payments or refunds, contact Medoji Healthcare through WhatsApp. Include your booking reference so our team can assist you.",
      whatsapp: "Contact us on WhatsApp",
      phoneLabel: "WhatsApp support",
      phone: "01604 502782",

      bookingCardTitle: "Before you book",
      bookingCardText:
        "A few things to remember when requesting an appointment.",
      point1: "All appointment requests depend on availability.",
      point2: "Online sessions require verified advance payment.",
      point3: "In-person visits do not require advance payment.",
      point4: "Refunds follow the separate refund policy.",

      helpCardTitle: "Need help with a booking?",
      helpCardText:
        "Our support team can help with booking, payment and refund questions.",
      footerNote:
        "By using Medoji Healthcare to request a booking, you acknowledge that you have read these terms.",
    },

    bn: {
      back: "হোমে ফিরে যান",
      eyebrow: "মেডোজি হেলথকেয়ার / ওয়েবসাইটের শর্তাবলি",
      title: "ব্যবহারের শর্তাবলি",
      intro:
        "স্বতন্ত্র স্বাস্থ্যসেবা পেশাজীবীদের সঙ্গে যোগাযোগ, অ্যাপয়েন্টমেন্ট, পেমেন্ট ও রিফান্ড সমন্বয়ের ক্ষেত্রে মেডোজি হেলথকেয়ার কীভাবে কাজ করে, এই শর্তাবলিতে তা ব্যাখ্যা করা হয়েছে।",
      updated: "বুকিংয়ের অনুরোধ করার আগে অনুগ্রহ করে শর্তাবলি পড়ুন।",

      roleLabel: "০১ / আমাদের ভূমিকা",
      roleTitle: "মেডোজি ও আপনার চিকিৎসক",
      roleText:
        "আপনার নির্বাচিত চিকিৎসক বা মনোবিজ্ঞানী আপনাকে পরামর্শ ও পেশাগত সেবা প্রদান করবেন। মেডোজি হেলথকেয়ার গ্রাহক ও স্বতন্ত্র পেশাজীবীদের মধ্যে অ্যাপয়েন্টমেন্টের অনুরোধ, পেমেন্ট এবং রিফান্ড সমন্বয় করে।",
      roleText2:
        "বুকিং ও সংশ্লিষ্ট সেবা সমন্বয়ের জন্য মেডোজি সংশ্লিষ্ট পেশাজীবীর কাছ থেকে কমিশন পেতে পারে।",

      bookingLabel: "০২ / অ্যাপয়েন্টমেন্ট",
      bookingTitle: "বুকিং ও নিশ্চিতকরণ",
      bookingText:
        "বুকিংয়ের অনুরোধ জমা দিলেই অ্যাপয়েন্টমেন্ট নিশ্চিত হয়ে যায় না। প্রতিটি অনুরোধ সংশ্লিষ্ট পেশাজীবীর সময়সূচি ও প্রাপ্যতার ওপর নির্ভরশীল।",
      onlineTitle: "অনলাইন সেশন",
      onlineText:
        "অনলাইন সেশন নিশ্চিত করার আগে নির্ধারিত অগ্রিম পেমেন্ট যাচাই করা আবশ্যক।",
      inPersonTitle: "সরাসরি চিকিৎসাসেবা",
      inPersonText:
        "সরাসরি চিকিৎসাসেবার জন্য অগ্রিম পেমেন্টের প্রয়োজন নেই। বুকিংয়ের সময় পেমেন্ট সংক্রান্ত ব্যবস্থা জানিয়ে দেওয়া হবে।",

      paymentLabel: "০৩ / পেমেন্ট",
      paymentTitle: "পেমেন্ট ও বুকিংয়ের অবস্থা",
      paymentText:
        "অনলাইন সেশনের ক্ষেত্রে নির্ধারিত অগ্রিম পেমেন্ট যাচাই হওয়ার পর বুকিং নিশ্চিত করা হবে। বুকিং প্রক্রিয়ায় দেওয়া পেমেন্ট নির্দেশনা অনুসরণ করুন।",
      paymentText2:
        "কোনো বুকিং নিশ্চিত করা না গেলে অথবা পেমেন্ট যাচাইয়ের প্রয়োজন হলে, আপনার বুকিং রেফারেন্সসহ আমাদের সাপোর্ট টিমের সঙ্গে যোগাযোগ করুন।",

      refundLabel: "০৪ / বুকিং বাতিল",
      refundTitle: "বাতিল ও রিফান্ড",
      refundText:
        "বুকিং বাতিলের সময়সীমা, প্রযোজ্য কর্তন এবং রিফান্ড পাওয়ার শর্তাবলি আমাদের পৃথক বুকিং ও রিফান্ড নীতিমালায় ব্যাখ্যা করা হয়েছে।",
      refundLink: "বুকিং ও রিফান্ড নীতিমালা পড়ুন",
      refundNote:
        "অনলাইন বুকিং করার আগে অনুগ্রহ করে রিফান্ড নীতিমালা দেখে নিন।",

      responsibilityLabel: "০৫ / পেশাগত সেবা",
      responsibilityTitle: "আপনার স্বাস্থ্যসেবা পেশাজীবী",
      responsibilityText:
        "আপনার নির্বাচিত চিকিৎসক বা মনোবিজ্ঞানী পরামর্শ ও পেশাগত সেবা প্রদানের জন্য দায়ী থাকবেন। মেডোজি বুকিং এবং সংশ্লিষ্ট প্রশাসনিক কার্যক্রম সমন্বয় করে।",
      responsibilityText2:
        "অ্যাপয়েন্টমেন্টের অনুরোধ করার সময় সঠিক তথ্য প্রদান করুন এবং বুকিং সংক্রান্ত প্রয়োজনীয় বিষয়গুলো আপনার নির্বাচিত পেশাজীবীকে জানান।",

      supportLabel: "০৬ / সহায়তা",
      supportTitle: "সহায়তা ও অভিযোগ",
      supportText:
        "বুকিং, পেমেন্ট বা রিফান্ড সংক্রান্ত প্রশ্নের জন্য WhatsApp-এর মাধ্যমে মেডোজি হেলথকেয়ারের সঙ্গে যোগাযোগ করুন। সহায়তার জন্য আপনার বুকিং রেফারেন্স উল্লেখ করুন।",
      whatsapp: "WhatsApp-এ যোগাযোগ করুন",
      phoneLabel: "WhatsApp সহায়তা",
      phone: "01604 502782",

      bookingCardTitle: "বুকিংয়ের আগে জেনে নিন",
      bookingCardText:
        "অ্যাপয়েন্টমেন্টের অনুরোধ করার সময় কয়েকটি বিষয় মনে রাখুন।",
      point1: "প্রতিটি অ্যাপয়েন্টমেন্ট সংশ্লিষ্ট পেশাজীবীর প্রাপ্যতার ওপর নির্ভরশীল।",
      point2: "অনলাইন সেশনের জন্য যাচাইকৃত অগ্রিম পেমেন্ট প্রয়োজন।",
      point3: "সরাসরি চিকিৎসাসেবার জন্য অগ্রিম পেমেন্ট প্রয়োজন নেই।",
      point4: "রিফান্ড পৃথক রিফান্ড নীতিমালা অনুযায়ী পরিচালিত হয়।",

      helpCardTitle: "বুকিং নিয়ে সাহায্য প্রয়োজন?",
      helpCardText:
        "বুকিং, পেমেন্ট ও রিফান্ড সংক্রান্ত প্রশ্নে আমাদের সাপোর্ট টিম আপনাকে সহায়তা করতে পারে।",
      footerNote:
        "মেডোজি হেলথকেয়ারের মাধ্যমে বুকিংয়ের অনুরোধ করার অর্থ হলো আপনি এই শর্তাবলি পড়েছেন বলে স্বীকার করছেন।",
    },
  };

  const c = isBangla ? content.bn : content.en;

  const sections = [
    {
      id: "role",
      label: c.roleLabel,
      title: c.roleTitle,
      icon: Stethoscope,
      paragraphs: [c.roleText, c.roleText2],
    },
    {
      id: "booking",
      label: c.bookingLabel,
      title: c.bookingTitle,
      icon: CalendarCheck,
      paragraphs: [c.bookingText],
      subSections: [
        { title: c.onlineTitle, text: c.onlineText },
        { title: c.inPersonTitle, text: c.inPersonText },
      ],
    },
    {
      id: "payments",
      label: c.paymentLabel,
      title: c.paymentTitle,
      icon: CreditCard,
      paragraphs: [c.paymentText, c.paymentText2],
    },
    {
      id: "refunds",
      label: c.refundLabel,
      title: c.refundTitle,
      icon: RefreshCw,
      paragraphs: [c.refundText],
      refundLink: true,
    },
    {
      id: "professional-care",
      label: c.responsibilityLabel,
      title: c.responsibilityTitle,
      icon: ShieldCheck,
      paragraphs: [c.responsibilityText, c.responsibilityText2],
    },
    {
      id: "support",
      label: c.supportLabel,
      title: c.supportTitle,
      icon: MessageCircle,
      paragraphs: [c.supportText],
      whatsapp: true,
    },
  ];

  return (
    <main className="min-h-screen bg-[#F5F8F5] text-[#17352A]">
      <div className="mx-auto max-w-[1160px] px-5 py-9 sm:px-8 sm:py-14">

        {/* Back navigation */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-[#668074] transition hover:text-[#174433] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#19A069] rounded"
        >
          <ArrowLeft size={16} />
          {c.back}
        </Link>

        {/* Page heading */}
        <header className="mb-10 mt-8 max-w-3xl">
          <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#19815C]">
            {c.eyebrow}
          </p>

          <h1 className="mt-4 text-4xl font-bold tracking-tight text-[#17352A] sm:text-5xl lg:text-[58px]">
            {c.title}
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-[1.8] text-[#526A60] sm:text-lg">
            {c.intro}
          </p>

          <p className="mt-4 text-sm text-[#81948A]">
            {c.updated}
          </p>
        </header>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,1fr)_340px] lg:gap-16">

          {/* Terms content */}
          <div className="min-w-0">

            {sections.map((section, index) => {
              const Icon = section.icon;

              return (
                <section
                  key={section.id}
                  id={section.id}
                  className="scroll-mt-24 border-t border-[#DCE7DF] py-8 first:border-t-0 first:pt-0"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#E1F0E6] text-[#174B38]">
                      <Icon size={17} strokeWidth={1.8} />
                    </span>

                    <span className="text-[10px] font-bold tracking-[0.15em] text-[#19815C]">
                      {section.label}
                    </span>
                  </div>

                  <h2 className="mt-4 text-2xl font-bold tracking-tight text-[#17352A] sm:text-[27px]">
                    {section.title}
                  </h2>

                  <div className="mt-4 space-y-4">
                    {section.paragraphs.map((paragraph, paragraphIndex) => (
                      <p
                        key={paragraphIndex}
                        className="text-[15px] leading-[1.85] text-[#42594E] sm:text-base"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>

                  {section.subSections && (
                    <div className="mt-6 grid gap-4 sm:grid-cols-2">
                      {section.subSections.map((sub) => (
                        <div
                          key={sub.title}
                          className="border-l-2 border-[#19A069] pl-4"
                        >
                          <h3 className="text-sm font-bold text-[#174B38]">
                            {sub.title}
                          </h3>
                          <p className="mt-2 text-sm leading-[1.8] text-[#526A60]">
                            {sub.text}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}

                  {section.refundLink && (
                    <div className="mt-6">
                      <Link
                        href="/booking-refund-policy"
                        className="group inline-flex items-center gap-2 rounded-full bg-[#E1F0E6] px-5 py-3 text-sm font-semibold text-[#174B38] transition hover:bg-[#D1E8D9] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#19A069]"
                      >
                        {c.refundLink}
                        <ArrowUpRight
                          size={15}
                          className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        />
                      </Link>

                      <p className="mt-3 text-xs leading-relaxed text-[#81948A]">
                        {c.refundNote}
                      </p>
                    </div>
                  )}

                  {section.whatsapp && (
                    <a
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#174B38] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#216449] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#19A069] focus-visible:ring-offset-2"
                    >
                      <MessageCircle size={16} />
                      {c.whatsapp}
                      <ArrowUpRight size={14} />
                    </a>
                  )}
                </section>
              );
            })}
          </div>

          {/* Right sidebar */}
          <aside className="space-y-6 lg:sticky lg:top-8 lg:self-start">

            {/* Booking summary */}
            <div className="rounded-2xl bg-[#17352A] p-6 text-white sm:p-7">
              <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#8BC9A7]">
                MEDOJI HEALTHCARE
              </p>

              <h2 className="mt-4 text-xl font-bold">
                {c.bookingCardTitle}
              </h2>

              <p className="mt-2 text-sm leading-[1.8] text-[#C3D5CB]">
                {c.bookingCardText}
              </p>

              <div className="my-6 h-px bg-[#355747]" />

              <ul className="space-y-4">
                {[c.point1, c.point2, c.point3, c.point4].map(
                  (point, index) => (
                    <li key={index} className="flex gap-3">
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#64C18D]" />
                      <span className="text-sm leading-[1.7] text-[#E0EBE4]">
                        {point}
                      </span>
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* Support card */}
            <div className="rounded-2xl border border-[#DCE7DF] bg-white p-6 sm:p-7">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#E1F0E6] text-[#174B38]">
                <MessageCircle size={19} />
              </div>

              <h2 className="mt-5 text-lg font-bold text-[#17352A]">
                {c.helpCardTitle}
              </h2>

              <p className="mt-2 text-sm leading-[1.8] text-[#60766B]">
                {c.helpCardText}
              </p>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 flex items-center justify-between gap-3 border-t border-[#E5EDE7] pt-4 text-sm font-semibold text-[#174B38] transition hover:text-[#19A069]"
              >
                <span>{c.phoneLabel}</span>
                <span className="whitespace-nowrap">{c.phone}</span>
              </a>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#E1F0E6] px-4 py-3 text-sm font-semibold text-[#174B38] transition hover:bg-[#D1E8D9]"
              >
                {c.whatsapp}
                <ArrowUpRight size={15} />
              </a>
            </div>

            {/* Quick navigation */}
            <div className="px-1 py-2">
              <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#81948A]">
                {isBangla ? "এই পাতায়" : "ON THIS PAGE"}
              </p>

              <nav className="mt-4 space-y-3">
                {sections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="block text-sm text-[#60766B] transition hover:text-[#174B38]"
                  >
                    {section.title}
                  </a>
                ))}
              </nav>
            </div>
          </aside>
        </div>

        {/* Bottom acknowledgement */}
        <div className="mt-10 border-t border-[#DCE7DF] py-7">
          <p className="max-w-3xl text-xs leading-[1.8] text-[#81948A]">
            {c.footerNote}
          </p>
        </div>
      </div>
    </main>
  );
}
