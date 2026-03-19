-- Add bilingual columns
ALTER TABLE "FaqItem" ADD COLUMN "questionHe" TEXT NOT NULL DEFAULT '';
ALTER TABLE "FaqItem" ADD COLUMN "answerHe"   TEXT NOT NULL DEFAULT '';
ALTER TABLE "FaqItem" ADD COLUMN "questionAr" TEXT NOT NULL DEFAULT '';
ALTER TABLE "FaqItem" ADD COLUMN "answerAr"   TEXT NOT NULL DEFAULT '';

-- Copy existing content into both language columns
UPDATE "FaqItem" SET
  "questionHe" = "question",
  "answerHe"   = "answer",
  "questionAr" = "question",
  "answerAr"   = "answer";

-- Drop old monolingual columns
ALTER TABLE "FaqItem" DROP COLUMN "question";
ALTER TABLE "FaqItem" DROP COLUMN "answer";
