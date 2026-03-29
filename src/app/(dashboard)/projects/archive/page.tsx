export default function ProjectArchivePage() {
  return (
    <div>
      <div className="flex items-center justify-between gap-4 mb-6">
        <div className="flex-1 min-w-0">
          <h1 className="font-headline font-bold text-foreground text-lg md:text-xl">
            Архив проектов
          </h1>
          <p className="text-[11px] text-muted-foreground">Завершённые и архивированные проекты</p>
        </div>
      </div>
      <div className="bg-di-surface-mid rounded-xl border border-transparent p-6">
        <p className="text-di-on-surface-variant text-sm">
          Нет архивных проектов.
        </p>
      </div>
    </div>
  );
}
