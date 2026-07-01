/*
  Warnings:

  - You are about to drop the column `createdBy` on the `Video` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Video" DROP COLUMN "createdBy",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
