import { CheckIcon } from 'lucide-react'

import { APP_NAME } from '@/shared/config/app'

type AuthLayoutProps = {
  title: string
  description?: React.ReactNode
  children: React.ReactNode
  /** Ссылки под формой: «Нет аккаунта?», «Забыли пароль?» */
  footer?: React.ReactNode
}

const BENEFITS = [
  'Команда и роли в одной организации',
  'Приглашения и заявки на вступление',
  'Журнал действий по каждому изменению',
]

const BrandMark = ({ className }: { className?: string }) => (
  <span className={className}>
    <span
      className='bg-teal inline-block size-3 rounded-full'
      aria-hidden
    />
    <span className='section-heading text-subheading-lg'>{APP_NAME}</span>
  </span>
)

// Рамка страниц входа по DESIGN.md: тёмная hero-карточка слева (только ≥lg), белая карточка формы справа
export const AuthLayout = ({ title, description, children, footer }: AuthLayoutProps) => (
  <main className='bg-canvas flex min-h-svh p-4 md:p-6'>
    <div className='mx-auto grid w-full max-w-[1200px] gap-6 lg:grid-cols-[1fr_minmax(0,480px)]'>
      <aside className='rounded-hero bg-abyss hidden flex-col justify-between gap-12 p-12 text-white lg:flex'>
        <BrandMark className='flex items-center gap-2.5' />
        <div className='flex flex-col gap-8'>
          <h2 className='display-heading text-heading-lg xl:text-display max-w-xl text-white'>
            Рабочее пространство вашей <span className='text-teal'>команды</span>
          </h2>
          <ul className='flex flex-col gap-3'>
            {BENEFITS.map(item => (
              <li
                key={item}
                className='text-body flex items-center gap-3 text-white'
              >
                <CheckIcon
                  className='text-teal size-4 shrink-0'
                  strokeWidth={3}
                  aria-hidden
                />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <span className='text-caption text-white/60'>
          © {new Date().getFullYear()} {APP_NAME}
        </span>
      </aside>

      <div className='flex flex-col items-center justify-center gap-6 py-6'>
        <BrandMark className='flex items-center gap-2.5 lg:hidden' />
        <div className='rounded-card bg-card flex w-full max-w-md flex-col gap-6 border p-6 md:p-8 lg:max-w-none'>
          <header className='flex flex-col gap-2'>
            <h1 className='display-heading text-heading-sm'>{title}</h1>
            {description && <p className='text-body-sm text-slate'>{description}</p>}
          </header>
          {children}
        </div>
        {footer && <div className='text-body-sm text-slate flex flex-col items-center gap-2'>{footer}</div>}
      </div>
    </div>
  </main>
)

// Текст ссылки под формой; сама навигация — снаружи, в <Link>
export const AuthLink = (props: React.ComponentProps<'span'>) => (
  <span
    className='text-teal-deep font-semibold underline-offset-4 hover:underline'
    {...props}
  />
)
