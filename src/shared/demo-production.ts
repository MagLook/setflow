// ============================================================
// Производственные данные — расстановка, настройка, процесс
// ============================================================

// План площадки: элементы для каждого съёмочного блока
export const DEMO_SET_ELEMENTS = {
  ceremony: {
    title: 'Церемония — ЗАГС',
    room: { width: 12, height: 8, label: 'Зал бракосочетания, 96 м²' },
    cameras: [
      { id: 'cam-a', label: 'Камера A (основная)', model: 'Sony FX6 + 24-70mm', position: 'Справа от пары, 4м', height: '160 см (штатив)', angle: 'Средний план пары + ведущий', operator: 'Волков', notes: 'Основной ракурс, не перекрывать обзор гостям' },
      { id: 'cam-b', label: 'Камера B (крупный)', model: 'Canon R5 + 70-200mm', position: 'Задний ряд, по центру, 8м', height: '175 см (моноподонад)', angle: 'Крупные планы лиц, эмоции', operator: 'Кузнецова', notes: 'Сменный фокус: невеста ↔ жених' },
    ],
    lights: [
      { id: 'light-1', label: 'Заполняющий', model: 'Aputure 600d + софтбокс 90см', position: 'Слева от пары, 3м, на стойке 2.5м', power: '60%', colorTemp: '5600K', notes: 'Мягкий заполняющий, не слепить пару' },
      { id: 'light-2', label: 'Контровой', model: 'Godox SL-200 III', position: 'Сзади-справа, 5м, на стойке 2.8м', power: '40%', colorTemp: '5600K', notes: 'Контур на волосах, отделение от фона' },
    ],
    sound: [
      { id: 'snd-1', label: 'Петличка жениха', model: 'DPA 4060 + Sennheiser TX', channel: 'Ch.1', notes: 'Закрепить под лацканом, проверить трение' },
      { id: 'snd-2', label: 'Петличка невесты', model: 'DPA 4060 + Sennheiser TX', channel: 'Ch.2', notes: 'В букете или на платье (визажист поможет)' },
      { id: 'snd-3', label: 'Бум-микрофон', model: 'MKH 416 + удочка', channel: 'Ch.3', notes: 'Над ведущим, вне кадра камеры A' },
      { id: 'snd-4', label: 'Рекордер', model: 'Zoom F6, 32-bit float', channel: 'Master', notes: '4 канала, уровни -12dB, мониторинг в наушниках' },
    ],
    talent: [
      { id: 'tal-1', label: 'Жених', position: 'Справа (от камеры)', mark: 'Синяя метка на полу' },
      { id: 'tal-2', label: 'Невеста', position: 'Слева (от камеры)', mark: 'Розовая метка на полу' },
      { id: 'tal-3', label: 'Ведущий', position: 'По центру, лицом к паре', mark: 'Жёлтая метка' },
      { id: 'tal-4', label: 'Свидетели', position: 'По бокам от пары', mark: 'Без метки' },
    ],
  },
  banquet: {
    title: 'Банкет — ресторан «Олимп»',
    room: { width: 15, height: 10, label: 'Банкетный зал, 120 м², потолок 4.5м' },
    cameras: [
      { id: 'cam-a2', label: 'Камера A (мобильная)', model: 'Sony FX6 + DJI RS3', position: 'Мобильная, стартовая — у танцпола', height: 'Стедикам, ~140 см', angle: 'Динамические проводки, first dance', operator: 'Волков', notes: 'Стедикам всю смену, перемещение по залу' },
      { id: 'cam-b2', label: 'Камера B (статика + крупный)', model: 'Canon R5 + 135mm', position: 'Левый угол зала, у стены', height: '170 см (штатив)', angle: 'Крупные планы: тосты, реакции, эмоции', operator: 'Кузнецова', notes: 'Переключение: штатив ↔ с руки для гостей' },
      { id: 'cam-c', label: 'Дрон (если потолок позволяет)', model: 'DJI Mini 3 Pro', position: 'Над танцполом, 3м', height: 'Потолок 4.5м, запас 1.5м', angle: 'Сверху: кружение, первый танец', operator: 'Кузнецова', notes: 'Только для первого танца и финала, 5 мин полёта' },
    ],
    lights: [
      { id: 'light-3', label: 'Контровой (танцпол)', model: 'Aputure 600d + рефлектор', position: 'За танцполом, на стойке 3м', power: '80%', colorTemp: '5600K', notes: 'Контровой для первого танца, красивый контур' },
      { id: 'light-4', label: 'Заполняющий (сцена)', model: 'Godox SL-200 + софтбокс 120см', position: 'Слева от сцены/микрофона', power: '50%', colorTemp: '5600K', notes: 'Для тостов и выступлений' },
      { id: 'light-5', label: 'Фоновый (ambient)', model: 'Aputure Amaran 200d + цветной гель', position: 'За столом молодожёнов', power: '30%', colorTemp: '3200K (тёплый)', notes: 'Тёплый фон, создание атмосферы' },
    ],
    sound: [
      { id: 'snd-5', label: 'Линейный вход с пульта', model: 'XLR → Zoom F6', channel: 'Ch.1', notes: 'Музыка + микрофон ди-джея/тамады' },
      { id: 'snd-6', label: 'Петличка тамады', model: 'DPA 4060 + Sennheiser TX', channel: 'Ch.2', notes: 'Основной голос ведущего' },
      { id: 'snd-7', label: 'Бум (у сцены)', model: 'MKH 416 на стойке', channel: 'Ch.3', notes: 'Тосты гостей у микрофона' },
      { id: 'snd-8', label: 'Ambient', model: 'Rode NT5 (стерео)', channel: 'Ch.4', notes: 'Общая атмосфера зала: смех, аплодисменты' },
    ],
    talent: [
      { id: 'tal-5', label: 'Молодожёны', position: 'Центральный стол', mark: 'Основная точка' },
      { id: 'tal-6', label: 'Тамада', position: 'У микрофона / сцена', mark: 'Свободное перемещение' },
    ],
  },
};

// Пошаговый производственный процесс
export const DEMO_PRODUCTION_WORKFLOW = [
  {
    id: 'pw-pre',
    phase: 'pre' as const,
    phaseLabel: 'За день до съёмки',
    steps: [
      { id: 'ps1', title: 'Проверка оборудования', status: 'done' as const, assignee: 'Орлов', description: 'Все единицы из списка проверены, батареи заряжены', duration: '60 мин' },
      { id: 'ps2', title: 'Форматирование носителей', status: 'done' as const, assignee: 'Орлов', description: '4 карты CFexpress + 3 SD отформатированы, подписаны', duration: '15 мин' },
      { id: 'ps3', title: 'Загрузка LUT на камеры', status: 'done' as const, assignee: 'Кузнецова', description: 'Portra 400 warm загружен на FX6 и R5', duration: '10 мин' },
      { id: 'ps4', title: 'Тест звукового тракта', status: 'done' as const, assignee: 'Петров', description: '2 петлички, бум, Zoom F6: все 4 канала записывают', duration: '30 мин' },
      { id: 'ps5', title: 'Упаковка и загрузка', status: 'done' as const, assignee: 'Орлов', description: 'Всё оборудование в кейсах, загружено в транспорт', duration: '45 мин' },
    ],
  },
  {
    id: 'pw-setup-1',
    phase: 'setup' as const,
    phaseLabel: 'Утро невесты — установка',
    steps: [
      { id: 'ps6', title: 'Приезд, осмотр локации', status: 'done' as const, assignee: 'Волков', description: 'Оценка света из окон, выбор точек для камер', duration: '10 мин' },
      { id: 'ps7', title: 'Установка камеры A', status: 'done' as const, assignee: 'Волков', description: 'FX6 на штативе у окна, 24-70mm, ND8', duration: '5 мин' },
      { id: 'ps8', title: 'Установка камеры B', status: 'done' as const, assignee: 'Кузнецова', description: 'R5 на моноподе, 85mm f/1.4 для деталей', duration: '5 мин' },
      { id: 'ps9', title: 'Установка света', status: 'done' as const, assignee: 'Смирнова', description: 'Aputure 600d + софтбокс слева от окна, отражатель справа', duration: '15 мин' },
      { id: 'ps10', title: 'Готовность', status: 'done' as const, assignee: 'Волков', description: 'Тестовые кадры, баланс белого, уровни — ✅', duration: '5 мин' },
    ],
  },
  {
    id: 'pw-shoot-1',
    phase: 'shoot' as const,
    phaseLabel: 'Утро невесты — съёмка',
    steps: [
      { id: 'ps11', title: 'Сцена 1: Детали', status: 'done' as const, assignee: 'Волков + Кузнецова', description: 'Платье, туфли, букет, кольца. 47 кадров, 3 видео-клипа.', duration: '30 мин' },
      { id: 'ps12', title: 'Сцена 2: Сборы невесты', status: 'in_progress' as const, assignee: 'Все', description: 'Макияж, причёска. Камера B — крупные планы.', duration: '60 мин' },
      { id: 'ps13', title: 'Сцена 3: Портреты', status: 'pending' as const, assignee: 'Волков + Смирнова', description: 'У окна с Aputure 600d. 3–5 поз.', duration: '20 мин' },
      { id: 'ps14', title: 'Сцена 4: Выход', status: 'pending' as const, assignee: 'Все + дрон', description: 'Встреча с женихом. Дрон 15м.', duration: '15 мин' },
    ],
  },
  {
    id: 'pw-setup-2',
    phase: 'setup' as const,
    phaseLabel: 'Церемония — установка',
    steps: [
      { id: 'ps15', title: 'Приезд в ЗАГС, осмотр', status: 'pending' as const, assignee: 'Волков', description: 'Зал 12×8м, оценка освещения, точки для камер', duration: '10 мин' },
      { id: 'ps16', title: 'Камера A: справа, 4м', status: 'pending' as const, assignee: 'Волков', description: 'FX6 на штативе, 24-70mm, средний план пары', duration: '5 мин' },
      { id: 'ps17', title: 'Камера B: задний ряд, центр', status: 'pending' as const, assignee: 'Кузнецова', description: 'R5 + 70-200mm, крупные планы', duration: '5 мин' },
      { id: 'ps18', title: 'Свет: Aputure слева, Godox контровой', status: 'pending' as const, assignee: 'Смирнова', description: 'По плану площадки «Церемония»', duration: '15 мин' },
      { id: 'ps19', title: 'Звук: 2 петлички + бум', status: 'pending' as const, assignee: 'Петров', description: 'Петличка жених (Ch.1), невеста (Ch.2), бум на ведущем (Ch.3)', duration: '10 мин' },
      { id: 'ps20', title: 'Тест и готовность', status: 'pending' as const, assignee: 'Волков', description: 'Тестовая запись, проверка всех каналов', duration: '5 мин' },
    ],
  },
  {
    id: 'pw-setup-3',
    phase: 'setup' as const,
    phaseLabel: 'Банкет — установка',
    steps: [
      { id: 'ps21', title: 'Приезд, расстановка по плану', status: 'pending' as const, assignee: 'Все', description: 'Зал 120м². План площадки «Банкет — свет + камеры»', duration: '10 мин' },
      { id: 'ps22', title: 'Свет: 3 точки', status: 'pending' as const, assignee: 'Смирнова', description: 'Контровой за танцполом, заполняющий у сцены, ambient за столом', duration: '20 мин' },
      { id: 'ps23', title: 'Звук: линейный вход + петличка + бум', status: 'pending' as const, assignee: 'Петров', description: 'XLR с пульта (Ch.1), петличка тамады (Ch.2), бум (Ch.3), ambient (Ch.4)', duration: '15 мин' },
      { id: 'ps24', title: 'Диммировать люстры до 30%', status: 'pending' as const, assignee: 'Орлов', description: 'Попросить менеджера. Управление у бармена.', duration: '5 мин' },
    ],
  },
];

export const WORKFLOW_PHASE_META: Record<string, { label: string; color: string; icon: string }> = {
  pre: { label: 'Подготовка', color: 'purple', icon: '📦' },
  setup: { label: 'Установка', color: 'amber', icon: '🔧' },
  shoot: { label: 'Съёмка', color: 'green', icon: '🎬' },
  wrap: { label: 'Сворачивание', color: 'blue', icon: '📥' },
};

export const STEP_STATUS_META: Record<string, { label: string; color: string }> = {
  done: { label: 'Готово', color: 'green' },
  in_progress: { label: 'В процессе', color: 'blue' },
  pending: { label: 'Ожидает', color: 'gray' },
};

// Мониторинг оборудования в реальном времени
export const DEMO_EQUIPMENT_LIVE = [
  { id: 'el1', name: 'Sony FX6 (A)', battery: 87, storage: '58% (298 ГБ свободно)', recording: true, temp: '41°C' },
  { id: 'el2', name: 'Canon R5 (B)', battery: 64, storage: '72% (210 ГБ свободно)', recording: true, temp: '52°C' },
  { id: 'el3', name: 'DJI Mini 3 Pro', battery: 100, storage: '95% (28 ГБ свободно)', recording: false, temp: '—' },
  { id: 'el4', name: 'Zoom F6', battery: 93, storage: '89% (115 ГБ свободно)', recording: true, temp: '—' },
  { id: 'el5', name: 'Aputure 600d', battery: null, storage: null, recording: null, temp: '68°C' },
  { id: 'el6', name: 'Godox SL-200', battery: null, storage: null, recording: null, temp: '45°C' },
];
