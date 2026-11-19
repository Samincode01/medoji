"use client";

import React, { createContext, useContext, useState, useEffect, useCallback } from "react";
import { translations } from "./translations";

const LanguageContext = createContext(null);

export const BENGALI_DIGITS = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];

/**
 * Converts English digits (0-9) to Bengali digits (০-৯)
 * If isBangla is false, returns string with standard numbers.
 */
export function toBengaliNumber(value, isBangla = true) {
  if (value === null || value === undefined) return "";
  const str = String(value);
  if (!isBangla) return str;
  return str.replace(/[0-9]/g, (digit) => BENGALI_DIGITS[parseInt(digit, 10)] ?? digit);
}

export function LanguageProvider({ children }) {
  const [language, setLanguageState] = useState("en");
  const [isMounted, setIsMounted] = useState(false);

  // Safe client-side initialization from localStorage
  useEffect(() => {
    setIsMounted(true);
    try {
      const saved = localStorage.getItem("medoji_lang");
      if (saved === "bn" || saved === "en") {
        setLanguageState(saved);
        document.documentElement.lang = saved;
      } else {
        document.documentElement.lang = "en";
      }
    } catch {
      // localStorage may fail in private browsing mode or sandboxes
    }
  }, []);

  const setLanguage = useCallback((newLang) => {
    if (newLang !== "en" && newLang !== "bn") return;
    setLanguageState(newLang);
    try {
      localStorage.setItem("medoji_lang", newLang);
      document.documentElement.lang = newLang;
    } catch {
      // ignore
    }
  }, []);

  const toggleLanguage = useCallback(() => {
    setLanguageState((prev) => {
      const next = prev === "en" ? "bn" : "en";
      try {
        localStorage.setItem("medoji_lang", next);
        document.documentElement.lang = next;
      } catch {
        // ignore
      }
      return next;
    });
  }, []);

  /**
   * Helper translation function.
   * key can be dot-notated: "hero.titleLine1" or "services.pillar1.title"
   * params can be an object like { count: 12, name: "Tanvir" }
   */
  const t = useCallback(
    (keyPath, params = {}) => {
      if (!keyPath) return "";
      const keys = keyPath.split(".");

      // Lookup in current language
      let currentVal = translations[language];
      for (const k of keys) {
        if (currentVal && typeof currentVal === "object" && k in currentVal) {
          currentVal = currentVal[k];
        } else {
          currentVal = null;
          break;
        }
      }

      // Fallback to English if missing in target language
      if (currentVal === null || currentVal === undefined) {
        let fallbackVal = translations.en;
        for (const k of keys) {
          if (fallbackVal && typeof fallbackVal === "object" && k in fallbackVal) {
            fallbackVal = fallbackVal[k];
          } else {
            fallbackVal = null;
            break;
          }
        }
        currentVal = fallbackVal;
      }

      // If still missing, return keyPath as fallback
      if (currentVal === null || currentVal === undefined) {
        return keyPath;
      }

      // If it's an array or object, return directly
      if (typeof currentVal !== "string") {
        return currentVal;
      }

      // String interpolation: replace {key}
      let result = currentVal;
      if (params && typeof params === "object") {
        Object.entries(params).forEach(([paramKey, paramVal]) => {
          const formattedVal =
            typeof paramVal === "number" && language === "bn"
              ? toBengaliNumber(paramVal, true)
              : String(paramVal);
          result = result.replace(new RegExp(`\\{${paramKey}\\}`, "g"), formattedVal);
        });
      }

      return result;
    },
    [language]
  );

  const isBangla = language === "bn";

  const formatNumber = useCallback(
    (num) => toBengaliNumber(num, isBangla),
    [isBangla]
  );

  return (
    <LanguageContext.Provider
      value={{
        language,
        isBangla,
        setLanguage,
        toggleLanguage,
        t,
        formatNumber,
        toBengaliNumber: formatNumber,
        isMounted,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    // Provide a safe fallback if used outside Provider during static export/testing
    return {
      language: "en",
      isBangla: false,
      setLanguage: () => {},
      toggleLanguage: () => {},
      t: (key) => key,
      formatNumber: (n) => String(n),
      toBengaliNumber: (n) => String(n),
      isMounted: false,
    };
  }
  return context;
}
