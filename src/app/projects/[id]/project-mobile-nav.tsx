'use client';

import { LayoutDashboard, Calendar, Radio, ClipboardList, BrainCircuit } from 'lucide-react';
import { MobileBottomNav } from '@/components/layout/mobile-nav';

export function ProjectMobileNav({ projectId }: { projectId: string }) {
  const base = `/projects/${projectId}`;
  return (
    <MobileBottomNav
      items={[
        { href: base, icon: LayoutDashboard, label: 'Обзор' },
        { href: `${base}/schedule`, icon: Calendar, label: 'Расписание' },
        { href: `${base}/onset`, icon: Radio, label: 'Площадка' },
        { href: `${base}/tasks`, icon: ClipboardList, label: 'Задачи' },
        { href: `${base}/ai`, icon: BrainCircuit, label: 'AI' },
      ]}
    />
  );
}
