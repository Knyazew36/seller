import { MaxIcon, TelegramIcon, VkIcon } from './icons'
import type { MessengerChannel } from './types'

const ICONS = { TELEGRAM: TelegramIcon, MAX: MaxIcon, VK: VkIcon } satisfies Record<MessengerChannel, unknown>

export const MessengerIcon = ({ channel, className }: { channel: MessengerChannel; className?: string }) => {
  const Icon = ICONS[channel]
  return <Icon className={className} />
}
