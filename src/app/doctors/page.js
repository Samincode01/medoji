"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Search,
  Filter,
  CheckCircle2,
  Stethoscope,
  Video,
  MapPin,
  Calendar,
  X,
  Phone,
  User,
  Clock,
  ShieldCheck,
  ArrowLeft,
} from "lucide-react";
import DoctorCard from "@/components/doctors/DoctorCard";
import { SAMPLE_DOCTORS, SAMPLE_SPECIALTIES } from "@/data/doctors";

export default function DoctorsDirectoryPage() {
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
            <span>Home</span>
          </Link>
          <span>/</span>
          <span className="text-[#132F25] font-semibold">Doctor Directory</span>
        </div>

        {/* Directory Header */}
        <div className="max-w-[780px]">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#E1F0E6] px-3 py-1 text-xs font-semibold text-[#174433]">
            <Stethoscope size={14} className="text-[#19A069]" />
            <span>VERIFIED HEALTHCARE DIRECTORY</span>
          </div>

          <h1 className="mt-3 text-[32px] sm:text-[42px] font-bold tracking-tight text-[#132F25] leading-[1.15]">
            Find a doctor or counsellor in Bangladesh.
          </h1>

          <p className="mt-3 text-[15px] sm:text-[16px] text-[#42534A] leading-[1.6]">
            Browse BMDC-verified physicians and licensed clinical psychologists.
            Transparent consultation fees, clear visit modes, and direct
            availability without hidden hospital service fees.
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
                placeholder="Search by doctor name, specialty, or Dhaka area..."
                className="w-full rounded-xl border border-[#DCE7DF] bg-[#FDFDFD] pl-10 pr-4 py-2.5 text-xs sm:text-[14px] text-[#132F25] placeholder:text-[#7A9182] focus:border-[#174433] focus:outline-none focus:ring-1 focus:ring-[#174433]"
              />
              {searchTerm && (
                <button
                  type="button"
                  onClick={() => setSearchTerm("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#7A9182] hover:text-[#132F25]"
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
                aria-label="Filter by consultation mode"
                className="w-full rounded-xl border border-[#DCE7DF] bg-[#FDFDFD] px-3.5 py-2.5 text-xs sm:text-[14px] text-[#132F25] focus:border-[#174433] focus:outline-none focus:ring-1 focus:ring-[#174433]"
              >
                <option value="all">All Consultation Modes</option>
                <option value="Online">Online Video Consultation</option>
                <option value="In person">In-Person Clinic Visit</option>
              </select>
            </div>

            {/* Clear Filters / Count */}
            <div className="md:col-span-3 flex items-center justify-between md:justify-end gap-3 text-xs">
              <span className="font-semibold text-[#174433]">
                {filteredDoctors.length} {filteredDoctors.length === 1 ? "provider" : "providers"} available
              </span>
              {(searchTerm || selectedSpecialty !== "all" || selectedMode !== "all") && (
                <button
                  type="button"
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedSpecialty("all");
                    setSelectedMode("all");
                  }}
                  className="font-medium text-[#9D242C] hover:underline"
                >
                  Reset filters
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
                  className={`shrink-0 rounded-full px-3.5 py-1.5 text-xs font-medium transition-all ${
                    isSelected
                      ? "bg-[#174433] text-white font-semibold shadow-xs"
                      : "bg-[#F0F5EF] text-[#52665A] hover:bg-[#E1F0E6] hover:text-[#174433]"
                  }`}
                >
                  {spec.label}
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
                No verified practitioners match your query.
              </p>
              <p className="text-xs text-[#52665A] mt-1">
                Try searching for a broader term like &quot;Medicine&quot;, &quot;Cardiology&quot;, or &quot;Counselling&quot;.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearchTerm("");
                  setSelectedSpecialty("all");
                  setSelectedMode("all");
                }}
                className="mt-4 inline-flex items-center justify-center rounded-xl bg-[#174433] px-4 py-2 text-xs font-semibold text-white hover:bg-[#103629]"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>

        {/* Informational Pilot Assurance */}
        <div className="mt-12 rounded-2xl border border-[#DCE7DF] bg-[#F0F5EF] p-6 text-xs text-[#52665A] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <ShieldCheck size={20} className="text-[#19A069] shrink-0" />
            <p>
              <strong className="text-[#132F25]">BMDC Credential Policy:</strong> All registered practitioners undergo primary source verification against the Bangladesh Medical and Dental Council (BMDC) register before being listed on Medoji AI.
            </p>
          </div>
          <span className="shrink-0 font-mono text-[11px] text-[#174433] font-semibold bg-[#FFFFFF] px-2.5 py-1 rounded-md border border-[#DCE7DF]">
            Care Pilot v1.0
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
                <div
                  className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl font-bold ${activeDoctor.avatarBg} ${activeDoctor.avatarColor}`}
                >
                  {activeDoctor.initials}
                </div>
                <div className="min-w-0">
                  <h3
                    id="booking-modal-title"
                    className="truncate text-[16px] font-bold text-[#132F25]"
                  >
                    {activeDoctor.name}
                  </h3>
                  <p className="truncate text-xs text-[#52665A]">
                    {activeDoctor.title} · ৳{activeDoctor.fee}
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={closeBookingModal}
                className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#F0F5EF] text-[#52665A] hover:bg-[#E1F0E6] hover:text-[#174433] transition-colors font-bold text-sm"
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
                  Booking Request Recorded
                </h4>
                <p className="mt-2 text-xs sm:text-[13px] text-[#52665A] max-w-sm mx-auto leading-[1.6]">
                  Thank you, <strong className="text-[#132F25]">{formData.name}</strong>. Your consultation request for <strong className="text-[#132F25]">{activeDoctor.name}</strong> ({formData.mode}) has been received. Our clinical coordinator will confirm your exact slot via phone (<strong className="text-[#132F25]">{formData.phone}</strong>).
                </p>

                <div className="mt-4 rounded-xl bg-[#F0F5EF] p-3 text-[11px] text-[#52665A]">
                  <span className="font-semibold text-[#174433]">Pilot Note:</span> Direct Google Form booking integration redirects seamlessly here once the external booking form URL is attached.
                </div>

                <button
                  type="button"
                  onClick={closeBookingModal}
                  className="mt-6 inline-flex h-[42px] items-center justify-center rounded-xl bg-[#174433] px-6 text-xs font-semibold text-white hover:bg-[#103629]"
                >
                  Return to Directory
                </button>
              </div>
            ) : (
              <form onSubmit={handleBookingSubmit} className="mt-5 space-y-4">
                <div className="rounded-xl bg-[#F0F5EF] p-3.5 flex items-center justify-between text-xs">
                  <div>
                    <span className="font-semibold text-[#132F25] block">
                      Consultation Fee
                    </span>
                    <span className="text-[11px] text-[#52665A]">
                      Payable after schedule confirmation
                    </span>
                  </div>
                  <span className="text-[18px] font-bold text-[#174433]">
                    ৳{activeDoctor.fee}
                  </span>
                </div>

                {/* Preferred Mode */}
                <div>
                  <label className="block text-xs font-semibold text-[#132F25] mb-1.5">
                    Consultation Mode
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {activeDoctor.modes.map((mode) => (
                      <button
                        key={mode}
                        type="button"
                        onClick={() =>
                          setFormData((prev) => ({ ...prev, mode }))
                        }
                        className={`flex items-center justify-center gap-2 rounded-xl border p-2.5 text-xs font-semibold transition-all ${
                          formData.mode === mode
                            ? "border-[#174433] bg-[#E1F0E6] text-[#174433]"
                            : "border-[#DCE7DF] bg-[#FFFFFF] text-[#52665A] hover:bg-[#FDFDFD]"
                        }`}
                      >
                        {mode === "Online" ? <Video size={14} /> : <MapPin size={14} />}
                        <span>{mode} Visit</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Patient Name */}
                <div>
                  <label className="block text-xs font-semibold text-[#132F25] mb-1">
                    Patient Full Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, name: e.target.value }))
                    }
                    placeholder="e.g. Tanvir Ahmed"
                    className="w-full rounded-xl border border-[#DCE7DF] bg-[#FDFDFD] px-3.5 py-2 text-xs sm:text-[13px] text-[#132F25] focus:border-[#174433] focus:outline-none focus:ring-1 focus:ring-[#174433]"
                  />
                </div>

                {/* Phone Number */}
                <div>
                  <label className="block text-xs font-semibold text-[#132F25] mb-1">
                    Bangladesh Mobile Number
                  </label>
                  <input
                    type="tel"
                    required
                    pattern="^(?:\+88|88)?(01[3-9]\d{8})$"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, phone: e.target.value }))
                    }
                    placeholder="e.g. 01700000000"
                    className="w-full rounded-xl border border-[#DCE7DF] bg-[#FDFDFD] px-3.5 py-2 text-xs sm:text-[13px] text-[#132F25] focus:border-[#174433] focus:outline-none focus:ring-1 focus:ring-[#174433]"
                  />
                </div>

                {/* Primary Symptom */}
                <div>
                  <label className="block text-xs font-semibold text-[#132F25] mb-1">
                    Brief Reason or Symptoms (Optional)
                  </label>
                  <textarea
                    rows={2}
                    value={formData.notes}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, notes: e.target.value }))
                    }
                    placeholder="e.g. Mild fever for 2 days, chest congestion..."
                    className="w-full rounded-xl border border-[#DCE7DF] bg-[#FDFDFD] px-3.5 py-2 text-xs sm:text-[13px] text-[#132F25] focus:border-[#174433] focus:outline-none focus:ring-1 focus:ring-[#174433]"
                  />
                </div>

                {/* Submit */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full inline-flex h-[44px] items-center justify-center rounded-xl bg-[#174433] text-xs font-bold text-white transition-colors hover:bg-[#103629]"
                  >
                    Request Consultation
                  </button>
                  <p className="text-[11px] text-[#52665A] text-center mt-2">
                    Confirmed via phone or WhatsApp · Confidential records
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
