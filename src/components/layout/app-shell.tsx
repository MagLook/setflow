'use client';

import { useState, type ReactNode } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface AppShellProps {
  topBar: ReactNode;
  nav: ReactNode;
  leftPanel?: ReactNode;
  center: ReactNode;
  centerTabs?: ReactNode;
  rightPanel?: ReactNode;
}

export function AppShell({
  topBar,
  nav,
  leftPanel,
  center,
  centerTabs,
  rightPanel,
}: AppShellProps) {
  const [navCollapsed, setNavCollapsed] = useState(false);
  const [leftCollapsed, setLeftCollapsed] = useState(false);
  const [rightCollapsed, setRightCollapsed] = useState(false);

  return (
    <div className="flex flex-col h-screen overflow-hidden">
      {/* Top bar */}
      <header className="h-12 flex-shrink-0 bg-topbar text-topbar-foreground border-b flex items-center px-4">
        {topBar}
      </header>

      {/* Main body */}
      <div className="flex flex-1 overflow-hidden">
        {/* Zone 1: Nav sidebar */}
        <aside
          className={cn(
            'flex-shrink-0 bg-sidebar text-sidebar-foreground border-r transition-all duration-200 overflow-y-auto relative',
            navCollapsed ? 'w-12' : 'w-56',
          )}
        >
          <div className={cn('h-full', navCollapsed && 'overflow-hidden')}>
            {nav}
          </div>
          <button
            onClick={() => setNavCollapsed(!navCollapsed)}
            className="absolute top-2 -right-3 z-10 h-6 w-6 rounded-full bg-border flex items-center justify-center hover:bg-accent transition-colors"
          >
            {navCollapsed ? (
              <ChevronRight className="h-3 w-3" />
            ) : (
              <ChevronLeft className="h-3 w-3" />
            )}
          </button>
        </aside>

        {/* Zone 2: Left panel */}
        {leftPanel && (
          <aside
            className={cn(
              'flex-shrink-0 bg-panel text-panel-foreground border-r transition-all duration-200 overflow-y-auto relative',
              leftCollapsed ? 'w-0' : 'w-64',
            )}
          >
            <div className={cn('h-full min-w-64', leftCollapsed && 'hidden')}>
              {leftPanel}
            </div>
            <button
              onClick={() => setLeftCollapsed(!leftCollapsed)}
              className="absolute top-2 -right-3 z-10 h-6 w-6 rounded-full bg-border flex items-center justify-center hover:bg-accent transition-colors"
            >
              {leftCollapsed ? (
                <ChevronRight className="h-3 w-3" />
              ) : (
                <ChevronLeft className="h-3 w-3" />
              )}
            </button>
          </aside>
        )}

        {/* Zone 3: Center (main work area) */}
        <div className="flex-1 flex flex-col overflow-hidden min-w-0">
          {/* Center tabs/toolbar */}
          {centerTabs && (
            <div className="h-10 flex-shrink-0 bg-panel border-b flex items-center px-4 gap-1 overflow-x-auto">
              {centerTabs}
            </div>
          )}

          {/* Center content */}
          <div className="flex-1 overflow-auto">{center}</div>
        </div>

        {/* Zone 4: Right panel */}
        {rightPanel && (
          <aside
            className={cn(
              'flex-shrink-0 bg-panel text-panel-foreground border-l transition-all duration-200 overflow-y-auto relative',
              rightCollapsed ? 'w-0' : 'w-80',
            )}
          >
            <button
              onClick={() => setRightCollapsed(!rightCollapsed)}
              className="absolute top-2 -left-3 z-10 h-6 w-6 rounded-full bg-border flex items-center justify-center hover:bg-accent transition-colors"
            >
              {rightCollapsed ? (
                <ChevronLeft className="h-3 w-3" />
              ) : (
                <ChevronRight className="h-3 w-3" />
              )}
            </button>
            <div className={cn('h-full min-w-80', rightCollapsed && 'hidden')}>
              {rightPanel}
            </div>
          </aside>
        )}
      </div>
    </div>
  );
}
