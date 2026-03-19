// src/components/sections/Contact.tsx
"use client";

import React, { useState } from "react";
import SectionTitle from "@/components/ui/SectionTitle";
import VIcon from "../ui/vIcon";
import LoadingIcon from "../ui/LoadingIcon";
import { Input } from "@/components/ui/Input";
import { useT } from "@/contexts/LanguageContext";

type ContactFormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

const EMPTY: ContactFormData = { name: "", email: "", phone: "", message: "" };

export default function Contact() {
  const t = useT();
  const c = t.contact;

  const [formData, setFormData] = useState<ContactFormData>(EMPTY);
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (result?.success) {
        setStatus("success");
        setFormData(EMPTY);
      } else {
        setStatus("error");
        setErrorMsg(result?.error ?? c.errorDefault);
      }
    } catch (err) {
      console.error("Contact form error:", err);
      setStatus("error");
      setErrorMsg(c.errorNetwork);
    }
  };

  const FIELDS: {
    name: keyof ContactFormData;
    label: string;
    type: string;
    placeholder: string;
  }[] = [
    {
      name: "name",
      label: c.fields.name.label,
      type: "text",
      placeholder: c.fields.name.placeholder,
    },
    {
      name: "email",
      label: c.fields.email.label,
      type: "email",
      placeholder: c.fields.email.placeholder,
    },
    {
      name: "phone",
      label: c.fields.phone.label,
      type: "tel",
      placeholder: c.fields.phone.placeholder,
    },
  ];

  return (
    <section
      id="contact"
      className="section-padding bg-white dark:bg-gray-900"
      aria-labelledby="contact-heading"
    >
      <div className="section-container max-w-3xl">
        <div data-reveal>
          <SectionTitle title={c.title} subtitle={c.subtitle} />
        </div>

        {/* Success state */}
        {status === "success" ? (
          <div
            role="alert"
            className="bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-700 rounded-3xl p-10 text-center"
          >
            <div className="flex justify-center mb-4" aria-hidden="true">
              <VIcon name="check" className="w-12 h-12 text-emerald-500" />
            </div>
            <h3 className="text-xl font-extrabold text-emerald-700 dark:text-emerald-300 mb-2">
              {c.successTitle}
            </h3>
            <p className="text-emerald-600 dark:text-emerald-300 text-sm leading-relaxed mb-6">
              {c.successDesc}
            </p>
            <button
              onClick={() => setStatus("idle")}
              className="text-emerald-600 dark:text-emerald-300 font-semibold underline text-sm hover:text-emerald-800 dark:hover:text-emerald-100"
            >
              {c.sendAnother}
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            noValidate
            data-reveal
            data-from="scale"
            data-delay="80"
            className="relative bg-white/80 backdrop-blur-sm dark:bg-gray-800 rounded-3xl shadow-card border border-rose-100/60 dark:border-gray-700 p-8 ring-1 ring-rose-100 dark:ring-0"
            aria-label={c.formAriaLabel}
          >
            {/* Text fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
              {FIELDS.map((field) => (
                <div
                  key={field.name}
                  className={field.name === "phone" ? "sm:col-span-1" : ""}
                >
                  <Input
                    label={field.label}
                    id={field.name}
                    name={field.name}
                    type={field.type}
                    value={formData[field.name]}
                    onChange={handleChange}
                    placeholder={field.placeholder}
                    required
                    disabled={status === "loading"}
                    labelClassName="form-label"
                    inputClassName="form-input disabled:opacity-60"
                    autoComplete={
                      field.name === "email"
                        ? "email"
                        : field.name === "name"
                          ? "name"
                          : "tel"
                    }
                  />
                </div>
              ))}
            </div>

            {/* Message textarea */}
            <div className="mb-6">
              <label htmlFor="message" className="form-label">
                {c.fields.message.label}
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                placeholder={c.fields.message.placeholder}
                required
                disabled={status === "loading"}
                className="form-input resize-none disabled:opacity-60"
              />
            </div>

            {/* Error message */}
            {status === "error" && (
              <div
                role="alert"
                className="mb-4 bg-rose-50 dark:bg-rose-900/20 border border-rose-200 dark:border-rose-700 rounded-xl px-4 py-3 text-rose-600 dark:text-rose-400 text-sm"
              >
                ⚠️ {errorMsg}
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full bg-gradient-to-l from-rose-500 to-rose-400 text-white font-bold
                py-3.5 rounded-2xl shadow-soft hover:shadow-lg hover:-translate-y-0.5
                transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-rose-200
                disabled:opacity-60 disabled:cursor-not-allowed disabled:translate-y-0 text-base"
            >
              {status === "loading" ? (
                <span className="flex items-center justify-center gap-2">
                  <LoadingIcon />
                  {c.sending}
                </span>
              ) : (
                c.submit
              )}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
