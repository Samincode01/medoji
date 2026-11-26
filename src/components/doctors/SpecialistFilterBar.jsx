"use client";

import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { Search, X } from "lucide-react";
import { translations } from "@/i18n/translations";

export default function SpecialistFilterBar({
  initialSearch = "",
  initialType = "all",
  initialMode = "all",
  filteredCount = 0,
  lang = "en",
}) {
  const router = useRouter();
  const pathname = usePathname();
  const isBangla = lang === "bn";
  const dict = translations[lang]?.directory || translations.en.directory;

  const [searchTerm, setSearchTerm] = useState(initialSearch);
  const [selectedType, setSelectedType] = useState(initialType);
  const [selectedMode, setSelectedMode] = useState(initialMode);

  const updateParams = (nextType, nextSearch, nextMode) => {
    const params = new URLSearchParams();
    if (nextType && nextType !== "all") params.set("type", nextType);
    if (nextSearch && nextSearch.trim() !== "") params.set("q", nextSearch.trim());
    if (nextMode && nextMode !== "all") params.set("mode", nextMode);

    const qs = params.toString();
    router.replace(qs ? `${pathname}?${qs}` : pathname, { scroll: false });
  };

  const handleTypeChange = (value) => {
    setSelectedType(value);
    updateParams(value, searchTerm, selectedMode);
  };

  const handleSearchChange = (value) => {
    setSearchTerm(value);
    updateParams(selectedType, value, selectedMode);
  };

  const handleModeChange = (value) => {
    setSelectedMode(value);
    updateParams(selectedType, searchTerm, value);
  };

  const resetFilters = () => {
    setSearchTerm("");
    setSelectedType("all");
    setSelectedMode("all");
    router.replace(pathname, { scroll: false });
  };

  const hasActiveFilters =
    searchTerm !== "" || selectedType !== "all" || selectedMode !== "all";

  const providerCountText =
    filteredCount === 1
      ? dict.providersCountSingle
      : dict.providersCount.replace("{count}", String(filteredCount));

  const professionalTypes = [
    { value: "all", label: isBangla ? "সব" : "All" },
    { value: "physical", label: isBangla ? "চিকিৎসক" : "Doctors" },
    { value: "mental", label: isBangla ? "মনোবিজ্ঞানী" : "Psychologists" },
  ];

  return (
    <div className="mt-8 rounded-2xl border border-[#DCE7DF] bg-white p-4 shadow-xs sm:p-5">
      {/* Professional Type Filter */}
      <div className="mb-5">
        <p className="mb-3 text-xs font-semibold text-[#52665A]">
          {isBangla ? "সেবার ধরন নির্বাচন করুন" : "Choose professional type"}
        </p>

        <div className="flex flex-wrap gap-2">
          {professionalTypes.map((item) => {
            const isSelected = selectedType === item.value;

            return (
              <button
                key={item.value}
                type="button"
                onClick={() => handleTypeChange(item.value)}
                aria-pressed={isSelected}
                className={`rounded-full px-4 py-2.5 text-xs font-semibold transition-all duration-200 ${
                  isSelected
                    ? "bg-[#174433] text-white shadow-xs"
                    : "border border-[#DCE7DF] bg-white text-[#52665A] hover:border-[#174433] hover:text-[#174433]"
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>
      </div>

      <div className="border-t border-[#DCE7DF]/80 pt-4">
        <div className="grid grid-cols-1 items-center gap-3 md:grid-cols-12 sm:gap-4">
          {/* Search Input */}
          <div className="relative md:col-span-6">
            <Search
              size={18}
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#7A9182]"
            />

            <input
              type="text"
              value={searchTerm}
              onChange={(e) => handleSearchChange(e.target.value)}
              placeholder={dict.searchPlaceholder}
              className="w-full rounded-xl border border-[#DCE7DF] bg-[#FDFDFD] py-2.5 pl-10 pr-10 text-xs text-[#132F25] placeholder:text-[#7A9182] focus:border-[#174433] focus:outline-none focus:ring-1 focus:ring-[#174433] sm:text-[14px]"
            />

            {searchTerm && (
              <button
                type="button"
                onClick={() => handleSearchChange("")}
                aria-label={isBangla ? "অনুসন্ধান মুছুন" : "Clear search"}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#7A9182] transition-colors hover:text-[#132F25]"
              >
                <X size={15} />
              </button>
            )}
          </div>

          {/* Visit Mode Filter */}
          <div className="md:col-span-3">
            <select
              value={selectedMode}
              onChange={(e) => handleModeChange(e.target.value)}
              aria-label={dict.modeAll}
              className="w-full cursor-pointer rounded-xl border border-[#DCE7DF] bg-[#FDFDFD] px-3.5 py-2.5 text-xs text-[#132F25] focus:border-[#174433] focus:outline-none focus:ring-1 focus:ring-[#174433] sm:text-[14px]"
            >
              <option value="all">{dict.modeAll}</option>
              <option value="Online">{dict.modeOnline}</option>
              <option value="In person">{dict.modeInPerson}</option>
            </select>
          </div>

          {/* Count & Reset */}
          <div className="flex items-center justify-between gap-3 text-xs md:col-span-3 md:justify-end">
            <span className="font-semibold text-[#174433]">
              {providerCountText}
            </span>

            {hasActiveFilters && (
              <button
                type="button"
                onClick={resetFilters}
                className="cursor-pointer font-medium text-[#9D242C] hover:underline"
              >
                {dict.resetFilters}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
