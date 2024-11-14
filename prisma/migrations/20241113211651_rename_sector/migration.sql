/*
  Warnings:

  - You are about to drop the column `filiaire` on the `Training` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Training" DROP COLUMN "filiaire",
ADD COLUMN     "sector" TEXT;
