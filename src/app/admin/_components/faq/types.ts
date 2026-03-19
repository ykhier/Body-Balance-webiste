// src/app/admin/_components/faq/types.ts
// Shared types and constants for the FAQ admin components.

export interface FaqItem {
  id: number;
  questionHe: string;
  answerHe: string;
  questionAr: string;
  answerAr: string;
  order: number;
}

export type FormState = {
  questionHe: string;
  answerHe: string;
  questionAr: string;
  answerAr: string;
};

export type LangTab = "he" | "ar";

export const emptyForm: FormState = {
  questionHe: "",
  answerHe: "",
  questionAr: "",
  answerAr: "",
};
