'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import type { LucideIcon } from 'lucide-react';

export interface TabItem {
  href: string;
  icon?: LucideIcon;
  label: string;
}

interface CenterTabsProps {
  tabs: TabItem[];
  rightSlot?: React.ReactNode;
}

export function CenterTabs({ tabs, rightSlot }: CenterTabsProps) {
  const pathname = usePathname();

  return (
    <>
      <div className="flex items-center gap-0.5 flex-1">
        {tabs.map((tab) => {
          const isActive = tab.href === pathname;
          return (
            <Link
              key={tab.href}
              href={tab.href}
              className={cn(
                'flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-colors whitespace-nowrap',
                isActive
                  ? 'bg-blue-600/15 text-blue-500'
                  : 'text-di-on-surface-variant hover:text-di-on-surface hover:bg-di-surface-high',
              )}
            >
              {tab.icon && <tab.icon className="h-3.5 w-3.5" />}
              {tab.label}
            </Link>
          );
        })}
      </div>
      {rightSlot && <div className="flex items-center gap-2">{rightSlot}</div>}
    </>
  );
}
