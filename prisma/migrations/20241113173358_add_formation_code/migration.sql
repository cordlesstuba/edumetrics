/*
  Warnings:

  - Added the required column `codeFormation` to the `Training` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Training" ADD COLUMN     "codeFormation" TEXT NOT NULL;