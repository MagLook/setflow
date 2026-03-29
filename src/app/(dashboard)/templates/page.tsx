import { DEMO_TEMPLATES } from '@/shared/demo-data';

export default function TemplatesPage() {
  return (
    <div>
      <div className="flex items-center justify-between gap-4 mb-6">
        <div className="flex-1 min-w-0">
          <h1 className="font-headline font-bold text-foreground text-lg md:text-xl">
            Шаблоны съёмок
          </h1>
          <p className="text-[11px] text-muted-foreground">
            {DEMO_TEMPLATES.length} шаблонов — создание проекта в один клик
          </p>
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white rounded-md px-4 py-2 text-sm font-semibold transition-colors">
          Новый шаблон
        </button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {DEMO_TEMPLATES.map((tpl) => (
          <div
            key={tpl.id}
            className="bg-di-surface-mid rounded-xl border border-transparent hover:border-di-primary/20 transition-all p-4 cursor-pointer group"
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="text-2xl">{tpl.icon}</span>
              <div>
                <h3 className="font-headline font-bold text-foreground group-hover:text-blue-500 transition-colors">
                  {tpl.name}
                </h3>
                <span className="text-[10px] text-muted-foreground">Использован {tpl.usageCount} раз</span>
              </div>
            </div>
            <p className="text-sm text-di-on-surface-variant mb-4">{tpl.description}</p>
            <div className="grid grid-cols-3 md:grid-cols-5 gap-2">
              {[
                { label: 'Команда', value: tpl.crew },
                { label: 'Обор.', value: tpl.equipment },
                { label: 'Сцены', value: tpl.scenes },
                { label: 'Чеклисты', value: tpl.checklists },
                { label: 'Задачи', value: tpl.tasks },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <span className="font-headline font-bold text-foreground text-lg block">{s.value}</span>
                  <span className="text-[9px] text-muted-foreground uppercase">{s.label}</span>
                </div>
              ))}
            </div>
            <button className="mt-4 w-full bg-blue-600/10 hover:bg-blue-600/20 text-blue-500 rounded-lg py-2 text-sm font-semibold transition-colors">
              Создать проект из шаблона
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
