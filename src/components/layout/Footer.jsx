
"use client";

import Link from "next/link";
import {
  HeartPulse,
  ArrowUpRight,
  ShieldAlert,
  PhoneCall,
  MapPin,
} from "lucide-react";
import { useLanguage } from "@/i18n/useLanguage";

const linkStyle =
  "group inline-flex items-center gap-1 text-[13px] text-[#C3D5CB] transition-colors duration-200 hover:text-white";

export default function Footer() {
  const { t, isBangla } = useLanguage();

  const columns = [
    {
      title: t("footer.careDiscovery"),
      links: [
        { label: t("footer.links.findDoctor"), href: "/specialist" },
        { label: t("footer.links.mentalHealth"), href: "/specialist" },
        { label: t("footer.links.onlineVideo"), href: "/specialist" },
        { label: t("footer.links.inPerson"), href: "/specialist" },
      ],
    },
    {
      title: t("footer.digitalServices"),
      links: [
        { label: t("footer.links.aiAssistant"), href: "/#ai-tools" },
        { label: t("footer.links.prescriptionUpload"), href: "/#pharmacy" },
        { label: t("footer.links.pharmacyPilot"), href: "/#pharmacy" },
        { label: t("footer.links.careContinuity"), href: "/#ecosystem" },
      ],
    },
    {
      title: t("footer.healthcareEcosystem"),
      links: [
        { label: t("footer.links.diagnostics"), href: "/#ecosystem" },
        { label: t("footer.links.devices"), href: "/#ecosystem" },
        { label: t("footer.links.partnerHospital"), href: "/#ecosystem" },
        { label: t("footer.links.roadmap"), href: "/#ecosystem" },
      ],
    },
  ];

  return (
    <footer className="relative overflow-hidden bg-[#17352A] text-white">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8">

        {/* Main brand area */}
        <div className="grid grid-cols-1 gap-12 pb-14 pt-16 md:grid-cols-12 md:gap-10 lg:pb-20 lg:pt-20">

          <div className="md:col-span-5 lg:col-span-5">
            <Link
              href="/"
              aria-label="M edoji AI Home"
              className="inline-flex items-center gap-3"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#E1F0E6] text-[#174433]">
                <HeartPulse size={23} strokeWidth={2.1} />
              </span>

              <span className="text-[25px] font-bold tracking-[-0.06em]">
                Medoji<span className="text-[#19A069]"> AI</span>
              </span>
            </Link>

            <h2 className="mt-7 max-w-[390px] text-[30px] font-medium leading-[1.2] tracking-[-0.04em] text-white sm:text-[36px]">
              {isBangla
                ? "স্বাস্থ্যসেবা হোক আরও কাছের, আরও সহজ।"
                : "A more connected way to care."}
            </h2>

            <p className="mt-4 max-w-[360px] text-[13px] leading-[1.8] text-[#C3D5CB]">
              {t("footer.tagline")}
            </p>

            <div className="mt-6 inline-flex items-center gap-2 text-[12px] text-[#A3BFB0]">
              <MapPin size={14} className="text-[#19A069]" />
              {t("footer.location")}
            </div>
          </div>

          {/* Navigation */}
          <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 md:col-span-7 md:pt-2 lg:col-span-7 lg:pl-10">
            {columns.map((column) => (
              <div key={column.title}>
                <h3 className="mb-5 text-[11px] font-semibold uppercase tracking-[0.13em] text-[#8FAE9D]">
                  {column.title}
                </h3>

                <ul className="space-y-3.5">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <Link href={link.href} className={linkStyle}>
                        {link.label}
                        <ArrowUpRight
                          size={12}
                          className="opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
                        />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Emergency information */}
        <div className="flex flex-col gap-5 border-y border-[#416050] py-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-start gap-3">
            <ShieldAlert
              size={19}
              className="mt-0.5 shrink-0 text-[#65C795]"
            />

            <div>
              <p className="text-[13px] font-semibold text-white">
                {t("footer.emergencyTitle")}
              </p>
              <p className="mt-1 max-w-[600px] text-[12px] leading-[1.7] text-[#B8CEC1]">
                {t("footer.emergencyText")}
              </p>
            </div>
          </div>

          <a
            href="tel:999"
            className="inline-flex min-h-11 shrink-0 items-center justify-center gap-2 self-start rounded-full border border-[#648675] px-5 text-[12px] font-semibold text-white transition-colors duration-200 hover:border-[#8FC7A8] hover:bg-[#244B3B] sm:self-center"
          >
            <PhoneCall size={14} className="text-[#65C795]" />
            {t("footer.emergencyBtn")}
          </a>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col gap-3 py-7 text-[11px] text-[#A3BFB0] sm:flex-row sm:items-center sm:justify-between">
          <p>{t("footer.copyright")}</p>

          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#19A069]" />
            <span>{t("footer.rights")}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
