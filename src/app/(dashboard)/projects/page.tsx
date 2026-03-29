import Link from 'next/link';

export default function ProjectsPage() {
  return (
    <div>
      <div className="flex items-center justify-between gap-4 mb-6">
        <div className="flex-1 min-w-0">
          <h1 className="font-headline font-bold text-foreground text-lg md:text-xl">
            Проекты
          </h1>
          <p className="text-[11px] text-muted-foreground">Активные и архивные</p>
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white rounded-md px-4 py-2 text-sm font-semibold transition-colors">
          Новый проект
        </button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Link
          href="/projects/demo"
          className="bg-di-surface-mid rounded-xl border border-transparent hover:border-di-primary/20 transition-all p-4 group"
        >
          <div className="flex items-center gap-2 mb-3">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-green-500" />
              <span className="text-[10px] font-bold uppercase text-green-600">Активный</span>
            </div>
            <span className="text-[10px] text-muted-foreground uppercase">Мероприятие</span>
          </div>
          <h3 className="font-headline font-bold text-foreground group-hover:text-blue-500 transition-colors">
            Свадьба Ивановых
          </h3>
          <p className="text-[11px] text-muted-foreground mt-1">3 съёмочных дня, 5 человек</p>
        </Link>

        <Link
          href="/projects/doc-polar"
          className="bg-di-surface-mid rounded-xl border border-transparent hover:border-di-primary/20 transition-all p-4 group"
        >
          <div className="flex items-center gap-2 mb-3">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-amber-500" />
              <span className="text-[10px] font-bold uppercase text-amber-600">Планирование</span>
            </div>
            <span className="text-[10px] text-muted-foreground uppercase">Документалка</span>
          </div>
          <h3 className="font-headline font-bold text-foreground group-hover:text-blue-500 transition-colors">
            Док: Полярные экспедиции
          </h3>
          <p className="text-[11px] text-muted-foreground mt-1">15 съёмочных дней, 3 локации</p>
        </Link>
      </div>
    </div>
  );
}
