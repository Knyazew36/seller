-- CreateTable
CREATE TABLE "SupportTelegramTopic" (
    "conversationId" INTEGER NOT NULL,
    "chatId" TEXT NOT NULL,
    "threadId" INTEGER NOT NULL,
    "closed" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "SupportTelegramTopic_pkey" PRIMARY KEY ("conversationId")
);

-- CreateIndex
CREATE UNIQUE INDEX "SupportTelegramTopic_chatId_threadId_key" ON "SupportTelegramTopic"("chatId", "threadId");
