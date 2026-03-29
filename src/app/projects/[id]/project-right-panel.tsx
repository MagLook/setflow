'use client';

import { BrainCircuit, Clock, FileText, MessageSquare, Zap, Lightbulb, Info, Bot } from 'lucide-react';
import { DEMO_AI_INSIGHTS } from '@/shared/demo-data';

const ICON_MAP: Record<string, typeof Zap> = {
  alert: Zap,
  suggestion: Lightbulb,
  info: Info,
  auto: Bot,
};

const COLOR_MAP: Record<string, string> = {
  alert: 'text-red-500 bg-red-500/10',
  suggestion: 'text-blue-500 bg-blue-500/10',
  info: 'text-di-on-surface-variant bg-di-surface-high',
  auto: 'text-purple-500 bg-purple-500/10',
};

/** Развёрнутая правая панель — AI-ассистент */
export function ProjectRightPanel({ projectId }: { projectId: string }) {
  return (
    <div className="p-4 space-y-5">
      {/* Header */}
      <div className="flex items-center gap-2">
        <div className="w-7 h-7 rounded-lg bg-blue-600 flex items-center justify-center">
          <BrainCircuit className="h-4 w-4 text-white" />
        </div>
        <div>
          <span className="text-sm font-semibold text-foreground">SetFlow AI</span>
          <span className="flex items-center gap-1 text-[10px] text-green-600 ml-2">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
            Активен
          </span>
        </div>
      </div>

      {/* Insights */}
      <div className="space-y-2">
        {DEMO_AI_INSIGHTS.map((ins) => {
          const Icon = ICON_MAP[ins.type] || Info;
          const colors = COLOR_MAP[ins.type] || COLOR_MAP.info;
          return (
            <div key={ins.id} className="bg-di-surface-mid rounded-xl border border-transparent p-3">
              <div className="flex items-start gap-2.5">
                <div className={`w-6 h-6 rounded-md flex items-center justify-center flex-shrink-0 mt-0.5 ${colors}`}>
                  <Icon className="h-3.5 w-3.5" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-foreground leading-relaxed">{ins.text}</p>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-[10px] text-muted-foreground">{ins.time}</span>
                    {ins.action && (
                      <button className="text-[10px] font-semibold text-blue-500 hover:text-blue-400 transition-colors">
                        {ins.action}
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Quick AI chat */}
      <div>
        <div className="border border-di-outline-variant/20 bg-di-surface-lowest rounded-lg px-3 py-2 flex items-center gap-2">
          <BrainCircuit className="h-3.5 w-3.5 text-blue-500 flex-shrink-0" />
          <input
            type="text"
            placeholder="Спросить AI..."
            className="flex-1 bg-transparent text-xs text-foreground placeholder:text-muted-foreground outline-none"
            readOnly
          />
        </div>
      </div>
    </div>
  );
}

/** Свёрнутая правая панель — иконки AI */
export function ProjectRightPanelIcons() {
  return (
    <div className="py-3 px-1.5 space-y-1">
      {[
        { icon: BrainCircuit, title: 'AI-ассистент', hasAlert: true },
        { icon: Clock, title: 'Активность' },
        { icon: FileText, title: 'Заметки' },
        { icon: MessageSquare, title: 'Комментарии' },
      ].map((item) => (
        <button
          key={item.title}
          title={item.title}
          className="flex items-center justify-center rounded-lg p-2 text-blue-500 hover:bg-di-surface-high transition-colors w-full relative"
        >
          <item.icon className="h-4 w-4" />
          {item.hasAlert && (
            <span className="absolute top-0.5 right-0.5 w-2 h-2 bg-red-500 rounded-full" />
          )}
        </button>
      ))}
    </div>
  );
}
