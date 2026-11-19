
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, HeartPulse } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Find a Doctor", href: "/doctors" },
  { label: "Pharmacy", href: "/#pharmacy" },
  { label: "AI Assistant", href: "/#ai-tools" },
  { label: "Our Ecosystem", href: "/#ecosystem" },
];

export default function Navbar() {
  const [language, setLanguage] = useState("EN");
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("");
  const pathname = usePathname();

  // Track URL hash changes
  useEffect(() => {
    const handleHashChange = () => {
      setActiveHash(window.location.hash);
    };

    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  // Close mobile menu on Escape
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [menuOpen]);

  // Close mobile menu when navigating to another route
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const isLinkActive = (href) => {
    if (href === "/") {
      return pathname === "/" && !activeHash;
    }

    if (href.startsWith("/#")) {
      const hash = href.replace("/", "");
      return pathname === "/" && activeHash === hash;
    }

    if (href === "/doctors") {
      return pathname.startsWith("/doctors");
    }

    return false;
  };

  return (
    <header className="sticky top-0 z-50 border-b border-[#DCE7DF] bg-[#FDFDFD]/95 backdrop-blur-md transition-colors">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="flex h-[74px] items-center justify-between gap-4">

          {/* Brand Logo */}
          <Link
            href="/"
            onClick={() => {
              setMenuOpen(false);
              setActiveHash("");
            }}
            className="group flex shrink-0 items-center gap-3 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#087A52] focus-visible:ring-offset-2"
            aria-label="Medoji AI - Back to Homepage"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#E1F0E6] transition-transform duration-200 group-hover:scale-105">
              <HeartPulse
                size={22}
                className="text-[#174433] transition-colors"
                strokeWidth={2.2}
              />
            </span>

            <div className="flex flex-col">
              <span className="text-[22px] font-bold leading-none tracking-tight text-[#015238]">
                Medoji<span className="text-[#19A069]"> AI</span>
              </span>

              <span className="mt-0.5 text-[10px] font-medium uppercase tracking-wider text-[#52665A]">
                Bangladesh
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav
            aria-label="Main Navigation"
            className="hidden items-center gap-7 md:flex lg:gap-8"
          >
            {navLinks.map((item) => {
              const active = isLinkActive(item.href);

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => {
                    if (item.href.includes("#")) {
                      setActiveHash(item.href.split("/")[1]);
                    } else if (item.href === "/") {
                      setActiveHash("");
                    }
                  }}
                  aria-current={active ? "page" : undefined}
                  className={`relative rounded-sm py-2 text-[14px] font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#087A52] focus-visible:ring-offset-2 lg:text-[15px]
                    after:absolute after:bottom-0 after:left-0 after:h-[2px] after:rounded-full after:bg-[#174433] after:transition-all after:duration-300
                    ${
                      active
                        ? "font-semibold text-[#174433] after:w-full"
                        : "text-[#42534A] after:w-0 hover:text-[#174433] hover:after:w-full"
                    }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Side Actions */}
          <div className="flex shrink-0 items-center gap-2 sm:gap-3">

            {/* Language Toggle */}
            <div
              className="inline-flex items-center rounded-full border border-[#DCE7DF] bg-white p-0.5 shadow-xs"
              role="group"
              aria-label="Language selection"
            >
              <button
                type="button"
                onClick={() => setLanguage("EN")}
                className={`rounded-full px-2.5 py-1.5 text-xs font-semibold tracking-wide transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#087A52] ${
                  language === "EN"
                    ? "bg-[#174433] text-white shadow-xs"
                    : "text-[#52665A] hover:text-[#174433]"
                }`}
                aria-pressed={language === "EN"}
              >
                EN
              </button>

              <button
                type="button"
                onClick={() => setLanguage("BN")}
                className={`rounded-full px-2.5 py-1.5 text-xs font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#087A52] ${
                  language === "BN"
                    ? "bg-[#174433] text-white shadow-xs"
                    : "text-[#52665A] hover:text-[#174433]"
                }`}
                aria-pressed={language === "BN"}
              >
                বাংলা
              </button>
            </div>

            {/* Login Button */}
            <Link
              href="/login"
              className="inline-flex h-10 items-center justify-center rounded-full bg-[#174433] px-4 text-sm font-semibold text-white transition-colors hover:bg-[#0F3527] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#087A52] focus-visible:ring-offset-2 sm:px-5"
            >
              Login
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              type="button"
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label={
                menuOpen ? "Close navigation menu" : "Open navigation menu"
              }
              aria-expanded={menuOpen}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#DCE7DF] bg-white text-[#174433] transition-colors hover:bg-[#F0F5EF] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#087A52] md:hidden"
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {menuOpen && (
          <nav
            aria-label="Mobile Navigation"
            className="border-t border-[#DCE7DF] py-3 pb-4 md:hidden"
          >
            <div className="flex flex-col gap-1">
              {navLinks.map((item) => {
                const active = isLinkActive(item.href);

                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => {
                      setMenuOpen(false);

                      if (item.href.includes("#")) {
                        setActiveHash(item.href.split("/")[1]);
                      } else if (item.href === "/") {
                        setActiveHash("");
                      }
                    }}
                    aria-current={active ? "page" : undefined}
                    className={`rounded-lg px-4 py-3 text-[15px] font-medium transition-colors ${
                      active
                        ? "bg-[#E1F0E6] font-semibold text-[#174433]"
                        : "text-[#42534A] hover:bg-[#F0F5EF] hover:text-[#174433]"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
