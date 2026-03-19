// src/app/admin/_components/faq/TabBtn.tsx

"use client";

export default function TabBtn({
  active,
  onClick,
  label,
  filled,
}: {
  active: boolean;
  onClick: () => void;
  label: string;
  filled: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex-1 flex items-center justify-center gap-1.5 py-1.5 text-xs sm:text-sm font-semibold rounded-lg transition-all ${
        active
          ? "bg-white dark:bg-gray-700 text-gray-800 dark:text-white shadow-sm"
          : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
      }`}
    >
      {label}
      {filled && <span className="text-[#4E8B6E] text-xs">✓</span>}
    </button>
  );
}
