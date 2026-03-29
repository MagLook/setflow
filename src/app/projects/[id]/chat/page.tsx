'use client';

import { DEMO_CHAT_CHANNELS, DEMO_CHAT_MESSAGES } from '@/shared/demo-data';
import { Hash, Send, BrainCircuit } from 'lucide-react';

export default function ProjectChatPage() {
  const activeChannel = DEMO_CHAT_CHANNELS[0];
  const messages = DEMO_CHAT_MESSAGES.filter((m) => m.channel === activeChannel.id);

  return (
    <div className="flex h-[calc(100vh-7.5rem)] -mx-4 -my-4 md:-mx-6 md:-my-6">
      {/* Каналы — скрыты на мобильных */}
      <div className="hidden sm:block w-56 flex-shrink-0 border-r border-di-outline-variant/15 bg-di-panel p-3">
        <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest px-2 mb-2">
          Каналы
        </p>
        {DEMO_CHAT_CHANNELS.map((ch) => (
          <button
            key={ch.id}
            className={`w-full flex items-center gap-2 rounded-lg px-2 py-1.5 text-sm transition-colors ${
              ch.id === activeChannel.id
                ? 'bg-blue-600 text-white'
                : 'text-di-on-surface-variant hover:bg-di-surface-high'
            }`}
          >
            <Hash className="h-3.5 w-3.5 flex-shrink-0" />
            <span className="truncate">{ch.name}</span>
            {ch.unread > 0 && (
              <span className="ml-auto bg-blue-600 text-white text-[9px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
                {ch.unread}
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Сообщения */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Header */}
        <div className="h-10 flex items-center px-4 border-b border-di-outline-variant/15 bg-di-surface flex-shrink-0">
          <Hash className="h-4 w-4 text-muted-foreground mr-2" />
          <span className="font-semibold text-foreground text-sm">{activeChannel.name}</span>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((msg) => (
            <div key={msg.id} className={`flex items-start gap-3 ${(msg as any).isAI ? 'bg-blue-600/5 -mx-4 px-4 py-2 rounded-lg' : ''}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-bold flex-shrink-0 ${
                (msg as any).isAI
                  ? 'bg-blue-600 text-white'
                  : 'bg-di-surface-high text-di-on-surface-variant'
              }`}>
                {(msg as any).isAI ? <BrainCircuit className="h-4 w-4" /> : msg.avatar}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-baseline gap-2 mb-0.5">
                  <span className={`text-sm font-semibold ${(msg as any).isAI ? 'text-blue-500' : 'text-foreground'}`}>
                    {msg.author}
                  </span>
                  <span className="text-[10px] text-muted-foreground">{msg.time}</span>
                </div>
                <p className="text-sm text-di-on-surface-variant whitespace-pre-wrap">{msg.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Input */}
        <div className="p-3 border-t border-di-outline-variant/15 flex-shrink-0">
          <div className="flex items-center gap-2 border border-di-outline-variant/20 bg-di-surface-lowest rounded-lg px-3 py-2">
            <input
              type="text"
              placeholder="Написать сообщение... (@setflow для AI)"
              className="flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none"
              readOnly
            />
            <button className="text-blue-500 hover:text-blue-400 transition-colors">
              <Send className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
