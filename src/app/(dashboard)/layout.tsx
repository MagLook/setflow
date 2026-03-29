import { AppShell } from '@/components/layout/app-shell';
import { TopBar } from '@/components/layout/top-bar';
import { AppNav } from '@/components/layout/app-nav';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <AppShell
      topBar={<TopBar />}
      nav={<AppNav />}
      center={<div className="p-6">{children}</div>}
    />
  );
}
