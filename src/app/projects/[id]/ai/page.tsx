import { DEMO_AI_CONNECTIONS, AI_TYPE_ICONS } from '@/shared/demo-data';
import {
  BrainCircuit,
  Plug,
  Settings,
  Zap,
  AlertTriangle,
  ExternalLink,
  Key,
  Activity,
} from 'lucide-react';

export default function ProjectAIPage() {
  const connected = DEMO_AI_CONNECTIONS.filter((c) => c.status === 'connected').length;
  const total = DEMO_AI_CONNECTIONS.length;

  return (
    <div>
      <div className="flex items-center justify-between gap-4 mb-6">
        <div className="flex-1 min-w-0">
          <h1 className="font-headline font-bold text-foreground text-lg md:text-xl">
            AI-подключения
          </h1>
          <p className="text-[11px] text-muted-foreground">
            {connected} из {total} подключено · Модели, среды, сервисы
          </p>
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white rounded-md px-4 py-2 text-sm font-semibold transition-colors flex items-center gap-2">
          <Plug className="h-4 w-4" />
          Подключить
        </button>
      </div>

      {/* Статистика */}
      <div className="grid gap-4 md:grid-cols-4 mb-6">
        <div className="bg-di-surface-mid rounded-xl border border-transparent p-5 flex flex-col justify-between h-28">
          <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Подключено</span>
          <span className="font-headline text-4xl font-extrabold text-foreground tracking-tight">{connected}</span>
        </div>
        <div className="bg-di-surface-mid rounded-xl border border-transparent p-5 flex flex-col justify-between h-28">
          <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Запросов сегодня</span>
          <span className="font-headline text-4xl font-extrabold text-foreground tracking-tight">
            {DEMO_AI_CONNECTIONS.reduce((a, c) => a + c.requestsToday, 0)}
          </span>
        </div>
        <div className="bg-di-surface-mid rounded-xl border border-transparent p-5 flex flex-col justify-between h-28">
          <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Типов моделей</span>
          <span className="font-headline text-4xl font-extrabold text-foreground tracking-tight">
            {new Set(DEMO_AI_CONNECTIONS.map((c) => c.type)).size}
          </span>
        </div>
        <div className="bg-di-surface-mid rounded-xl border border-transparent p-5 flex flex-col justify-between h-28">
          <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">С ошибками</span>
          <span className="font-headline text-4xl font-extrabold text-foreground tracking-tight">
            {DEMO_AI_CONNECTIONS.filter((c) => c.status === 'error').length}
          </span>
        </div>
      </div>

      {/* Список подключений */}
      <div className="space-y-3">
        {DEMO_AI_CONNECTIONS.map((conn) => {
          const typeInfo = AI_TYPE_ICONS[conn.type] || { color: 'gray', label: '???' };
          const statusColor =
            conn.status === 'connected' ? 'green' :
            conn.status === 'error' ? 'red' : 'gray';

          return (
            <div
              key={conn.id}
              className="bg-di-surface-mid rounded-xl border border-transparent hover:border-di-primary/20 transition-all p-4"
            >
              <div className="flex items-start gap-4">
                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl bg-${typeInfo.color}-500/15 flex items-center justify-center flex-shrink-0`}>
                  <BrainCircuit className={`h-6 w-6 text-${typeInfo.color}-500`} />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-headline font-bold text-foreground">{conn.name}</h3>
                    <span className={`text-[10px] px-1.5 py-0.5 rounded font-bold uppercase bg-${typeInfo.color}-500/15 text-${typeInfo.color}-500`}>
                      {typeInfo.label}
                    </span>
                    <div className="flex items-center gap-1.5 ml-auto">
                      <span className={`w-2 h-2 rounded-full bg-${statusColor}-500`} />
                      <span className={`text-[10px] font-bold uppercase text-${statusColor}-600`}>
                        {conn.statusLabel}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 text-[11px] text-muted-foreground mb-3">
                    <span>{conn.provider}</span>
                    <span>·</span>
                    <span className="font-mono text-[10px]">{conn.model}</span>
                    {conn.lastUsed && (
                      <>
                        <span>·</span>
                        <span>Последнее: {new Date(conn.lastUsed).toLocaleDateString('ru-RU')}</span>
                      </>
                    )}
                    {conn.requestsToday > 0 && (
                      <>
                        <span>·</span>
                        <span className="flex items-center gap-1">
                          <Activity className="h-3 w-3" />
                          {conn.requestsToday} запросов сегодня
                        </span>
                      </>
                    )}
                  </div>

                  {/* Use cases */}
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {conn.useCases.map((uc) => (
                      <span
                        key={uc}
                        className="text-[10px] px-2 py-1 rounded-md bg-di-surface-high text-di-on-surface-variant"
                      >
                        {uc}
                      </span>
                    ))}
                  </div>

                  {/* Config preview + actions */}
                  <div className="flex items-center gap-3">
                    {conn.apiKeySet ? (
                      <span className="flex items-center gap-1 text-[10px] text-green-600">
                        <Key className="h-3 w-3" />
                        API-ключ установлен
                      </span>
                    ) : (
                      <span className="flex items-center gap-1 text-[10px] text-muted-foreground">
                        <Key className="h-3 w-3" />
                        Нет API-ключа
                      </span>
                    )}

                    {conn.status === 'error' && (
                      <span className="flex items-center gap-1 text-[10px] text-red-500">
                        <AlertTriangle className="h-3 w-3" />
                        Проверьте ключ или лимиты
                      </span>
                    )}

                    <div className="ml-auto flex items-center gap-2">
                      {conn.status === 'connected' && (
                        <button className="flex items-center gap-1.5 border border-di-outline-variant/15 text-muted-foreground hover:bg-di-surface-high rounded-md px-3 py-1.5 text-xs transition-colors">
                          <Zap className="h-3 w-3" />
                          Тест
                        </button>
                      )}
                      <button className="flex items-center gap-1.5 border border-di-outline-variant/15 text-muted-foreground hover:bg-di-surface-high rounded-md px-3 py-1.5 text-xs transition-colors">
                        <Settings className="h-3 w-3" />
                        Настроить
                      </button>
                      {conn.status === 'disconnected' && (
                        <button className="bg-blue-600 hover:bg-blue-700 text-white rounded-md px-3 py-1.5 text-xs font-semibold transition-colors flex items-center gap-1.5">
                          <Plug className="h-3 w-3" />
                          Подключить
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Config details (expanded) */}
              {Object.keys(conn.config).length > 0 && conn.status === 'connected' && (
                <div className="mt-3 ml-16 border-t border-di-outline-variant/10 pt-3">
                  <div className="flex flex-wrap gap-4">
                    {Object.entries(conn.config).map(([key, value]) => (
                      <div key={key}>
                        <span className="text-[10px] text-muted-foreground uppercase">{key}: </span>
                        <span className="text-[10px] font-mono text-di-on-surface-variant">{String(value)}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
