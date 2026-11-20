
"use client";

import logo from "@/images/logo.png";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, PhoneCall } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { useLanguage } from "@/i18n/useLanguage";

const socialLinks = [
  { name: "Facebook", Icon: FaFacebookF, href: null },
  { name: "Instagram", Icon: FaInstagram, href: null },
  { name: "LinkedIn", Icon: FaLinkedinIn, href: null },
  { name: "YouTube", Icon: FaYoutube, href: null },
];

const linkStyle =
  "group inline-flex items-center gap-1.5 text-[13px] leading-6 text-[#C3D5CB] transition-colors duration-200 hover:text-white";

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
    <footer className="bg-[#17352A] text-white">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8">

        {/* Main Footer */}
        <div className="grid grid-cols-1 gap-11 py-12 md:grid-cols-12 md:gap-8 md:py-14">

          {/* Brand Column */}
          <div className="md:col-span-4">
            <Link
              href="/"
              aria-label="Medoji Healthcare home"
              className="inline-flex"
            >
              <Image
                src={logo}
                alt="Medoji Healthcare logo"
                width={820}
                height={360}
                priority
                className="h-auto w-[190px] object-contain"
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

            <p className="mt-5 max-w-[310px] text-[14px] leading-[1.8] text-[#C3D5CB]">
              {t("footer.tagline")}
            </p>

            <p className="mt-3 text-[12px] font-medium text-[#91AE9E]">
              {t("footer.location")}
            </p>

          
          </div>

          {/* Navigation Columns */}
          <div className="grid grid-cols-2 gap-x-6 gap-y-9 sm:grid-cols-3 md:col-span-8 md:pl-8">
            {columns.map((column) => (
              <div key={column.title}>
                <h3 className="mb-5 text-[11px] font-bold uppercase tracking-[0.11em] text-white">
                  {column.title}
                </h3>

                <ul className="space-y-2.5">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <Link href={link.href} className={linkStyle}>
                        {link.label}
                        <ArrowUpRight
                          size={12}
                          className="shrink-0 opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
                        />
                      </Link>
                    </li>
                  ))}
                </ul>
                
              </div>
              
            ))}
              {/* Social Media */}
            <div className="mt-6">
              <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#91AE9E]">
                {isBangla ? "আমাদের সঙ্গে যুক্ত থাকুন" : "Connect with us"}
              </p>

              <div className="flex items-center gap-2.5">
                {socialLinks.map(({ name, Icon, href }) => {
                  const iconContent = (
                    <Icon size={16} aria-hidden="true" />
                  );

                  return href ? (
                    <a
                      key={name}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={name}
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-[#557565] text-[#D5E3DA] transition-all duration-200 hover:border-[#8FC7A8] hover:bg-[#244B3B] hover:text-white"
                    >
                      {iconContent}
                    </a>
                  ) : (
                    <span
                      key={name}
                      title={name}
                      aria-label={name}
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-[#557565] text-[#D5E3DA]"
                    >
                      {iconContent}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
          
        </div>

        {/* Emergency Information */}
        <div className="flex flex-col gap-4 border-y border-[#416050] py-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-start gap-3">
            <PhoneCall
              size={17}
              className="mt-0.5 shrink-0 text-[#65C795]"
            />

            <div>
              <p className="text-[13px] font-semibold text-white">
                {t("footer.emergencyTitle")}
              </p>

              <p className="mt-1 max-w-[620px] text-[12px] leading-[1.7] text-[#B8CEC1]">
                {t("footer.emergencyText")}
              </p>
            </div>
          </div>

          <a
            href="tel:999"
            className="inline-flex min-h-10 items-center justify-center gap-2 self-start rounded-full border border-[#648675] px-5 text-[12px] font-semibold text-white transition-colors hover:border-[#8FC7A8] hover:bg-[#244B3B] sm:self-center"
          >
            <PhoneCall size={14} className="text-[#65C795]" />
            {t("footer.emergencyBtn")}
          </a>
        </div>

        {/* Copyright */}
        <div className="flex flex-col gap-2 py-5 text-[11px] text-[#A3BFB0] sm:flex-row sm:items-center sm:justify-between">
          <p>{t("footer.copyright")}</p>
          <p className="font-medium">{t("footer.rights")}</p>
        </div>

      </div>
    </footer>
  );
}
