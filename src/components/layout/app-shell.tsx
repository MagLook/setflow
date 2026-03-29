'use client';

import { useState, type ReactNode } from 'react';
import { ChevronsLeft, ChevronsRight } from 'lucide-react';
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
    <div className="flex flex-col h-screen overflow-hidden bg-di-bg">
      {/* Top bar */}
      <header className="h-12 flex-shrink-0 bg-di-surface-lowest border-b border-di-outline-variant/20 flex items-center px-4">
        {topBar}
      </header>

      {/* Main body */}
      <div className="flex flex-1 overflow-hidden">
        {/* Zone 1: Nav sidebar */}
        <aside
          className={cn(
            'flex-shrink-0 bg-di-surface-lowest transition-all duration-200 overflow-y-auto overflow-x-hidden',
            navCollapsed ? 'w-12' : 'w-56',
          )}
        >
          {!navCollapsed && <div className="h-full">{nav}</div>}
          <button
            onClick={() => setNavCollapsed(!navCollapsed)}
            className="absolute bottom-3 left-2 z-10 p-1 rounded-md text-muted-foreground hover:bg-di-surface-high transition-colors"
          >
            {navCollapsed ? (
              <ChevronsRight className="h-4 w-4" />
            ) : (
              <ChevronsLeft className="h-4 w-4" />
            )}
          </button>
        </aside>

        {/* Zone 2: Left panel */}
        {leftPanel && !leftCollapsed && (
          <aside className="w-64 flex-shrink-0 bg-di-panel border-r border-di-outline-variant/15 overflow-y-auto">
            {leftPanel}
          </aside>
        )}

        {/* Zone 3: Center (main work area) */}
        <div className="flex-1 flex flex-col overflow-hidden min-w-0">
          {/* Center tabs/toolbar */}
          {centerTabs && (
            <div className="h-10 flex-shrink-0 bg-di-surface border-b border-di-outline-variant/15 flex items-center px-4 gap-1 overflow-x-auto">
              {centerTabs}
            </div>
          )}

          {/* Center content */}
          <div className="flex-1 overflow-auto bg-di-bg">{center}</div>
        </div>

        {/* Zone 4: Right panel */}
        {rightPanel && !rightCollapsed && (
          <aside className="w-80 flex-shrink-0 bg-di-panel border-l border-di-outline-variant/15 overflow-y-auto">
            {rightPanel}
          </aside>
        )}
      </div>
    </div>
  );
}
