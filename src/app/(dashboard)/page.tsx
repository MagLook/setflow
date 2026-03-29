export default function DashboardPage() {
  return (
    <div>
      <div className="flex items-center justify-between gap-4 mb-6">
        <div className="flex-1 min-w-0">
          <h1 className="font-headline font-bold text-foreground text-lg md:text-xl">
            Обзор дня
          </h1>
          <p className="text-[11px] text-muted-foreground">Сводка по всем проектам</p>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard label="Съёмки сегодня" value="0" />
        <StatCard label="Команда" value="0" suffix="чел." />
        <StatCard label="Оборудование" value="0" suffix="ед." />
        <StatCard label="Активные проекты" value="0" />
      </div>
    </div>
  );
}

function StatCard({
  label,
  value,
  suffix,
}: {
  label: string;
  value: string;
  suffix?: string;
}) {
  return (
    <div className="bg-di-surface-mid rounded-xl border border-transparent hover:border-di-primary/20 transition-all p-5 flex flex-col justify-between h-28">
      <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
        {label}
      </span>
      <div>
        <span className="font-headline text-4xl font-extrabold text-foreground tracking-tight">
          {value}
        </span>
        {suffix && (
          <span className="text-sm text-muted-foreground ml-1">{suffix}</span>
        )}
      </div>
    </div>
  );
}
