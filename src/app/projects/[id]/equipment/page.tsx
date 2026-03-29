import { DEMO_EQUIPMENT } from '@/shared/demo-data';

const categoryIcons: Record<string, string> = {
  camera: '📷',
  lens: '🔭',
  lighting: '💡',
  audio: '🎙️',
  grip: '🔧',
  power: '🔋',
  media: '💾',
};

export default function ProjectEquipmentPage() {
  const grouped = DEMO_EQUIPMENT.reduce(
    (acc, item) => {
      const key = item.categoryLabel;
      if (!acc[key]) acc[key] = [];
      acc[key].push(item);
      return acc;
    },
    {} as Record<string, typeof DEMO_EQUIPMENT>,
  );

  return (
    <div>
      <div className="flex items-center justify-between gap-4 mb-6">
        <div className="flex-1 min-w-0">
          <h1 className="font-headline font-bold text-foreground text-lg md:text-xl">
            Оборудование проекта
          </h1>
          <p className="text-[11px] text-muted-foreground">{DEMO_EQUIPMENT.length} единиц назначено</p>
        </div>
        <div className="flex gap-3">
          <button className="border border-di-outline-variant/15 text-muted-foreground hover:bg-di-surface-high rounded-md px-4 py-2 text-sm">
            Kit preset
          </button>
          <button className="bg-blue-600 hover:bg-blue-700 text-white rounded-md px-4 py-2 text-sm font-semibold transition-colors">
            Добавить
          </button>
        </div>
      </div>

      <div className="space-y-6">
        {Object.entries(grouped).map(([category, items]) => (
          <div key={category}>
            <h2 className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-3">
              {category}
            </h2>
            <table className="w-full border-separate border-spacing-y-1.5">
              <thead>
                <tr className="text-[10px] font-bold text-muted-foreground uppercase text-left">
                  <th className="px-4 py-2">Название</th>
                  <th className="px-4 py-2">Модель</th>
                  <th className="px-4 py-2">Серийный №</th>
                  <th className="px-4 py-2">Ответственный</th>
                  <th className="px-4 py-2">Статус</th>
                </tr>
              </thead>
              <tbody>
                {items.map((item) => (
                  <tr key={item.id} className="bg-di-surface-high hover:bg-di-surface-mid transition-colors">
                    <td className="px-4 py-3 first:rounded-l-xl">
                      <span className="font-semibold text-foreground text-sm">{item.name}</span>
                    </td>
                    <td className="px-4 py-3 text-sm text-di-on-surface-variant">{item.model}</td>
                    <td className="px-4 py-3 text-xs text-muted-foreground font-mono">{item.serial}</td>
                    <td className="px-4 py-3 text-sm text-di-on-surface-variant">{item.assignedTo}</td>
                    <td className="px-4 py-3 last:rounded-r-xl">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-blue-500" />
                        <span className="text-[10px] font-bold uppercase text-blue-600">{item.statusLabel}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </div>
    </div>
  );
}
