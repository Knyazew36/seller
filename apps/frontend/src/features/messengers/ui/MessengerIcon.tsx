import type { MessengerChannel } from '@/entities/messenger'
import { MaxIcon, TelegramIcon, VkIcon } from '@/shared/ui/icons/MessengerIcons'

const ICONS = { TELEGRAM: TelegramIcon, MAX: MaxIcon, VK: VkIcon } satisfies Record<MessengerChannel, unknown>

export const MessengerIcon = ({ channel, className }: { channel: MessengerChannel; className?: string }) => {
  const Icon = ICONS[channel]
  return <Icon className={className} />
}
