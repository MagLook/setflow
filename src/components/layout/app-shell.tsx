'use client';

import { useState, createContext, useContext, type ReactNode } from 'react';
import { ChevronsLeft, ChevronsRight, PanelLeftClose, PanelLeftOpen, PanelRightClose, PanelRightOpen } from 'lucide-react';
import { cn } from '@/lib/utils';

// Context для доступа к collapsed state из дочерних компонентов
interface ShellContextType {
  navCollapsed: boolean;
  leftCollapsed: boolean;
  rightCollapsed: boolean;
}

const ShellContext = createContext<ShellContextType>({
  navCollapsed: false,
  leftCollapsed: false,
  rightCollapsed: false,
});

export const useShellContext = () => useContext(ShellContext);

interface AppShellProps {
  topBar: ReactNode;
  nav: ReactNode;
  navCollapsedContent?: ReactNode;
  leftPanel?: ReactNode;
  leftPanelIcons?: ReactNode;
  center: ReactNode;
  centerTabs?: ReactNode;
  rightPanel?: ReactNode;
  rightPanelIcons?: ReactNode;
}

export function AppShell({
  topBar,
  nav,
  navCollapsedContent,
  leftPanel,
  leftPanelIcons,
  center,
  centerTabs,
  rightPanel,
  rightPanelIcons,
}: AppShellProps) {
  const [navCollapsed, setNavCollapsed] = useState(false);
  const [leftCollapsed, setLeftCollapsed] = useState(false);
  const [rightCollapsed, setRightCollapsed] = useState(false);

  return (
    <ShellContext.Provider value={{ navCollapsed, leftCollapsed, rightCollapsed }}>
      <div className="flex flex-col h-screen overflow-hidden bg-di-bg">
        {/* Top bar */}
        <header className="h-12 flex-shrink-0 bg-di-surface-lowest border-b border-di-outline-variant/20 flex items-center px-4">
          {topBar}
        </header>

        {/* Main body */}
        <div className="flex flex-1 overflow-hidden">

          {/* ═══ Zone 1: Nav sidebar ═══ */}
          <aside
            className={cn(
              'flex-shrink-0 bg-di-surface-lowest border-r border-di-outline-variant/15 transition-all duration-200 flex flex-col',
              navCollapsed ? 'w-12' : 'w-56',
            )}
          >
            <div className="flex-1 overflow-y-auto overflow-x-hidden">
              {navCollapsed ? navCollapsedContent : nav}
            </div>
            <button
              onClick={() => setNavCollapsed(!navCollapsed)}
              className="flex-shrink-0 h-10 flex items-center justify-center border-t border-di-outline-variant/15 text-muted-foreground hover:bg-di-surface-high hover:text-foreground transition-colors"
              title={navCollapsed ? 'Развернуть меню' : 'Свернуть меню'}
            >
              {navCollapsed ? (
                <ChevronsRight className="h-4 w-4" />
              ) : (
                <ChevronsLeft className="h-4 w-4" />
              )}
            </button>
          </aside>

          {/* ═══ Zone 2: Left panel ═══ */}
          {(leftPanel || leftPanelIcons) && (
            <aside
              className={cn(
                'flex-shrink-0 bg-di-panel border-r border-di-outline-variant/15 transition-all duration-200 flex flex-col',
                leftCollapsed ? 'w-12' : 'w-64',
              )}
            >
              <div className="flex-1 overflow-y-auto overflow-x-hidden">
                {leftCollapsed ? leftPanelIcons : leftPanel}
              </div>
              <button
                onClick={() => setLeftCollapsed(!leftCollapsed)}
                className="flex-shrink-0 h-10 flex items-center justify-center border-t border-di-outline-variant/15 text-muted-foreground hover:bg-di-surface-high hover:text-foreground transition-colors"
                title={leftCollapsed ? 'Развернуть панель' : 'Свернуть панель'}
              >
                {leftCollapsed ? (
                  <PanelLeftOpen className="h-4 w-4" />
                ) : (
                  <PanelLeftClose className="h-4 w-4" />
                )}
              </button>
            </aside>
          )}

          {/* ═══ Zone 3: Center (main) ═══ */}
          <div className="flex-1 flex flex-col overflow-hidden min-w-0">
            {centerTabs && (
              <div className="h-10 flex-shrink-0 bg-di-surface border-b border-di-outline-variant/15 flex items-center px-4 gap-1 overflow-x-auto">
                {centerTabs}
              </div>
            )}
            <div className="flex-1 overflow-auto bg-di-bg">{center}</div>
          </div>

          {/* ═══ Zone 4: Right panel ═══ */}
          {(rightPanel || rightPanelIcons) && (
            <aside
              className={cn(
                'flex-shrink-0 bg-di-panel border-l border-di-outline-variant/15 transition-all duration-200 flex flex-col',
                rightCollapsed ? 'w-12' : 'w-80',
              )}
            >
              <div className="flex-1 overflow-y-auto overflow-x-hidden">
                {rightCollapsed ? rightPanelIcons : rightPanel}
              </div>
              <button
                onClick={() => setRightCollapsed(!rightCollapsed)}
                className="flex-shrink-0 h-10 flex items-center justify-center border-t border-di-outline-variant/15 text-muted-foreground hover:bg-di-surface-high hover:text-foreground transition-colors"
                title={rightCollapsed ? 'Развернуть панель' : 'Свернуть панель'}
              >
                {rightCollapsed ? (
                  <PanelRightOpen className="h-4 w-4" />
                ) : (
                  <PanelRightClose className="h-4 w-4" />
                )}
              </button>
            </aside>
          )}

        </div>
      </div>
    </ShellContext.Provider>
  );
}
