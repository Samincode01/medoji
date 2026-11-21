
"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, PhoneCall } from "lucide-react";
import logo from "@/images/logo.png";
import { useLanguage } from "@/i18n/useLanguage";

export default function Footer() {
  const { t } = useLanguage();

  const careDiscoveryLinks = [
    { label: t("footer.links.findSpecialist"), href: "/specialist" },
    { label: t("footer.links.mentalHealth"), href: "/mental-health" },
    { label: t("footer.links.onlineSessions"), href: "/online-sessions" },
    { label: t("footer.links.inPersonVisits"), href: "/in-person-visits" },
  ];

  const bookingPolicyLinks = [
    { label: t("footer.links.bookingRefundPolicy"), href: "/booking-refund-policy" },
    { label: t("footer.links.termsConditions"), href: "/terms-and-conditions" },
    { label: t("footer.links.privacyPolicy"), href: "/privacy-policy" },
  ];

  const supportLinks = [
    { label: t("footer.links.helpComplaints"), href: "/help-and-complaints" },
  ];

  const linkStyle =
    "group inline-flex items-center gap-1.5 rounded-sm text-[13px] leading-6 text-[#C3D5CB] transition-colors duration-200 hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#19A069]";

  const renderLinks = (links) => (
    <ul className="space-y-2.5">
      {links.map((link) => (
        <li key={link.href}>
          <Link href={link.href} className={linkStyle}>
            <span>{link.label}</span>
            <ArrowUpRight
              size={12}
              className="shrink-0 opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
              aria-hidden="true"
            />
          </Link>
        </li>
      ))}
    </ul>
  );

  return (
    <footer className="bg-[#17352A] text-white">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
        <div className="grid grid-cols-1 gap-10 py-12 sm:grid-cols-2 md:py-14 lg:grid-cols-12 lg:gap-8">

          {/* Brand */}
          <div className="lg:col-span-4 lg:pr-6">
            <Link href="/" aria-label="Med​oji Healthcare home">
              <Image
                src={logo}
                alt="Med​oji Healthcare"
                width={820}
                height={360}
                priority
                className="h-auto w-[175px] object-contain"
                style={{
                  filter: `
                    drop-shadow(1px 0 0 white)
                    drop-shadow(-1px 0 0 white)
                    drop-shadow(0 1px 0 white)
                    drop-shadow(0 -1px 0 white)
                  `,
                }}
              />
            </Link>

            <p className="mt-4 max-w-[320px] text-[13px] leading-[1.7] text-[#A3B8AD]">
              {t("footer.brandDescription")}
            </p>
          </div>

          {/* Care Discovery */}
          <nav
            aria-label={t("footer.headings.careDiscovery")}
            className="lg:col-span-3"
          >
            <h3 className="mb-4 text-[11px] font-bold uppercase tracking-[0.12em]">
              {t("footer.headings.careDiscovery")}
            </h3>
            {renderLinks(careDiscoveryLinks)}
          </nav>

          {/* Booking & Policies */}
          <nav
            aria-label={t("footer.headings.bookingPolicies")}
            className="lg:col-span-3"
          >
            <h3 className="mb-4 text-[11px] font-bold uppercase tracking-[0.12em]">
              {t("footer.headings.bookingPolicies")}
            </h3>
            {renderLinks(bookingPolicyLinks)}
          </nav>

          {/* Support */}
          <nav
            aria-label={t("footer.headings.support")}
            className="lg:col-span-2"
          >
            <h3 className="mb-4 text-[11px] font-bold uppercase tracking-[0.12em]">
              {t("footer.headings.support")}
            </h3>
            {renderLinks(supportLinks)}
          </nav>
        </div>

        {/* Emergency Notice */}
        <div className="border-t border-[#234B3D] py-5">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-3">
              <PhoneCall
                size={17}
                className="mt-0.5 shrink-0 text-[#19A069]"
                aria-hidden="true"
              />
              <div>
                <p className="text-[13px] font-semibold text-white">
                  {t("footer.emergencyHeading")}
                </p>
                <p className="mt-1 max-w-[650px] text-[12px] leading-relaxed text-[#A3B8AD]">
                  {t("footer.emergencyDescription")}
                </p>
              </div>
            </div>

            <a
              href="tel:999"
              className="inline-flex min-h-10 shrink-0 items-center justify-center gap-2 self-start rounded-full border border-[#3E6554] bg-[#1E4336] px-5 text-[12px] font-semibold text-white transition-colors duration-200 hover:border-[#19A069] hover:bg-[#255242] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#19A069] sm:self-center"
            >
              <PhoneCall size={14} className="text-[#19A069]" aria-hidden="true" />
              <span>{t("footer.emergencyButton")}</span>
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="flex flex-col gap-2 border-t border-[#234B3D]/60 py-5 text-[11px] text-[#8FA89B] sm:flex-row sm:items-center sm:justify-between">
          <p>{t("footer.copyright")}</p>
          <p className="font-medium text-[#7D998B]">
            {t("footer.rights")}
          </p>
        </div>
      </div>
    </footer>
  );
}
