"use client";

import Link from "next/link";
import { HeartPulse, ShieldAlert, Globe, PhoneCall } from "lucide-react";
import { useLanguage } from "@/i18n/useLanguage";

export default function Footer() {
  const { t, isBangla } = useLanguage();

  return (
    <footer className="w-full bg-[#17352A] text-[#FFFFFF] border-t border-[#254D3D]">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Brand & Overview Column (5 Cols) */}
          <div className="lg:col-span-5">
            <Link
              href="/"
              className="inline-flex items-center gap-3"
              aria-label="Medoji AI Home"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#E1F0E6]">
                <HeartPulse size={22} className="text-[#174433]" strokeWidth={2.2} />
              </span>
              <span className="text-[22px] font-bold tracking-tight text-[#FFFFFF]">
                Medoji<span className="text-[#19A069]"> AI</span>
              </span>
            </Link>

            <p className="mt-4 text-[14px] text-[#E1F0E6]/85 leading-[1.65] max-w-[400px]">
              {t("footer.tagline")}
            </p>

            <div className="mt-6 flex items-center gap-2 text-xs text-[#A3BFB0]">
              <Globe size={14} className="text-[#19A069]" />
              <span>{t("footer.location")}</span>
            </div>
          </div>

          {/* Links Column 1: Care & Discovery (2 Cols) */}
          <div className="lg:col-span-2 sm:col-span-1">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#FFFFFF]">
              {t("footer.careDiscovery")}
            </h4>
            <ul className="mt-4 space-y-2.5 text-xs sm:text-[13px]">
              <li>
                <Link
                  href="/doctors"
                  className="text-[#E1F0E6] hover:text-[#FFFFFF] hover:underline underline-offset-4 transition-colors"
                >
                  {t("footer.links.findDoctor")}
                </Link>
              </li>
              <li>
                <Link
                  href="/doctors"
                  className="text-[#E1F0E6] hover:text-[#FFFFFF] hover:underline underline-offset-4 transition-colors"
                >
                  {t("footer.links.mentalHealth")}
                </Link>
              </li>
              <li>
                <Link
                  href="/doctors"
                  className="text-[#E1F0E6] hover:text-[#FFFFFF] hover:underline underline-offset-4 transition-colors"
                >
                  {t("footer.links.onlineVideo")}
                </Link>
              </li>
              <li>
                <Link
                  href="/doctors"
                  className="text-[#E1F0E6] hover:text-[#FFFFFF] hover:underline underline-offset-4 transition-colors"
                >
                  {t("footer.links.inPerson")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Links Column 2: Digital Services (2 Cols) */}
          <div className="lg:col-span-2 sm:col-span-1">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#FFFFFF]">
              {t("footer.digitalServices")}
            </h4>
            <ul className="mt-4 space-y-2.5 text-xs sm:text-[13px]">
              <li>
                <Link
                  href="/#ai-tools"
                  className="text-[#E1F0E6] hover:text-[#FFFFFF] hover:underline underline-offset-4 transition-colors"
                >
                  {t("footer.links.aiAssistant")}
                </Link>
              </li>
              <li>
                <Link
                  href="/#pharmacy"
                  className="text-[#E1F0E6] hover:text-[#FFFFFF] hover:underline underline-offset-4 transition-colors"
                >
                  {t("footer.links.prescriptionUpload")}
                </Link>
              </li>
              <li>
                <Link
                  href="/#pharmacy"
                  className="text-[#E1F0E6] hover:text-[#FFFFFF] hover:underline underline-offset-4 transition-colors"
                >
                  {t("footer.links.pharmacyPilot")}
                </Link>
              </li>
              <li>
                <Link
                  href="/#ecosystem"
                  className="text-[#E1F0E6] hover:text-[#FFFFFF] hover:underline underline-offset-4 transition-colors"
                >
                  {t("footer.links.careContinuity")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Links Column 3: Ecosystem & Trust (3 Cols) */}
          <div className="lg:col-span-3 sm:col-span-1">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#FFFFFF]">
              {t("footer.healthcareEcosystem")}
            </h4>
            <ul className="mt-4 space-y-2.5 text-xs sm:text-[13px]">
              <li>
                <Link
                  href="/#ecosystem"
                  className="text-[#E1F0E6] hover:text-[#FFFFFF] hover:underline underline-offset-4 transition-colors"
                >
                  {t("footer.links.diagnostics")}
                </Link>
              </li>
              <li>
                <Link
                  href="/#ecosystem"
                  className="text-[#E1F0E6] hover:text-[#FFFFFF] hover:underline underline-offset-4 transition-colors"
                >
                  {t("footer.links.devices")}
                </Link>
              </li>
              <li>
                <Link
                  href="/#ecosystem"
                  className="text-[#E1F0E6] hover:text-[#FFFFFF] hover:underline underline-offset-4 transition-colors"
                >
                  {t("footer.links.partnerHospital")}
                </Link>
              </li>
              <li>
                <Link
                  href="/#ecosystem"
                  className="text-[#E1F0E6] hover:text-[#FFFFFF] hover:underline underline-offset-4 transition-colors"
                >
                  {t("footer.links.roadmap")}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Emergency & Medical Safety Bar */}
        <div className="mt-12 rounded-2xl border border-[#254D3D] bg-[#102B21] p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-start sm:items-center gap-3">
            <ShieldAlert size={20} className="text-[#19A069] shrink-0 mt-0.5 sm:mt-0" />
            <p className="text-xs text-[#E1F0E6]/90 leading-[1.55]">
              <strong className="text-white">{t("footer.emergencyTitle")} </strong>
              {t("footer.emergencyText")}
            </p>
          </div>

          <a
            href="tel:999"
            className="inline-flex shrink-0 items-center gap-1.5 rounded-lg bg-[#17352A] px-3 py-1.5 text-xs font-bold text-[#E1F0E6] border border-[#254D3D] hover:bg-[#204536] transition-colors"
          >
            <PhoneCall size={13} className="text-[#19A069]" />
            <span>{t("footer.emergencyBtn")}</span>
          </a>
        </div>

        {/* Bottom Bar: Copyright & Attribution */}
        <div className="mt-10 pt-8 border-t border-[#254D3D] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#A3BFB0]">
          <p>{t("footer.copyright")}</p>
          <p>{t("footer.rights")}</p>
        </div>
      </div>
    </footer>
  );
}
