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

const sections = [
  {
    items: [
      { path: '', icon: LayoutDashboard, label: 'Обзор' },
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
    items: [
      { path: '/onset', icon: Radio, label: 'На площадке' },
    ],
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
      { path: '/settings', icon: Settings, label: 'Настройки' },
    ],
  },
];

export function ProjectNav({ projectId }: { projectId: string }) {
  const pathname = usePathname();
  const base = `/projects/${projectId}`;

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
            <p className="px-3 py-1 text-[10px] font-semibold text-muted-foreground tracking-wider uppercase">
              {section.title}
            </p>
          )}
          <div className="space-y-0.5">
            {section.items.map((item) => {
              const href = `${base}${item.path}`;
              const isActive = item.path === ''
                ? pathname === base
                : pathname.startsWith(href);
              return (
                <Link
                  key={href}
                  href={href}
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
