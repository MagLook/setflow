'use client';

import { Film, ChevronDown, User } from 'lucide-react';

export function TopBar() {
  return (
    <>
      {/* Logo + app name */}
      <div className="flex items-center gap-3 mr-6">
        <div className="h-7 w-7 rounded-lg bg-primary flex items-center justify-center">
          <Film className="h-4 w-4 text-primary-foreground" />
        </div>
        <div>
          <span className="font-semibold text-sm">SetFlow</span>
          <span className="text-[10px] text-muted-foreground ml-2">v0.1.0</span>
        </div>
      </div>

      {/* Center: Project selector + filters */}
      <div className="flex-1 flex items-center justify-center gap-3">
        <button className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent text-accent-foreground text-sm hover:bg-accent/80 transition-colors">
          <Film className="h-3.5 w-3.5" />
          Все проекты
          <ChevronDown className="h-3.5 w-3.5" />
        </button>
      </div>

      {/* Right: User */}
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2">
          <div className="h-7 w-7 rounded-full bg-accent flex items-center justify-center">
            <User className="h-4 w-4" />
          </div>
          <span className="text-sm hidden md:block">Руководитель</span>
        </div>
      </div>
    </>
  );
}
