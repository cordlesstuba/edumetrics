-- CreateTable
CREATE TABLE "Etablishment" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "status" TEXT NOT NULL,
    "uai" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "department" TEXT NOT NULL,
    "region" TEXT NOT NULL,
    "academy" TEXT NOT NULL,

    CONSTRAINT "Etablishment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Training" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "etablishmentId" TEXT NOT NULL,
    "session" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "link" TEXT NOT NULL,

    CONSTRAINT "Training_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Training" ADD CONSTRAINT "Training_etablishmentId_fkey" FOREIGN KEY ("etablishmentId") REFERENCES "Etablishment"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
