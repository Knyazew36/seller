-- CreateEnum
CREATE TYPE "SupportConversationStatus" AS ENUM ('OPEN', 'PENDING', 'RESOLVED', 'CLOSED');

-- CreateEnum
CREATE TYPE "SupportMessageAuthor" AS ENUM ('CONTACT', 'OPERATOR', 'SYSTEM', 'BOT');

-- CreateEnum
CREATE TYPE "SupportChannel" AS ENUM ('WIDGET', 'TELEGRAM', 'MAX', 'VK');

-- CreateTable
CREATE TABLE "SupportContact" (
    "id" SERIAL NOT NULL,
    "workspaceKey" TEXT NOT NULL,
    "externalUserId" TEXT,
    "anonymousKey" TEXT,
    "name" TEXT,
    "email" TEXT,
    "phone" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SupportContact_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SupportConversation" (
    "id" SERIAL NOT NULL,
    "workspaceKey" TEXT NOT NULL,
    "contactId" INTEGER NOT NULL,
    "status" "SupportConversationStatus" NOT NULL DEFAULT 'OPEN',
    "assigneeId" INTEGER,
    "assigneeName" TEXT,
    "sourceChannel" "SupportChannel" NOT NULL DEFAULT 'WIDGET',
    "lastSeq" INTEGER NOT NULL DEFAULT 0,
    "lastMessageAt" TIMESTAMP(3),
    "contactReadSeq" INTEGER NOT NULL DEFAULT 0,
    "operatorReadSeq" INTEGER NOT NULL DEFAULT 0,
    "unreadForContact" INTEGER NOT NULL DEFAULT 0,
    "unreadForOperator" INTEGER NOT NULL DEFAULT 0,
    "tags" TEXT[],
    "rating" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SupportConversation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SupportMessage" (
    "id" SERIAL NOT NULL,
    "conversationId" INTEGER NOT NULL,
    "seq" INTEGER NOT NULL,
    "author" "SupportMessageAuthor" NOT NULL,
    "authorId" INTEGER,
    "authorName" TEXT,
    "text" TEXT NOT NULL,
    "isInternalNote" BOOLEAN NOT NULL DEFAULT false,
    "clientMessageId" TEXT,
    "channel" "SupportChannel" NOT NULL DEFAULT 'WIDGET',
    "editedAt" TIMESTAMP(3),
    "deletedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "SupportMessage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SupportAttachment" (
    "id" SERIAL NOT NULL,
    "messageId" INTEGER NOT NULL,
    "path" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "mime" TEXT NOT NULL,
    "size" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "SupportAttachment_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "SupportContact_anonymousKey_key" ON "SupportContact"("anonymousKey");

-- CreateIndex
CREATE INDEX "SupportContact_workspaceKey_createdAt_idx" ON "SupportContact"("workspaceKey", "createdAt");

-- CreateIndex
CREATE UNIQUE INDEX "SupportContact_workspaceKey_externalUserId_key" ON "SupportContact"("workspaceKey", "externalUserId");

-- CreateIndex
CREATE INDEX "SupportConversation_workspaceKey_status_lastMessageAt_idx" ON "SupportConversation"("workspaceKey", "status", "lastMessageAt");

-- CreateIndex
CREATE INDEX "SupportConversation_workspaceKey_assigneeId_idx" ON "SupportConversation"("workspaceKey", "assigneeId");

-- CreateIndex
CREATE INDEX "SupportConversation_contactId_status_idx" ON "SupportConversation"("contactId", "status");

-- CreateIndex
CREATE UNIQUE INDEX "SupportMessage_conversationId_seq_key" ON "SupportMessage"("conversationId", "seq");

-- CreateIndex
CREATE UNIQUE INDEX "SupportMessage_conversationId_clientMessageId_key" ON "SupportMessage"("conversationId", "clientMessageId");

-- CreateIndex
CREATE INDEX "SupportAttachment_messageId_idx" ON "SupportAttachment"("messageId");

-- AddForeignKey
ALTER TABLE "SupportConversation" ADD CONSTRAINT "SupportConversation_contactId_fkey" FOREIGN KEY ("contactId") REFERENCES "SupportContact"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SupportMessage" ADD CONSTRAINT "SupportMessage_conversationId_fkey" FOREIGN KEY ("conversationId") REFERENCES "SupportConversation"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SupportAttachment" ADD CONSTRAINT "SupportAttachment_messageId_fkey" FOREIGN KEY ("messageId") REFERENCES "SupportMessage"("id") ON DELETE CASCADE ON UPDATE CASCADE;
