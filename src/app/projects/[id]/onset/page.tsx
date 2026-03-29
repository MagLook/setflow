import { DEMO_SHOOT_DAYS, DEMO_CREW, SCENE_TYPE_LABELS } from '@/shared/demo-data';
import { DEMO_PRODUCTION_WORKFLOW, DEMO_EQUIPMENT_LIVE, WORKFLOW_PHASE_META, STEP_STATUS_META } from '@/shared/demo-production';
import { Battery, HardDrive, Thermometer, Circle, CheckCircle2, Clock, ArrowRight } from 'lucide-react';

const SHOT_LOG = [
  { id: 'sl1', time: '08:12', scene: 'Детали', note: 'Кольца на подушечке, естественный свет из окна.', type: 'b_roll' },
  { id: 'sl2', time: '08:34', note: 'Батарея камеры A — 87%. Карта 1 — 42 ГБ свободно.', type: 'tech' },
  { id: 'sl3', time: '09:05', scene: 'Сборы невесты', note: 'Визажист начала работу. Камера B снимает процесс.', type: 'b_roll' },
  { id: 'sl4', time: '09:47', scene: 'Сборы невесты', note: 'Хороший дубль: реакция невесты на платье. Canon R5, 50mm.', type: 'action' },
  { id: 'sl5', time: '10:15', note: 'Перерыв 10 мин. Перестановка света для портретов.', type: 'tech' },
  { id: 'sl6', time: '10:30', scene: 'Портреты', note: 'Aputure 600d через софтбокс слева. Красивый рисунок.', type: 'b_roll' },
];

export default function ProjectOnSetPage() {
  const currentDay = DEMO_SHOOT_DAYS[0];
  const currentScene = currentDay.scenes[1];
  const activeWorkflow = DEMO_PRODUCTION_WORKFLOW.find((w) => w.id === 'pw-shoot-1');

  return (
    <div>
      <div className="flex items-center justify-between gap-4 mb-6">
        <div className="flex-1 min-w-0">
          <h1 className="font-headline font-bold text-foreground text-lg md:text-xl">На площадке</h1>
          <p className="text-[11px] text-muted-foreground">{currentDay.title} — {currentDay.location}</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-[10px] font-bold uppercase text-green-600">Съёмка идёт</span>
          </div>
          <div className="bg-di-surface-mid rounded-lg px-3 py-1.5 font-mono text-lg font-bold text-foreground">09:47</div>
        </div>
      </div>

      {/* ═══ Производственный процесс ═══ */}
      <div className="mb-6">
        <h2 className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-3">
          Производственный процесс
        </h2>
        <div className="space-y-3">
          {DEMO_PRODUCTION_WORKFLOW.map((phase) => {
            const meta = WORKFLOW_PHASE_META[phase.phase];
            const done = phase.steps.filter((s) => s.status === 'done').length;
            const total = phase.steps.length;
            const pct = Math.round((done / total) * 100);
            const isActive = phase.steps.some((s) => s.status === 'in_progress');

            return (
              <div key={phase.id} className={`bg-di-surface-mid rounded-xl border transition-all p-4 ${isActive ? 'border-blue-500/30' : 'border-transparent'}`}>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span>{meta.icon}</span>
                    <span className="font-semibold text-foreground text-sm">{phase.phaseLabel}</span>
                    <span className={`text-[10px] px-1.5 py-0.5 rounded font-bold uppercase bg-${meta.color}-500/15 text-${meta.color}-500`}>
                      {meta.label}
                    </span>
                  </div>
                  <span className="text-[10px] text-muted-foreground">{done}/{total}</span>
                </div>
                <div className="w-full bg-di-surface-high rounded-full h-1.5 mb-3">
                  <div className={`h-1.5 rounded-full transition-all ${pct === 100 ? 'bg-green-500' : 'bg-blue-500'}`} style={{ width: `${pct}%` }} />
                </div>
                <div className="space-y-1.5">
                  {phase.steps.map((step) => {
                    const sMeta = STEP_STATUS_META[step.status];
                    return (
                      <div key={step.id} className="flex items-start gap-2">
                        {step.status === 'done' ? (
                          <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        ) : step.status === 'in_progress' ? (
                          <Circle className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0 animate-pulse" />
                        ) : (
                          <Circle className="h-4 w-4 text-di-outline-variant mt-0.5 flex-shrink-0" />
                        )}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2">
                            <span className={`text-sm ${step.status === 'done' ? 'text-muted-foreground line-through' : 'text-foreground'}`}>
                              {step.title}
                            </span>
                            <span className="text-[9px] text-muted-foreground">{step.duration}</span>
                          </div>
                          <div className="text-[10px] text-muted-foreground">{step.assignee} · {step.description}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* ═══ Мониторинг оборудования ═══ */}
        <div>
          <h2 className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-3">
            Live-мониторинг оборудования
          </h2>
          <div className="space-y-2">
            {DEMO_EQUIPMENT_LIVE.map((eq) => (
              <div key={eq.id} className="bg-di-surface-mid rounded-xl border border-transparent p-3 flex items-center gap-4">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold text-foreground">{eq.name}</span>
                    {eq.recording && (
                      <span className="flex items-center gap-1 text-[9px] text-red-500 font-bold uppercase">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                        REC
                      </span>
                    )}
                  </div>
                </div>
                <div className="flex items-center gap-4 text-[10px]">
                  {eq.battery !== null && (
                    <div className="flex items-center gap-1" title="Батарея">
                      <Battery className={`h-3.5 w-3.5 ${eq.battery < 30 ? 'text-red-500' : eq.battery < 60 ? 'text-amber-500' : 'text-green-500'}`} />
                      <span className="text-di-on-surface-variant font-mono">{eq.battery}%</span>
                    </div>
                  )}
                  {eq.storage && (
                    <div className="flex items-center gap-1" title="Накопитель">
                      <HardDrive className="h-3.5 w-3.5 text-blue-500" />
                      <span className="text-di-on-surface-variant font-mono">{eq.storage.split('(')[0]}</span>
                    </div>
                  )}
                  {eq.temp !== '—' && eq.temp && (
                    <div className="flex items-center gap-1" title="Температура">
                      <Thermometer className={`h-3.5 w-3.5 ${parseInt(eq.temp) > 50 ? 'text-amber-500' : 'text-green-500'}`} />
                      <span className="text-di-on-surface-variant font-mono">{eq.temp}</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ═══ Shot Log ═══ */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Shot Log</h2>
            <button className="bg-blue-600 hover:bg-blue-700 text-white rounded-md px-3 py-1.5 text-xs font-semibold transition-colors">+ Запись</button>
          </div>
          <div className="space-y-1.5">
            {SHOT_LOG.slice().reverse().map((entry) => (
              <div key={entry.id} className="flex items-start gap-3 bg-di-surface-high rounded-lg px-3 py-2.5">
                <span className="font-mono text-xs text-blue-500 font-bold w-10 flex-shrink-0 mt-0.5">{entry.time}</span>
                <div className="flex-1 min-w-0">
                  {entry.scene && <span className="text-[10px] text-muted-foreground uppercase block mb-0.5">{entry.scene}</span>}
                  <p className="text-sm text-foreground">{entry.note}</p>
                </div>
                <span className={`text-[10px] px-1.5 py-0.5 rounded font-medium uppercase flex-shrink-0 ${
                  entry.type === 'tech' ? 'bg-amber-500/15 text-amber-500' : entry.type === 'action' ? 'bg-green-500/15 text-green-500' : 'bg-blue-500/15 text-blue-500'
                }`}>
                  {entry.type === 'tech' ? 'ТЕХ' : entry.type === 'action' ? 'ДЕЙСТВИЕ' : 'B-ROLL'}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
