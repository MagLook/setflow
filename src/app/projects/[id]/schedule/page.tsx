import { DEMO_SHOOT_DAYS, DEMO_CREW, SCENE_TYPE_LABELS } from '@/shared/demo-data';

export default function ProjectSchedulePage() {
  return (
    <div>
      <div className="flex items-center justify-between gap-4 mb-6">
        <div className="flex-1 min-w-0">
          <h1 className="font-headline font-bold text-foreground text-lg md:text-xl">
            Расписание
          </h1>
          <p className="text-[11px] text-muted-foreground">
            {DEMO_SHOOT_DAYS.length} съёмочных блока, {DEMO_SHOOT_DAYS.reduce((a, d) => a + d.scenes.length, 0)} сцен
          </p>
        </div>
        <div className="flex gap-3">
          <button className="border border-di-outline-variant/15 text-muted-foreground hover:bg-di-surface-high rounded-md px-4 py-2 text-sm">
            Call Sheet PDF
          </button>
          <button className="bg-blue-600 hover:bg-blue-700 text-white rounded-md px-4 py-2 text-sm font-semibold transition-colors">
            Добавить день
          </button>
        </div>
      </div>

      <div className="space-y-4">
        {DEMO_SHOOT_DAYS.map((day) => {
          const crewNames = day.crew
            .map((cid) => DEMO_CREW.find((c) => c.id === cid)?.name)
            .filter(Boolean);

          return (
            <div key={day.id} className="bg-di-surface-mid rounded-xl border border-transparent hover:border-di-primary/20 transition-all p-4">
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="font-headline font-bold text-foreground">{day.title}</h3>
                  <p className="text-[11px] text-muted-foreground mt-0.5">{day.location}</p>
                </div>
                <div className="text-right">
                  <div className="font-headline font-bold text-foreground text-sm">
                    {new Date(day.date).toLocaleDateString('ru-RU', { day: 'numeric', month: 'long' })}
                  </div>
                  <p className="text-[10px] text-muted-foreground">
                    {day.callTime} — {day.wrapTime}
                  </p>
                </div>
              </div>

              {/* Команда дня */}
              <div className="mb-4">
                <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
                  Команда:
                </span>
                <span className="text-sm text-di-on-surface-variant ml-2">
                  {crewNames.join(', ')}
                </span>
              </div>

              {/* Сцены */}
              <div className="space-y-1.5">
                <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-2">
                  Сцены
                </p>
                {day.scenes.map((scene) => (
                  <div key={scene.id} className="flex items-center gap-3 bg-di-surface-high rounded-lg px-3 py-2">
                    <span className="text-[10px] font-bold text-muted-foreground w-5">{scene.order}</span>
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-di-surface-mid text-blue-500 font-medium uppercase">
                      {SCENE_TYPE_LABELS[scene.type] || scene.type}
                    </span>
                    <span className="text-sm text-foreground flex-1">{scene.description}</span>
                    <span className="text-xs text-muted-foreground">{scene.duration} мин</span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
