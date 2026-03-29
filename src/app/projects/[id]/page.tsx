import { DEMO_PROJECT, DEMO_CREW, DEMO_SHOOT_DAYS, DEMO_EQUIPMENT } from '@/shared/demo-data';

export default async function ProjectDashboard({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  return (
    <div>
      <div className="flex items-center justify-between gap-4 mb-6">
        <div className="flex-1 min-w-0">
          <h1 className="font-headline font-bold text-foreground text-lg md:text-xl">
            {DEMO_PROJECT.title}
          </h1>
          <p className="text-[11px] text-muted-foreground">{DEMO_PROJECT.description}</p>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-amber-500" />
          <span className="text-[10px] font-bold uppercase text-amber-600">Планирование</span>
        </div>
      </div>

      {/* KPI */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-6">
        <StatCard label="Команда" value={String(DEMO_CREW.length)} suffix="чел." />
        <StatCard label="Съёмочные блоки" value={String(DEMO_SHOOT_DAYS.length)} />
        <StatCard label="Оборудование" value={String(DEMO_EQUIPMENT.length)} suffix="ед." />
        <StatCard label="Бюджет" value={DEMO_PROJECT.budget.toLocaleString('ru-RU')} suffix="₽" />
      </div>

      {/* Ближайшая съёмка */}
      <div className="mb-6">
        <h2 className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-3">
          Ближайший съёмочный день
        </h2>
        <div className="bg-di-surface-mid rounded-xl border border-transparent p-4">
          <div className="flex items-center justify-between">
            <div>
              <span className="font-headline font-bold text-foreground">{DEMO_SHOOT_DAYS[0].title}</span>
              <p className="text-[11px] text-muted-foreground mt-0.5">{DEMO_SHOOT_DAYS[0].location}</p>
            </div>
            <div className="text-right">
              <span className="font-headline font-bold text-foreground text-sm">
                {new Date(DEMO_SHOOT_DAYS[0].date).toLocaleDateString('ru-RU', { day: 'numeric', month: 'long' })}
              </span>
              <p className="text-[10px] text-muted-foreground">{DEMO_SHOOT_DAYS[0].callTime} — {DEMO_SHOOT_DAYS[0].wrapTime}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Состав команды */}
      <div>
        <h2 className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-3">
          Состав команды
        </h2>
        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {DEMO_CREW.map((member) => (
            <div key={member.id} className="bg-di-surface-mid rounded-xl border border-transparent hover:border-di-primary/20 transition-all p-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-di-surface-high flex items-center justify-center text-xs font-bold text-di-on-surface-variant">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <span className="font-semibold text-foreground text-sm">{member.name}</span>
                  <p className="text-[10px] text-muted-foreground uppercase">{member.projectRole}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function StatCard({ label, value, suffix }: { label: string; value: string; suffix?: string }) {
  return (
    <div className="bg-di-surface-mid rounded-xl border border-transparent p-5 flex flex-col justify-between h-28">
      <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">{label}</span>
      <div>
        <span className="font-headline text-4xl font-extrabold text-foreground tracking-tight">{value}</span>
        {suffix && <span className="text-sm text-muted-foreground ml-1">{suffix}</span>}
      </div>
    </div>
  );
}
