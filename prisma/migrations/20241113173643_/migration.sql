/*
  Warnings:

  - A unique constraint covering the columns `[uai]` on the table `Etablishment` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Etablishment_uai_key" ON "Etablishment"("uai");
