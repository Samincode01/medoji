import Link from "next/link";
import { HeartPulse, ShieldAlert, Globe, PhoneCall } from "lucide-react";

export default function Footer() {
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
              Medoji AI is building Bangladesh&apos;s connected healthcare platform—uniting
              verified doctor consultations, confidential mental health counselling,
              genuine prescription fulfilment, and bilingual care navigation.
            </p>

            <div className="mt-6 flex items-center gap-2 text-xs text-[#A3BFB0]">
              <Globe size={14} className="text-[#19A069]" />
              <span>Proudly architected for Dhaka &amp; Bangladesh</span>
            </div>
          </div>

          {/* Links Column 1: Care & Discovery (2 Cols) */}
          <div className="lg:col-span-2 sm:col-span-1">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#FFFFFF]">
              Care Discovery
            </h4>
            <ul className="mt-4 space-y-2.5 text-xs sm:text-[13px]">
              <li>
                <Link
                  href="/doctors"
                  className="text-[#E1F0E6] hover:text-[#FFFFFF] hover:underline underline-offset-4 transition-colors"
                >
                  Find a Doctor
                </Link>
              </li>
              <li>
                <Link
                  href="/doctors"
                  className="text-[#E1F0E6] hover:text-[#FFFFFF] hover:underline underline-offset-4 transition-colors"
                >
                  Mental Health
                </Link>
              </li>
              <li>
                <Link
                  href="/doctors"
                  className="text-[#E1F0E6] hover:text-[#FFFFFF] hover:underline underline-offset-4 transition-colors"
                >
                  Online Video Care
                </Link>
              </li>
              <li>
                <Link
                  href="/doctors"
                  className="text-[#E1F0E6] hover:text-[#FFFFFF] hover:underline underline-offset-4 transition-colors"
                >
                  In-Person Visits
                </Link>
              </li>
            </ul>
          </div>

          {/* Links Column 2: Digital Services (2 Cols) */}
          <div className="lg:col-span-2 sm:col-span-1">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#FFFFFF]">
              Digital Services
            </h4>
            <ul className="mt-4 space-y-2.5 text-xs sm:text-[13px]">
              <li>
                <Link
                  href="/#ai-tools"
                  className="text-[#E1F0E6] hover:text-[#FFFFFF] hover:underline underline-offset-4 transition-colors"
                >
                  Medoji AI Assistant
                </Link>
              </li>
              <li>
                <Link
                  href="/#pharmacy"
                  className="text-[#E1F0E6] hover:text-[#FFFFFF] hover:underline underline-offset-4 transition-colors"
                >
                  Prescription Upload
                </Link>
              </li>
              <li>
                <Link
                  href="/#pharmacy"
                  className="text-[#E1F0E6] hover:text-[#FFFFFF] hover:underline underline-offset-4 transition-colors"
                >
                  Pharmacy Pilot
                </Link>
              </li>
              <li>
                <Link
                  href="/#ecosystem"
                  className="text-[#E1F0E6] hover:text-[#FFFFFF] hover:underline underline-offset-4 transition-colors"
                >
                  Care Continuity
                </Link>
              </li>
            </ul>
          </div>

          {/* Links Column 3: Ecosystem & Trust (3 Cols) */}
          <div className="lg:col-span-3 sm:col-span-1">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#FFFFFF]">
              Healthcare Ecosystem
            </h4>
            <ul className="mt-4 space-y-2.5 text-xs sm:text-[13px]">
              <li>
                <Link
                  href="/#ecosystem"
                  className="text-[#E1F0E6] hover:text-[#FFFFFF] hover:underline underline-offset-4 transition-colors"
                >
                  Diagnostics &amp; Labs
                </Link>
              </li>
              <li>
                <Link
                  href="/#ecosystem"
                  className="text-[#E1F0E6] hover:text-[#FFFFFF] hover:underline underline-offset-4 transition-colors"
                >
                  Device Integration
                </Link>
              </li>
              <li>
                <Link
                  href="/#ecosystem"
                  className="text-[#E1F0E6] hover:text-[#FFFFFF] hover:underline underline-offset-4 transition-colors"
                >
                  Partner Hospital Network
                </Link>
              </li>
              <li>
                <Link
                  href="/#ecosystem"
                  className="text-[#E1F0E6] hover:text-[#FFFFFF] hover:underline underline-offset-4 transition-colors"
                >
                  Rollout Roadmap
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
              <strong className="text-white">Emergency Notice:</strong> Medoji is not an emergency response service. If you or a loved one is experiencing severe chest pain, breathing difficulty, or trauma, call <span className="text-[#FFFFFF] font-bold underline">999</span> immediately or visit the nearest emergency room.
            </p>
          </div>

          <div className="inline-flex shrink-0 items-center gap-1.5 rounded-lg bg-[#17352A] px-3 py-1.5 text-xs font-bold text-[#E1F0E6] border border-[#254D3D]">
            <PhoneCall size={13} className="text-[#19A069]" />
            <span>National Emergency: 999</span>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Attribution */}
        <div className="mt-10 pt-8 border-t border-[#254D3D] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#A3BFB0]">
          <p>© 2026 Medoji AI Technologies. All rights reserved.</p>
          <p>Care Discovery · Pharmacy Pilot · Staged AI Guidance</p>
        </div>
      </div>
    </footer>
  );
}
