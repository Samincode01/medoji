"use client";

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
import { useLanguage } from "@/i18n/useLanguage";

export default function ServicesSection() {
  const { t } = useLanguage();

  return (
    <section className="relative w-full bg-[#FFFFFF] py-16 sm:py-20 lg:py-24 border-b border-[#DCE7DF]/60">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-[760px]">
          <div className="inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.14em] text-[#174433]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#19A069]" />
            <span>{t("services.eyebrow")}</span>
          </div>

          <h2 className="mt-3 text-[30px] sm:text-[36px] lg:text-[44px] font-bold tracking-tight text-[#132F25] leading-[1.14]">
            {t("services.heading")}
          </h2>

          <p className="mt-4 text-[16px] sm:text-[17px] text-[#42534A] leading-[1.6]">
            {t("services.description")}
          </p>
        </div>

        {/* Distinctive Asymmetric Architectural Layout */}
        <div className="mt-12 lg:mt-16 grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Editorial Feature Card (Left Column - 7 Cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between rounded-3xl border border-[#DCE7DF] bg-[#FDFDFD] p-8 sm:p-10 shadow-2xs">
            <div>
              <div className="flex items-center justify-between border-b border-[#DCE7DF]/80 pb-5">
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#19A069]">
                  {t("services.pillar1.tag")}
                </span>
                <span className="inline-flex items-center gap-1 rounded-full bg-[#E1F0E6] px-2.5 py-1 text-[11px] font-semibold text-[#174433]">
                  {t("services.pillar1.badge")}
                </span>
              </div>

              <div className="mt-6 flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#E1F0E6] text-[#174433]">
                  <Stethoscope size={24} />
                </div>
                <div>
                  <h3 className="text-[22px] sm:text-[24px] font-bold text-[#132F25] tracking-tight">
                    {t("services.pillar1.title")}
                  </h3>
                  <p className="mt-2 text-[15px] text-[#42534A] leading-[1.6]">
                    {t("services.pillar1.desc")}
                  </p>
                </div>
              </div>

              {/* Connected Journey Visual Flow */}
              <div className="mt-8 rounded-2xl border border-[#DCE7DF] bg-[#FFFFFF] p-5">
                <p className="text-[11px] font-bold uppercase tracking-wider text-[#52665A]">
                  {t("services.pillar1.journeyTitle")}
                </p>
                <div className="mt-3 grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="rounded-xl bg-[#F0F5EF] p-3 text-xs">
                    <span className="font-semibold text-[#174433] block">
                      {t("services.pillar1.step1Title")}
                    </span>
                    <span className="text-[#52665A] text-[11px] mt-0.5 block">
                      {t("services.pillar1.step1Desc")}
                    </span>
                  </div>
                  <div className="rounded-xl bg-[#F0F5EF] p-3 text-xs">
                    <span className="font-semibold text-[#174433] block">
                      {t("services.pillar1.step2Title")}
                    </span>
                    <span className="text-[#52665A] text-[11px] mt-0.5 block">
                      {t("services.pillar1.step2Desc")}
                    </span>
                  </div>
                  <div className="rounded-xl bg-[#E1F0E6] p-3 text-xs border border-[#19A069]/30">
                    <span className="font-semibold text-[#174433] block">
                      {t("services.pillar1.step3Title")}
                    </span>
                    <span className="text-[#174433] text-[11px] mt-0.5 block font-medium">
                      {t("services.pillar1.step3Desc")}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[#DCE7DF]/80 flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs text-[#52665A]">
                {t("services.pillar1.meta")}
              </span>
              <Link
                href="/doctors"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#174433] hover:text-[#103629]"
              >
                {t("services.pillar1.cta")} <ArrowRight size={14} />
              </Link>
            </div>
          </div>

          {/* Right Column (5 Cols) - Mental Health & Counselling */}
          <div className="lg:col-span-5 flex flex-col justify-between rounded-3xl border border-[#DCE7DF] bg-[#F0F5EF] p-8 sm:p-9">
            <div>
              <div className="flex items-center justify-between border-b border-[#DCE7DF]/80 pb-5">
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#174433]">
                  {t("services.pillar2.tag")}
                </span>
                <span className="inline-flex items-center gap-1 rounded-full bg-[#FFFFFF] px-2.5 py-1 text-[11px] font-semibold text-[#174433] shadow-2xs">
                  <ShieldCheck size={12} className="text-[#19A069]" />
                  {t("services.pillar2.badge")}
                </span>
              </div>

              <div className="mt-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FFFFFF] text-[#174433] shadow-2xs">
                  <Brain size={24} />
                </div>
                <h3 className="mt-4 text-[22px] sm:text-[24px] font-bold text-[#132F25] tracking-tight">
                  {t("services.pillar2.title")}
                </h3>
                <p className="mt-2 text-[15px] text-[#42534A] leading-[1.6]">
                  {t("services.pillar2.desc")}
                </p>

                <div className="mt-6 space-y-2.5">
                  <div className="flex items-center gap-2 text-xs font-medium text-[#132F25]">
                    <CheckCircle size={15} className="text-[#19A069]" />
                    <span>{t("services.pillar2.check1")}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-medium text-[#132F25]">
                    <CheckCircle size={15} className="text-[#19A069]" />
                    <span>{t("services.pillar2.check2")}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-medium text-[#132F25]">
                    <CheckCircle size={15} className="text-[#19A069]" />
                    <span>{t("services.pillar2.check3")}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[#DCE7DF]/80">
              <Link
                href="/doctors"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#174433] hover:text-[#103629]"
              >
                {t("services.pillar2.cta")} <ArrowRight size={14} />
              </Link>
            </div>
          </div>

          {/* Bottom Left Card (5 Cols) - Follow-up on Care */}
          <div className="lg:col-span-5 flex flex-col justify-between rounded-3xl border border-[#DCE7DF] bg-[#FFFFFF] p-8 sm:p-9 shadow-2xs">
            <div>
              <div className="flex items-center justify-between border-b border-[#DCE7DF]/80 pb-5">
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#19A069]">
                  {t("services.pillar3.tag")}
                </span>
                <span className="text-xs text-[#52665A]">
                  {t("services.pillar3.badge")}
                </span>
              </div>

              <div className="mt-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#E1F0E6] text-[#174433]">
                  <ClipboardCheck size={24} />
                </div>
                <h3 className="mt-4 text-[22px] font-bold text-[#132F25] tracking-tight">
                  {t("services.pillar3.title")}
                </h3>
                <p className="mt-2 text-[14px] text-[#42534A] leading-[1.6]">
                  {t("services.pillar3.desc")}
                </p>

                <div className="mt-6 rounded-xl bg-[#F0F5EF] p-4 border border-[#DCE7DF]/80">
                  <div className="flex items-center justify-between text-xs font-semibold text-[#174433]">
                    <span className="flex items-center gap-1.5">
                      <Clock size={13} className="text-[#19A069]" />
                      {t("services.pillar3.scheduledCheckin")}
                    </span>
                    <span className="rounded-full bg-[#FFFFFF] px-2 py-0.5 text-[10px] text-[#52665A]">
                      {t("services.pillar3.automated")}
                    </span>
                  </div>
                  <p className="mt-1.5 text-xs text-[#52665A]">
                    {t("services.pillar3.checkinQuote")}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-[#DCE7DF]/80">
              <span className="text-xs font-medium text-[#174433]">
                {t("services.pillar3.footerText")}
              </span>
            </div>
          </div>

          {/* Bottom Right Card (7 Cols) - Prescription Management */}
          <div className="lg:col-span-7 flex flex-col justify-between rounded-3xl border border-[#DCE7DF] bg-[#FDFDFD] p-8 sm:p-10 shadow-2xs">
            <div>
              <div className="flex items-center justify-between border-b border-[#DCE7DF]/80 pb-5">
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#174433]">
                  {t("services.pillar4.tag")}
                </span>
                <span className="inline-flex items-center gap-1 rounded-full bg-[#E1F0E6] px-2.5 py-1 text-[11px] font-semibold text-[#174433]">
                  {t("services.pillar4.badge")}
                </span>
              </div>

              <div className="mt-6 flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#E1F0E6] text-[#174433]">
                  <Pill size={24} />
                </div>
                <div>
                  <h3 className="text-[22px] sm:text-[24px] font-bold text-[#132F25] tracking-tight">
                    {t("services.pillar4.title")}
                  </h3>
                  <p className="mt-2 text-[15px] text-[#42534A] leading-[1.6]">
                    {t("services.pillar4.desc")}
                  </p>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="rounded-xl border border-[#DCE7DF] bg-[#FFFFFF] p-4">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#132F25]">
                    <FileText size={15} className="text-[#19A069]" />
                    <span>{t("services.pillar4.ocrTitle")}</span>
                  </div>
                  <p className="mt-1 text-[11px] text-[#52665A]">
                    {t("services.pillar4.ocrDesc")}
                  </p>
                </div>

                <div className="rounded-xl border border-[#DCE7DF] bg-[#FFFFFF] p-4">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#132F25]">
                    <ShieldCheck size={15} className="text-[#19A069]" />
                    <span>{t("services.pillar4.genuineTitle")}</span>
                  </div>
                  <p className="mt-1 text-[11px] text-[#52665A]">
                    {t("services.pillar4.genuineDesc")}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[#DCE7DF]/80 flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs text-[#52665A]">
                {t("services.pillar4.pilotNote")}
              </span>
              <Link
                href="/#pharmacy"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#174433] hover:text-[#103629]"
              >
                {t("services.pillar4.cta")} <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
