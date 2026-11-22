
"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  Clock3,
  MapPin,
  Video,
  Building2,
  GraduationCap,
  BriefcaseMedical,
  Languages,
  Stethoscope,
  BadgeCheck,
  Wallet,
  CalendarDays,
} from "lucide-react";
import { useLanguage } from "@/i18n/useLanguage";

const BOOKING_LINKS = {
  mental: "https://forms.gle/VvRppn73R7TvyoSt8",
  physical: "https://forms.gle/doctordemo",
};

export default function DoctorProfileView({ doctor }) {
  const { t, isBangla, formatNumber } = useLanguage();

  if (!doctor) return null;

  const {
    name,
    title,
    specialty,
    category,
    qualifications,
    affiliation,
    experienceYears,
    experienceLabel,
    experienceDetails,
    languages = [],
    fee,
    modes = [],
    area,
    nextSlot,
    image,
    initials,
    avatarBg,
    avatarColor,
    bookingLabel,
    verified,
  } = doctor;

  const imageUrl = image
    ? image.startsWith("http")
      ? image
      : image.startsWith("/assets/")
        ? `https://montorongo.com${image}`
        : image
    : null;

  const hasFee = fee !== null && fee !== undefined && fee !== "";
  const hasModes = Array.isArray(modes) && modes.length > 0;
  const hasLanguages = Array.isArray(languages) && languages.length > 0;
  const hasArea = Boolean(area);
  const hasAffiliation = Boolean(affiliation);
  const hasNextSlot = Boolean(nextSlot);
  const hasQualifications = Boolean(qualifications);

  const onlineMode = modes.some((mode) =>
    /online|video/i.test(mode)
  );

  const inPersonMode = modes.some((mode) =>
    /person|chamber/i.test(mode)
  );

  const bookingDestination = BOOKING_LINKS[category] || null;

  const bookingBtnText = isBangla
    ? bookingLabel || "অ্যাপয়েন্টমেন্ট বুক করুন"
    : "Request an Appointment";

  const displayExperience =
    experienceLabel || experienceDetails
      ? experienceLabel || experienceDetails
      : experienceYears !== null && experienceYears !== undefined
        ? isBangla
          ? `${formatNumber(experienceYears)}+ বছরের অভিজ্ঞতা`
          : `${experienceYears}+ years experience`
        : null;

  const displayNextSlot = nextSlot
    ? isBangla
      ? nextSlot.replace("Tomorrow", "আগামীকাল").replace("Today", "আজ")
      : nextSlot
    : null;

  const getLocalizedMode = (modeStr) => {
    if (!isBangla) return modeStr;

    const lower = modeStr.toLowerCase();

    if (lower.includes("online") || lower.includes("video")) {
      return "অনলাইন ভিডিও";
    }

    if (lower.includes("person") || lower.includes("chamber")) {
      return "চেম্বার ভিজিট";
    }

    return modeStr;
  };

  const getLocalizedLanguage = (langStr) => {
    if (!isBangla) return langStr;

    const lower = langStr.toLowerCase();

    if (lower === "bangla" || lower === "bengali") return "বাংলা";
    if (lower === "english") return "ইংরেজি";

    return langStr;
  };

  const onlineTitle = isBangla
    ? "অনলাইন সেশন"
    : "Online session";

  const onlineDescription = isBangla
    ? "সেশন নিশ্চিত করতে অগ্রিম পেমেন্ট করতে হবে। সেশন শুরুর অন্তত ১২ ঘণ্টা আগে বাতিল করলে সম্পূর্ণ টাকা ফেরত পাবেন। পরে বাতিল করলে ৫% কেটে ৯৫% ফেরত দেওয়া হবে।"
    : "Pay in advance to confirm your session. Cancel at least 12 hours before the start for a full refund. Later cancellations receive a 95% refund after a 5% deduction.";

  const inPersonTitle = isBangla
    ? "সরাসরি সেশন"
    : "In-person session";

  const inPersonDescription = isBangla
    ? "সরাসরি সেশনের জন্য অগ্রিম পেমেন্টের প্রয়োজন নেই।"
    : "No advance payment is required for an in-person session.";

  const confirmationTitle = isBangla
    ? "বুকিং কীভাবে নিশ্চিত হবে"
    : "How booking is confirmed";

  const onlineConfirmation = isBangla
    ? "অনলাইন: মেডোজি সময় নিশ্চিত করে পেমেন্টের নির্দেশনা পাঠাবে। পেমেন্ট যাচাইয়ের পর বুকিং নিশ্চিত করে Google Meet লিংক পাঠানো হবে।"
    : "Online: Medoji checks availability and sends payment instructions. After verifying payment, Medoji confirms the booking and sends the Google Meet link.";

  const inPersonConfirmation = isBangla
    ? "সরাসরি: মেডোজি সময় নিশ্চিত করে অ্যাপয়েন্টমেন্টের বিস্তারিত জানাবে।"
    : "In person: Medoji confirms availability and shares the appointment details.";

  return (
    <main className="min-h-screen bg-[#FDFDFD] text-[#17352A]">
      {/* Back navigation */}
      <div className="border-b border-[#DCE7DF] bg-[#F0F5EF]">
        <div className="mx-auto max-w-[1150px] px-5 py-5 sm:px-8">
          <Link
            href="/specialist"
            className="group inline-flex items-center gap-2 text-[13px] font-medium text-[#52665A] transition-colors hover:text-[#174433]"
          >
            <ArrowLeft
              size={16}
              className="transition-transform group-hover:-translate-x-1"
            />
            {t("doctorProfile.backLink")}
          </Link>
        </div>
      </div>

      <div className="mx-auto max-w-[1150px] px-5 pb-20 pt-8 sm:px-8 sm:pt-12">

        {/* SPECIALIST PROFILE */}
        <section className="overflow-hidden rounded-[24px] border border-[#DCE7DF] bg-white shadow-[0_8px_35px_rgba(19,47,37,0.04)]">
          <div className="grid md:grid-cols-[300px_1fr]">
            <div className="p-5 sm:p-7">
              <div className="relative mx-auto aspect-[4/5] w-full max-w-[300px] overflow-hidden rounded-[18px] bg-[#EEF2EF]">
                {imageUrl ? (
                  <Image
                    src={imageUrl}
                    alt={name || "Healthcare professional"}
                    fill
                    priority
                    sizes="(max-width: 768px) 90vw, 300px"
                    className="object-cover object-center"
                  />
                ) : (
                  <div
                    className={`flex h-full w-full items-center justify-center ${
                      avatarBg || "bg-[#E1F0E6]"
                    } ${avatarColor || "text-[#174433]"}`}
                  >
                    <span className="text-7xl font-semibold">
                      {initials || name?.charAt(0) || "D"}
                    </span>
                  </div>
                )}
              </div>
            </div>

            <div className="flex flex-col justify-center px-5 pb-7 sm:px-8 md:py-9 md:pr-10">
              <div className="flex flex-wrap items-center gap-2">
                {specialty && (
                  <span className="rounded-full bg-[#E1F0E6] px-3 py-1.5 text-[10px] font-bold tracking-wide text-[#174433]">
                    {specialty}
                  </span>
                )}

                {verified && (
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-[#DCE7DF] px-3 py-1.5 text-[10px] font-medium text-[#52665A]">
                    <BadgeCheck size={13} className="text-[#198052]" />
                    {t("doctorProfile.verifiedBadge")}
                  </span>
                )}
              </div>

              {title && (
                <p className="mt-5 text-[14px] font-medium text-[#64816E]">
                  {title}
                </p>
              )}

              <h1 className="mt-2 text-[30px] font-semibold leading-tight tracking-[-0.04em] text-[#132F25] sm:text-[38px]">
                {name}
              </h1>

              {hasQualifications && (
                <p className="mt-4 max-w-[570px] text-[13px] leading-[1.9] text-[#52665A]">
                  {qualifications}
                </p>
              )}

              {(displayExperience || hasArea) && (
                <div className="mt-6 flex flex-wrap gap-x-6 gap-y-4">
                  {displayExperience && (
                    <div className="flex items-center gap-2 text-[12px] text-[#52665A]">
                      <BriefcaseMedical size={16} className="text-[#19A069]" />
                      {displayExperience}
                    </div>
                  )}

                  {hasArea && (
                    <div className="flex items-center gap-2 text-[12px] text-[#52665A]">
                      <MapPin size={16} className="text-[#19A069]" />
                      {area}
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </section>

        {/* BOOKING AND PROFILE INFORMATION */}
        <div className="mt-12 grid items-start gap-12 lg:grid-cols-[1fr_350px] lg:gap-16">

          {/* MAIN CONTENT */}
          <div className="min-w-0">

            {/* BOOKING */}
            <section id="booking">
              <div className="mb-6">
                <p className="text-[10px] font-bold tracking-[0.17em] text-[#19815C]">
                  {isBangla ? "অ্যাপয়েন্টমেন্ট" : "APPOINTMENT"}
                </p>

                <h2 className="mt-2 text-[26px] font-semibold tracking-[-0.035em] text-[#17352A] sm:text-3xl">
                  {isBangla ? "আপনার সেশন বেছে নিন" : "Choose your session"}
                </h2>

                <p className="mt-2 max-w-[530px] text-[13px] leading-6 text-[#718278]">
                  {isBangla
                    ? "আপনার সুবিধামতো অনলাইন অথবা সরাসরি সেশন বুক করুন।"
                    : "Choose the consultation format that works best for you."}
                </p>
              </div>

              <div className="divide-y divide-[#DCE7DF] border-y border-[#DCE7DF]">

                {/* ONLINE OPTION */}
                {onlineMode && (
                  <div className="py-6">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <Video
                          size={19}
                          strokeWidth={1.7}
                          className="text-[#19815C]"
                        />

                        <h3 className="text-[16px] font-semibold text-[#17352A]">
                          {onlineTitle}
                        </h3>
                      </div>

                      {hasFee && (
                        <p className="text-xl font-semibold tracking-tight text-[#17352A]">
                          ৳{formatNumber(fee)}
                        </p>
                      )}
                    </div>

                    <p className="mt-3 max-w-[650px] text-[13px] leading-[1.8] text-[#64766C]">
                      {onlineDescription}
                    </p>

                    <Link
                      href="/booking-refund-policy"
                      className="mt-3 inline-flex items-center gap-1 text-[12px] font-semibold text-[#174B38] underline decoration-[#A9C4B1] underline-offset-4 transition hover:text-[#198052]"
                    >
                      {isBangla
                        ? "বুকিং ও রিফান্ড নীতিমালা"
                        : "Booking & Refund Policy"}
                      <ArrowUpRight size={13} />
                    </Link>

                    {bookingDestination && (
                      <div className="mt-5">
                        <a
                          href={bookingDestination}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-[#174433] px-6 py-3 text-[12px] font-semibold text-white transition hover:bg-[#103629]"
                        >
                          {bookingBtnText}
                          <ArrowUpRight size={14} />
                        </a>
                      </div>
                    )}
                  </div>
                )}

                {/* IN-PERSON OPTION */}
                {inPersonMode && (
                  <div className="py-6">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <Building2
                          size={19}
                          strokeWidth={1.7}
                          className="text-[#19815C]"
                        />

                        <h3 className="text-[16px] font-semibold text-[#17352A]">
                          {inPersonTitle}
                        </h3>
                      </div>

                      <span className="text-[12px] font-medium text-[#64816E]">
                        {isBangla ? "অগ্রিম পেমেন্ট নেই" : "No advance payment"}
                      </span>
                    </div>

                    <p className="mt-3 max-w-[650px] text-[13px] leading-[1.8] text-[#64766C]">
                      {inPersonDescription}
                    </p>

                    {bookingDestination && (
                      <div className="mt-5">
                        <a
                          href={bookingDestination}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-[#174433] px-6 py-3 text-[12px] font-semibold text-[#174433] transition hover:bg-[#F0F5EF]"
                        >
                          {bookingBtnText}
                          <ArrowUpRight size={14} />
                        </a>
                      </div>
                    )}
                  </div>
                )}

                {!onlineMode && !inPersonMode && (
                  <p className="py-6 text-[13px] text-[#64766C]">
                    {isBangla
                      ? "অ্যাপয়েন্টমেন্টের জন্য আমাদের সঙ্গে যোগাযোগ করুন।"
                      : "Please contact us for appointment options."}
                  </p>
                )}
              </div>

              {/* BOOKING CONFIRMATION */}
              {(onlineMode || inPersonMode) && (
                <div className="mt-6">
                  <h3 className="text-[14px] font-semibold text-[#17352A]">
                    {confirmationTitle}
                  </h3>

                  <div className="mt-3 space-y-3 text-[12px] leading-[1.8] text-[#718278]">
                    {onlineMode && <p>{onlineConfirmation}</p>}
                    {inPersonMode && <p>{inPersonConfirmation}</p>}
                  </div>
                </div>
              )}
            </section>

            {/* EDUCATION */}
            {(hasQualifications || hasAffiliation) && (
              <section className="mt-12 border-t border-[#DCE7DF] pt-8">
                <div className="flex items-center gap-3">
                  <GraduationCap
                    size={20}
                    strokeWidth={1.7}
                    className="text-[#19815C]"
                  />

                  <h2 className="text-[17px] font-semibold text-[#17352A]">
                    {t("doctorProfile.eduTitle")}
                  </h2>
                </div>

                {hasQualifications && (
                  <p className="mt-4 max-w-[700px] text-[13px] leading-[1.9] text-[#64766C]">
                    {qualifications}
                  </p>
                )}

                {hasAffiliation && (
                  <div className="mt-4">
                    <p className="text-[10px] font-bold tracking-[0.12em] text-[#829287]">
                      {t("doctorProfile.affiliationLabel")}
                    </p>

                    <p className="mt-2 text-[13px] leading-6 text-[#52665A]">
                      {affiliation}
                    </p>
                  </div>
                )}
              </section>
            )}

            {/* SPECIALTY */}
            {specialty && (
              <section className="mt-9 border-t border-[#DCE7DF] pt-8">
                <div className="flex items-center gap-3">
                  <Stethoscope
                    size={19}
                    strokeWidth={1.7}
                    className="text-[#19815C]"
                  />

                  <h2 className="text-[17px] font-semibold text-[#17352A]">
                    {t("doctorProfile.expertiseTitle")}
                  </h2>
                </div>

                <p className="mt-3 text-[13px] text-[#64766C]">
                  {specialty}
                </p>
              </section>
            )}

            {/* CONSULTATION MODES */}
            {hasModes && (
              <section className="mt-9 border-t border-[#DCE7DF] pt-8">
                <div className="flex items-center gap-3">
                  <Video
                    size={19}
                    strokeWidth={1.7}
                    className="text-[#19815C]"
                  />

                  <h2 className="text-[17px] font-semibold text-[#17352A]">
                    {t("doctorProfile.optionsTitle")}
                  </h2>
                </div>

                <div className="mt-4 flex flex-wrap gap-x-6 gap-y-3">
                  {modes.map((mode) => (
                    <span
                      key={mode}
                      className="flex items-center gap-2 text-[12px] text-[#64766C]"
                    >
                      {mode.toLowerCase().includes("online") ||
                      mode.toLowerCase().includes("video") ? (
                        <Video size={15} className="text-[#19815C]" />
                      ) : (
                        <Building2 size={15} className="text-[#19815C]" />
                      )}
                      {getLocalizedMode(mode)}
                    </span>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* RIGHT SIDEBAR */}
          <aside className="lg:sticky lg:top-8">

            {/* AVAILABILITY */}
            {hasNextSlot && (
              <div className="border-b border-[#DCE7DF] pb-6">
                <div className="flex items-center gap-2 text-[13px] font-semibold text-[#17352A]">
                  <Clock3 size={17} className="text-[#19815C]" />
                  {t("doctorProfile.nextAvailability")}
                </div>

                <p className="mt-3 pl-6 text-[12px] text-[#64766C]">
                  {displayNextSlot}
                </p>
              </div>
            )}

            {/* LANGUAGES */}
            {hasLanguages && (
              <div className="border-b border-[#DCE7DF] py-6">
                <div className="flex items-center gap-2 text-[13px] font-semibold text-[#17352A]">
                  <Languages size={17} className="text-[#19815C]" />
                  {t("doctorProfile.languagesTitle")}
                </div>

                <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2 pl-6">
                  {languages.map((lang) => (
                    <span
                      key={lang}
                      className="text-[12px] text-[#64766C]"
                    >
                      {getLocalizedLanguage(lang)}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* LOCATION */}
            {hasArea && (
              <div className="py-6">
                <div className="flex items-center gap-2 text-[13px] font-semibold text-[#17352A]">
                  <MapPin size={17} className="text-[#19815C]" />
                  {t("doctorProfile.areaTitle")}
                </div>

                <p className="mt-3 pl-6 text-[12px] leading-[1.8] text-[#64766C]">
                  {area}
                </p>
              </div>
            )}
          </aside>
        </div>

        {/* DISCLAIMER */}
        <p className="mt-12 border-t border-[#DCE7DF] pt-6 text-center text-[10px] leading-5 text-[#829287]">
          {t("doctorProfile.disclaimer")}
        </p>
      </div>
    </main>
  );
}
