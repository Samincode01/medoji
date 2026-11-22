
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  BriefcaseMedical,
  MapPin,
  Copy,
  Check,
  GraduationCap,
  Brain,
  Languages,
  MessageCircle,
  Laptop,
  Building2,
  BadgeCheck,
} from "lucide-react";
import { useLanguage } from "@/i18n/useLanguage";

const BOOKING_LINKS = {
  mental: "https://forms.gle/VvRppn73R7TvyoSt8",
  physical: "https://forms.gle/doctordemo",
};

export default function DoctorProfileView({ doctor }) {
  const { isBangla, formatNumber, t } = useLanguage();
  const [copied, setCopied] = useState(false);

  if (!doctor) return null;

  const {
    id,
    profileId,
    name,
    title,
    specialty,
    category,
    qualifications,
    affiliation,
    education = [],
    experienceYears,
    experienceLabel,
    experienceDetails,
    languages = [],
    fee,
    modes = [],
    area,
    image,
    initials,
    verified,
    bookingLabel,
  } = doctor;

  const imageUrl = image
    ? image.startsWith("http")
      ? image
      : image.startsWith("/assets/")
        ? `https://montorongo.com${image}`
        : image
    : null;

  const hasFee = fee !== null && fee !== undefined && fee !== "";
  const bookingDestination = BOOKING_LINKS[category] || null;

  const onlineMode = modes.some((mode) =>
    /online|video/i.test(mode)
  );

  const inPersonMode = modes.some((mode) =>
    /person|chamber/i.test(mode)
  );

  const displayExperience =
    experienceLabel ||
    experienceDetails ||
    (experienceYears !== null && experienceYears !== undefined
      ? isBangla
        ? `${formatNumber(experienceYears)}+ বছরের অভিজ্ঞতা`
        : `${experienceYears}+ years of experience`
      : "");

  const displayTitle =
    title ||
    (category === "mental"
      ? isBangla
        ? "মনোবিজ্ঞানী"
        : "Psychologist"
      : isBangla
        ? "চিকিৎসক"
        : "Doctor");

  const localizedLanguages = languages.map((language) => {
    if (!isBangla) return language;

    const value = language.toLowerCase();

    if (value === "bangla" || value === "bengali") return "বাংলা";
    if (value === "english") return "ইংরেজি";

    return language;
  });

  const educationItems =
    Array.isArray(education) && education.length > 0
      ? education
      : qualifications
        ? [{ degree: qualifications, institution: "" }]
        : [];

  const bookingButtonText = isBangla
    ? bookingLabel || "অ্যাপয়েন্টমেন্ট বুক করুন"
    : "Request an appointment";

  const copyProfileId = async () => {
    if (!profileId) return;

    try {
      await navigator.clipboard.writeText(profileId);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };

  const onlineDescription = isBangla
    ? "সেশন নিশ্চিত করতে অগ্রিম পেমেন্ট করতে হবে। সেশন শুরুর অন্তত ১২ ঘণ্টা আগে বাতিল করলে সম্পূর্ণ টাকা ফেরত পাবেন।"
    : "Advance payment is required to confirm your session. Cancel at least 12 hours before the session for a full refund.";

  const inPersonDescription = isBangla
    ? "সরাসরি সেশনের জন্য অগ্রিম পেমেন্টের প্রয়োজন নেই।"
    : "No advance payment is required for an in-person session.";

  const SectionHeader = ({ children }) => (
    <div className="border-b border-[#DCE7DF] bg-[#E8F0E5] px-5 py-3">
      <h2 className="text-[17px] font-bold tracking-tight text-[#17352A] sm:text-[19px]">
        {children}
      </h2>
    </div>
  );

  return (
    <main className="min-h-screen bg-[#FDFDFD] text-[#132F25]">
      <div className="mx-auto max-w-[1450px] px-5 pb-16 pt-6 sm:px-8 lg:px-12">

        {/* Back navigation */}
        <Link
          href="/specialist"
          className="group mb-6 inline-flex items-center gap-3 text-[14px] font-medium text-[#17352A] transition hover:text-[#19815C]"
        >
          <ArrowLeft
            size={21}
            className="transition-transform group-hover:-translate-x-1"
          />
          {isBangla ? "বিশেষজ্ঞদের তালিকায় ফিরুন" : "Back to specialists"}
        </Link>

        {/* PROFILE HEADER */}
        <section className="rounded-[16px] border border-[#AEBDAF] bg-white p-5 sm:p-7">
          <div className="grid items-center gap-6 sm:grid-cols-[175px_1fr] sm:gap-9">

            {/* Profile image */}
            <div className="mx-auto w-full max-w-[160px] sm:mx-0">
              <div className="relative aspect-square overflow-hidden rounded-[22px] bg-[#DCE9DC]">
                {imageUrl ? (
                  <Image
                    src={imageUrl}
                    alt={name || "Healthcare professional"}
                    fill
                    priority
                    sizes="160px"
                    className="object-cover object-center"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center text-[#78967D]">
                    <div className="flex flex-col items-center">
                      <div className="h-12 w-12 rounded-full bg-[#78967D]" />
                      <div className="mt-2 h-10 w-24 rounded-t-full bg-[#78967D]" />
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Profile information */}
            <div className="min-w-0 border-t border-[#AEBDAF] pt-5 sm:border-l sm:border-t-0 sm:py-1 sm:pl-9">
              <div className="flex flex-wrap items-center gap-2">
                <p className="text-[15px] font-semibold text-[#64816E]">
                  {displayTitle}
                </p>

                {verified && (
                  <span className="inline-flex items-center gap-1 text-[11px] font-medium text-[#19815C]">
                    <BadgeCheck size={14} />
                    {isBangla ? "যাচাইকৃত" : "Verified"}
                  </span>
                )}
              </div>

              <h1 className="mt-1 text-[32px] font-bold leading-tight tracking-[-0.045em] text-[#151A17] sm:text-[42px]">
                {name}
              </h1>

              <div className="mt-4 flex flex-wrap items-center gap-x-7 gap-y-3">
                {displayExperience && (
                  <div className="flex items-center gap-3 text-[14px] text-[#26352B]">
                    <BriefcaseMedical
                      size={20}
                      strokeWidth={1.8}
                      className="text-[#174433]"
                    />
                    {displayExperience}
                  </div>
                )}

                {area && (
                  <div className="flex items-center gap-3 text-[14px] text-[#26352B]">
                    <MapPin
                      size={21}
                      strokeWidth={1.8}
                      className="text-[#174433]"
                    />
                    {area}
                  </div>
                )}
              </div>

              {/* Profile ID */}
              {profileId && (
                <div className="mt-5 inline-flex max-w-full items-center gap-3 rounded-[10px] bg-[#E8F0E5] px-4 py-3">
                  <span className="shrink-0 text-[13px] text-[#17352A]">
                    {isBangla ? "প্রোফাইল আইডি" : "Profile ID"}
                  </span>

                  <span className="h-6 w-px bg-[#AEBDAF]" />

                  <span className="truncate text-[13px] font-bold tracking-wide text-[#17352A] sm:text-[15px]">
                    {profileId}
                  </span>

                  <button
                    type="button"
                    onClick={copyProfileId}
                    aria-label={isBangla ? "আইডি কপি করুন" : "Copy profile ID"}
                    className="ml-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-md text-[#17352A] transition hover:bg-white"
                  >
                    {copied ? (
                      <Check size={19} className="text-[#19815C]" />
                    ) : (
                      <Copy size={19} />
                    )}
                  </button>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* MAIN CONTENT */}
        <div className="mt-7 grid items-start gap-7 lg:grid-cols-[1.45fr_1fr] xl:gap-8">

          {/* LEFT COLUMN */}
          <div className="min-w-0 space-y-5">

            {/* EDUCATION */}
            {(educationItems.length > 0 || affiliation) && (
              <section className="overflow-hidden rounded-[15px] border border-[#AEBDAF] bg-white">
                <SectionHeader>
                  {isBangla
                    ? "শিক্ষাগত যোগ্যতা"
                    : "Education & qualifications"}
                </SectionHeader>

                <div className="px-5 sm:px-6">
                  {educationItems.map((item, index) => {
                    const degree =
                      typeof item === "string"
                        ? item
                        : item.degree || item.qualification || item.title;

                    const institution =
                      typeof item === "object"
                        ? item.institution || item.university || ""
                        : "";

                    return (
                      <div
                        key={`${degree}-${index}`}
                        className="flex gap-4 py-4"
                      >
                        <div className="flex w-14 shrink-0 items-center justify-center border-r border-[#AEBDAF] pr-4">
                          <GraduationCap
                            size={25}
                            strokeWidth={1.7}
                            className="text-[#174433]"
                          />
                        </div>

                        <div className="min-w-0">
                          <h3 className="text-[14px] font-bold leading-6 text-[#171B18] sm:text-[16px]">
                            {degree}
                          </h3>

                          {institution && (
                            <p className="mt-0.5 text-[15px] text-[#52665A]">
                              {institution}
                            </p>
                          )}
                        </div>
                      </div>
                    );
                  })}

                  {affiliation && (
                    <div className="flex gap-4 border-t border-[#DCE7DF] py-4">
                      <div className="flex w-14 shrink-0 items-center justify-center border-r border-[#AEBDAF] pr-4">
                        <GraduationCap
                          size={25}
                          strokeWidth={1.7}
                          className="text-[#174433]"
                        />
                      </div>

                      <p className="text-[13px] leading-6 font-bold text-[#52665A]">
                        {affiliation}
                      </p>
                    </div>
                  )}
                </div>
              </section>
            )}

            {/* EXPERIENCE & EXPERTISE */}
            <section className="overflow-hidden rounded-[15px] border border-[#AEBDAF] bg-white">
              <SectionHeader>
                {isBangla
                  ? "অভিজ্ঞতা ও বিশেষজ্ঞতা"
                  : "Experience & expertise"}
              </SectionHeader>

              <div className="px-5 sm:px-6">
                {displayExperience && (
                  <div className="flex items-center gap-4 border-b border-[#DCE7DF] py-4">
                    <div className="flex w-14 shrink-0 items-center justify-center border-r border-[#AEBDAF] pr-4">
                      <BriefcaseMedical
                        size={24}
                        strokeWidth={1.7}
                        className="text-[#174433]"
                      />
                    </div>

                    <p className="text-[14px] text-[#26352B] sm:text-[15px]">
                      {displayExperience}
                    </p>
                  </div>
                )}

                {specialty && (
                  <div className="flex items-center gap-4 py-4">
                    <div className="flex w-14 shrink-0 items-center justify-center border-r border-[#AEBDAF] pr-4">
                      <Brain
                        size={24}
                        strokeWidth={1.7}
                        className="text-[#174433]"
                      />
                    </div>

                    <p className="text-[14px] text-[#26352B] sm:text-[15px]">
                      {specialty}
                    </p>
                  </div>
                )}
              </div>
            </section>

            {/* LANGUAGES */}
            {localizedLanguages.length > 0 && (
              <section className="overflow-hidden rounded-[15px] border border-[#AEBDAF] bg-white">
                <SectionHeader>
                  {isBangla ? "ভাষাসমূহ" : "Languages"}
                </SectionHeader>

                <div className="flex items-center gap-4 px-5 py-5 sm:px-6">
                  <div className="flex w-14 shrink-0 items-center justify-center border-r border-[#AEBDAF] pr-4">
                    <MessageCircle
                      size={24}
                      strokeWidth={1.7}
                      className="text-[#174433]"
                    />
                  </div>

                  <p className="text-[14px] text-[#26352B] sm:text-[15px]">
                    {localizedLanguages.join(", ")}
                  </p>
                </div>
              </section>
            )}
          </div>

          {/* RIGHT COLUMN — BOOKING */}
          <aside className="overflow-hidden rounded-[16px] border border-[#AEBDAF] bg-white">
            <div className="bg-[#17603C] px-6 py-4">
              <h2 className="text-[21px] font-bold tracking-tight text-white">
                {isBangla ? "সেশন বুক করুন" : "Book a session"}
              </h2>
            </div>

            <div className="space-y-5 p-5 sm:p-6">

              {/* ONLINE SESSION */}
              {onlineMode && (
                <div className="rounded-[14px] border border-[#AEBDAF] p-4 sm:p-5">
                  <div className="flex items-center gap-4">
                    <div className="flex w-16 shrink-0 items-center justify-center border-r border-[#AEBDAF] py-2 pr-4">
                      <Laptop
                        size={34}
                        strokeWidth={1.7}
                        className="text-[#174433]"
                      />
                    </div>

                    <div className="min-w-0">
                      <h3 className="text-[17px] font-bold text-[#171B18]">
                        {isBangla ? "অনলাইন সেশন" : "Online session"}
                      </h3>

                      {hasFee && (
                        <p className="mt-0.5 text-[16px] font-bold text-[#17603C]">
                          ৳{formatNumber(fee)}
                        </p>
                      )}
                    </div>
                  </div>

                  {bookingDestination && (
                    <a
                      href={bookingDestination}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 flex min-h-12 w-full items-center justify-center gap-2 rounded-[10px] bg-[#17603C] px-4 py-3 text-center text-[13px] font-bold text-white transition hover:bg-[#10472D]"
                    >
                      {bookingButtonText}
                      <ArrowUpRight size={16} />
                    </a>
                  )}

                  <p className="mt-3 text-[11px] leading-5 text-[#718278]">
                    {onlineDescription}
                  </p>

                  <Link
                    href="/booking-refund-policy"
                    className="mt-2 inline-flex items-center gap-1 text-[11px] font-semibold text-[#17603C] underline underline-offset-4"
                  >
                    {isBangla
                      ? "বুকিং ও রিফান্ড নীতিমালা"
                      : "Booking & Refund Policy"}
                    <ArrowUpRight size={12} />
                  </Link>
                </div>
              )}

              {/* IN-PERSON SESSION */}
              {inPersonMode && (
                <div className="rounded-[14px] border border-[#AEBDAF] p-4 sm:p-5">
                  <div className="flex items-center gap-4">
                    <div className="flex w-16 shrink-0 items-center justify-center border-r border-[#AEBDAF] py-2 pr-4">
                      <MapPin
                        size={34}
                        strokeWidth={1.7}
                        className="text-[#174433]"
                      />
                    </div>

                    <div className="min-w-0">
                      <h3 className="text-[17px] font-bold text-[#171B18]">
                        {isBangla ? "সরাসরি সেশন" : "In-person session"}
                      </h3>

                      <p className="mt-0.5 text-[14px] font-medium text-[#26352B]">
                        {isBangla
                          ? "অগ্রিম পেমেন্ট নেই"
                          : "No advance payment"}
                      </p>
                    </div>
                  </div>

                  {bookingDestination && (
                    <a
                      href={bookingDestination}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 flex min-h-12 w-full items-center justify-center gap-2 rounded-[10px] border-2 border-[#174433] px-4 py-3 text-center text-[13px] font-bold text-[#174433] transition hover:bg-[#E8F0E5]"
                    >
                      {bookingButtonText}
                      <ArrowUpRight size={16} />
                    </a>
                  )}

                  <p className="mt-3 text-[11px] leading-5 text-[#718278]">
                    {inPersonDescription}
                  </p>
                </div>
              )}

              {!onlineMode && !inPersonMode && (
                <p className="py-5 text-[13px] leading-6 text-[#64766C]">
                  {isBangla
                    ? "অ্যাপয়েন্টমেন্টের জন্য আমাদের সঙ্গে যোগাযোগ করুন।"
                    : "Please contact us for available appointment options."}
                </p>
              )}
            </div>
          </aside>
        </div>

        {/* DISCLAIMER */}
        <p className="mt-8 border-t border-[#DCE7DF] pt-5 text-center text-[10px] leading-5 text-[#829287]">
          {t("doctorProfile.disclaimer")}
        </p>
      </div>
    </main>
  );
}
