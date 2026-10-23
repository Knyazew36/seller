// Логотипы мессенджеров в фирменных цветах — для кнопок входа и привязки

export const TelegramIcon = ({ className = 'size-4 shrink-0' }: { className?: string }) => (
  <svg
    className={className}
    viewBox='0 0 24 24'
    xmlns='http://www.w3.org/2000/svg'
    aria-hidden
  >
    <circle
      cx={12}
      cy={12}
      r={12}
      fill='#29A9EB'
    />
    <path
      fill='#fff'
      d='M17.94 7.32c.14-.66-.48-1.18-1.1-.95L5.6 10.66c-.62.24-.66 1.11-.06 1.4l2.72 1.32.94 3.15c.14.46.7.6 1.03.26l1.53-1.55 2.75 2.16c.5.4 1.24.13 1.38-.5l1.05-9.58ZM9.3 13.1l-1.14-.55 6.4-4.3-4.35 4.5-.13 1.7-.78-1.35Z'
    />
  </svg>
)

export const MaxIcon = ({ className = 'size-4 shrink-0' }: { className?: string }) => (
  <svg
    className={className}
    viewBox='0 0 1000 1000'
    xmlns='http://www.w3.org/2000/svg'
    aria-hidden
  >
    <defs>
      <linearGradient
        id='max-icon-gradient'
        x1='117.847'
        x2='1000'
        y1='760.536'
        y2='500'
        gradientUnits='userSpaceOnUse'
      >
        <stop
          offset='0'
          stopColor='#4cf'
        />
        <stop
          offset='.662'
          stopColor='#53e'
        />
        <stop
          offset='1'
          stopColor='#93d'
        />
      </linearGradient>
    </defs>
    <rect
      width={1000}
      height={1000}
      fill='url(#max-icon-gradient)'
      ry='249.681'
    />
    <path
      fill='#fff'
      fillRule='evenodd'
      d='M508.211 878.328c-75.007 0-109.864-10.95-170.453-54.75-38.325 49.275-159.686 87.783-164.979 21.9 0-49.456-10.95-91.248-23.36-136.873-14.782-56.21-31.572-118.807-31.572-209.508 0-216.626 177.754-379.597 388.357-379.597 210.785 0 375.947 171.001 375.947 381.604.707 207.346-166.595 376.118-373.94 377.224m3.103-571.585c-102.564-5.292-182.499 65.7-200.201 177.024-14.6 92.162 11.315 204.398 33.397 210.238 10.585 2.555 37.23-18.98 53.837-35.587a189.8 189.8 0 0 0 92.71 33.032c106.273 5.112 197.08-75.794 204.215-181.95 4.154-106.382-77.67-196.486-183.958-202.574Z'
      clipRule='evenodd'
    />
  </svg>
)

export const VkIcon = ({ className = 'size-4 shrink-0' }: { className?: string }) => (
  <svg
    className={className}
    viewBox='0 0 24 24'
    xmlns='http://www.w3.org/2000/svg'
    aria-hidden
  >
    <rect
      width={24}
      height={24}
      rx={7}
      fill='#0077FF'
    />
    <path
      fill='#fff'
      d='M12.77 17.29c-5.12 0-8.04-3.51-8.16-9.35h2.56c.08 4.29 1.97 6.1 3.47 6.47V7.94h2.41v3.7c1.48-.16 3.03-1.85 3.55-3.7h2.41c-.4 2.29-2.08 3.98-3.28 4.68 1.2.56 3.11 2.03 3.84 4.67h-2.65c-.57-1.77-1.99-3.14-3.87-3.33v3.33h-.28Z'
    />
  </svg>
)
