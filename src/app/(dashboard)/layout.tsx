import { AppShell } from '@/components/layout/app-shell';
import { TopBar } from '@/components/layout/top-bar';
import { AppNav, AppNavCollapsed } from '@/components/layout/app-nav';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <AppShell
      topBar={<TopBar />}
      nav={<AppNav />}
      navCollapsedContent={<AppNavCollapsed />}
      center={<div className="p-6">{children}</div>}
    />
  );
}
