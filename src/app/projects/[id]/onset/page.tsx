import { DEMO_SHOOT_DAYS, DEMO_CREW, SCENE_TYPE_LABELS } from '@/shared/demo-data';

const DEMO_SHOT_LOG = [
  { id: 'sl1', time: '08:12', scene: 'Детали', note: 'Кольца на подушечке, естественный свет из окна. Красиво.', type: 'b_roll' },
  { id: 'sl2', time: '08:34', note: 'Батарея камеры A — 87%. Карта 1 — 42 ГБ свободно.', type: 'tech' },
  { id: 'sl3', time: '09:05', scene: 'Сборы невесты', note: 'Визажист начала работу. Камера B снимает процесс.', type: 'b_roll' },
  { id: 'sl4', time: '09:47', scene: 'Сборы невесты', note: 'Хороший дубль: реакция невесты на платье. Canon R5, 50mm f/1.4.', type: 'action' },
  { id: 'sl5', time: '10:15', note: 'Перерыв 10 мин. Перестановка света для портретов.', type: 'tech' },
  { id: 'sl6', time: '10:30', scene: 'Портреты у окна', note: 'Aputure 600d через софтбокс слева. Отражатель справа. Красивый рисунок.', type: 'b_roll' },
  { id: 'sl7', time: '11:02', scene: 'Портреты у окна', note: 'Серия портретов готова. 3 хороших дубля. Переходим к выходу.', type: 'action' },
  { id: 'sl8', time: '11:40', scene: 'Выход, встреча с женихом', note: 'Жених приехал. Дрон Mini 3 Pro в воздухе. Ветер 3 м/с — ок.', type: 'action' },
];

const DEMO_CHECKLISTS = [
  {
    id: 'ch1',
    role: 'Оператор A (Волков)',
    items: [
      { label: 'Батареи Sony FX6 (x3)', checked: true },
      { label: 'Карты CFexpress (x2, 512 ГБ)', checked: true },
      { label: 'Стабилизатор DJI RS3 Pro', checked: true },
      { label: 'Объектив 24-70mm GM II', checked: true },
      { label: 'Объектив 85mm f/1.4', checked: false },
      { label: 'ND фильтры (набор)', checked: true },
      { label: 'Моноподонад', checked: false },
    ],
  },
  {
    id: 'ch2',
    role: 'Оператор B (Кузнецова)',
    items: [
      { label: 'Батареи Canon R5 (x4)', checked: true },
      { label: 'Карты SD V90 (x3)', checked: true },
      { label: 'Объектив 70-200mm f/2.8', checked: true },
      { label: 'Дрон DJI Mini 3 Pro', checked: true },
      { label: 'Батареи дрона (x3)', checked: true },
      { label: 'Посадочный коврик', checked: false },
    ],
  },
  {
    id: 'ch3',
    role: 'Звук (Петров)',
    items: [
      { label: 'Zoom F6 + батареи', checked: true },
      { label: 'Boom MKH 416 + удочка', checked: true },
      { label: 'Петличка DPA (x2)', checked: true },
      { label: 'Передатчик Sennheiser (x2)', checked: false },
      { label: 'Наушники мониторные', checked: true },
      { label: 'Запасные батареи AA (x8)', checked: true },
    ],
  },
];

export default function ProjectOnSetPage() {
  const currentDay = DEMO_SHOOT_DAYS[0]; // Утро невесты
  const currentScene = currentDay.scenes[1]; // Сборы невесты — в процессе

  return (
    <div>
      <div className="flex items-center justify-between gap-4 mb-6">
        <div className="flex-1 min-w-0">
          <h1 className="font-headline font-bold text-foreground text-lg md:text-xl">
            На площадке
          </h1>
          <p className="text-[11px] text-muted-foreground">
            {currentDay.title} — {currentDay.location}
          </p>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-[10px] font-bold uppercase text-green-600">Съёмка идёт</span>
          </div>
          <div className="bg-di-surface-mid rounded-lg px-3 py-1.5 font-mono text-lg font-bold text-foreground">
            09:47
          </div>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* ═══ Левая колонка: Shot Log + Таймер ═══ */}
        <div className="space-y-6">

          {/* Текущая сцена */}
          <div>
            <h2 className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-3">
              Текущая сцена
            </h2>
            <div className="bg-di-surface-mid rounded-xl border-l-4 border-l-blue-500 p-4">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-di-surface-high text-blue-500 font-medium uppercase">
                    {SCENE_TYPE_LABELS[currentScene.type]}
                  </span>
                  <span className="font-semibold text-foreground text-sm">{currentScene.description}</span>
                </div>
                <span className="text-xs text-muted-foreground">{currentScene.duration} мин</span>
              </div>
              <div className="flex items-center gap-4 mt-3">
                <button className="bg-blue-600 hover:bg-blue-700 text-white rounded-md px-4 py-2 text-sm font-semibold transition-colors">
                  Следующая сцена
                </button>
                <div className="flex items-center gap-2">
                  <div className="w-full bg-di-surface-high rounded-full h-2 w-32">
                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: '40%' }} />
                  </div>
                  <span className="text-[10px] text-muted-foreground">2 из 4</span>
                </div>
              </div>
            </div>
          </div>

          {/* Shot Log */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
                Shot Log
              </h2>
              <button className="bg-blue-600 hover:bg-blue-700 text-white rounded-md px-3 py-1.5 text-xs font-semibold transition-colors">
                + Запись
              </button>
            </div>
            <div className="space-y-1.5">
              {DEMO_SHOT_LOG.slice().reverse().map((entry) => (
                <div key={entry.id} className="flex items-start gap-3 bg-di-surface-high rounded-lg px-3 py-2.5">
                  <span className="font-mono text-xs text-blue-500 font-bold w-10 flex-shrink-0 mt-0.5">
                    {entry.time}
                  </span>
                  <div className="flex-1 min-w-0">
                    {entry.scene && (
                      <span className="text-[10px] text-muted-foreground uppercase block mb-0.5">
                        {entry.scene}
                      </span>
                    )}
                    <p className="text-sm text-foreground">{entry.note}</p>
                  </div>
                  <span className={`text-[10px] px-1.5 py-0.5 rounded font-medium uppercase flex-shrink-0 ${
                    entry.type === 'tech'
                      ? 'bg-amber-500/15 text-amber-500'
                      : entry.type === 'action'
                        ? 'bg-green-500/15 text-green-500'
                        : 'bg-blue-500/15 text-blue-500'
                  }`}>
                    {entry.type === 'tech' ? 'ТЕХ' : entry.type === 'action' ? 'ДЕЙСТВИЕ' : 'B-ROLL'}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ═══ Правая колонка: Чеклисты ═══ */}
        <div className="space-y-6">

          {/* Погода */}
          <div>
            <h2 className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-3">
              Погода на площадке
            </h2>
            <div className="bg-di-surface-mid rounded-xl border border-transparent p-4 flex items-center gap-6">
              <div>
                <span className="font-headline text-3xl font-extrabold text-foreground">+14°</span>
              </div>
              <div className="text-sm text-di-on-surface-variant space-y-0.5">
                <p>Облачно, без осадков</p>
                <p className="text-[10px] text-muted-foreground">Ветер: 3 м/с · Влажность: 62%</p>
              </div>
            </div>
          </div>

          {/* Чеклисты по ролям */}
          <div>
            <h2 className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-3">
              Чеклисты
            </h2>
            <div className="space-y-3">
              {DEMO_CHECKLISTS.map((checklist) => {
                const done = checklist.items.filter((i) => i.checked).length;
                const total = checklist.items.length;
                const pct = Math.round((done / total) * 100);
                return (
                  <div key={checklist.id} className="bg-di-surface-mid rounded-xl border border-transparent p-4">
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-semibold text-foreground text-sm">{checklist.role}</span>
                      <span className="text-[10px] text-muted-foreground">{done}/{total}</span>
                    </div>
                    <div className="w-full bg-di-surface-high rounded-full h-1.5 mb-3">
                      <div
                        className={`h-1.5 rounded-full transition-all ${pct === 100 ? 'bg-green-500' : 'bg-blue-500'}`}
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                    <div className="space-y-1.5">
                      {checklist.items.map((item, idx) => (
                        <label key={idx} className="flex items-center gap-3 cursor-pointer group">
                          <div className={`w-5 h-5 rounded border-2 flex items-center justify-center flex-shrink-0 transition-colors ${
                            item.checked
                              ? 'bg-blue-600 border-blue-600'
                              : 'border-di-outline-variant/40 group-hover:border-blue-500'
                          }`}>
                            {item.checked && (
                              <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                              </svg>
                            )}
                          </div>
                          <span className={`text-sm ${item.checked ? 'text-muted-foreground line-through' : 'text-foreground'}`}>
                            {item.label}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
