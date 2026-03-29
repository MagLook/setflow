export default function ProjectSettingsPage() {
  return (
    <div>
      <div className="flex items-center justify-between gap-4 mb-6">
        <div className="flex-1 min-w-0">
          <h1 className="font-headline font-bold text-foreground text-lg md:text-xl">
            Свойства проекта
          </h1>
          <p className="text-[11px] text-muted-foreground">Метаданные, статус, архивация</p>
        </div>
        <div className="flex gap-3">
          <button className="border border-di-outline-variant/15 text-muted-foreground hover:bg-di-surface-high rounded-md px-4 py-2 text-sm">
            В архив
          </button>
          <button className="bg-blue-600 hover:bg-blue-700 text-white rounded-md px-4 py-2 text-sm font-semibold">
            Сохранить
          </button>
        </div>
      </div>

      <div className="bg-di-surface-mid rounded-xl border border-transparent p-6 max-w-2xl space-y-4">
        <div>
          <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest block mb-1.5">
            Название
          </label>
          <div className="border border-di-outline-variant/20 bg-di-surface-lowest rounded-md px-3 py-2 text-sm text-foreground">
            Демо-проект
          </div>
        </div>
        <div>
          <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest block mb-1.5">
            Тип
          </label>
          <div className="border border-di-outline-variant/20 bg-di-surface-lowest rounded-md px-3 py-2 text-sm text-foreground">
            Мероприятие
          </div>
        </div>
        <div>
          <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest block mb-1.5">
            Статус
          </label>
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-amber-500" />
            <span className="text-[10px] font-bold uppercase text-amber-600">Планирование</span>
          </div>
        </div>
        <div>
          <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest block mb-1.5">
            Клиент
          </label>
          <div className="border border-di-outline-variant/20 bg-di-surface-lowest rounded-md px-3 py-2 text-sm text-muted-foreground">
            Не указан
          </div>
        </div>
      </div>
    </div>
  );
}
