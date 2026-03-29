'use client';

import {
  LayoutDashboard,
  Calendar,
  Map,
  Radio,
  BookOpen,
  Image,
} from 'lucide-react';
import { CenterTabs } from '@/components/layout/center-tabs';

export function ProjectTabs({ projectId }: { projectId: string }) {
  const base = `/projects/${projectId}`;

  const tabs = [
    { href: base, icon: LayoutDashboard, label: 'Обзор' },
    { href: `${base}/schedule`, icon: Calendar, label: 'Расписание' },
    { href: `${base}/setplan`, icon: Map, label: 'Площадка' },
    { href: `${base}/onset`, icon: Radio, label: 'На площадке' },
    { href: `${base}/knowledge`, icon: BookOpen, label: 'Знания' },
    { href: `${base}/media`, icon: Image, label: 'Медиа' },
  ];

  return <CenterTabs tabs={tabs} />;
}
