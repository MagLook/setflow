export default async function ProjectDashboard({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  return (
    <div>
      <div className="flex items-center justify-between gap-4 mb-6">
        <div className="flex-1 min-w-0">
          <h1 className="font-headline font-bold text-foreground text-lg md:text-xl">
            Обзор проекта
          </h1>
          <p className="text-[11px] text-muted-foreground">ID: {id}</p>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-amber-500" />
          <span className="text-[10px] font-bold uppercase text-amber-600">Планирование</span>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <div className="bg-di-surface-mid rounded-xl border border-transparent p-5 flex flex-col justify-between h-28">
          <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
            Статус
          </span>
          <span className="font-headline text-lg font-bold text-foreground">Планирование</span>
        </div>
        <div className="bg-di-surface-mid rounded-xl border border-transparent p-5 flex flex-col justify-between h-28">
          <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
            Команда
          </span>
          <span className="font-headline text-4xl font-extrabold text-foreground tracking-tight">0</span>
        </div>
        <div className="bg-di-surface-mid rounded-xl border border-transparent p-5 flex flex-col justify-between h-28">
          <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
            Съёмочные дни
          </span>
          <span className="font-headline text-4xl font-extrabold text-foreground tracking-tight">0</span>
        </div>
        <div className="bg-di-surface-mid rounded-xl border border-transparent p-5 flex flex-col justify-between h-28">
          <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
            Бюджет
          </span>
          <span className="font-headline text-lg font-bold text-foreground">—</span>
        </div>
      </div>
    </div>
  );
}
