'use client';

import { useState, useCallback, createContext, useContext, type ReactNode } from 'react';
import {
  ChevronsLeft,
  ChevronsRight,
  PanelLeftClose,
  PanelLeftOpen,
  PanelRightClose,
  PanelRightOpen,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { ResizeHandle } from './resize-handle';

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
  leftPanelHeader?: ReactNode;
  center: ReactNode;
  centerTabs?: ReactNode;
  rightPanel?: ReactNode;
  rightPanelIcons?: ReactNode;
  rightPanelHeader?: ReactNode;
}

const NAV_MIN = 48;
const NAV_MAX = 280;
const NAV_DEFAULT = 224;
const LEFT_MIN = 48;
const LEFT_MAX = 400;
const LEFT_DEFAULT = 256;
const RIGHT_MIN = 48;
const RIGHT_MAX = 480;
const RIGHT_DEFAULT = 320;

function clamp(v: number, min: number, max: number) {
  return Math.max(min, Math.min(max, v));
}

export function AppShell({
  topBar,
  nav,
  navCollapsedContent,
  leftPanel,
  leftPanelIcons,
  leftPanelHeader,
  center,
  centerTabs,
  rightPanel,
  rightPanelIcons,
  rightPanelHeader,
}: AppShellProps) {
  const [navCollapsed, setNavCollapsed] = useState(false);
  const [leftCollapsed, setLeftCollapsed] = useState(false);
  const [rightCollapsed, setRightCollapsed] = useState(false);
  const [navWidth, setNavWidth] = useState(NAV_DEFAULT);
  const [leftWidth, setLeftWidth] = useState(LEFT_DEFAULT);
  const [rightWidth, setRightWidth] = useState(RIGHT_DEFAULT);

  const hasLeft = !!(leftPanel || leftPanelIcons);
  const hasRight = !!(rightPanel || rightPanelIcons);
  const hasToolbar = !!(centerTabs || (hasLeft && leftPanelHeader) || (hasRight && rightPanelHeader));

  const handleNavResize = useCallback((delta: number) => {
    setNavWidth((w) => clamp(w + delta, NAV_MIN, NAV_MAX));
  }, []);

  const handleLeftResize = useCallback((delta: number) => {
    setLeftWidth((w) => clamp(w + delta, LEFT_MIN, LEFT_MAX));
  }, []);

  const handleRightResize = useCallback((delta: number) => {
    setRightWidth((w) => clamp(w + delta, RIGHT_MIN, RIGHT_MAX));
  }, []);

  const activeNavW = navCollapsed ? NAV_MIN : navWidth;
  const activeLeftW = leftCollapsed ? LEFT_MIN : leftWidth;
  const activeRightW = rightCollapsed ? RIGHT_MIN : rightWidth;

  return (
    <ShellContext.Provider value={{ navCollapsed, leftCollapsed, rightCollapsed }}>
      <div className="flex flex-col h-screen overflow-hidden bg-di-bg">
        {/* ═══ Top bar ═══ */}
        <header className="h-12 flex-shrink-0 bg-di-surface-lowest border-b border-di-outline-variant/20 flex items-center px-4">
          {topBar}
        </header>

        {/* ═══ Main body ═══ */}
        <div className="flex flex-1 overflow-hidden">

          {/* Zone 1: Nav sidebar */}
          <div
            className="flex-shrink-0 bg-di-surface-lowest transition-[width] duration-200 flex flex-col"
            style={{ width: activeNavW }}
          >
            <div className="flex-1 overflow-y-auto overflow-x-hidden">
              {navCollapsed ? navCollapsedContent : nav}
            </div>
            <button
              onClick={() => setNavCollapsed(!navCollapsed)}
              className="flex-shrink-0 h-10 flex items-center justify-center border-t border-di-outline-variant/15 text-muted-foreground hover:bg-di-surface-high hover:text-foreground transition-colors"
              title={navCollapsed ? 'Развернуть меню' : 'Свернуть меню'}
            >
              {navCollapsed ? <ChevronsRight className="h-4 w-4" /> : <ChevronsLeft className="h-4 w-4" />}
            </button>
          </div>

          {/* Resize: nav ↔ content */}
          <ResizeHandle side="left" onResize={handleNavResize} />

          {/* Zones 2+3+4 */}
          <div className="flex-1 flex flex-col overflow-hidden min-w-0">

            {/* ═══ Toolbar row ═══ */}
            {hasToolbar && (
              <div className="h-10 flex-shrink-0 bg-di-surface border-b border-di-outline-variant/15 flex items-stretch">

                {/* Left panel header */}
                {hasLeft && (
                  <div
                    className="flex-shrink-0 flex items-center border-r border-di-outline-variant/15 transition-[width] duration-200 overflow-hidden"
                    style={{ width: activeLeftW }}
                  >
                    <div className={cn('flex items-center w-full', leftCollapsed ? 'justify-center' : 'px-4')}>
                      {!leftCollapsed && leftPanelHeader}
                      <button
                        onClick={() => setLeftCollapsed(!leftCollapsed)}
                        className={cn(
                          'text-muted-foreground hover:text-foreground transition-colors flex-shrink-0',
                          leftCollapsed ? '' : 'ml-auto',
                        )}
                        title={leftCollapsed ? 'Развернуть панель' : 'Свернуть панель'}
                      >
                        {leftCollapsed ? <PanelLeftOpen className="h-3.5 w-3.5" /> : <PanelLeftClose className="h-3.5 w-3.5" />}
                      </button>
                    </div>
                  </div>
                )}

                {/* Center tabs */}
                <div className="flex-1 flex items-center px-4 gap-1 overflow-x-auto min-w-0">
                  {centerTabs}
                </div>

                {/* Right panel header */}
                {hasRight && (
                  <div
                    className="flex-shrink-0 flex items-center border-l border-di-outline-variant/15 transition-[width] duration-200 overflow-hidden"
                    style={{ width: activeRightW }}
                  >
                    <div className={cn('flex items-center w-full', rightCollapsed ? 'justify-center' : 'px-4')}>
                      <button
                        onClick={() => setRightCollapsed(!rightCollapsed)}
                        className={cn(
                          'text-muted-foreground hover:text-foreground transition-colors flex-shrink-0',
                          rightCollapsed ? '' : 'mr-auto',
                        )}
                        title={rightCollapsed ? 'Развернуть панель' : 'Свернуть панель'}
                      >
                        {rightCollapsed ? <PanelRightOpen className="h-3.5 w-3.5" /> : <PanelRightClose className="h-3.5 w-3.5" />}
                      </button>
                      {!rightCollapsed && rightPanelHeader}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* ═══ Content row ═══ */}
            <div className="flex flex-1 overflow-hidden">

              {/* Zone 2: Left panel */}
              {hasLeft && (
                <>
                  <aside
                    className="flex-shrink-0 bg-di-panel transition-[width] duration-200 overflow-y-auto overflow-x-hidden"
                    style={{ width: activeLeftW }}
                  >
                    {leftCollapsed ? leftPanelIcons : leftPanel}
                  </aside>
                  <ResizeHandle side="left" onResize={handleLeftResize} />
                </>
              )}

              {/* Zone 3: Center */}
              <div className="flex-1 overflow-auto bg-di-bg min-w-0">
                {center}
              </div>

              {/* Zone 4: Right panel */}
              {hasRight && (
                <>
                  <ResizeHandle side="right" onResize={handleRightResize} />
                  <aside
                    className="flex-shrink-0 bg-di-panel transition-[width] duration-200 overflow-y-auto overflow-x-hidden"
                    style={{ width: activeRightW }}
                  >
                    {rightCollapsed ? rightPanelIcons : rightPanel}
                  </aside>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </ShellContext.Provider>
  );
}
