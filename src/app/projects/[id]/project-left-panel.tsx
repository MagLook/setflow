'use client';

import { CalendarDays, MapPin, Users } from 'lucide-react';

/** Развёрнутая левая панель */
export function ProjectLeftPanel({ projectId }: { projectId: string }) {
  return (
    <div className="p-4 space-y-6">
      <div>
        <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-3">
          Ближайшие съёмки
        </p>
        <div className="bg-di-surface-mid rounded-xl border border-transparent p-3">
          <div className="flex items-center gap-2 text-di-on-surface-variant">
            <CalendarDays className="h-4 w-4 text-blue-500" />
            <span className="text-xs">Нет запланированных</span>
          </div>
        </div>
      </div>

      <div>
        <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-3">
          Команда проекта
        </p>
        <div className="flex items-center gap-2 text-di-on-surface-variant text-sm">
          <Users className="h-4 w-4 text-blue-500" />
          <span>0 человек</span>
        </div>
      </div>

      <div>
        <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-3">
          Локации
        </p>
        <div className="flex items-center gap-2 text-di-on-surface-variant text-sm">
          <MapPin className="h-4 w-4 text-blue-500" />
          <span>Не добавлены</span>
        </div>
      </div>
    </div>
  );
}

/** Свёрнутая левая панель (только иконки) */
export function ProjectLeftPanelIcons() {
  const items = [
    { icon: CalendarDays, title: 'Ближайшие съёмки' },
    { icon: Users, title: 'Команда проекта' },
    { icon: MapPin, title: 'Локации' },
  ];

  return (
    <div className="py-3 px-1.5 space-y-1">
      {items.map((item) => (
        <button
          key={item.title}
          title={item.title}
          className="flex items-center justify-center rounded-lg p-2 text-blue-500 hover:bg-di-surface-high transition-colors w-full"
        >
          <item.icon className="h-4 w-4" />
        </button>
      ))}
    </div>
  );
}
