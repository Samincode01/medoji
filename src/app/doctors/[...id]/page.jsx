
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import {
  ArrowLeft,
  ArrowUpRight,
  CalendarDays,
  Clock3,
  MapPin,
  Video,
  Building2,
  GraduationCap,
  BriefcaseMedical,
  Languages,
  Wallet,
  Stethoscope,
} from "lucide-react";

import { SAMPLE_DOCTORS } from "@/data/doctors";

export function generateStaticParams() {
  return SAMPLE_DOCTORS.map((doctor) => ({
    id: [doctor.id],
  }));
}

export default async function DoctorProfilePage({ params }) {
  const { id } = await params;

  // Supports the [...id] catch-all route.
  const doctorId = Array.isArray(id) ? id[id.length - 1] : id;

  const doctor = SAMPLE_DOCTORS.find(
    (item) => item.id === doctorId
  );

  if (!doctor) {
    notFound();
  }

  const {
    name,
    title,
    specialty,
    qualifications,
    affiliation,
    experienceYears,
    languages = [],
    fee,
    modes = [],
    area,
    nextSlot,
    image,
    initials,
    avatarBg,
    avatarColor,
    bookingUrl,
  } = doctor;

  const imageUrl = image
    ? image.startsWith("http")
      ? image
      : image.startsWith("/assets/")
      ? `https://montorongo.com${image}`
      : image
    : null;

  const displayFee = fee || 1000;
  const displayModes =
    modes && modes.length > 0 ? modes : ["Online Video", "In-person Chamber"];
  const displayLanguages =
    languages && languages.length > 0 ? languages : ["Bangla", "English"];
  const displayArea = area || "Dhaka, Bangladesh";
  const displayAffiliation =
    affiliation || "University of Dhaka / Licensed Clinical Practitioner";
  const displayNextSlot = nextSlot || "Available this week";
  const displayExperience = experienceYears
    ? `${experienceYears} years experience`
    : doctor.experienceLabel || doctor.experienceDetails || "Experienced";
  const bookingDestination = bookingUrl || doctor.profileUrl;

  return (
    <main className="min-h-screen bg-[#FDFDFD]">

      {/* TOP NAVIGATION */}
      <div className="border-b border-[#DCE7DF] bg-[#F0F5EF]">
        <div className="mx-auto max-w-[1150px] px-5 py-5 sm:px-8">
          <Link
            href="/doctors"
            className="group inline-flex items-center gap-2 text-[13px] font-medium text-[#52665A] transition-colors hover:text-[#174433]"
          >
            <ArrowLeft
              size={16}
              className="transition-transform group-hover:-translate-x-1"
            />
            Back to professionals
          </Link>
        </div>
      </div>

      <div className="mx-auto max-w-[1150px] px-5 pb-20 pt-8 sm:px-8 sm:pt-12">

        {/* PROFILE HEADER */}
        <section className="overflow-hidden rounded-[24px] border border-[#DCE7DF] bg-white shadow-[0_8px_35px_rgba(19,47,37,0.04)]">

          <div className="grid md:grid-cols-[300px_1fr]">

            {/* DOCTOR IMAGE */}
            <div className="p-5 sm:p-7">
              <div className="relative mx-auto aspect-[4/5] w-full max-w-[300px] overflow-hidden rounded-[18px] bg-[#EEF2EF]">
                {imageUrl ? (
                  <Image
                    src={imageUrl}
                    alt={name || "Doctor"}
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

            {/* BASIC INFORMATION */}
            <div className="flex flex-col justify-center px-5 pb-7 sm:px-8 md:py-9 md:pr-10">

              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-[#E1F0E6] px-3 py-1.5 text-[10px] font-bold tracking-wide text-[#174433]">
                  {specialty}
                </span>

                <span className="rounded-full border border-[#DCE7DF] bg-[#FDFDFD] px-3 py-1.5 text-[10px] font-medium text-[#52665A]">
                  Verified profile
                </span>
              </div>

              <p className="mt-5 text-[14px] font-medium text-[#64816E]">
                {title}
              </p>

              <h1 className="mt-2 text-[30px] font-semibold leading-tight tracking-[-0.04em] text-[#132F25] sm:text-[38px]">
                {name}
              </h1>

              <p className="mt-4 max-w-[570px] text-[13px] leading-[1.9] text-[#52665A]">
                {qualifications}
              </p>

              {/* QUICK INFORMATION */}
              <div className="mt-6 flex flex-wrap gap-x-6 gap-y-4">

                <div className="flex items-center gap-2 text-[12px] text-[#52665A]">
                  <BriefcaseMedical
                    size={16}
                    className="text-[#19A069]"
                  />
                  {displayExperience}
                </div>

                <div className="flex items-center gap-2 text-[12px] text-[#52665A]">
                  <MapPin
                    size={16}
                    className="text-[#19A069]"
                  />
                  {displayArea}
                </div>

              </div>

              {/* PRIMARY BOOKING ACTION */}
              <div className="mt-8">
                {bookingDestination ? (
                  <a
                    href={bookingDestination}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-[50px] items-center justify-center gap-3 rounded-xl bg-[#174433] px-6 text-[13px] font-semibold text-white shadow-sm transition-all hover:bg-[#103629] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#19A069] focus-visible:ring-offset-2"
                  >
                    <CalendarDays size={17} />
                    {doctor.bookingLabel || "Book an appointment"}
                    <ArrowUpRight size={15} />
                  </a>
                ) : (
                  <button
                    type="button"
                    disabled
                    className="inline-flex h-[50px] cursor-not-allowed items-center justify-center gap-3 rounded-xl bg-[#E8EEE9] px-6 text-[13px] font-semibold text-[#829287]"
                  >
                    <CalendarDays size={17} />
                    Booking link coming soon
                  </button>
                )}
              </div>

            </div>
          </div>
        </section>

        {/* DETAILS AND SIDEBAR */}
        <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_340px]">

          {/* LEFT CONTENT */}
          <div className="space-y-6">

            {/* QUALIFICATIONS */}
            <section className="rounded-[20px] border border-[#DCE7DF] bg-white p-6 sm:p-7">

              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#EAF3EC] text-[#26704F]">
                  <GraduationCap size={20} />
                </div>

                <div>
                  <h2 className="text-[16px] font-semibold text-[#132F25]">
                    Education & qualifications
                  </h2>
                  <p className="mt-0.5 text-[11px] text-[#829287]">
                    Academic background
                  </p>
                </div>
              </div>

              <p className="mt-5 text-[13px] leading-[1.9] text-[#52665A]">
                {qualifications}
              </p>

              <div className="mt-5 border-t border-[#E8EEE9] pt-5">
                <p className="text-[10px] font-bold tracking-[0.13em] text-[#829287]">
                  AFFILIATION
                </p>

                <div className="mt-3 flex items-start gap-3 text-[13px] leading-6 text-[#42534A]">
                  <Building2
                    size={17}
                    className="mt-1 shrink-0 text-[#64816E]"
                  />
                  {displayAffiliation}
                </div>
              </div>
            </section>

            {/* SPECIALTY */}
            <section className="rounded-[20px] border border-[#DCE7DF] bg-white p-6 sm:p-7">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#EAF3EC] text-[#26704F]">
                  <Stethoscope size={19} />
                </div>

                <h2 className="text-[16px] font-semibold text-[#132F25]">
                  Area of expertise
                </h2>
              </div>

              <div className="mt-5 inline-flex rounded-full border border-[#DCE7DF] bg-[#FDFDFD] px-4 py-2.5 text-[12px] font-medium text-[#42534A]">
                {specialty}
              </div>
            </section>

            {/* CONSULTATION MODES */}
            <section className="rounded-[20px] border border-[#DCE7DF] bg-white p-6 sm:p-7">

              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#EAF3EC] text-[#26704F]">
                  <Video size={19} />
                </div>

                <h2 className="text-[16px] font-semibold text-[#132F25]">
                  Consultation options
                </h2>
              </div>

              <div className="mt-5 flex flex-wrap gap-3">
                {displayModes.map((mode) => (
                  <div
                    key={mode}
                    className="flex items-center gap-2 rounded-xl border border-[#DCE7DF] bg-[#FDFDFD] px-4 py-3 text-[12px] font-medium text-[#42534A]"
                  >
                    {mode.toLowerCase().includes("online") || mode.toLowerCase().includes("video") ? (
                      <Video size={15} className="text-[#19A069]" />
                    ) : (
                      <Building2 size={15} className="text-[#19A069]" />
                    )}
                    {mode}
                  </div>
                ))}
              </div>
            </section>

          </div>

          {/* RIGHT SIDEBAR */}
          <aside className="space-y-5">

            {/* CONSULTATION FEE */}
            <section className="rounded-[20px] border border-[#DCE7DF] bg-white p-6">

              <div className="flex items-center gap-2">
                <Wallet size={17} className="text-[#19A069]" />
                <p className="text-[10px] font-bold tracking-[0.14em] text-[#829287]">
                  CONSULTATION FEE
                </p>
              </div>

              <p className="mt-3 text-[34px] font-bold tracking-tight text-[#17352A]">
                ৳{displayFee?.toLocaleString("en-BD")}
              </p>

              <div className="mt-5 border-t border-[#E8EEE9] pt-5">
                <div className="flex items-center gap-2 text-[12px] font-semibold text-[#17352A]">
                  <Clock3 size={15} className="text-[#19A069]" />
                  Next availability
                </div>

                <p className="mt-2 text-[12px] text-[#52665A]">
                  {displayNextSlot}
                </p>
              </div>

              {bookingDestination && (
                <a
                  href={bookingDestination}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-[#174433] text-[12px] font-semibold text-white transition-colors hover:bg-[#103629]"
                >
                  {doctor.bookingLabel || "Book an appointment"}
                  <ArrowUpRight size={14} />
                </a>
              )}
            </section>

            {/* LANGUAGES */}
            <section className="rounded-[20px] border border-[#DCE7DF] bg-white p-6">
              <div className="flex items-center gap-2 text-[13px] font-semibold text-[#17352A]">
                <Languages size={17} className="text-[#19A069]" />
                Languages
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {displayLanguages.map((language) => (
                  <span
                    key={language}
                    className="rounded-full bg-[#F0F5EF] px-3 py-1.5 text-[11px] font-medium text-[#42534A]"
                  >
                    {language}
                  </span>
                ))}
              </div>
            </section>

            {/* LOCATION */}
            <section className="rounded-[20px] border border-[#DCE7DF] bg-white p-6">
              <div className="flex items-center gap-2 text-[13px] font-semibold text-[#17352A]">
                <MapPin size={17} className="text-[#19A069]" />
                Consultation area
              </div>

              <p className="mt-3 text-[12px] leading-[1.8] text-[#52665A]">
                {displayArea}
              </p>
            </section>

          </aside>
        </div>

        {/* SAMPLE PROFILE DISCLAIMER */}
        <p className="mt-8 text-center text-[10px] leading-5 text-[#829287]">
          This is a representative sample profile for the Medoji AI
          directory. Professional information and availability should
          be confirmed before publishing.
        </p>

      </div>
    </main>
  );
}
