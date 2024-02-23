/*
  Warnings:

  - Added the required column `Motocycles` to the `Session` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cars` to the `Session` table without a default value. This is not possible if the table is not empty.
  - Added the required column `trucks` to the `Session` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Session" ADD COLUMN     "Motocycles" INTEGER NOT NULL,
ADD COLUMN     "cars" INTEGER NOT NULL,
ADD COLUMN     "trucks" INTEGER NOT NULL,
ADD COLUMN     "videos" TEXT[];
