"use client";

import { useState } from "react";
import Link from "next/link";
import { HeartPulse, ArrowLeft, ShieldCheck, Lock, Mail } from "lucide-react";
import { useLanguage } from "@/i18n/useLanguage";

export default function LoginPage() {
  const { t, isBangla } = useLanguage();
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [signedIn, setSignedIn] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSignedIn(true);
  };

  return (
    <div className="min-h-screen bg-[#FDFDFD] flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md px-4">
        {/* Back Link */}
        <div className="mb-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#52665A] hover:text-[#174433] transition-colors"
          >
            <ArrowLeft size={14} />
            <span>{t("login.backHome")}</span>
          </Link>
        </div>

        {/* Brand Header */}
        <div className="text-center">
          <Link href="/" className="inline-flex items-center gap-2.5 justify-center">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#E1F0E6] text-[#174433] shadow-2xs">
              <HeartPulse size={24} strokeWidth={2.2} />
            </span>
            <span className="text-[26px] font-bold tracking-tight text-[#015238]">
              Medoji<span className="text-[#19A069]"> AI</span>
            </span>
          </Link>

          <h1 className="mt-6 text-[26px] font-bold tracking-tight text-[#132F25]">
            {t("login.title")}
          </h1>
          <p className="mt-2 text-xs sm:text-[14px] text-[#52665A] leading-[1.6]">
            {t("login.subtitle")}
          </p>
        </div>

        {/* Login Card */}
        <div className="mt-8 rounded-3xl border border-[#DCE7DF] bg-[#FFFFFF] p-6 sm:p-8 shadow-sm">
          {signedIn ? (
            <div className="text-center py-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#E1F0E6] text-[#174433] mx-auto mb-3">
                <ShieldCheck size={28} />
              </div>
              <h2 className="text-base font-bold text-[#132F25]">
                {isBangla ? "সফলভাবে লগইন হয়েছে" : "Signed In Successfully"}
              </h2>
              <p className="mt-1 text-xs text-[#52665A]">
                {t("login.demoNote")}
              </p>
              <Link
                href="/"
                className="mt-5 inline-flex h-10 items-center justify-center rounded-xl bg-[#174433] px-5 text-xs font-semibold text-white hover:bg-[#103629]"
              >
                {t("login.backHome")}
              </Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-[#132F25] mb-1.5">
                  {t("login.identifierLabel")}
                </label>
                <div className="relative">
                  <Mail
                    size={16}
                    className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#7A9182]"
                  />
                  <input
                    type="text"
                    required
                    value={identifier}
                    onChange={(e) => setIdentifier(e.target.value)}
                    placeholder={t("login.identifierPlaceholder")}
                    className="w-full rounded-xl border border-[#DCE7DF] bg-[#FDFDFD] pl-10 pr-4 py-2.5 text-xs sm:text-[13px] text-[#132F25] focus:border-[#174433] focus:outline-none focus:ring-1 focus:ring-[#174433]"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="block text-xs font-semibold text-[#132F25]">
                    {t("login.passwordLabel")}
                  </label>
                  <button
                    type="button"
                    className="text-[11px] font-semibold text-[#19A069] hover:underline cursor-pointer"
                  >
                    {t("login.forgotPassword")}
                  </button>
                </div>
                <div className="relative">
                  <Lock
                    size={16}
                    className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#7A9182]"
                  />
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder={t("login.passwordPlaceholder")}
                    className="w-full rounded-xl border border-[#DCE7DF] bg-[#FDFDFD] pl-10 pr-4 py-2.5 text-xs sm:text-[13px] text-[#132F25] focus:border-[#174433] focus:outline-none focus:ring-1 focus:ring-[#174433]"
                  />
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full inline-flex h-[44px] items-center justify-center rounded-xl bg-[#174433] text-xs font-bold text-white shadow-xs transition-colors hover:bg-[#103629] cursor-pointer"
                >
                  {t("login.submitBtn")}
                </button>
              </div>

              <div className="pt-2 text-center">
                <p className="text-xs text-[#52665A]">
                  {t("login.noAccount")}
                </p>
              </div>
            </form>
          )}

          <div className="mt-6 border-t border-[#DCE7DF] pt-4 text-center">
            <p className="text-[11px] text-[#7A9182] leading-relaxed">
              {t("login.demoNote")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
