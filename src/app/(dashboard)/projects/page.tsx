import Link from 'next/link';

export default function ProjectsPage() {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Проекты</h1>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Link
          href="/projects/demo"
          className="group rounded-lg border bg-card p-6 hover:border-primary transition-colors"
        >
          <div className="flex items-center gap-3 mb-3">
            <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
              Активный
            </span>
            <span className="text-xs text-muted-foreground">Мероприятие</span>
          </div>
          <h3 className="font-semibold group-hover:text-primary transition-colors">
            Свадьба Ивановых
          </h3>
          <p className="text-sm text-muted-foreground mt-1">3 съёмочных дня, 5 человек</p>
        </Link>

        <div className="rounded-lg border border-dashed p-6 flex items-center justify-center text-muted-foreground hover:border-primary hover:text-primary transition-colors cursor-pointer">
          + Новый проект
        </div>
      </div>
    </div>
  );
}
