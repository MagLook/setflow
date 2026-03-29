import Link from 'next/link';
import {
  LayoutDashboard,
  Users,
  Package,
  Calendar,
  Map,
  Radio,
  BookOpen,
  Image,
  DollarSign,
  Globe,
  Settings,
  ArrowLeft,
} from 'lucide-react';

function getProjectNav(projectId: string) {
  const base = `/projects/${projectId}`;
  return [
    { href: base, icon: LayoutDashboard, label: 'Обзор проекта' },
    { href: `${base}/crew`, icon: Users, label: 'Команда' },
    { href: `${base}/equipment`, icon: Package, label: 'Оборудование' },
    { href: `${base}/schedule`, icon: Calendar, label: 'Расписание' },
    { href: `${base}/setplan`, icon: Map, label: 'План площадки' },
    { href: `${base}/onset`, icon: Radio, label: 'На площадке' },
    { href: `${base}/knowledge`, icon: BookOpen, label: 'База знаний' },
    { href: `${base}/media`, icon: Image, label: 'Медиа' },
    { href: `${base}/budget`, icon: DollarSign, label: 'Бюджет' },
    { href: `${base}/portal`, icon: Globe, label: 'Портал клиента' },
  ];
}

export default async function ProjectLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const navItems = getProjectNav(id);

  return (
    <div className="flex h-full min-h-screen">
      {/* Project sidebar — desktop */}
      <aside className="hidden lg:flex w-64 flex-col border-r bg-sidebar text-sidebar-foreground">
        <div className="p-4 border-b">
          <Link
            href="/projects"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-3"
          >
            <ArrowLeft className="h-4 w-4" />
            Все проекты
          </Link>
          <h2 className="font-semibold truncate">Проект</h2>
        </div>
        <nav className="flex-1 px-3 py-2 space-y-1">
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
            href={`/projects/${id}/settings`}
            className="flex items-center gap-3 rounded-md px-3 py-2 text-sm hover:bg-sidebar-accent transition-colors"
          >
            <Settings className="h-4 w-4" />
            Настройки проекта
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
              {item.label.split(' ')[0]}
            </Link>
          ))}
        </nav>

        <div className="p-6 pb-20 lg:pb-6">{children}</div>
      </main>
    </div>
  );
}
