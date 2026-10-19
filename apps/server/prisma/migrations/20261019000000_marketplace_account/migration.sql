-- CreateEnum
CREATE TYPE "Marketplace" AS ENUM ('WILDBERRIES', 'OZON', 'AVITO');

-- CreateEnum
CREATE TYPE "MarketplaceAccountStatus" AS ENUM ('ACTIVE', 'ERROR');

-- CreateTable
CREATE TABLE "MarketplaceAccount" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "organizationId" INTEGER NOT NULL,
    "marketplace" "Marketplace" NOT NULL,
    "name" TEXT NOT NULL,
    "externalId" TEXT NOT NULL,
    "credentials" TEXT NOT NULL,
    "credentialsFingerprint" TEXT NOT NULL,
    "status" "MarketplaceAccountStatus" NOT NULL DEFAULT 'ACTIVE',
    "statusMessage" TEXT,
    "checkedAt" TIMESTAMP(3),
    "keyExpiresAt" TIMESTAMP(3),
    "keyInfo" JSONB,
    "createdByUserId" INTEGER,

    CONSTRAINT "MarketplaceAccount_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "MarketplaceAccount_organizationId_marketplace_externalId_key" ON "MarketplaceAccount"("organizationId", "marketplace", "externalId");

-- AddForeignKey
ALTER TABLE "MarketplaceAccount" ADD CONSTRAINT "MarketplaceAccount_organizationId_fkey" FOREIGN KEY ("organizationId") REFERENCES "Organization"("id") ON DELETE CASCADE ON UPDATE CASCADE;
