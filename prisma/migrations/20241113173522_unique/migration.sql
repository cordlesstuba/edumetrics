/*
  Warnings:

  - A unique constraint covering the columns `[codeFormation]` on the table `Training` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Training_codeFormation_key" ON "Training"("codeFormation");
