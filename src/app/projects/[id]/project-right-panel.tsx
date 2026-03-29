'use client';

import { Clock, FileText, MessageSquare } from 'lucide-react';

export function ProjectRightPanel({ projectId }: { projectId: string }) {
  return (
    <div className="p-4 space-y-6">
      <div>
        <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
          Активность
        </h3>
        <div className="space-y-3">
          <div className="flex items-start gap-2 text-sm">
            <Clock className="h-3.5 w-3.5 mt-0.5 text-muted-foreground flex-shrink-0" />
            <div>
              <p className="text-muted-foreground text-xs">Проект создан</p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
          Заметки
        </h3>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <FileText className="h-3.5 w-3.5" />
          <span>Нет заметок</span>
        </div>
      </div>

      <div>
        <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
          Комментарии
        </h3>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <MessageSquare className="h-3.5 w-3.5" />
          <span>Нет комментариев</span>
        </div>
      </div>
    </div>
  );
}
