"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Stethoscope, Search } from "lucide-react";
import DoctorCard from "@/components/doctors/DoctorCard";
import { SAMPLE_DOCTORS, SAMPLE_SPECIALTIES } from "@/data/doctors";
import { useLanguage } from "@/i18n/useLanguage";

export default function CareDiscovery() {
  const [selectedSpecialty, setSelectedSpecialty] = useState("all");
  const { t, isBangla, formatNumber } = useLanguage();

  const filteredDoctors =
    selectedSpecialty === "all"
      ? SAMPLE_DOCTORS.slice(0, 4)
      : SAMPLE_DOCTORS.filter(
          (doc) => doc.specialtyId === selectedSpecialty
        ).slice(0, 4);

  const getSpecialtyLabel = (spec) => {
    if (spec.id === "all") return t("careDiscovery.specialties.all");
    if (spec.id === "mental") return t("careDiscovery.specialties.mental");
    return spec.label;
  };

  const countStr = isBangla
    ? `(${formatNumber(SAMPLE_DOCTORS.length)} জন)`
    : `(${SAMPLE_DOCTORS.length})`;

  return (
    <section className="relative w-full bg-[#FDFDFD] py-16 sm:py-20 lg:py-24 border-b border-[#DCE7DF]/60">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-[680px]">
            <div className="inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.14em] text-[#174433]">
              <Stethoscope size={15} className="text-[#19A069]" />
              <span>{t("careDiscovery.eyebrow")}</span>
            </div>

            <h2 className="mt-3 text-[30px] sm:text-[36px] lg:text-[44px] font-bold tracking-tight text-[#132F25] leading-[1.14]">
              {t("careDiscovery.heading")}
            </h2>

            <p className="mt-3 text-[15px] sm:text-[16px] text-[#42534A] leading-[1.6]">
              {t("careDiscovery.description")}
            </p>
          </div>

          <Link
            href="/doctors"
            className="inline-flex items-center gap-2 text-[14px] font-semibold text-[#174433] hover:text-[#103629] group transition-colors self-start md:self-end pb-1"
          >
            <span>
              {t("careDiscovery.viewAll")} {countStr}
            </span>
            <ArrowRight
              size={16}
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          </Link>
        </div>

        {/* Category Filter Chips */}
        <div
          className="mt-8 sm:mt-10 flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none"
          role="tablist"
          aria-label={t("careDiscovery.eyebrow")}
        >
          {SAMPLE_SPECIALTIES.map((spec) => {
            const isSelected = selectedSpecialty === spec.id;
            return (
              <button
                key={spec.id}
                role="tab"
                aria-selected={isSelected}
                onClick={() => setSelectedSpecialty(spec.id)}
                className={`shrink-0 rounded-full px-4 py-2 text-xs sm:text-[13px] font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#087A52] cursor-pointer ${
                  isSelected
                    ? "bg-[#E1F0E6] text-[#174433] font-semibold border border-[#174433]/30 shadow-2xs"
                    : "bg-[#FFFFFF] text-[#52665A] border border-[#DCE7DF] hover:border-[#7A9182] hover:text-[#132F25]"
                }`}
              >
                {getSpecialtyLabel(spec)}
              </button>
            );
          })}
        </div>

        {/* Doctor Cards Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredDoctors.length > 0 ? (
            filteredDoctors.map((doctor) => (
              <DoctorCard key={doctor.id} doctor={doctor} />
            ))
          ) : (
            <div className="col-span-full rounded-2xl border border-dashed border-[#DCE7DF] bg-[#FFFFFF] p-12 text-center">
              <p className="text-[15px] font-medium text-[#132F25]">
                {t("careDiscovery.emptyHeading")}
              </p>
              <button
                type="button"
                onClick={() => setSelectedSpecialty("all")}
                className="mt-3 text-xs font-semibold text-[#174433] underline underline-offset-4 hover:text-[#103629] cursor-pointer"
              >
                {t("careDiscovery.resetFilter")}
              </button>
            </div>
          )}
        </div>

        {/* Directory Assurance Bar */}
        <div className="mt-10 rounded-2xl border border-[#DCE7DF] bg-[#FFFFFF] p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#E1F0E6] text-[#174433]">
              <Search size={18} />
            </div>
            <div>
              <p className="text-[13px] sm:text-[14px] font-semibold text-[#132F25]">
                {t("careDiscovery.assuranceTitle")}
              </p>
              <p className="text-[12px] sm:text-[13px] text-[#52665A]">
                {t("careDiscovery.assuranceDesc")}
              </p>
            </div>
          </div>

          <Link
            href="/doctors"
            className="inline-flex shrink-0 items-center justify-center rounded-xl bg-[#174433] px-5 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-[#103629]"
          >
            {t("careDiscovery.assuranceBtn")}
          </Link>
        </div>
      </div>
    </section>
  );
}
