import { DEMO_SET_ELEMENTS } from '@/shared/demo-production';
import { Camera, Lightbulb, Mic, UserCircle, Map, ChevronRight } from 'lucide-react';

const ICON_MAP = { cameras: Camera, lights: Lightbulb, sound: Mic, talent: UserCircle };
const SECTION_LABELS: Record<string, string> = { cameras: 'Камеры', lights: 'Свет', sound: 'Звук', talent: 'Позиции' };

export default function ProjectSetPlanPage() {
  const plans = [DEMO_SET_ELEMENTS.ceremony, DEMO_SET_ELEMENTS.banquet];

  return (
    <div>
      <div className="flex items-center justify-between gap-4 mb-6">
        <div className="flex-1 min-w-0">
          <h1 className="font-headline font-bold text-foreground text-lg md:text-xl">План площадки</h1>
          <p className="text-[11px] text-muted-foreground">Расстановка камер, света, звука и позиций</p>
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white rounded-md px-4 py-2 text-sm font-semibold transition-colors">
          Новый план
        </button>
      </div>

      <div className="space-y-8">
        {plans.map((plan, pIdx) => (
          <div key={pIdx}>
            {/* Plan header */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-blue-600/15 flex items-center justify-center">
                <Map className="h-5 w-5 text-blue-500" />
              </div>
              <div>
                <h2 className="font-headline font-bold text-foreground">{plan.title}</h2>
                <p className="text-[10px] text-muted-foreground">{plan.room.label}</p>
              </div>
            </div>

            {/* Canvas placeholder */}
            <div className="bg-di-surface-lowest rounded-xl border border-di-outline-variant/15 aspect-[16/7] mb-4 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-10" style={{
                backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
                backgroundSize: '40px 40px',
              }} />
              <div className="text-center z-10">
                <Map className="h-10 w-10 text-blue-500 mx-auto mb-2" />
                <p className="text-sm text-muted-foreground">2D-редактор (react-konva)</p>
                <p className="text-[10px] text-muted-foreground">{plan.room.width}×{plan.room.height}м · {plan.cameras.length} камер · {plan.lights.length} свет · {plan.sound.length} звук</p>
              </div>
            </div>

            {/* Elements grid */}
            <div className="grid gap-4 md:grid-cols-2">
              {/* Cameras */}
              <SectionCard title="Камеры" icon={Camera} color="blue" items={plan.cameras.map((c) => ({
                title: c.label,
                subtitle: c.model,
                details: [
                  { label: 'Позиция', value: c.position },
                  { label: 'Высота', value: c.height },
                  { label: 'Ракурс', value: c.angle },
                  { label: 'Оператор', value: c.operator },
                ],
                note: c.notes,
              }))} />

              {/* Lights */}
              <SectionCard title="Свет" icon={Lightbulb} color="amber" items={plan.lights.map((l) => ({
                title: l.label,
                subtitle: l.model,
                details: [
                  { label: 'Позиция', value: l.position },
                  { label: 'Мощность', value: l.power },
                  { label: 'Цвет. t°', value: l.colorTemp },
                ],
                note: l.notes,
              }))} />

              {/* Sound */}
              <SectionCard title="Звук" icon={Mic} color="green" items={plan.sound.map((s) => ({
                title: s.label,
                subtitle: s.model,
                details: [
                  { label: 'Канал', value: s.channel },
                ],
                note: s.notes,
              }))} />

              {/* Talent */}
              <SectionCard title="Позиции" icon={UserCircle} color="purple" items={plan.talent.map((t) => ({
                title: t.label,
                subtitle: t.position,
                details: [
                  { label: 'Метка', value: t.mark },
                ],
              }))} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function SectionCard({ title, icon: Icon, color, items }: {
  title: string;
  icon: typeof Camera;
  color: string;
  items: Array<{
    title: string;
    subtitle: string;
    details: Array<{ label: string; value: string }>;
    note?: string;
  }>;
}) {
  return (
    <div className="bg-di-surface-mid rounded-xl border border-transparent p-4">
      <div className="flex items-center gap-2 mb-3">
        <Icon className={`h-4 w-4 text-${color}-500`} />
        <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">{title}</span>
        <span className="text-[10px] text-muted-foreground">({items.length})</span>
      </div>
      <div className="space-y-3">
        {items.map((item, idx) => (
          <div key={idx} className={`bg-di-surface-high rounded-lg p-3 border-l-2 border-l-${color}-500`}>
            <div className="font-semibold text-foreground text-sm">{item.title}</div>
            <div className="text-[10px] text-muted-foreground mb-2">{item.subtitle}</div>
            <div className="grid grid-cols-2 gap-x-4 gap-y-1">
              {item.details.map((d) => (
                <div key={d.label}>
                  <span className="text-[9px] text-muted-foreground uppercase">{d.label}: </span>
                  <span className="text-[11px] text-di-on-surface-variant">{d.value}</span>
                </div>
              ))}
            </div>
            {item.note && (
              <p className="text-[10px] text-amber-500 mt-2">💡 {item.note}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
