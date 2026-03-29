'use client';

import { CalendarDays, MapPin, Users, Clock } from 'lucide-react';
import { DEMO_SHOOT_DAYS, DEMO_CREW } from '@/shared/demo-data';

export function ProjectLeftPanel({ projectId }: { projectId: string }) {
  return (
    <div className="p-4 space-y-6">
      <div>
        <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-3">
          Съёмочные дни
        </p>
        <div className="space-y-2">
          {DEMO_SHOOT_DAYS.map((day) => (
            <div key={day.id} className="bg-di-surface-mid rounded-xl border border-transparent hover:border-di-primary/20 transition-all p-3 cursor-pointer">
              <div className="flex items-center gap-2 mb-1">
                <CalendarDays className="h-3.5 w-3.5 text-blue-500" />
                <span className="text-xs font-semibold text-foreground">{day.title}</span>
              </div>
              <div className="flex items-center gap-2 text-[10px] text-muted-foreground ml-5">
                <Clock className="h-3 w-3" />
                {day.callTime}–{day.wrapTime}
              </div>
              <div className="text-[10px] text-muted-foreground ml-5 mt-0.5">
                {day.scenes.length} сцен
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-3">
          Команда ({DEMO_CREW.length})
        </p>
        <div className="space-y-1.5">
          {DEMO_CREW.map((member) => (
            <div key={member.id} className="flex items-center gap-2 text-sm">
              <div className="w-6 h-6 rounded-full bg-di-surface-high flex items-center justify-center text-[10px] font-bold text-di-on-surface-variant">
                {member.name.split(' ').map(n => n[0]).join('')}
              </div>
              <div className="min-w-0">
                <span className="text-xs text-foreground truncate block">{member.name}</span>
                <span className="text-[10px] text-muted-foreground">{member.roleLabel}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-3">
          Локации
        </p>
        <div className="space-y-1.5">
          {DEMO_SHOOT_DAYS.map((day) => (
            <div key={day.id} className="flex items-start gap-2 text-sm">
              <MapPin className="h-3.5 w-3.5 text-blue-500 mt-0.5 flex-shrink-0" />
              <span className="text-xs text-di-on-surface-variant">{day.location}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function ProjectLeftPanelIcons() {
  return (
    <div className="py-3 px-1.5 space-y-1">
      {[
        { icon: CalendarDays, title: 'Съёмочные дни', count: DEMO_SHOOT_DAYS.length },
        { icon: Users, title: 'Команда', count: DEMO_CREW.length },
        { icon: MapPin, title: 'Локации', count: 3 },
      ].map((item) => (
        <button
          key={item.title}
          title={`${item.title} (${item.count})`}
          className="flex items-center justify-center rounded-lg p-2 text-blue-500 hover:bg-di-surface-high transition-colors w-full relative"
        >
          <item.icon className="h-4 w-4" />
          <span className="absolute -top-0.5 -right-0.5 text-[8px] bg-blue-600 text-white rounded-full w-3.5 h-3.5 flex items-center justify-center font-bold">
            {item.count}
          </span>
        </button>
      ))}
    </div>
  );
}
