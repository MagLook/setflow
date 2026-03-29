'use client';

import { CalendarDays, MapPin, Users } from 'lucide-react';

export function ProjectLeftPanel({ projectId }: { projectId: string }) {
  return (
    <div className="p-4 space-y-6">
      <div>
        <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
          Ближайшие съёмки
        </h3>
        <div className="space-y-2">
          <div className="rounded-lg bg-accent/50 p-3 text-sm">
            <div className="flex items-center gap-2 text-muted-foreground mb-1">
              <CalendarDays className="h-3.5 w-3.5" />
              <span className="text-xs">Нет запланированных</span>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
          Команда проекта
        </h3>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Users className="h-3.5 w-3.5" />
          <span>0 человек назначено</span>
        </div>
      </div>

      <div>
        <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
          Локации
        </h3>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <MapPin className="h-3.5 w-3.5" />
          <span>Не добавлены</span>
        </div>
      </div>
    </div>
  );
}
