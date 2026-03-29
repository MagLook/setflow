import Link from 'next/link';
import { LayoutDashboard, FolderOpen, Users, Package, UserCircle, BookUser, Settings } from 'lucide-react';

const navItems = [
  { href: '/', icon: LayoutDashboard, label: 'Обзор' },
  { href: '/projects', icon: FolderOpen, label: 'Проекты' },
  { href: '/crew', icon: Users, label: 'Команда' },
  { href: '/equipment', icon: Package, label: 'Оборудование' },
  { href: '/clients', icon: UserCircle, label: 'Клиенты' },
  { href: '/contacts', icon: BookUser, label: 'Контакты' },
];

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-full min-h-screen">
      {/* Sidebar — desktop */}
      <aside className="hidden lg:flex w-64 flex-col border-r bg-sidebar text-sidebar-foreground">
        <div className="p-6">
          <h1 className="text-xl font-bold">SetFlow</h1>
          <p className="text-sm text-muted-foreground">Съёмочная группа</p>
        </div>
        <nav className="flex-1 px-3 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center gap-3 rounded-md px-3 py-2 text-sm hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-colors"
            >
              <item.icon className="h-4 w-4" />
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="p-3 border-t">
          <Link
            href="/settings"
            className="flex items-center gap-3 rounded-md px-3 py-2 text-sm hover:bg-sidebar-accent transition-colors"
          >
            <Settings className="h-4 w-4" />
            Настройки
          </Link>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 overflow-auto">
        {/* Mobile bottom bar */}
        <nav className="fixed bottom-0 left-0 right-0 z-50 flex lg:hidden border-t bg-background">
          {navItems.slice(0, 5).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex flex-1 flex-col items-center gap-1 py-2 text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              <item.icon className="h-5 w-5" />
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="p-6 pb-20 lg:pb-6">{children}</div>
      </main>
    </div>
  );
}
