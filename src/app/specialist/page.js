import { Suspense } from "react";
import Link from "next/link";
import { Stethoscope, ShieldCheck, ArrowLeft } from "lucide-react";
import DoctorCard from "@/components/doctors/DoctorCard";
import SpecialistFilterBar from "@/components/doctors/SpecialistFilterBar";
import { SAMPLE_DOCTORS } from "@/data/doctors";
import { translations } from "@/i18n/translations";

async function SpecialistDirectoryContent({ searchParams }) {
  const resolvedParams = (await searchParams) || {};
  const searchTerm = typeof resolvedParams.q === "string" ? resolvedParams.q : "";
  const selectedType =
    typeof resolvedParams.type === "string" ? resolvedParams.type : "all";
  const selectedMode =
    typeof resolvedParams.mode === "string" ? resolvedParams.mode : "all";

  const dict = translations.en.directory;

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

    const matchesMode =
      selectedMode === "all" ||
      (Array.isArray(doc.modes) && doc.modes.includes(selectedMode));

    return matchesSearch && matchesType && matchesMode;
  });

  return (
    <>
      <SpecialistFilterBar
        initialSearch={searchTerm}
        initialType={selectedType}
        initialMode={selectedMode}
        filteredCount={filteredDoctors.length}
      />

      {/* Directory Grid */}
      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredDoctors.length > 0 ? (
          filteredDoctors.map((doc) => (
            <DoctorCard key={doc.id} doctor={doc} />
          ))
        ) : (
          <div className="col-span-full rounded-2xl border border-dashed border-[#DCE7DF] bg-white p-12 text-center">
            <p className="text-[15px] font-semibold text-[#132F25]">
              {dict.noResultsTitle}
            </p>

            <p className="mt-1 text-xs text-[#52665A]">
              {dict.noResultsDesc}
            </p>

            <Link
              href="/specialist"
              className="mt-4 inline-flex items-center justify-center rounded-xl bg-[#174433] px-4 py-2 text-xs font-semibold text-white hover:bg-[#103629]"
            >
              {dict.clearFilters}
            </Link>
          </div>
        )}
      </div>
    </>
  );
}

export default function DoctorsDirectoryPage({ searchParams }) {
  const dict = translations.en.directory;

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
            <span>{dict.breadcrumbHome}</span>
          </Link>

          <span>/</span>

          <span className="font-semibold text-[#132F25]">
            {dict.breadcrumbDirectory}
          </span>
        </div>

        {/* Directory Header */}
        <div className="max-w-[780px]">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#E1F0E6] px-3 py-1 text-xs font-semibold text-[#174433]">
            <Stethoscope size={14} className="text-[#19A069]" />
            <span>{dict.badge}</span>
          </div>

          <h1 className="mt-3 text-[32px] font-bold leading-[1.15] tracking-tight text-[#132F25] sm:text-[42px]">
            {dict.heading}
          </h1>

          <p className="mt-3 text-[15px] leading-[1.6] text-[#42534A] sm:text-[16px]">
            {dict.description}
          </p>
        </div>

        <Suspense
          fallback={
            <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {SAMPLE_DOCTORS.map((doc) => (
                <DoctorCard key={doc.id} doctor={doc} />
              ))}
            </div>
          }
        >
          <SpecialistDirectoryContent searchParams={searchParams} />
        </Suspense>

        {/* Informational Pilot Assurance */}
        <div className="mt-12 flex flex-col items-start justify-between gap-4 rounded-2xl border border-[#DCE7DF] bg-[#F0F5EF] p-6 text-xs text-[#52665A] sm:flex-row sm:items-center">
          <div className="flex items-center gap-3">
            <ShieldCheck size={20} className="shrink-0 text-[#19A069]" />

            <p>
              <strong className="text-[#132F25]">
                {dict.policyTitle}{" "}
              </strong>
              {dict.policyText}
            </p>
          </div>

          <span className="shrink-0 rounded-md border border-[#DCE7DF] bg-white px-2.5 py-1 font-mono text-[11px] font-semibold text-[#174433]">
            {dict.pilotTag}
          </span>
        </div>
      </div>
    </div>
  );
}
