
"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Search,
  CheckCircle2,
  Stethoscope,
  Video,
  MapPin,
  X,
  ShieldCheck,
  ArrowLeft,
} from "lucide-react";
import DoctorCard from "@/components/doctors/DoctorCard";
import { SAMPLE_DOCTORS, SAMPLE_SPECIALTIES } from "@/data/doctors";
import { useLanguage } from "@/i18n/useLanguage";

export default function DoctorsDirectoryPage() {
  const { t, isBangla, formatNumber } = useLanguage();

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("all");
  const [selectedSpecialty, setSelectedSpecialty] = useState("all");
  const [selectedMode, setSelectedMode] = useState("all");

  const [activeDoctor, setActiveDoctor] = useState(null);
  const [bookingSubmitted, setBookingSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    mode: "Online",
    date: "Tomorrow",
    notes: "",
  });

  // Filter professionals
  const filteredDoctors = SAMPLE_DOCTORS.filter((doc) => {
    const term = searchTerm.trim().toLowerCase();

    const matchesSearch =
      !term ||
      (doc.name || "").toLowerCase().includes(term) ||
      (doc.specialty || "").toLowerCase().includes(term) ||
      (doc.qualifications || "").toLowerCase().includes(term) ||
      (doc.area || "").toLowerCase().includes(term) ||
      (doc.title || "").toLowerCase().includes(term);

    const matchesType =
      selectedType === "all" ||
      doc.category === selectedType ||
      doc.specialtyId === selectedType ||
      (selectedType === "doctor" && doc.category === "physical") ||
      (selectedType === "doctors" && doc.category === "physical") ||
      (selectedType === "psychologist" && doc.category === "mental") ||
      (selectedType === "psychologists" && doc.category === "mental");

    const matchesSpecialty =
      selectedSpecialty === "all" ||
      doc.specialtyId === selectedSpecialty ||
      doc.category === selectedSpecialty;

    const matchesMode =
      selectedMode === "all" ||
      (Array.isArray(doc.modes) && doc.modes.includes(selectedMode));

    return (
      matchesSearch &&
      matchesType &&
      matchesSpecialty &&
      matchesMode
    );
  });

  // Reset filters
  const resetFilters = () => {
    setSearchTerm("");
    setSelectedType("all");
    setSelectedSpecialty("all");
    setSelectedMode("all");
  };

  // Booking form submission
  const handleBookingSubmit = (e) => {
    e.preventDefault();
    setBookingSubmitted(true);
  };

  // Close booking modal
  const closeBookingModal = () => {
    setActiveDoctor(null);
    setBookingSubmitted(false);

    setFormData({
      name: "",
      phone: "",
      mode: "Online",
      date: "Tomorrow",
      notes: "",
    });
  };

  // Specialty label
 const getSpecialtyLabel = (spec) => {
  if (spec.id === "all") {
    return isBangla ? "সব বিভাগ" : "All specialties";
  }

  if (spec.id === "mental") {
    return t("careDiscovery.specialties.mental");
  }

  return spec.label;
};

  // Professional count
  const providerCountText =
    filteredDoctors.length === 1
      ? t("directory.providersCountSingle")
      : t("directory.providersCount", {
          count: filteredDoctors.length,
        });

  const hasActiveFilters =
    searchTerm !== "" ||
    selectedType !== "all" ||
    selectedSpecialty !== "all" ||
    selectedMode !== "all";

  const professionalTypes = [
    {
      value: "all",
      label: isBangla ? "সব" : "All",
    },
    {
      value: "physical",
      label: isBangla ? "চিকিৎসক" : "Doctors",
    },
    {
      value: "mental",
      label: isBangla ? "মনোবিজ্ঞানী" : "Psychologists",
    },
  ];

  return (
    <div className="min-h-screen w-full bg-[#FDFDFD] py-10 sm:py-14">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">

        {/* Navigation Breadcrumb */}
        <div className="mb-6 flex items-center gap-2 text-xs font-medium text-[#52665A]">
          <Link
            href="/"
            className="flex items-center gap-1 transition-colors hover:text-[#174433]"
          >
            <ArrowLeft size={13} />
            <span>{t("directory.breadcrumbHome")}</span>
          </Link>

          <span>/</span>

          <span className="font-semibold text-[#132F25]">
            {t("directory.breadcrumbDirectory")}
          </span>
        </div>

        {/* Directory Header */}
        <div className="max-w-[780px]">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#E1F0E6] px-3 py-1 text-xs font-semibold text-[#174433]">
            <Stethoscope size={14} className="text-[#19A069]" />
            <span>{t("directory.badge")}</span>
          </div>

          <h1 className="mt-3 text-[32px] font-bold leading-[1.15] tracking-tight text-[#132F25] sm:text-[42px]">
            {t("directory.heading")}
          </h1>

          <p className="mt-3 text-[15px] leading-[1.6] text-[#42534A] sm:text-[16px]">
            {t("directory.description")}
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="mt-8 rounded-2xl border border-[#DCE7DF] bg-white p-4 shadow-xs sm:p-5">

          {/* Professional Type Filter */}
          <div className="mb-5">
            <p className="mb-3 text-xs font-semibold text-[#52665A]">
              {isBangla ? "সেবার ধরন নির্বাচন করুন" : "Choose professional type"}
            </p>

            <div className="flex flex-wrap gap-2">
              {professionalTypes.map((item) => {
                const isSelected = selectedType === item.value;

                return (
                  <button
                    key={item.value}
                    type="button"
                    onClick={() => {
                      setSelectedType(item.value);
                      setSelectedSpecialty("all");
                    }}
                    aria-pressed={isSelected}
                    className={`rounded-full px-4 py-2.5 text-xs font-semibold transition-all duration-200 ${
                      isSelected
                        ? "bg-[#174433] text-white shadow-xs"
                        : "border border-[#DCE7DF] bg-white text-[#52665A] hover:border-[#174433] hover:text-[#174433]"
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="border-t border-[#DCE7DF]/80 pt-4">
            <div className="grid grid-cols-1 items-center gap-3 md:grid-cols-12 sm:gap-4">

              {/* Search Input */}
              <div className="relative md:col-span-6">
                <Search
                  size={18}
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#7A9182]"
                />

                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder={t("directory.searchPlaceholder")}
                  className="w-full rounded-xl border border-[#DCE7DF] bg-[#FDFDFD] py-2.5 pl-10 pr-10 text-xs text-[#132F25] placeholder:text-[#7A9182] focus:border-[#174433] focus:outline-none focus:ring-1 focus:ring-[#174433] sm:text-[14px]"
                />

                {searchTerm && (
                  <button
                    type="button"
                    onClick={() => setSearchTerm("")}
                    aria-label={isBangla ? "অনুসন্ধান মুছুন" : "Clear search"}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[#7A9182] transition-colors hover:text-[#132F25]"
                  >
                    <X size={15} />
                  </button>
                )}
              </div>

              {/* Visit Mode Filter */}
              <div className="md:col-span-3">
                <select
                  value={selectedMode}
                  onChange={(e) => setSelectedMode(e.target.value)}
                  aria-label={t("directory.modeAll")}
                  className="w-full cursor-pointer rounded-xl border border-[#DCE7DF] bg-[#FDFDFD] px-3.5 py-2.5 text-xs text-[#132F25] focus:border-[#174433] focus:outline-none focus:ring-1 focus:ring-[#174433] sm:text-[14px]"
                >
                  <option value="all">{t("directory.modeAll")}</option>
                  <option value="Online">{t("directory.modeOnline")}</option>
                  <option value="In person">{t("directory.modeInPerson")}</option>
                </select>
              </div>

              {/* Count & Reset */}
              <div className="flex items-center justify-between gap-3 text-xs md:col-span-3 md:justify-end">
                <span className="font-semibold text-[#174433]">
                  {providerCountText}
                </span>

                {hasActiveFilters && (
                  <button
                    type="button"
                    onClick={resetFilters}
                    className="cursor-pointer font-medium text-[#9D242C] hover:underline"
                  >
                    {t("directory.resetFilters")}
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Directory Grid */}
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredDoctors.length > 0 ? (
            filteredDoctors.map((doc) => (
              <DoctorCard
                key={doc.id}
                doctor={doc}
                onSelect={(doctor) => {
                  setActiveDoctor(doctor);

                  setFormData((prev) => ({
                    ...prev,
                    mode: doctor.modes?.[0] || "Online",
                  }));
                }}
              />
            ))
          ) : (
            <div className="col-span-full rounded-2xl border border-dashed border-[#DCE7DF] bg-white p-12 text-center">
              <p className="text-[15px] font-semibold text-[#132F25]">
                {t("directory.noResultsTitle")}
              </p>

              <p className="mt-1 text-xs text-[#52665A]">
                {t("directory.noResultsDesc")}
              </p>

              <button
                type="button"
                onClick={resetFilters}
                className="mt-4 inline-flex cursor-pointer items-center justify-center rounded-xl bg-[#174433] px-4 py-2 text-xs font-semibold text-white hover:bg-[#103629]"
              >
                {t("directory.clearFilters")}
              </button>
            </div>
          )}
        </div>

        {/* Informational Pilot Assurance */}
        <div className="mt-12 flex flex-col items-start justify-between gap-4 rounded-2xl border border-[#DCE7DF] bg-[#F0F5EF] p-6 text-xs text-[#52665A] sm:flex-row sm:items-center">
          <div className="flex items-center gap-3">
            <ShieldCheck size={20} className="shrink-0 text-[#19A069]" />

            <p>
              <strong className="text-[#132F25]">
                {t("directory.policyTitle")}{" "}
              </strong>
              {t("directory.policyText")}
            </p>
          </div>

          <span className="shrink-0 rounded-md border border-[#DCE7DF] bg-white px-2.5 py-1 font-mono text-[11px] font-semibold text-[#174433]">
            {t("directory.pilotTag")}
          </span>
        </div>
      </div>

      {/* Booking / Details Request Modal */}
      {activeDoctor && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="booking-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#132F25]/75 p-4 backdrop-blur-xs"
          onClick={(e) => {
            if (e.target === e.currentTarget) closeBookingModal();
          }}
        >
          <div className="relative max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-3xl bg-white p-6 shadow-2xl sm:p-8">

            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-[#DCE7DF] pb-4">
              <div className="min-w-0">
                <h3
                  id="booking-modal-title"
                  className="truncate text-[16px] font-bold text-[#132F25]"
                >
                  {activeDoctor.name}
                </h3>

                <p className="truncate text-xs text-[#52665A]">
                  {activeDoctor.title} {activeDoctor.fee ? `· ৳${formatNumber(activeDoctor.fee)}` : ""}
                </p>
              </div>

              <button
                type="button"
                onClick={closeBookingModal}
                aria-label={isBangla ? "বন্ধ করুন" : "Close"}
                className="flex h-8 w-8 shrink-0 cursor-pointer items-center justify-center rounded-lg bg-[#F0F5EF] text-sm font-bold text-[#52665A] transition-colors hover:bg-[#E1F0E6] hover:text-[#174433]"
              >
                <X size={17} />
              </button>
            </div>

            {bookingSubmitted ? (
              <div className="mt-6 py-6 text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#E4F4E9] text-[#17613F]">
                  <CheckCircle2 size={32} />
                </div>

                <h4 className="mt-4 text-[18px] font-bold text-[#132F25]">
                  {t("directory.modal.successTitle")}
                </h4>

                <p className="mx-auto mt-2 max-w-sm text-xs leading-[1.6] text-[#52665A] sm:text-[13px]">
                  {t("directory.modal.successDesc", {
                    name: formData.name,
                    doctor: activeDoctor.name,
                    mode: formData.mode,
                    phone: formData.phone,
                  })}
                </p>

                <div className="mt-4 rounded-xl bg-[#F0F5EF] p-3 text-[11px] text-[#52665A]">
                  <span className="font-semibold text-[#174433]">
                    {isBangla ? "পাইলট নোট:" : "Pilot Note:"}
                  </span>{" "}
                  {t("directory.modal.successPilotNote")}
                </div>

                <button
                  type="button"
                  onClick={closeBookingModal}
                  className="mt-6 inline-flex h-[42px] cursor-pointer items-center justify-center rounded-xl bg-[#174433] px-6 text-xs font-semibold text-white hover:bg-[#103629]"
                >
                  {t("directory.modal.returnBtn")}
                </button>
              </div>
            ) : (
              <form onSubmit={handleBookingSubmit} className="mt-5 space-y-4">

                {/* Consultation Fee */}
                <div className="flex items-center justify-between rounded-xl bg-[#F0F5EF] p-3.5 text-xs">
                  <div>
                    <span className="block font-semibold text-[#132F25]">
                      {t("directory.modal.feeLabel")}
                    </span>

                    <span className="text-[11px] text-[#52665A]">
                      {t("directory.modal.feeNote")}
                    </span>
                  </div>

                  <span className="text-[18px] font-bold text-[#174433]">
                    {activeDoctor.fee ? `৳${formatNumber(activeDoctor.fee)}` : (isBangla ? "বিনামূল্যে (ডেমো)" : "Free (Demo)")}
                  </span>
                </div>

                {/* Preferred Mode */}
                <div>
                  <label className="mb-1.5 block text-xs font-semibold text-[#132F25]">
                    {t("directory.modal.modeLabel")}
                  </label>

                  <div className="grid grid-cols-2 gap-2">
                    {(activeDoctor.modes || ["Online"]).map((mode) => (
                      <button
                        key={mode}
                        type="button"
                        onClick={() =>
                          setFormData((prev) => ({ ...prev, mode }))
                        }
                        className={`flex cursor-pointer items-center justify-center gap-2 rounded-xl border p-2.5 text-xs font-semibold transition-all ${
                          formData.mode === mode
                            ? "border-[#174433] bg-[#E1F0E6] text-[#174433]"
                            : "border-[#DCE7DF] bg-white text-[#52665A] hover:bg-[#FDFDFD]"
                        }`}
                      >
                        {mode === "Online" ? (
                          <Video size={14} />
                        ) : (
                          <MapPin size={14} />
                        )}

                        <span>
                          {mode === "Online"
                            ? t("directory.modal.onlineVisit")
                            : t("directory.modal.inPersonVisit")}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Patient Name */}
                <div>
                  <label className="mb-1 block text-xs font-semibold text-[#132F25]">
                    {t("directory.modal.nameLabel")}
                  </label>

                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        name: e.target.value,
                      }))
                    }
                    placeholder={t("directory.modal.namePlaceholder")}
                    className="w-full rounded-xl border border-[#DCE7DF] bg-[#FDFDFD] px-3.5 py-2 text-xs text-[#132F25] focus:border-[#174433] focus:outline-none focus:ring-1 focus:ring-[#174433] sm:text-[13px]"
                  />
                </div>

                {/* Phone Number */}
                <div>
                  <label className="mb-1 block text-xs font-semibold text-[#132F25]">
                    {t("directory.modal.phoneLabel")}
                  </label>

                  <input
                    type="tel"
                    required
                    pattern="^(?:\+88|88)?(01[3-9]\d{8})$"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        phone: e.target.value,
                      }))
                    }
                    placeholder={t("directory.modal.phonePlaceholder")}
                    className="w-full rounded-xl border border-[#DCE7DF] bg-[#FDFDFD] px-3.5 py-2 text-xs text-[#132F25] focus:border-[#174433] focus:outline-none focus:ring-1 focus:ring-[#174433] sm:text-[13px]"
                  />
                </div>

                {/* Primary Symptom */}
                <div>
                  <label className="mb-1 block text-xs font-semibold text-[#132F25]">
                    {t("directory.modal.notesLabel")}
                  </label>

                  <textarea
                    rows={2}
                    value={formData.notes}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        notes: e.target.value,
                      }))
                    }
                    placeholder={t("directory.modal.notesPlaceholder")}
                    className="w-full rounded-xl border border-[#DCE7DF] bg-[#FDFDFD] px-3.5 py-2 text-xs text-[#132F25] focus:border-[#174433] focus:outline-none focus:ring-1 focus:ring-[#174433] sm:text-[13px]"
                  />
                </div>

                {/* Submit */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="inline-flex h-[44px] w-full cursor-pointer items-center justify-center rounded-xl bg-[#174433] text-xs font-bold text-white transition-colors hover:bg-[#103629]"
                  >
                    {t("directory.modal.submitBtn")}
                  </button>

                  <p className="mt-2 text-center text-[11px] text-[#52665A]">
                    {t("directory.modal.submitNote")}
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
