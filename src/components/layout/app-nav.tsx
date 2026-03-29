'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  FolderOpen,
  Users,
  Package,
  UserCircle,
  BookUser,
  Settings,
  Database,
  FileText,
  Bell,
} from 'lucide-react';
import { cn } from '@/lib/utils';

const sections = [
  {
    items: [
      { href: '/', icon: LayoutDashboard, label: 'Обзор' },
      { href: '/projects', icon: FolderOpen, label: 'Проекты' },
    ],
  },
  {
    title: 'РЕСУРСЫ',
    items: [
      { href: '/crew', icon: Users, label: 'Команда' },
      { href: '/equipment', icon: Package, label: 'Оборудование' },
      { href: '/clients', icon: UserCircle, label: 'Клиенты' },
      { href: '/contacts', icon: BookUser, label: 'Контакты' },
    ],
  },
  {
    title: 'ХРАНИЛИЩЕ',
    items: [
      { href: '/templates', icon: FileText, label: 'Шаблоны' },
      { href: '/knowledge', icon: Database, label: 'База знаний' },
    ],
  },
  {
    title: 'СИСТЕМА',
    items: [
      { href: '/notifications', icon: Bell, label: 'Уведомления' },
      { href: '/settings', icon: Settings, label: 'Настройки' },
    ],
  },
];

export function AppNav() {
  const pathname = usePathname();

  return (
    <nav className="py-2 px-2 space-y-4">
      {sections.map((section, sIdx) => (
        <div key={sIdx}>
          {section.title && (
            <p className="px-3 py-1 text-[10px] font-semibold text-muted-foreground tracking-wider uppercase">
              {section.title}
            </p>
          )}
          <div className="space-y-0.5">
            {section.items.map((item) => {
              const isActive =
                item.href === '/' ? pathname === '/' : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors',
                    isActive
                      ? 'bg-primary text-primary-foreground'
                      : 'text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground',
                  )}
                >
                  <item.icon className="h-4 w-4 flex-shrink-0" />
                  <span className="truncate">{item.label}</span>
                </Link>
              );
            })}
          </div>
        </div>
      ))}
    </nav>
  );
}
