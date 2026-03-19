// src/app/api/admin/faq/route.ts
// GET (list), POST (create), PATCH (update single or bulk reorder), DELETE
// Protected automatically by middleware.ts for /api/admin/* routes.

import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// ── GET /api/admin/faq ──────────────────────────────────────────────────────
export async function GET() {
  try {
    const items = await prisma.faqItem.findMany({ orderBy: { order: "asc" } });
    return NextResponse.json({ items });
  } catch (err) {
    console.error("[faq GET]", err);
    return NextResponse.json({ error: String(err) }, { status: 500 });
  }
}

// ── POST /api/admin/faq ─────────────────────────────────────────────────────
// Body: { questionHe, answerHe, questionAr, answerAr }
export async function POST(req: NextRequest) {
  try {
    const { questionHe, answerHe, questionAr, answerAr } = await req.json();
    if (!questionHe?.trim() || !answerHe?.trim() || !questionAr?.trim() || !answerAr?.trim())
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });

    const last = await prisma.faqItem.findFirst({ orderBy: { order: "desc" } });
    const item = await prisma.faqItem.create({
      data: {
        questionHe: questionHe.trim(),
        answerHe: answerHe.trim(),
        questionAr: questionAr.trim(),
        answerAr: answerAr.trim(),
        order: (last?.order ?? -1) + 1,
      },
    });

    return NextResponse.json({ item });
  } catch (err) {
    console.error("[faq POST]", err);
    return NextResponse.json({ error: String(err) }, { status: 500 });
  }
}

// ── PATCH /api/admin/faq ────────────────────────────────────────────────────
// Single update: { id, questionHe?, answerHe?, questionAr?, answerAr? }
// Bulk reorder:  { updates: [{ id, order }] }
export async function PATCH(req: NextRequest) {
  try {
    const body = await req.json();

    // Bulk reorder
    if (Array.isArray(body.updates)) {
      await Promise.all(
        body.updates.map(({ id, order }: { id: number; order: number }) =>
          prisma.faqItem.update({ where: { id: Number(id) }, data: { order } }),
        ),
      );
      return NextResponse.json({ success: true });
    }

    // Single update
    const { id, questionHe, answerHe, questionAr, answerAr } = body;
    if (!id) return NextResponse.json({ error: "Missing id" }, { status: 400 });

    const item = await prisma.faqItem.update({
      where: { id: Number(id) },
      data: {
        ...(questionHe !== undefined && { questionHe: questionHe.trim() }),
        ...(answerHe !== undefined && { answerHe: answerHe.trim() }),
        ...(questionAr !== undefined && { questionAr: questionAr.trim() }),
        ...(answerAr !== undefined && { answerAr: answerAr.trim() }),
      },
    });

    return NextResponse.json({ item });
  } catch (err) {
    console.error("[faq PATCH]", err);
    return NextResponse.json({ error: String(err) }, { status: 500 });
  }
}

// ── DELETE /api/admin/faq ───────────────────────────────────────────────────
// Body: { id: number }
export async function DELETE(req: NextRequest) {
  try {
    const { id } = await req.json();
    if (!id) return NextResponse.json({ error: "Missing id" }, { status: 400 });

    await prisma.faqItem.delete({ where: { id: Number(id) } });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[faq DELETE]", err);
    return NextResponse.json({ error: String(err) }, { status: 500 });
  }
}
