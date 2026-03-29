export default function NewProjectPage() {
  return (
    <div>
      <div className="flex items-center justify-between gap-4 mb-6">
        <div className="flex-1 min-w-0">
          <h1 className="font-headline font-bold text-foreground text-lg md:text-xl">
            Новый проект
          </h1>
          <p className="text-[11px] text-muted-foreground">Создание проекта съёмки</p>
        </div>
      </div>
      <div className="bg-di-surface-mid rounded-xl border border-transparent p-6 max-w-2xl">
        <p className="text-di-on-surface-variant text-sm">
          Форма создания: название, тип (документалка, интервью, мероприятие...),
          клиент, даты, описание, бюджет.
        </p>
      </div>
    </div>
  );
}
