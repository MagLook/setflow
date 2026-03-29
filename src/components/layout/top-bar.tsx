'use client';

import { Film, ChevronDown, User } from 'lucide-react';

export function TopBar() {
  return (
    <>
      {/* Logo + app name */}
      <div className="flex items-center gap-3 mr-6">
        <div className="h-7 w-7 rounded-lg bg-blue-600 flex items-center justify-center">
          <Film className="h-4 w-4 text-white" />
        </div>
        <div className="flex items-baseline gap-2">
          <span className="font-headline font-bold text-sm text-foreground">SetFlow</span>
          <span className="text-[10px] text-muted-foreground">v0.1.0</span>
        </div>
      </div>

      {/* Center: Project selector */}
      <div className="flex-1 flex items-center justify-center gap-3">
        <button className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-di-surface-mid text-di-on-surface-variant text-sm border border-di-outline-variant/20 hover:border-di-primary/30 transition-all">
          <Film className="h-3.5 w-3.5 text-blue-500" />
          Все проекты
          <ChevronDown className="h-3.5 w-3.5" />
        </button>
      </div>

      {/* Right: User */}
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2">
          <div className="h-7 w-7 rounded-full bg-di-surface-high flex items-center justify-center">
            <User className="h-4 w-4 text-di-on-surface-variant" />
          </div>
          <span className="text-sm text-di-on-surface-variant hidden md:block">Руководитель</span>
        </div>
      </div>
    </>
  );
}
