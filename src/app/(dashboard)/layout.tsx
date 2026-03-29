import { AppShell } from '@/components/layout/app-shell';
import { TopBar } from '@/components/layout/top-bar';
import { AppNav, AppNavCollapsed } from '@/components/layout/app-nav';
import { MobileBottomNav, ORG_MOBILE_ITEMS } from '@/components/layout/mobile-nav';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <AppShell
      topBar={<TopBar />}
      nav={<AppNav />}
      navCollapsedContent={<AppNavCollapsed />}
      mobileNav={<MobileBottomNav items={ORG_MOBILE_ITEMS} />}
      center={<div className="p-4 md:p-6">{children}</div>}
    />
  );
}
