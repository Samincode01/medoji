import Link from "next/link";
import {
  Stethoscope,
  Brain,
  ClipboardCheck,
  Pill,
  ArrowRight,
  ShieldCheck,
  Clock,
  CheckCircle,
  FileText,
} from "lucide-react";

export default function ServicesSection() {
  return (
    <section className="relative w-full bg-[#FFFFFF] py-16 sm:py-20 lg:py-24 border-b border-[#DCE7DF]/60">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-[760px]">
          <div className="inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.14em] text-[#174433]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#19A069]" />
            <span>CONNECTED HEALTHCARE SERVICES</span>
          </div>

          <h2 className="mt-3 text-[30px] sm:text-[36px] lg:text-[44px] font-bold tracking-tight text-[#132F25] leading-[1.14]">
            Care designed around real recovery, not one-off visits.
          </h2>

          <p className="mt-4 text-[16px] sm:text-[17px] text-[#42534A] leading-[1.6]">
            Healthcare in Bangladesh has long been fragmented between distant
            clinics, lost paper prescriptions, and unanswered follow-up
            questions. Medoji connects every stage into one seamless journey.
          </p>
        </div>

        {/* Distinctive Asymmetric Architectural Layout */}
        <div className="mt-12 lg:mt-16 grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Editorial Feature Card (Left Column - 7 Cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between rounded-3xl border border-[#DCE7DF] bg-[#FDFDFD] p-8 sm:p-10 shadow-2xs">
            <div>
              <div className="flex items-center justify-between border-b border-[#DCE7DF]/80 pb-5">
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#19A069]">
                  PILLAR 01 · PHYSICAL HEALTH
                </span>
                <span className="inline-flex items-center gap-1 rounded-full bg-[#E1F0E6] px-2.5 py-1 text-[11px] font-semibold text-[#174433]">
                  BMDC Verified Only
                </span>
              </div>

              <div className="mt-6 flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#E1F0E6] text-[#174433]">
                  <Stethoscope size={24} />
                </div>
                <div>
                  <h3 className="text-[22px] sm:text-[24px] font-bold text-[#132F25] tracking-tight">
                    Doctor &amp; Specialist Discovery
                  </h3>
                  <p className="mt-2 text-[15px] text-[#42534A] leading-[1.6]">
                    Direct access to vetted general physicians, pediatricians,
                    cardiologists, and gynecologists across Bangladesh. Transparent
                    consultation fees, verified qualifications, and genuine patient
                    reviews without intermediary middlemen.
                  </p>
                </div>
              </div>

              {/* Connected Journey Visual Flow */}
              <div className="mt-8 rounded-2xl border border-[#DCE7DF] bg-[#FFFFFF] p-5">
                <p className="text-[11px] font-bold uppercase tracking-wider text-[#52665A]">
                  Care Journey Steps
                </p>
                <div className="mt-3 grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="rounded-xl bg-[#F0F5EF] p-3 text-xs">
                    <span className="font-semibold text-[#174433] block">1. Search &amp; Select</span>
                    <span className="text-[#52665A] text-[11px] mt-0.5 block">
                      Filter by specialty, fee &amp; city
                    </span>
                  </div>
                  <div className="rounded-xl bg-[#F0F5EF] p-3 text-xs">
                    <span className="font-semibold text-[#174433] block">2. Choose Mode</span>
                    <span className="text-[#52665A] text-[11px] mt-0.5 block">
                      HD Video or In-Clinic Visit
                    </span>
                  </div>
                  <div className="rounded-xl bg-[#E1F0E6] p-3 text-xs border border-[#19A069]/30">
                    <span className="font-semibold text-[#174433] block">3. Digital Notes</span>
                    <span className="text-[#174433] text-[11px] mt-0.5 block font-medium">
                      Immediate verified prescription
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[#DCE7DF]/80 flex items-center justify-between">
              <span className="text-xs text-[#52665A]">
                Average response time: under 15 minutes for urgent slots
              </span>
              <Link
                href="/doctors"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#174433] hover:text-[#103629]"
              >
                Find a Doctor <ArrowRight size={14} />
              </Link>
            </div>
          </div>

          {/* Right Column (5 Cols) - Mental Health & Counselling */}
          <div className="lg:col-span-5 flex flex-col justify-between rounded-3xl border border-[#DCE7DF] bg-[#F0F5EF] p-8 sm:p-9">
            <div>
              <div className="flex items-center justify-between border-b border-[#DCE7DF]/80 pb-5">
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#174433]">
                  PILLAR 02 · MENTAL HEALTH
                </span>
                <span className="inline-flex items-center gap-1 rounded-full bg-[#FFFFFF] px-2.5 py-1 text-[11px] font-semibold text-[#174433] shadow-2xs">
                  <ShieldCheck size={12} className="text-[#19A069]" />
                  100% Confidential
                </span>
              </div>

              <div className="mt-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FFFFFF] text-[#174433] shadow-2xs">
                  <Brain size={24} />
                </div>
                <h3 className="mt-4 text-[22px] sm:text-[24px] font-bold text-[#132F25] tracking-tight">
                  Mental Health &amp; Counselling
                </h3>
                <p className="mt-2 text-[15px] text-[#42534A] leading-[1.6]">
                  A safe, empathetic environment for individual counselling,
                  stress management, relationship guidance, and clinical psychology.
                  Consult licensed counsellors via encrypted audio/video sessions
                  from the comfort and privacy of your home.
                </p>

                <div className="mt-6 space-y-2.5">
                  <div className="flex items-center gap-2 text-xs font-medium text-[#132F25]">
                    <CheckCircle size={15} className="text-[#19A069]" />
                    <span>No waiting rooms, completely stigma-free</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-medium text-[#132F25]">
                    <CheckCircle size={15} className="text-[#19A069]" />
                    <span>Bangla and English conversational sessions</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-medium text-[#132F25]">
                    <CheckCircle size={15} className="text-[#19A069]" />
                    <span>Follow-up emotional wellness journals</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[#DCE7DF]/80">
              <Link
                href="/doctors"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#174433] hover:text-[#103629]"
              >
                Browse Mental Health Specialists <ArrowRight size={14} />
              </Link>
            </div>
          </div>

          {/* Bottom Left Card (5 Cols) - Follow-up on Care */}
          <div className="lg:col-span-5 flex flex-col justify-between rounded-3xl border border-[#DCE7DF] bg-[#FFFFFF] p-8 sm:p-9 shadow-2xs">
            <div>
              <div className="flex items-center justify-between border-b border-[#DCE7DF]/80 pb-5">
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#19A069]">
                  PILLAR 03 · CARE CONTINUITY
                </span>
                <span className="text-xs text-[#52665A]">Post-Visit</span>
              </div>

              <div className="mt-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#E1F0E6] text-[#174433]">
                  <ClipboardCheck size={24} />
                </div>
                <h3 className="mt-4 text-[22px] font-bold text-[#132F25] tracking-tight">
                  Follow-up on Care &amp; Recovery
                </h3>
                <p className="mt-2 text-[14px] text-[#42534A] leading-[1.6]">
                  A consultation should not end when the call terminates. Medoji
                  prompts post-treatment recovery milestones, symptom tracking,
                  and structured doctor reviews so patients don’t drop out of care.
                </p>

                <div className="mt-6 rounded-xl bg-[#F0F5EF] p-4 border border-[#DCE7DF]/80">
                  <div className="flex items-center justify-between text-xs font-semibold text-[#174433]">
                    <span className="flex items-center gap-1.5">
                      <Clock size={13} className="text-[#19A069]" />
                      Scheduled Check-in: Day 3
                    </span>
                    <span className="rounded-full bg-[#FFFFFF] px-2 py-0.5 text-[10px] text-[#52665A]">
                      Automated
                    </span>
                  </div>
                  <p className="mt-1.5 text-xs text-[#52665A]">
                    &quot;Has your fever subsided since starting medication? Tap to record symptoms for Dr. Ahmed.&quot;
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-[#DCE7DF]/80">
              <span className="text-xs font-medium text-[#174433]">
                Reduced treatment abandonment by proactive follow-up
              </span>
            </div>
          </div>

          {/* Bottom Right Card (7 Cols) - Prescription Management */}
          <div className="lg:col-span-7 flex flex-col justify-between rounded-3xl border border-[#DCE7DF] bg-[#FDFDFD] p-8 sm:p-10 shadow-2xs">
            <div>
              <div className="flex items-center justify-between border-b border-[#DCE7DF]/80 pb-5">
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#174433]">
                  PILLAR 04 · PHARMACY INTEGRATION
                </span>
                <span className="inline-flex items-center gap-1 rounded-full bg-[#E1F0E6] px-2.5 py-1 text-[11px] font-semibold text-[#174433]">
                  Licensed Pharmacist Fulfilment
                </span>
              </div>

              <div className="mt-6 flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#E1F0E6] text-[#174433]">
                  <Pill size={24} />
                </div>
                <div>
                  <h3 className="text-[22px] sm:text-[24px] font-bold text-[#132F25] tracking-tight">
                    Prescription Management &amp; Delivery
                  </h3>
                  <p className="mt-2 text-[15px] text-[#42534A] leading-[1.6]">
                    Keep every prescription safely stored in your personal digital
                    record. Upload written or digital prescriptions to receive pharmacist
                    verification, dosage scheduling, and direct home delivery of genuine
                    medicines from licensed pharmacy partners.
                  </p>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="rounded-xl border border-[#DCE7DF] bg-[#FFFFFF] p-4">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#132F25]">
                    <FileText size={15} className="text-[#19A069]" />
                    <span>Prescription OCR &amp; Storage</span>
                  </div>
                  <p className="mt-1 text-[11px] text-[#52665A]">
                    Instantly read doctor handwriting, dosage details, and store securely for life.
                  </p>
                </div>

                <div className="rounded-xl border border-[#DCE7DF] bg-[#FFFFFF] p-4">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#132F25]">
                    <ShieldCheck size={15} className="text-[#19A069]" />
                    <span>100% Genuine Medicine Check</span>
                  </div>
                  <p className="mt-1 text-[11px] text-[#52665A]">
                    Every strip checked against DGDA-approved batch numbers and expiration dates.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[#DCE7DF]/80 flex items-center justify-between">
              <span className="text-xs text-[#52665A]">
                Available across Dhaka metropolitan pilot areas
              </span>
              <Link
                href="/#pharmacy"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#174433] hover:text-[#103629]"
              >
                Explore Pharmacy Pilot <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
