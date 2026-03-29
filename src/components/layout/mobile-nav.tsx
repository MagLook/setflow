'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, FolderOpen, Users, Package, Settings } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { LucideIcon } from 'lucide-react';

interface MobileNavItem {
  href: string;
  icon: LucideIcon;
  label: string;
}

export function MobileBottomNav({ items }: { items: MobileNavItem[] }) {
  const pathname = usePathname();

  return (
    <div className="flex">
      {items.map((item) => {
        const isActive = item.href === '/' ? pathname === '/' : pathname.startsWith(item.href);
        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              'flex flex-1 flex-col items-center gap-0.5 py-2 text-[10px] transition-colors',
              isActive ? 'text-blue-500' : 'text-muted-foreground',
            )}
          >
            <item.icon className="h-5 w-5" />
            {item.label}
          </Link>
        );
      })}
    </div>
  );
}

export const ORG_MOBILE_ITEMS: MobileNavItem[] = [
  { href: '/', icon: LayoutDashboard, label: 'Обзор' },
  { href: '/projects', icon: FolderOpen, label: 'Проекты' },
  { href: '/crew', icon: Users, label: 'Команда' },
  { href: '/equipment', icon: Package, label: 'Обор.' },
  { href: '/settings', icon: Settings, label: 'Ещё' },
];
