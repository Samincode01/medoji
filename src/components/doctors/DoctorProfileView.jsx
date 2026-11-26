
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
  MessageCircle,
  Laptop,
  Clock3,
  CalendarDays,
  Award,
  UserRound,
  BadgeCheck,
} from "lucide-react";
import { useLanguage } from "@/i18n/useLanguage";

const BOOKING_LINKS = {
  mental: "https://forms.gle/VvRppn73R7TvyoSt8",
  physical: "https://forms.gle/doctordemo",
};

function toList(value) {
  if (value === null || value === undefined || value === "") return [];
  return Array.isArray(value) ? value.filter(Boolean) : [value];
}

function DetailRow({ icon: Icon, title, children, last = false }) {
  if (!children) return null;

  return (
    <div
      className={`flex gap-4 py-3.5 ${
        last ? "" : "border-b border-[#DCE7DF]"
      }`}
    >
      <div className="flex w-12 shrink-0 justify-center border-r border-[#B9C9BC] pr-3 pt-0.5">
        <Icon size={21} strokeWidth={1.7} className="text-[#174F3B]" />
      </div>

      <div className="min-w-0 flex-1">
        {title && (
          <h3 className="mb-1 text-[13px] font-bold text-[#17231D] sm:text-[14px]">
            {title}
          </h3>
        )}

        <div className="text-[13px] leading-[1.7] text-[#263D32] sm:text-[14px]">
          {children}
        </div>
      </div>
    </div>
  );
}

function DetailSection({ title, children }) {
  return (
    <section className="overflow-hidden rounded-[14px] border border-[#B9C9BC] bg-white">
      <div className="border-b border-[#DCE7DF] bg-[#E8F0E5] px-4 py-3 sm:px-5">
        <h2 className="text-[16px] font-bold tracking-tight text-[#17352A] sm:text-[18px]">
          {title}
        </h2>
      </div>

      <div className="px-4 sm:px-5">{children}</div>
    </section>
  );
}

function TextItems({ items }) {
  const values = toList(items);

  if (!values.length) return null;

  return (
    <div className="space-y-0.5">
      {values.map((item, index) => {
        const text =
          typeof item === "string"
            ? item
            : item?.name ||
              item?.title ||
              item?.description ||
              item?.label ||
              "";

        return text ? <p key={`${text}-${index}`}>{text}</p> : null;
      })}
    </div>
  );
}

function FeeLine({ label, value, formatNumber }) {
  if (value === null || value === undefined || value === "") return null;

  return (
    <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-1 text-[12px]">
      <span className="text-[#52665A]">{label}</span>
      <span className="font-bold text-[#174F3B]">
        ৳{formatNumber(value)}
      </span>
    </div>
  );
}

export default function DoctorProfileView({ doctor }) {
  const { isBangla, formatNumber, t } = useLanguage();
  const [copied, setCopied] = useState(false);

  if (!doctor) return null;

  const {
    profileId,
    name,
    title,
    specialty,
    category,
    qualifications,
    affiliation,
    education = [],
    selectedTraining,
    additionalTraining,
    experienceYears,
    experienceLabel,
    experienceDetails,
    whoIWorkWith,
    areasOfPractice,
    therapeuticApproaches,
    currentRoles,
    professionalExperience,
    languages = [],
    fee,
    modes = [],
    area,
    image,
    verified,
    bookingLabel,
    booking = {},
    sessionDuration,
    availability,
    nextSlot,
  } = doctor;

  const onlineBooking = booking?.online || {};
  const inPersonBooking = booking?.inPerson || {};

  const safeEducation = toList(education);
  const safeLanguages = toList(languages);
  const safeModes = toList(modes);

  const imageUrl =
    typeof image === "string" && image
      ? image.startsWith("http")
        ? image
        : image.startsWith("/assets/")
          ? `https://montorongo.com${image}`
          : image
      : null;

  const bookingDestination = BOOKING_LINKS[category] || null;

  // Show online details even when online booking is unavailable.
  // This allows the profile to display an unavailable notice.
  const supportsOnline = safeModes.some((mode) =>
    /online|video/i.test(String(mode))
  );

  const hasOnlineBookingDetails =
    Object.keys(onlineBooking).length > 0;

  const showOnlineSection =
    supportsOnline ||
    onlineBooking.available === false ||
    hasOnlineBookingDetails;

  const onlineAvailable = onlineBooking.available !== false;

  const supportsInPerson = safeModes.some((mode) =>
    /person|chamber/i.test(String(mode))
  );

  const hasInPersonBookingDetails =
    Object.keys(inPersonBooking).length > 0;

  const showInPersonSection =
    supportsInPerson ||
    inPersonBooking.available === false ||
    hasInPersonBookingDetails;

  const inPersonAvailable = inPersonBooking.available !== false;

  const displayTitle =
    title ||
    (category === "mental"
      ? isBangla
        ? "মনোবিজ্ঞানী"
        : "Psychologist"
      : isBangla
        ? "চিকিৎসক"
        : "Doctor");

  const displayExperience =
    experienceDetails ||
    experienceLabel ||
    (experienceYears !== null && experienceYears !== undefined
      ? isBangla
        ? `${formatNumber(experienceYears)}+ বছরের অভিজ্ঞতা`
        : `${experienceYears}+ years of experience`
      : "");

  const localizedLanguages = safeLanguages.map((language) => {
    if (!isBangla) return language;

    const value = String(language).toLowerCase();

    if (value === "bangla" || value === "bengali") return "বাংলা";
    if (value === "english") return "ইংরেজি";

    return language;
  });

  const educationItems =
    safeEducation.length > 0
      ? safeEducation
      : qualifications
        ? [{ degree: qualifications, institution: affiliation || "" }]
        : [];

  const professionalRoles =
    toList(currentRoles).length > 0
      ? currentRoles
      : professionalExperience;

  const onlineFee =
    onlineBooking.sessionFee ??
    onlineBooking.firstSessionFee ??
    doctor.onlineFee ??
    fee;

  const followUpFee =
    onlineBooking.followUpFee ??
    doctor.followUpFee;

  const onlinePackages = toList(onlineBooking.packages);

  const inPersonFee =
    inPersonBooking.sessionFee ??
    doctor.inPersonFee;

  const inPersonLocation =
    inPersonBooking.location ||
    doctor.chamberAddress ||
    area;

  const duration = booking.duration || sessionDuration;

  const sessionAvailability =
    booking.availability || availability || nextSlot;

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

  return (
    <main className="min-h-screen bg-[#FDFDFD] text-[#132F25]">
      <div className="mx-auto max-w-[1250px] px-5 pb-12 pt-6 sm:px-8 lg:px-10">

        {/* BACK NAVIGATION */}
        <Link
          href="/specialist"
          className="group mb-5 inline-flex items-center gap-3 text-[13px] font-medium text-[#17352A] transition hover:text-[#19815C]"
        >
          <ArrowLeft
            size={18}
            className="transition-transform group-hover:-translate-x-1"
          />
          {isBangla ? "বিশেষজ্ঞদের তালিকায় ফিরুন" : "Back to specialists"}
        </Link>

        {/* PROFILE HEADER */}
        <section className="rounded-[15px] border border-[#B9C9BC] bg-white p-5 sm:p-6">
          <div className="grid items-center gap-5 sm:grid-cols-[160px_1fr] sm:gap-8">

            {/* PROFILE IMAGE */}
            <div className="mx-auto w-full max-w-[138px] sm:mx-0">
              <div className="relative aspect-square overflow-hidden rounded-[18px] bg-[#EAF1E8]">
                {imageUrl ? (
                  <Image
                    src={imageUrl}
                    alt={name || "Healthcare professional"}
                    fill
                    priority
                    sizes="138px"
                    className="object-cover object-center"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center">
                    <UserRound
                      size={48}
                      strokeWidth={1.5}
                      className="text-[#829D88]"
                    />
                  </div>
                )}
              </div>
            </div>

            {/* PROFILE INFORMATION */}
            <div className="min-w-0 border-t border-[#B9C9BC] pt-5 sm:border-l sm:border-t-0 sm:py-1 sm:pl-8">
              <div className="flex flex-wrap items-center gap-2">
                <p className="text-[14px] font-semibold text-[#527764]">
                  {displayTitle}
                </p>

                {verified && (
                  <span className="inline-flex items-center gap-1 text-[11px] font-medium text-[#19815C]">
                    <BadgeCheck size={14} />
                    {isBangla ? "যাচাইকৃত" : "Verified"}
                  </span>
                )}
              </div>

              <h1 className="mt-1 text-[30px] font-bold leading-tight tracking-[-0.04em] text-[#151D19] sm:text-[36px]">
                {name}
              </h1>

              <div className="mt-4 flex flex-wrap items-center gap-x-7 gap-y-2.5">
                {displayExperience && (
                  <div className="flex items-center gap-2.5 text-[12px] text-[#263D32] sm:text-[13px]">
                    <BriefcaseMedical
                      size={18}
                      strokeWidth={1.8}
                      className="shrink-0 text-[#174F3B]"
                    />
                    {displayExperience}
                  </div>
                )}

                {area && (
                  <div className="flex items-center gap-2.5 text-[12px] text-[#263D32] sm:text-[13px]">
                    <MapPin
                      size={19}
                      strokeWidth={1.8}
                      className="shrink-0 text-[#174F3B]"
                    />
                    {area}
                  </div>
                )}
              </div>

              {/* PROFILE ID */}
              {profileId && (
                <div className="mt-4 inline-flex max-w-full items-center gap-2.5 rounded-[9px] bg-[#E8F0E5] px-3.5 py-2.5">
                  <span className="shrink-0 text-[12px] text-[#17352A]">
                    {isBangla ? "প্রোফাইল আইডি" : "Profile ID"}
                  </span>

                  <span className="h-5 w-px bg-[#B9C9BC]" />

                  <span className="truncate text-[12px] font-bold tracking-wide text-[#17352A] sm:text-[13px]">
                    {profileId}
                  </span>

                  <button
                    type="button"
                    onClick={copyProfileId}
                    aria-label={isBangla ? "আইডি কপি করুন" : "Copy profile ID"}
                    className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md text-[#17352A] transition hover:bg-white"
                  >
                    {copied ? (
                      <Check size={16} className="text-[#19815C]" />
                    ) : (
                      <Copy size={16} />
                    )}
                  </button>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* PROFILE DETAILS + BOOKING */}
        <div className="mt-6 grid items-start gap-6 lg:grid-cols-[1.4fr_1fr]">

          {/* LEFT COLUMN */}
          <div className="min-w-0 space-y-4">

            {/* EDUCATION & QUALIFICATIONS */}
            {(educationItems.length > 0 ||
              toList(selectedTraining).length > 0 ||
              toList(additionalTraining).length > 0) && (
              <DetailSection
                title={
                  isBangla
                    ? "শিক্ষাগত যোগ্যতা"
                    : "Education & qualifications"
                }
              >
                {educationItems.map((item, index) => {
                  const degree =
                    typeof item === "string"
                      ? item
                      : item?.degree ||
                        item?.qualification ||
                        item?.title ||
                        "";

                  const institution =
                    typeof item === "object"
                      ? item?.institution || item?.university || ""
                      : "";

                  if (!degree) return null;

                  return (
                    <DetailRow
                      key={`${degree}-${index}`}
                      icon={GraduationCap}
                      title={degree}
                    >
                      {institution}
                    </DetailRow>
                  );
                })}

                {toList(selectedTraining).length > 0 && (
                  <DetailRow
                    icon={Award}
                    title={
                      isBangla
                        ? "নির্বাচিত প্রশিক্ষণ"
                        : "Selected training"
                    }
                  >
                    <TextItems items={selectedTraining} />
                  </DetailRow>
                )}

                {toList(additionalTraining).length > 0 && (
                  <DetailRow
                    icon={Award}
                    title={
                      isBangla
                        ? "অতিরিক্ত প্রশিক্ষণ"
                        : "Additional training"
                    }
                    last
                  >
                    <TextItems items={additionalTraining} />
                  </DetailRow>
                )}
              </DetailSection>
            )}

            {/* EXPERIENCE & EXPERTISE */}
            {(displayExperience ||
              whoIWorkWith ||
              areasOfPractice ||
              therapeuticApproaches ||
              toList(professionalRoles).length > 0 ||
              specialty) && (
              <DetailSection
                title={
                  isBangla
                    ? "অভিজ্ঞতা ও বিশেষজ্ঞতা"
                    : "Experience & expertise"
                }
              >
                {displayExperience && (
                  <DetailRow icon={BriefcaseMedical}>
                    <p className="font-semibold text-[#17231D]">
                      {displayExperience}
                    </p>
                  </DetailRow>
                )}

                {whoIWorkWith && (
                  <DetailRow
                    icon={UserRound}
                    title={
                      isBangla
                        ? "যাদের সঙ্গে কাজ করি"
                        : "Who I work with"
                    }
                  >
                    <TextItems items={whoIWorkWith} />
                  </DetailRow>
                )}

                {areasOfPractice && (
                  <DetailRow
                    icon={Brain}
                    title={isBangla ? "কাজের ক্ষেত্র" : "Areas of practice"}
                  >
                    <TextItems items={areasOfPractice} />
                  </DetailRow>
                )}

                {therapeuticApproaches && (
                  <DetailRow
                    icon={Award}
                    title={
                      isBangla
                        ? "থেরাপিউটিক পদ্ধতি ও সহায়তা"
                        : "Therapeutic approaches and support"
                    }
                  >
                    <TextItems items={therapeuticApproaches} />
                  </DetailRow>
                )}

                {toList(professionalRoles).length > 0 && (
                  <DetailRow
                    icon={BriefcaseMedical}
                    title={
                      isBangla
                        ? "বর্তমান পেশাগত ভূমিকা"
                        : "Current professional roles"
                    }
                    last
                  >
                    <TextItems items={professionalRoles} />
                  </DetailRow>
                )}

                {!displayExperience &&
                  !whoIWorkWith &&
                  !areasOfPractice &&
                  !therapeuticApproaches &&
                  !toList(professionalRoles).length &&
                  specialty && (
                    <DetailRow icon={Brain} last>
                      {specialty}
                    </DetailRow>
                  )}
              </DetailSection>
            )}

            {/* LANGUAGES */}
            {localizedLanguages.length > 0 && (
              <DetailSection title={isBangla ? "ভাষাসমূহ" : "Languages"}>
                <DetailRow icon={MessageCircle} last>
                  {localizedLanguages.join(", ")}
                </DetailRow>
              </DetailSection>
            )}
          </div>

          {/* RIGHT COLUMN — BOOKING */}
          <aside className="overflow-hidden rounded-[15px] border border-[#B9C9BC] bg-white lg:sticky lg:top-5">
            <div className="bg-[#17603C] px-5 py-3.5 sm:px-5">
              <h2 className="text-[19px] font-bold tracking-tight text-white">
                {isBangla ? "সেশন বুক করুন" : "Book a session"}
              </h2>
            </div>

            <div className="space-y-4 p-4 sm:p-5">

              {/* ONLINE SESSION — REMAINS VISIBLE WHEN UNAVAILABLE */}
              {showOnlineSection && (
                <section className="rounded-[13px] border border-[#B9C9BC] p-3.5 sm:p-4">
                  <div className="flex gap-3.5">
                    <div className="flex w-12 shrink-0 justify-center border-r border-[#B9C9BC] pr-3 pt-2">
                      <Laptop
                        size={25}
                        strokeWidth={1.7}
                        className="text-[#174F3B]"
                      />
                    </div>

                    <div className="min-w-0 flex-1">
                      <h3 className="text-[15px] font-bold text-[#17231D]">
                        {isBangla ? "অনলাইন সেশন" : "Online session"}
                      </h3>

                      {onlineAvailable && (
                        <div className="mt-2 space-y-1.5">
                          <FeeLine
                            label={
                              isBangla
                                ? "প্রথম সেশনের ফি"
                                : "First session fee"
                            }
                            value={onlineFee}
                            formatNumber={formatNumber}
                          />

                          <FeeLine
                            label={
                              isBangla
                                ? "পরবর্তী সেশনের ফি"
                                : "Follow-up fee"
                            }
                            value={followUpFee}
                            formatNumber={formatNumber}
                          />
                        </div>
                      )}
                    </div>
                  </div>

                  {onlineAvailable && onlinePackages.length > 0 && (
                    <div className="mt-3 border-t border-[#DCE7DF] pt-3">
                      <p className="mb-2 text-[12px] font-semibold text-[#52665A]">
                        {isBangla
                          ? "অনলাইন সেশন প্যাকেজ"
                          : "Online session packages"}
                      </p>

                      <div className="space-y-1.5">
                        {onlinePackages.map((item, index) => {
                          const packageItem =
                            typeof item === "object" ? item : {};

                          return (
                            <div
                              key={index}
                              className="flex items-center justify-between gap-3 text-[12px]"
                            >
                              <span className="text-[#52665A]">
                                {packageItem.sessions
                                  ? `${formatNumber(packageItem.sessions)} ${
                                      isBangla
                                        ? "টি সেশন"
                                        : packageItem.sessions === 1
                                          ? "session"
                                          : "sessions"
                                    }`
                                  : packageItem.label || ""}
                              </span>

                              <span className="font-bold text-[#174F3B]">
                                {packageItem.fee !== undefined &&
                                packageItem.fee !== null
                                  ? `৳${formatNumber(packageItem.fee)}`
                                  : ""}
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {!onlineAvailable ? (
                    <p className="mt-4 rounded-lg bg-[#F0F5EF] px-3 py-2.5 text-center text-[12px] font-medium leading-5 text-[#52665A]">
                      {isBangla
                        ? "অনলাইন সেশন বর্তমানে উপলব্ধ নয়।"
                        : "Online sessions are currently unavailable."}
                    </p>
                  ) : bookingDestination ? (
                    <a
                      href={bookingDestination}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 flex min-h-11 w-full items-center justify-center gap-2 rounded-[9px] bg-[#17603C] px-3 py-2.5 text-center text-[12px] font-bold text-white transition hover:bg-[#10472D]"
                    >
                      {bookingButtonText}
                      <ArrowUpRight size={15} />
                    </a>
                  ) : null}

                  <div className="mt-3">
                    <Link
                      href="/booking-refund-policy"
                      className="inline-flex items-center gap-1 text-[11px] font-medium text-[#17603C] underline underline-offset-4"
                    >
                      {isBangla
                        ? "বুকিং ও রিফান্ড নীতিমালা"
                        : "Booking & Refund Policy"}
                      <ArrowUpRight size={11} />
                    </Link>
                  </div>
                </section>
              )}

              {/* IN-PERSON SESSION */}
              {showInPersonSection && (
                <section className="rounded-[13px] border border-[#B9C9BC] p-3.5 sm:p-4">
                  <div className="flex gap-3.5">
                    <div className="flex w-12 shrink-0 justify-center border-r border-[#B9C9BC] pr-3 pt-2">
                      <MapPin
                        size={26}
                        strokeWidth={1.7}
                        className="text-[#174F3B]"
                      />
                    </div>

                    <div className="min-w-0 flex-1">
                      <h3 className="text-[15px] font-bold text-[#17231D]">
                        {isBangla ? "সরাসরি সেশন" : "In-person session"}
                      </h3>

                      {inPersonAvailable ? (
                        <div className="mt-2 space-y-1.5">
                          <FeeLine
                            label={isBangla ? "সেশনের ফি" : "Session fee"}
                            value={inPersonFee}
                            formatNumber={formatNumber}
                          />

                          {inPersonLocation && (
                            <div className="text-[12px] leading-5 text-[#52665A]">
                              <span className="mr-1 font-medium">
                                {isBangla ? "অবস্থান" : "Location"}
                              </span>
                              {inPersonLocation}
                            </div>
                          )}

                          {!inPersonFee && !inPersonLocation && (
                            <p className="text-[12px] text-[#52665A]">
                              {isBangla
                                ? "অগ্রিম পেমেন্টের প্রয়োজন নেই।"
                                : "No advance payment required."}
                            </p>
                          )}
                        </div>
                      ) : (
                        <p className="mt-2 text-[12px] leading-5 text-[#52665A]">
                          {isBangla
                            ? "সরাসরি সেশন বর্তমানে উপলব্ধ নয়।"
                            : "In-person sessions are currently unavailable."}
                        </p>
                      )}
                    </div>
                  </div>

                  {inPersonAvailable && bookingDestination && (
                    <a
                      href={bookingDestination}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 flex min-h-11 w-full items-center justify-center gap-2 rounded-[9px] border-[1.5px] border-[#174F3B] px-3 py-2.5 text-center text-[12px] font-bold text-[#174F3B] transition hover:bg-[#E8F0E5]"
                    >
                      {bookingButtonText}
                      <ArrowUpRight size={15} />
                    </a>
                  )}
                </section>
              )}

              {!showOnlineSection && !showInPersonSection && (
                <p className="py-4 text-[13px] leading-6 text-[#64766C]">
                  {isBangla
                    ? "অ্যাপয়েন্টমেন্টের জন্য আমাদের সঙ্গে যোগাযোগ করুন।"
                    : "Please contact us for available appointment options."}
                </p>
              )}

              {/* SESSION DURATION */}
              {duration && (
                <div className="flex gap-3 border-b border-[#DCE7DF] px-3 pb-3">
                  <div className="flex w-12 shrink-0 justify-center border-r border-[#B9C9BC] pr-3">
                    <Clock3
                      size={21}
                      strokeWidth={1.7}
                      className="text-[#174F3B]"
                    />
                  </div>

                  <div>
                    <h3 className="text-[13px] font-bold text-[#17231D]">
                      {isBangla ? "সেশনের সময়কাল" : "Session duration"}
                    </h3>
                    <p className="mt-0.5 text-[12px] text-[#263D32]">
                      {duration}
                    </p>
                  </div>
                </div>
              )}

              {/* AVAILABILITY */}
              {sessionAvailability && (
                <div className="flex gap-3 px-3 pb-1">
                  <div className="flex w-12 shrink-0 justify-center border-r border-[#B9C9BC] pr-3">
                    <CalendarDays
                      size={21}
                      strokeWidth={1.7}
                      className="text-[#174F3B]"
                    />
                  </div>

                  <div>
                    <h3 className="text-[13px] font-bold text-[#17231D]">
                      {isBangla ? "সময়সূচি" : "Availability"}
                    </h3>

                    <div className="mt-0.5 text-[12px] leading-5 text-[#263D32]">
                      <TextItems items={sessionAvailability} />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </aside>
        </div>

        {/* DISCLAIMER */}
        <p className="mt-7 border-t border-[#DCE7DF] pt-4 text-center text-[10px] leading-5 text-[#829287]">
          {t("doctorProfile.disclaimer")}
        </p>
      </div>
    </main>
  );
}
