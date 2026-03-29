'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
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
import { cn } from '@/lib/utils';
import type { LucideIcon } from 'lucide-react';

interface NavItem {
  path: string;
  icon: LucideIcon;
  label: string;
}

interface NavSection {
  title?: string;
  items: NavItem[];
}

const sections: NavSection[] = [
  {
    title: 'ПРОЕКТ',
    items: [
      { path: '', icon: LayoutDashboard, label: 'Обзор' },
      { path: '/settings', icon: Settings, label: 'Свойства' },
    ],
  },
  {
    title: 'ПОДГОТОВКА',
    items: [
      { path: '/crew', icon: Users, label: 'Команда' },
      { path: '/equipment', icon: Package, label: 'Оборудование' },
      { path: '/schedule', icon: Calendar, label: 'Расписание' },
      { path: '/setplan', icon: Map, label: 'План площадки' },
    ],
  },
  {
    title: 'СЪЁМКА',
    items: [{ path: '/onset', icon: Radio, label: 'На площадке' }],
  },
  {
    title: 'МАТЕРИАЛЫ',
    items: [
      { path: '/knowledge', icon: BookOpen, label: 'База знаний' },
      { path: '/media', icon: Image, label: 'Медиа' },
    ],
  },
  {
    title: 'УПРАВЛЕНИЕ',
    items: [
      { path: '/budget', icon: DollarSign, label: 'Бюджет' },
      { path: '/portal', icon: Globe, label: 'Портал' },
    ],
  },
];

function useProjectActive(base: string) {
  const pathname = usePathname();
  return (path: string) => {
    const href = `${base}${path}`;
    return path === '' ? pathname === base : pathname.startsWith(href);
  };
}

/** Полная навигация проекта */
export function ProjectNav({ projectId }: { projectId: string }) {
  const base = `/projects/${projectId}`;
  const isActive = useProjectActive(base);

  return (
    <nav className="py-2 px-2 space-y-3">
      <Link
        href="/projects"
        className="flex items-center gap-2 px-3 py-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
      >
        <ArrowLeft className="h-3.5 w-3.5" />
        Все проекты
      </Link>

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
                key={item.path}
                href={`${base}${item.path}`}
                className={cn(
                  'flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors',
                  isActive(item.path)
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

/** Свёрнутая навигация проекта (только иконки) */
export function ProjectNavCollapsed({ projectId }: { projectId: string }) {
  const base = `/projects/${projectId}`;
  const isActive = useProjectActive(base);
  const allItems = sections.flatMap((s) => s.items);

  return (
    <nav className="py-2 px-1.5 space-y-1">
      <Link
        href="/projects"
        title="Все проекты"
        className="flex items-center justify-center rounded-lg p-2 text-muted-foreground hover:bg-di-surface-high transition-colors mb-2"
      >
        <ArrowLeft className="h-4 w-4" />
      </Link>
      {allItems.map((item) => (
        <Link
          key={item.path}
          href={`${base}${item.path}`}
          title={item.label}
          className={cn(
            'flex items-center justify-center rounded-lg p-2 transition-colors',
            isActive(item.path)
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
