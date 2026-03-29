'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  FolderOpen,
  FolderPlus,
  Archive,
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
import type { LucideIcon } from 'lucide-react';

interface NavItem {
  href: string;
  icon: LucideIcon;
  label: string;
}

interface NavSection {
  title?: string;
  items: NavItem[];
}

const sections: NavSection[] = [
  {
    items: [
      { href: '/', icon: LayoutDashboard, label: 'Обзор' },
    ],
  },
  {
    title: 'ПРОЕКТЫ',
    items: [
      { href: '/projects', icon: FolderOpen, label: 'Все проекты' },
      { href: '/projects/new', icon: FolderPlus, label: 'Новый проект' },
      { href: '/projects/archive', icon: Archive, label: 'Архив' },
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

function useActiveCheck() {
  const pathname = usePathname();
  return (href: string) => href === '/' ? pathname === '/' : pathname.startsWith(href);
}

/** Полная навигация (развёрнутая) */
export function AppNav() {
  const isActive = useActiveCheck();

  return (
    <nav className="py-2 px-2 space-y-4">
      {sections.map((section, sIdx) => (
        <div key={sIdx}>
          {section.title && (
            <p className="px-3 py-1 text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
              {section.title}
            </p>
          )}
          <div className="space-y-0.5">
            {section.items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors',
                  isActive(item.href)
                    ? 'bg-blue-600 text-white'
                    : 'text-di-on-surface-variant hover:bg-di-surface-high',
                )}
              >
                <item.icon className="h-4 w-4 flex-shrink-0" />
                <span className="truncate">{item.label}</span>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </nav>
  );
}

/** Свёрнутая навигация (только иконки) */
export function AppNavCollapsed() {
  const isActive = useActiveCheck();
  const allItems = sections.flatMap((s) => s.items);

  return (
    <nav className="py-2 px-1.5 space-y-1">
      {allItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          title={item.label}
          className={cn(
            'flex items-center justify-center rounded-lg p-2 transition-colors',
            isActive(item.href)
              ? 'bg-blue-600 text-white'
              : 'text-di-on-surface-variant hover:bg-di-surface-high',
          )}
        >
          <item.icon className="h-4 w-4" />
        </Link>
      ))}
    </nav>
  );
}
