// src/app/admin/_components/faq/FaqCard.tsx

"use client";

import { Spinner } from "@/components/ui/spinner";
import type { FaqItem } from "./types";

export default function FaqCard({
  item,
  idx,
  total,
  onEdit,
  onDelete,
  onMove,
  deleting,
  moving,
  disabled,
}: {
  item: FaqItem;
  idx: number;
  total: number;
  onEdit: () => void;
  onDelete: () => void;
  onMove: (dir: "up" | "down") => void;
  deleting: boolean;
  moving: boolean;
  disabled: boolean;
}) {
  return (
    <div
      className={`bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-4 sm:p-5 transition-opacity ${
        disabled ? "opacity-40 pointer-events-none" : ""
      }`}
    >
      {/* Index + content */}
      <div className="flex items-start gap-3">
        <span className="shrink-0 mt-0.5 text-xs font-bold text-[#4E8B6E] bg-[#4E8B6E]/10 rounded-full w-6 h-6 flex items-center justify-center">
          {idx + 1}
        </span>
        <div className="min-w-0 flex-1 space-y-2">
          {/* Hebrew */}
          <div>
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wide">
              {" "}
              עברית
            </span>
            <p className="font-semibold text-gray-800 dark:text-white text-sm leading-snug mt-0.5">
              {item.questionHe || (
                <em className="text-gray-400 font-normal">ריק</em>
              )}
            </p>
            <p className="text-gray-500 dark:text-gray-400 text-xs mt-0.5 line-clamp-1">
              {item.answerHe}
            </p>
          </div>
          {/* Arabic */}
          <div className="pt-2 border-t border-gray-100 dark:border-gray-800">
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wide">
              {" "}
              ערבית
            </span>
            <p className="font-semibold text-gray-700 dark:text-gray-200 text-sm leading-snug mt-0.5">
              {item.questionAr || (
                <em className="text-gray-400 font-normal">ריק</em>
              )}
            </p>
            <p className="text-gray-500 dark:text-gray-400 text-xs mt-0.5 line-clamp-1">
              {item.answerAr}
            </p>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="flex flex-wrap items-center justify-between gap-2 mt-4 pt-3 border-t border-gray-100 dark:border-gray-800">
        {/* Reorder */}
        <div className="flex items-center gap-1">
          <button
            onClick={() => onMove("up")}
            disabled={idx === 0 || moving}
            title="העלה למעלה"
            className="p-1.5 text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors disabled:opacity-25"
          >
            <svg
              className="w-3.5 h-3.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M5 15l7-7 7 7"
              />
            </svg>
          </button>
          <button
            onClick={() => onMove("down")}
            disabled={idx === total - 1 || moving}
            title="הורד למטה"
            className="p-1.5 text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors disabled:opacity-25"
          >
            <svg
              className="w-3.5 h-3.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          {moving && <Spinner className="size-3 text-gray-400 mr-1" />}
        </div>

        {/* Edit / Delete */}
        <div className="flex gap-2">
          <button
            onClick={onEdit}
            className="text-xs px-3 py-1.5 border border-[#4E8B6E]/40 text-[#4E8B6E] rounded-lg hover:bg-[#4E8B6E]/10 transition-colors font-medium"
          >
            עריכה
          </button>
          <button
            onClick={onDelete}
            disabled={deleting}
            className="flex items-center gap-1.5 text-xs px-3 py-1.5 border border-gray-300 text-gray-400 hover:border-red-400 hover:text-red-500 dark:border-gray-700 dark:text-gray-500 dark:hover:border-red-700 dark:hover:text-red-400 rounded-lg transition-colors disabled:opacity-50"
          >
            {deleting && <Spinner className="size-3" />}
            מחיקה
          </button>
        </div>
      </div>
    </div>
  );
}
