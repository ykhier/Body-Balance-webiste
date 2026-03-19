// src/app/admin/_components/faq/FaqForm.tsx

"use client";

import { useState } from "react";
import { Spinner } from "@/components/ui/spinner";
import TabBtn from "./TabBtn";
import type { FormState, LangTab } from "./types";

export default function FaqForm({
  form,
  onChange,
  onSave,
  onCancel,
  saving,
  isNew,
}: {
  form: FormState;
  onChange: (f: FormState) => void;
  onSave: () => void;
  onCancel: () => void;
  saving: boolean;
  isNew?: boolean;
}) {
  const [activeTab, setActiveTab] = useState<LangTab>("he");

  const heValid = form.questionHe.trim() && form.answerHe.trim();
  const arValid = form.questionAr.trim() && form.answerAr.trim();
  const canSave = heValid && arValid;

  return (
    <div className="bg-white dark:bg-gray-900 border-2 border-[#4E8B6E]/40 rounded-2xl p-4 sm:p-5 shadow-sm mb-3">
      <h3 className="font-bold text-gray-700 dark:text-gray-200 mb-4 text-sm">
        {isNew ? "➕ שאלה חדשה" : "✏️ עריכת שאלה"}
      </h3>

      {/* Language tabs */}
      <div className="flex gap-1 mb-4 bg-gray-100 dark:bg-gray-800 rounded-xl p-1">
        <TabBtn
          active={activeTab === "he"}
          onClick={() => setActiveTab("he")}
          filled={!!heValid}
          label="עברית"
        />
        <TabBtn
          active={activeTab === "ar"}
          onClick={() => setActiveTab("ar")}
          filled={!!arValid}
          label="ערבית"
        />
      </div>

      {/* Hebrew fields */}
      <div className={activeTab === "he" ? "block" : "hidden"}>
        <div className="space-y-3">
          <div>
            <label className="form-label">שאלה בעברית</label>
            <input
              className="form-input"
              value={form.questionHe}
              onChange={(e) =>
                onChange({ ...form, questionHe: e.target.value })
              }
              placeholder="הכנס את השאלה בעברית..."
              dir="rtl"
              // eslint-disable-next-line jsx-a11y/no-autofocus
              autoFocus={isNew}
            />
          </div>
          <div>
            <label className="form-label">תשובה בעברית</label>
            <textarea
              className="form-input resize-y"
              value={form.answerHe}
              onChange={(e) => onChange({ ...form, answerHe: e.target.value })}
              placeholder="הכנס את התשובה בעברית..."
              dir="rtl"
              rows={4}
            />
          </div>
          {heValid && (
            <button
              type="button"
              onClick={() => setActiveTab("ar")}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#4E8B6E] bg-[#4E8B6E]/10 hover:bg-[#4E8B6E]/20 px-3 py-1.5 rounded-lg transition-colors"
            >
              <svg className="w-3.5 h-3.5 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
              עבור לערבית
            </button>
          )}
        </div>
      </div>

      {/* Arabic fields */}
      <div className={activeTab === "ar" ? "block" : "hidden"}>
        <div className="space-y-3">
          <div>
            <label className="form-label">שאלה בערבית</label>
            <input
              className="form-input"
              value={form.questionAr}
              onChange={(e) =>
                onChange({ ...form, questionAr: e.target.value })
              }
              placeholder="הכנס את השאלה בערבית..."
              dir="rtl"
            />
          </div>
          <div>
            <label className="form-label">תשובה בערבית</label>
            <textarea
              className="form-input resize-y"
              value={form.answerAr}
              onChange={(e) => onChange({ ...form, answerAr: e.target.value })}
              placeholder="הכנס את התשובה בערבית..."
              dir="rtl"
              rows={4}
            />
          </div>
          {arValid && !heValid && (
            <button
              type="button"
              onClick={() => setActiveTab("he")}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#4E8B6E] bg-[#4E8B6E]/10 hover:bg-[#4E8B6E]/20 px-3 py-1.5 rounded-lg transition-colors"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
              עבור לעברית
            </button>
          )}
        </div>
      </div>

      {/* Status indicator */}
      <div className="flex gap-3 mt-3 text-xs text-gray-400">
        <span className={heValid ? "text-[#4E8B6E]" : ""}>
          {heValid ? "✓" : "○"} עברית
        </span>
        <span className={arValid ? "text-[#4E8B6E]" : ""}>
          {arValid ? "✓" : "○"} ערבית
        </span>
      </div>

      {/* Actions */}
      <div className="flex gap-2 mt-4 justify-end">
        <button
          onClick={onCancel}
          className="px-4 py-2 text-sm text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl transition-colors"
        >
          ביטול
        </button>
        <button
          onClick={onSave}
          disabled={saving || !canSave}
          title={!canSave ? "יש למלא שאלה ותשובה בשתי השפות" : undefined}
          className="flex items-center gap-2 px-5 py-2 bg-[#4E8B6E] text-white rounded-xl text-sm font-semibold hover:bg-[#3d7459] transition-colors disabled:opacity-40"
        >
          {saving && <Spinner className="size-3.5" />}
          שמור
        </button>
      </div>
    </div>
  );
}
