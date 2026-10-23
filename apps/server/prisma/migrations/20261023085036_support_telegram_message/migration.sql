-- CreateTable
CREATE TABLE "SupportTelegramMessage" (
    "chatId" TEXT NOT NULL,
    "tgMessageId" INTEGER NOT NULL,
    "messageId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "SupportTelegramMessage_pkey" PRIMARY KEY ("chatId","tgMessageId")
);

-- CreateIndex
CREATE INDEX "SupportTelegramMessage_messageId_idx" ON "SupportTelegramMessage"("messageId");

-- AddForeignKey
ALTER TABLE "SupportTelegramMessage" ADD CONSTRAINT "SupportTelegramMessage_messageId_fkey" FOREIGN KEY ("messageId") REFERENCES "SupportMessage"("id") ON DELETE CASCADE ON UPDATE CASCADE;
