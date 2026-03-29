'use client';

import { Clock, FileText, MessageSquare } from 'lucide-react';

export function ProjectRightPanel({ projectId }: { projectId: string }) {
  return (
    <div className="p-4 space-y-6">
      <div>
        <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-3">
          Активность
        </p>
        <div className="flex items-start gap-2 text-sm">
          <Clock className="h-4 w-4 mt-0.5 text-blue-500 flex-shrink-0" />
          <p className="text-di-on-surface-variant text-xs">Проект создан</p>
        </div>
      </div>

      <div>
        <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-3">
          Заметки
        </p>
        <div className="flex items-center gap-2 text-di-on-surface-variant text-sm">
          <FileText className="h-4 w-4 text-blue-500" />
          <span>Нет заметок</span>
        </div>
      </div>

      <div>
        <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-3">
          Комментарии
        </p>
        <div className="flex items-center gap-2 text-di-on-surface-variant text-sm">
          <MessageSquare className="h-4 w-4 text-blue-500" />
          <span>Нет комментариев</span>
        </div>
      </div>
    </div>
  );
}
