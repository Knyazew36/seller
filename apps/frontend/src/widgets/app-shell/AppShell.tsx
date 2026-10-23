import { Outlet } from 'react-router'

import { SidebarInset, SidebarProvider } from '@/shared/ui/shadcn/animate-ui/components/radix/sidebar'
import { SupportChatWidget } from '@/widgets/support-widget/SupportChatWidget'

import { AppSidebar } from './AppSidebar'
import { MobileNav } from './MobileNav'
import { Topbar } from './Topbar'

// Layout-маршрут рабочего кабинета: /app/:orgId/*
const AppShell = () => (
  <SidebarProvider>
    <AppSidebar />
    <SidebarInset className='bg-background min-h-svh'>
      <Topbar />
      {/* Нижний отступ на мобильном — под плавающее меню */}
      <main className='mx-auto flex w-full max-w-[1280px] flex-1 flex-col px-4 pt-2 pb-28 md:px-8 md:pt-4 md:pb-10'>
        <Outlet />
      </main>
    </SidebarInset>
    <MobileNav />
    <SupportChatWidget />
  </SidebarProvider>
)

export default AppShell
