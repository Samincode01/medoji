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
  const [selectedSpecialty, setSelectedSpecialty] = useState("all");
  const [selectedMode, setSelectedMode] = useState("all"); // "all", "Online", "In person"
  const [activeDoctor, setActiveDoctor] = useState(null);
  const [bookingSubmitted, setBookingSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    mode: "Online",
    date: "Tomorrow",
    notes: "",
  });

  const filteredDoctors = SAMPLE_DOCTORS.filter((doc) => {
    const term = searchTerm.toLowerCase();
    const matchesSearch =
      !term ||
      (doc.name || "").toLowerCase().includes(term) ||
      (doc.specialty || "").toLowerCase().includes(term) ||
      (doc.area || "").toLowerCase().includes(term) ||
      (doc.title || "").toLowerCase().includes(term);

    const matchesSpecialty =
      selectedSpecialty === "all" || doc.specialtyId === selectedSpecialty;

    const matchesMode =
      selectedMode === "all" ||
      (Array.isArray(doc.modes) && doc.modes.includes(selectedMode));

    return matchesSearch && matchesSpecialty && matchesMode;
  });

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    setBookingSubmitted(true);
  };

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

  const getSpecialtyLabel = (spec) => {
    if (spec.id === "all") return t("careDiscovery.specialties.all");
    if (spec.id === "mental") return t("careDiscovery.specialties.mental");
    return spec.label;
  };

  const providerCountText =
    filteredDoctors.length === 1
      ? t("directory.providersCountSingle")
      : t("directory.providersCount", { count: filteredDoctors.length });

  return (
    <div className="w-full bg-[#FDFDFD] py-10 sm:py-14 min-h-screen">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        {/* Navigation Breadcrumb */}
        <div className="mb-6 flex items-center gap-2 text-xs font-medium text-[#52665A]">
          <Link
            href="/"
            className="flex items-center gap-1 hover:text-[#174433] transition-colors"
          >
            <ArrowLeft size={13} />
            <span>{t("directory.breadcrumbHome")}</span>
          </Link>
          <span>/</span>
          <span className="text-[#132F25] font-semibold">{t("directory.breadcrumbDirectory")}</span>
        </div>

        {/* Directory Header */}
        <div className="max-w-[780px]">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#E1F0E6] px-3 py-1 text-xs font-semibold text-[#174433]">
            <Stethoscope size={14} className="text-[#19A069]" />
            <span>{t("directory.badge")}</span>
          </div>

          <h1 className="mt-3 text-[32px] sm:text-[42px] font-bold tracking-tight text-[#132F25] leading-[1.15]">
            {t("directory.heading")}
          </h1>

          <p className="mt-3 text-[15px] sm:text-[16px] text-[#42534A] leading-[1.6]">
            {t("directory.description")}
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="mt-8 rounded-2xl border border-[#DCE7DF] bg-[#FFFFFF] p-4 sm:p-5 shadow-xs">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-4 items-center">
            {/* Search Input */}
            <div className="md:col-span-6 relative">
              <Search
                size={18}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#7A9182]"
              />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder={t("directory.searchPlaceholder")}
                className="w-full rounded-xl border border-[#DCE7DF] bg-[#FDFDFD] pl-10 pr-4 py-2.5 text-xs sm:text-[14px] text-[#132F25] placeholder:text-[#7A9182] focus:border-[#174433] focus:outline-none focus:ring-1 focus:ring-[#174433]"
              />
              {searchTerm && (
                <button
                  type="button"
                  onClick={() => setSearchTerm("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#7A9182] hover:text-[#132F25] cursor-pointer"
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
                className="w-full rounded-xl border border-[#DCE7DF] bg-[#FDFDFD] px-3.5 py-2.5 text-xs sm:text-[14px] text-[#132F25] focus:border-[#174433] focus:outline-none focus:ring-1 focus:ring-[#174433] cursor-pointer"
              >
                <option value="all">{t("directory.modeAll")}</option>
                <option value="Online">{t("directory.modeOnline")}</option>
                <option value="In person">{t("directory.modeInPerson")}</option>
              </select>
            </div>

            {/* Clear Filters / Count */}
            <div className="md:col-span-3 flex items-center justify-between md:justify-end gap-3 text-xs">
              <span className="font-semibold text-[#174433]">
                {providerCountText}
              </span>
              {(searchTerm || selectedSpecialty !== "all" || selectedMode !== "all") && (
                <button
                  type="button"
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedSpecialty("all");
                    setSelectedMode("all");
                  }}
                  className="font-medium text-[#9D242C] hover:underline cursor-pointer"
                >
                  {t("directory.resetFilters")}
                </button>
              )}
            </div>
          </div>

          {/* Specialty Filter Chips */}
          <div className="mt-4 pt-3.5 border-t border-[#DCE7DF]/80 flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            {SAMPLE_SPECIALTIES.map((spec) => {
              const isSelected = selectedSpecialty === spec.id;
              return (
                <button
                  key={spec.id}
                  onClick={() => setSelectedSpecialty(spec.id)}
                  className={`shrink-0 rounded-full px-3.5 py-1.5 text-xs font-medium transition-all cursor-pointer ${
                    isSelected
                      ? "bg-[#174433] text-white font-semibold shadow-xs"
                      : "bg-[#F0F5EF] text-[#52665A] hover:bg-[#E1F0E6] hover:text-[#174433]"
                  }`}
                >
                  {getSpecialtyLabel(spec)}
                </button>
              );
            })}
          </div>
        </div>

        {/* Directory Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDoctors.length > 0 ? (
            filteredDoctors.map((doc) => (
              <DoctorCard
                key={doc.id}
                doctor={doc}
                onSelect={(doctor) => {
                  setActiveDoctor(doctor);
                  setFormData((prev) => ({
                    ...prev,
                    mode: doctor.modes[0] || "Online",
                  }));
                }}
              />
            ))
          ) : (
            <div className="col-span-full rounded-2xl border border-dashed border-[#DCE7DF] bg-[#FFFFFF] p-12 text-center">
              <p className="text-[15px] font-semibold text-[#132F25]">
                {t("directory.noResultsTitle")}
              </p>
              <p className="text-xs text-[#52665A] mt-1">
                {t("directory.noResultsDesc")}
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearchTerm("");
                  setSelectedSpecialty("all");
                  setSelectedMode("all");
                }}
                className="mt-4 inline-flex items-center justify-center rounded-xl bg-[#174433] px-4 py-2 text-xs font-semibold text-white hover:bg-[#103629] cursor-pointer"
              >
                {t("directory.clearFilters")}
              </button>
            </div>
          )}
        </div>

        {/* Informational Pilot Assurance */}
        <div className="mt-12 rounded-2xl border border-[#DCE7DF] bg-[#F0F5EF] p-6 text-xs text-[#52665A] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <ShieldCheck size={20} className="text-[#19A069] shrink-0" />
            <p>
              <strong className="text-[#132F25]">{t("directory.policyTitle")} </strong>
              {t("directory.policyText")}
            </p>
          </div>
          <span className="shrink-0 font-mono text-[11px] text-[#174433] font-semibold bg-[#FFFFFF] px-2.5 py-1 rounded-md border border-[#DCE7DF]">
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
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#132F25]/75 backdrop-blur-xs"
        >
          <div className="relative w-full max-w-lg rounded-3xl bg-[#FFFFFF] p-6 sm:p-8 shadow-2xl animate-in fade-in zoom-in-95 duration-150">
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-[#DCE7DF] pb-4">
              <div className="flex items-center gap-3 min-w-0">
                <div className="min-w-0">
                  <h3
                    id="booking-modal-title"
                    className="truncate text-[16px] font-bold text-[#132F25]"
                  >
                    {activeDoctor.name}
                  </h3>
                  <p className="truncate text-xs text-[#52665A]">
                    {activeDoctor.title} · ৳{formatNumber(activeDoctor.fee)}
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={closeBookingModal}
                className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#F0F5EF] text-[#52665A] hover:bg-[#E1F0E6] hover:text-[#174433] transition-colors font-bold text-sm cursor-pointer"
              >
                ✕
              </button>
            </div>

            {bookingSubmitted ? (
              <div className="mt-6 text-center py-6">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#E4F4E9] text-[#17613F] mx-auto">
                  <CheckCircle2 size={32} />
                </div>
                <h4 className="mt-4 text-[18px] font-bold text-[#132F25]">
                  {t("directory.modal.successTitle")}
                </h4>
                <p className="mt-2 text-xs sm:text-[13px] text-[#52665A] max-w-sm mx-auto leading-[1.6]">
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
                  className="mt-6 inline-flex h-[42px] items-center justify-center rounded-xl bg-[#174433] px-6 text-xs font-semibold text-white hover:bg-[#103629] cursor-pointer"
                >
                  {t("directory.modal.returnBtn")}
                </button>
              </div>
            ) : (
              <form onSubmit={handleBookingSubmit} className="mt-5 space-y-4">
                <div className="rounded-xl bg-[#F0F5EF] p-3.5 flex items-center justify-between text-xs">
                  <div>
                    <span className="font-semibold text-[#132F25] block">
                      {t("directory.modal.feeLabel")}
                    </span>
                    <span className="text-[11px] text-[#52665A]">
                      {t("directory.modal.feeNote")}
                    </span>
                  </div>
                  <span className="text-[18px] font-bold text-[#174433]">
                    ৳{formatNumber(activeDoctor.fee)}
                  </span>
                </div>

                {/* Preferred Mode */}
                <div>
                  <label className="block text-xs font-semibold text-[#132F25] mb-1.5">
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
                        className={`flex items-center justify-center gap-2 rounded-xl border p-2.5 text-xs font-semibold transition-all cursor-pointer ${
                          formData.mode === mode
                            ? "border-[#174433] bg-[#E1F0E6] text-[#174433]"
                            : "border-[#DCE7DF] bg-[#FFFFFF] text-[#52665A] hover:bg-[#FDFDFD]"
                        }`}
                      >
                        {mode === "Online" ? <Video size={14} /> : <MapPin size={14} />}
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
                  <label className="block text-xs font-semibold text-[#132F25] mb-1">
                    {t("directory.modal.nameLabel")}
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, name: e.target.value }))
                    }
                    placeholder={t("directory.modal.namePlaceholder")}
                    className="w-full rounded-xl border border-[#DCE7DF] bg-[#FDFDFD] px-3.5 py-2 text-xs sm:text-[13px] text-[#132F25] focus:border-[#174433] focus:outline-none focus:ring-1 focus:ring-[#174433]"
                  />
                </div>

                {/* Phone Number */}
                <div>
                  <label className="block text-xs font-semibold text-[#132F25] mb-1">
                    {t("directory.modal.phoneLabel")}
                  </label>
                  <input
                    type="tel"
                    required
                    pattern="^(?:\+88|88)?(01[3-9]\d{8})$"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, phone: e.target.value }))
                    }
                    placeholder={t("directory.modal.phonePlaceholder")}
                    className="w-full rounded-xl border border-[#DCE7DF] bg-[#FDFDFD] px-3.5 py-2 text-xs sm:text-[13px] text-[#132F25] focus:border-[#174433] focus:outline-none focus:ring-1 focus:ring-[#174433]"
                  />
                </div>

                {/* Primary Symptom */}
                <div>
                  <label className="block text-xs font-semibold text-[#132F25] mb-1">
                    {t("directory.modal.notesLabel")}
                  </label>
                  <textarea
                    rows={2}
                    value={formData.notes}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, notes: e.target.value }))
                    }
                    placeholder={t("directory.modal.notesPlaceholder")}
                    className="w-full rounded-xl border border-[#DCE7DF] bg-[#FDFDFD] px-3.5 py-2 text-xs sm:text-[13px] text-[#132F25] focus:border-[#174433] focus:outline-none focus:ring-1 focus:ring-[#174433]"
                  />
                </div>

                {/* Submit */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full inline-flex h-[44px] items-center justify-center rounded-xl bg-[#174433] text-xs font-bold text-white transition-colors hover:bg-[#103629] cursor-pointer"
                  >
                    {t("directory.modal.submitBtn")}
                  </button>
                  <p className="text-[11px] text-[#52665A] text-center mt-2">
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
