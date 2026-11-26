"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

export default function CopyProfileIdButton({ profileId, isBangla = false }) {
  const [copied, setCopied] = useState(false);

  if (!profileId) return null;

  const copyProfileId = async () => {
    try {
      await navigator.clipboard.writeText(profileId);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };

  return (
    <button
      type="button"
      onClick={copyProfileId}
      aria-label={isBangla ? "আইডি কপি করুন" : "Copy profile ID"}
      className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md text-[#17352A] transition hover:bg-white"
    >
      {copied ? (
        <Check size={16} className="text-[#19815C]" />
      ) : (
        <Copy size={16} />
      )}
    </button>
  );
}
