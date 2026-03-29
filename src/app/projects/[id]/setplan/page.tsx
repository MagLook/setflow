import { DEMO_SET_ELEMENTS } from '@/shared/demo-production';
import { Camera, Lightbulb, Mic, UserCircle, Map } from 'lucide-react';
import { SetPlanPreview } from '@/components/setplan/set-plan-preview';

// Координаты элементов на плане (в метрах от левого верхнего угла комнаты)
const CEREMONY_POSITIONS = {
  cameras: [
    { id: 'cam-a', label: 'A', x: 9, y: 3.5, angle: 180, fov: 50 },
    { id: 'cam-b', label: 'B', x: 6, y: 7, angle: -90, fov: 30 },
  ],
  lights: [
    { id: 'light-1', x: 3, y: 3, angle: 30, spread: 80 },
    { id: 'light-2', x: 9, y: 1.5, angle: 200, spread: 60 },
  ],
  sound: [
    { id: 'snd-1', label: 'Петл.Ж', x: 5.5, y: 3.5 },
    { id: 'snd-2', label: 'Петл.Н', x: 6.5, y: 3.5 },
    { id: 'snd-3', label: 'Бум', x: 6, y: 2.5 },
  ],
  talent: [
    { id: 'tal-1', label: 'Жених', x: 5.5, y: 3.5 },
    { id: 'tal-2', label: 'Невеста', x: 6.5, y: 3.5 },
    { id: 'tal-3', label: 'Ведущий', x: 6, y: 2 },
    { id: 'tal-4', label: 'Свидетели', x: 4, y: 3.5 },
  ],
  furniture: [
    { label: 'Стол ведущего', x: 5, y: 1, w: 2, h: 0.6 },
    { label: 'Стулья гостей', x: 2, y: 5, w: 8, h: 2 },
    { label: 'Вход', x: 0, y: 3, w: 0.3, h: 2 },
  ],
};

const BANQUET_POSITIONS = {
  cameras: [
    { id: 'cam-a2', label: 'A', x: 7.5, y: 6, angle: -60, fov: 60 },
    { id: 'cam-b2', label: 'B', x: 1, y: 2, angle: 30, fov: 25 },
    { id: 'cam-c', label: 'D', x: 7.5, y: 3, angle: -90, fov: 90, color: 'rgba(6, 182, 212, 0.08)' },
  ],
  lights: [
    { id: 'light-3', x: 10, y: 7, angle: 180, spread: 70 },
    { id: 'light-4', x: 3, y: 1, angle: 90, spread: 80 },
    { id: 'light-5', x: 7.5, y: 0.5, angle: 150, spread: 100, color: 'rgba(251, 146, 60, 0.06)' },
  ],
  sound: [
    { id: 'snd-5', label: 'Пульт', x: 13, y: 1 },
    { id: 'snd-6', label: 'Петл.', x: 4, y: 4.5 },
    { id: 'snd-7', label: 'Бум', x: 5, y: 1.5 },
    { id: 'snd-8', label: 'Ambient', x: 14, y: 9 },
  ],
  talent: [
    { id: 'tal-5', label: 'Молодожёны', x: 7.5, y: 1 },
    { id: 'tal-6', label: 'Тамада', x: 4.5, y: 4.5 },
  ],
  furniture: [
    { label: 'Стол молодожёнов', x: 6, y: 0.3, w: 3, h: 1 },
    { label: 'Танцпол', x: 5.5, y: 4, w: 4, h: 4, rx: 8 },
    { label: 'Стол 1', x: 1, y: 4, w: 1.5, h: 1.5 },
    { label: 'Стол 2', x: 1, y: 6.5, w: 1.5, h: 1.5 },
    { label: 'Стол 3', x: 11, y: 4, w: 1.5, h: 1.5 },
    { label: 'Стол 4', x: 11, y: 6.5, w: 1.5, h: 1.5 },
    { label: 'DJ', x: 12.5, y: 0.3, w: 2, h: 1 },
    { label: 'Сцена', x: 3, y: 0.3, w: 2.5, h: 1.2 },
  ],
};

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

            {/* 2D Plan SVG */}
            <div className="mb-4">
              <SetPlanPreview
                width={plan.room.width}
                height={plan.room.height}
                roomLabel={plan.room.label}
                cameras={pIdx === 0 ? CEREMONY_POSITIONS.cameras : BANQUET_POSITIONS.cameras}
                lights={pIdx === 0 ? CEREMONY_POSITIONS.lights : BANQUET_POSITIONS.lights}
                sound={pIdx === 0 ? CEREMONY_POSITIONS.sound : BANQUET_POSITIONS.sound}
                talent={pIdx === 0 ? CEREMONY_POSITIONS.talent : BANQUET_POSITIONS.talent}
                furniture={pIdx === 0 ? CEREMONY_POSITIONS.furniture : BANQUET_POSITIONS.furniture}
              />
            </div>

            {/* Elements grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
