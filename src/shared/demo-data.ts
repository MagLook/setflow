// ============================================================
// Демо-данные для проекта "Свадьба Ивановых"
// ============================================================

export const DEMO_PROJECT = {
  id: 'demo',
  title: 'Свадьба Ивановых',
  type: 'event' as const,
  status: 'planning' as const,
  clientName: 'Иванов Алексей',
  startDate: '2026-04-15',
  endDate: '2026-04-17',
  budget: 350000,
  description: 'Свадебная съёмка: утро невесты, церемония в загсе, банкет в ресторане «Олимп».',
};

export const DEMO_CREW = [
  {
    id: 'c1',
    name: 'Сергей Волков',
    role: 'operator' as const,
    roleLabel: 'Оператор',
    phone: '+7 921 123-45-67',
    email: 'volkov@mail.ru',
    ratePerDay: 15000,
    avatar: null,
    competencies: ['Sony FX6', 'DJI RS3', 'Steadicam'],
    projectRole: 'Основная камера (A)',
    availability: 'free' as const,
  },
  {
    id: 'c2',
    name: 'Анна Кузнецова',
    role: 'operator' as const,
    roleLabel: 'Оператор',
    phone: '+7 911 234-56-78',
    email: 'anna.k@gmail.com',
    ratePerDay: 12000,
    avatar: null,
    competencies: ['Canon R5', 'Ronin', 'Дрон DJI Mini 3'],
    projectRole: 'Вторая камера (B) + дрон',
    availability: 'free' as const,
  },
  {
    id: 'c3',
    name: 'Михаил Петров',
    role: 'sound_engineer' as const,
    roleLabel: 'Звукорежиссёр',
    phone: '+7 905 345-67-89',
    email: 'petrov.sound@yandex.ru',
    ratePerDay: 10000,
    avatar: null,
    competencies: ['Zoom F6', 'Sennheiser MKH416', 'Петличка DPA'],
    projectRole: 'Звук: петличка + бум',
    availability: 'free' as const,
  },
  {
    id: 'c4',
    name: 'Дмитрий Орлов',
    role: 'assistant' as const,
    roleLabel: 'Ассистент',
    phone: '+7 999 456-78-90',
    email: 'orlov.d@mail.ru',
    ratePerDay: 5000,
    avatar: null,
    competencies: ['Свет', 'Grip', 'Транспорт'],
    projectRole: 'Ассистент + водитель',
    availability: 'tentative' as const,
  },
  {
    id: 'c5',
    name: 'Елена Смирнова',
    role: 'lighting_tech' as const,
    roleLabel: 'Осветитель',
    phone: '+7 912 567-89-01',
    email: 'elena.light@gmail.com',
    ratePerDay: 8000,
    avatar: null,
    competencies: ['Aputure 600d', 'Godox', 'Отражатели'],
    projectRole: 'Свет на церемонии и банкете',
    availability: 'free' as const,
  },
];

export const DEMO_EQUIPMENT = [
  {
    id: 'e1',
    category: 'camera' as const,
    categoryLabel: 'Камеры',
    name: 'Sony FX6',
    model: 'ILME-FX6V',
    serial: 'FX6-2024-001',
    status: 'on_shoot' as const,
    statusLabel: 'На проекте',
    ownership: 'owned' as const,
    assignedTo: 'Сергей Волков',
  },
  {
    id: 'e2',
    category: 'camera' as const,
    categoryLabel: 'Камеры',
    name: 'Canon EOS R5',
    model: 'R5 Mark II',
    serial: 'R5-2025-042',
    status: 'on_shoot' as const,
    statusLabel: 'На проекте',
    ownership: 'owned' as const,
    assignedTo: 'Анна Кузнецова',
  },
  {
    id: 'e3',
    category: 'lens' as const,
    categoryLabel: 'Объективы',
    name: 'Sony 24-70mm f/2.8 GM II',
    model: 'SEL2470GM2',
    serial: 'L-2470-018',
    status: 'on_shoot' as const,
    statusLabel: 'На проекте',
    ownership: 'owned' as const,
    assignedTo: 'Сергей Волков',
  },
  {
    id: 'e4',
    category: 'lens' as const,
    categoryLabel: 'Объективы',
    name: 'Canon RF 70-200mm f/2.8L',
    model: 'RF70-200',
    serial: 'L-7020-007',
    status: 'on_shoot' as const,
    statusLabel: 'На проекте',
    ownership: 'owned' as const,
    assignedTo: 'Анна Кузнецова',
  },
  {
    id: 'e5',
    category: 'lighting' as const,
    categoryLabel: 'Свет',
    name: 'Aputure 600d Pro',
    model: 'LS 600d Pro',
    serial: 'AP-600-003',
    status: 'on_shoot' as const,
    statusLabel: 'На проекте',
    ownership: 'owned' as const,
    assignedTo: 'Елена Смирнова',
  },
  {
    id: 'e6',
    category: 'lighting' as const,
    categoryLabel: 'Свет',
    name: 'Godox SL-200 III',
    model: 'SL200III',
    serial: 'GD-200-012',
    status: 'on_shoot' as const,
    statusLabel: 'На проекте',
    ownership: 'owned' as const,
    assignedTo: 'Елена Смирнова',
  },
  {
    id: 'e7',
    category: 'audio' as const,
    categoryLabel: 'Звук',
    name: 'Zoom F6',
    model: 'F6',
    serial: 'ZM-F6-009',
    status: 'on_shoot' as const,
    statusLabel: 'На проекте',
    ownership: 'owned' as const,
    assignedTo: 'Михаил Петров',
  },
  {
    id: 'e8',
    category: 'audio' as const,
    categoryLabel: 'Звук',
    name: 'Sennheiser MKH 416',
    model: 'MKH416-P48U3',
    serial: 'SN-416-005',
    status: 'on_shoot' as const,
    statusLabel: 'На проекте',
    ownership: 'owned' as const,
    assignedTo: 'Михаил Петров',
  },
  {
    id: 'e9',
    category: 'grip' as const,
    categoryLabel: 'Grip',
    name: 'DJI RS 3 Pro',
    model: 'RS3 Pro',
    serial: 'DJI-RS3-014',
    status: 'on_shoot' as const,
    statusLabel: 'На проекте',
    ownership: 'owned' as const,
    assignedTo: 'Сергей Волков',
  },
  {
    id: 'e10',
    category: 'camera' as const,
    categoryLabel: 'Камеры',
    name: 'DJI Mini 3 Pro',
    model: 'Mini 3 Pro',
    serial: 'DJI-M3P-021',
    status: 'on_shoot' as const,
    statusLabel: 'На проекте',
    ownership: 'owned' as const,
    assignedTo: 'Анна Кузнецова',
  },
];

export const DEMO_SHOOT_DAYS = [
  {
    id: 'sd1',
    date: '2026-04-15',
    title: 'Утро невесты',
    location: 'Квартира невесты, ул. Парковая 12',
    callTime: '08:00',
    wrapTime: '12:00',
    status: 'planned' as const,
    crew: ['c1', 'c2', 'c4'],
    scenes: [
      { id: 's1', order: 1, type: 'b_roll' as const, description: 'Детали: платье, туфли, букет, кольца', duration: 30 },
      { id: 's2', order: 2, type: 'interview' as const, description: 'Сборы невесты: макияж, причёска', duration: 60 },
      { id: 's3', order: 3, type: 'b_roll' as const, description: 'Портреты невесты у окна', duration: 20 },
      { id: 's4', order: 4, type: 'action' as const, description: 'Выход, встреча с женихом', duration: 15 },
    ],
  },
  {
    id: 'sd2',
    date: '2026-04-15',
    title: 'Церемония',
    location: 'ЗАГС Центрального района, Невский пр. 56',
    callTime: '13:00',
    wrapTime: '15:30',
    status: 'planned' as const,
    crew: ['c1', 'c2', 'c3', 'c4', 'c5'],
    scenes: [
      { id: 's5', order: 1, type: 'action' as const, description: 'Приезд, ожидание', duration: 20 },
      { id: 's6', order: 2, type: 'action' as const, description: 'Церемония бракосочетания', duration: 30 },
      { id: 's7', order: 3, type: 'action' as const, description: 'Выход, поздравления, фото с гостями', duration: 30 },
      { id: 's8', order: 4, type: 'b_roll' as const, description: 'Прогулка: Летний сад, набережная', duration: 60 },
    ],
  },
  {
    id: 'sd3',
    date: '2026-04-15',
    title: 'Банкет',
    location: 'Ресторан «Олимп», ул. Ломоносова 14',
    callTime: '17:00',
    wrapTime: '23:00',
    status: 'planned' as const,
    crew: ['c1', 'c2', 'c3', 'c4', 'c5'],
    scenes: [
      { id: 's9', order: 1, type: 'b_roll' as const, description: 'Декорации зала до прихода гостей', duration: 20 },
      { id: 's10', order: 2, type: 'action' as const, description: 'Встреча молодожёнов, первый танец', duration: 30 },
      { id: 's11', order: 3, type: 'action' as const, description: 'Тосты, поздравления, конкурсы', duration: 120 },
      { id: 's12', order: 4, type: 'action' as const, description: 'Торт, букет, завершение', duration: 30 },
    ],
  },
];

export const DEMO_SET_PLANS = [
  {
    id: 'sp1',
    name: 'Церемония — расстановка камер',
    shootDay: 'Церемония',
    scene: 'Церемония бракосочетания',
    elements: 4,
    updatedAt: '2026-03-28',
  },
  {
    id: 'sp2',
    name: 'Банкет — свет + камеры',
    shootDay: 'Банкет',
    scene: 'Декорации зала',
    elements: 7,
    updatedAt: '2026-03-27',
  },
];

// Helpers
export const AVAILABILITY_LABELS: Record<string, string> = {
  free: 'Свободен',
  busy: 'Занят',
  tentative: 'Под вопросом',
};

export const AVAILABILITY_COLORS: Record<string, string> = {
  free: 'green',
  busy: 'red',
  tentative: 'amber',
};

export const SCENE_TYPE_LABELS: Record<string, string> = {
  interview: 'Интервью',
  b_roll: 'B-roll',
  stand_up: 'Стендап',
  dialogue: 'Диалог',
  action: 'Действие',
  other: 'Другое',
};

// ============================================================
// База знаний
// ============================================================

export const DEMO_NOTES = [
  {
    id: 'n1',
    title: 'Сценарий съёмочного дня',
    type: 'script' as const,
    typeLabel: 'Сценарий',
    tags: ['сценарий', 'тайминг'],
    content: `## Утро невесты (08:00–12:00)

### Сцена 1 — Детали (30 мин)
Снимаем без присутствия невесты: платье на вешалке у окна, туфли, букет, приглашения, кольца на подушечке. Естественный свет, не использовать вспышку.

**Камера A:** общие планы + детали (24-70mm)
**Камера B:** макро (85mm f/1.4)

### Сцена 2 — Сборы (60 мин)
Макияж и причёска. Камера B снимает процесс крупными планами. Камера A — средние планы, реакции подруг.

### Сцена 3 — Портреты (20 мин)
У большого окна с Aputure 600d через софтбокс. Отражатель справа. 3–5 поз.

### Сцена 4 — Выход (15 мин)
Встреча с женихом у подъезда. Дрон на высоте 15м, общий план.`,
    updatedAt: '2026-03-28',
    author: 'Сергей Волков',
  },
  {
    id: 'n2',
    title: 'Мудборд: стиль и настроение',
    type: 'moodboard' as const,
    typeLabel: 'Мудборд',
    tags: ['референсы', 'стиль', 'цвет'],
    content: `## Цветовая палитра
Тёплые тона, золотистый час, минимум холодных оттенков. LUT: «Portra 400 warm».

## Стилистика
- Кинематографичный look, shallow DOF
- Плавные движения камеры, без рывков
- B-roll в стиле документального кино
- Минимум постановки — ловим моменты

## Референсы
1. Brandon Woelfel — мягкий свет, боке
2. Sam Hurd — призмы, отражения
3. Matt WhoisMatt Johnson — cinematic wedding

## Монтаж
- Highlight: 3–5 минут, музыка Ludovico Einaudi
- Полная версия: 20–30 минут, хронологический порядок`,
    updatedAt: '2026-03-27',
    author: 'Анна Кузнецова',
  },
  {
    id: 'n3',
    title: 'Технические заметки по звуку',
    type: 'note' as const,
    typeLabel: 'Заметка',
    tags: ['звук', 'техника'],
    content: `## Конфигурация звука

**ЗАГС:** Петличка DPA на жениха + петличка на невесту. Boom MKH 416 на стойке у ведущего. Zoom F6 пишет 4 канала в 32-bit float.

**Банкет:** Линейный вход с пульта ди-джея (канал 3). Петличка на тамаду (канал 1). Boom на стойке у сцены (канал 2). Ambient микрофон (канал 4).

**Важно:** В ЗАГСе эхо — нужен deadcat на boom. Уровни проверить за 15 минут до начала.`,
    updatedAt: '2026-03-26',
    author: 'Михаил Петров',
  },
  {
    id: 'n4',
    title: 'Контакты площадок',
    type: 'reference' as const,
    typeLabel: 'Справочник',
    tags: ['контакты', 'локации'],
    content: `## ЗАГС Центрального района
- Адрес: Невский пр. 56
- Координатор: Мария Ивановна, +7 812 555-12-34
- Парковка: двор, 3 места, въезд со стороны канала
- Розетки: в коридоре слева от зала

## Ресторан «Олимп»
- Адрес: ул. Ломоносова 14
- Менеджер: Артём, +7 812 555-56-78
- Загрузка оборудования: через служебный вход с торца здания
- Свет: есть диммируемые люстры, управление у бармена
- Зал: 120 м², потолок 4.5 м, 15 столов`,
    updatedAt: '2026-03-25',
    author: 'Дмитрий Орлов',
  },
  {
    id: 'n5',
    title: 'Раскадровка: первый танец',
    type: 'storyboard' as const,
    typeLabel: 'Раскадровка',
    tags: ['раскадровка', 'банкет', 'танец'],
    content: `## Первый танец (3 минуты)

| # | План | Камера | Объектив | Описание |
|---|------|--------|----------|----------|
| 1 | Общий | A | 24mm | Пара выходит на танцпол, гости аплодируют |
| 2 | Средний | B | 70mm | Пара начинает танец, лица |
| 3 | Крупный | A | 85mm | Руки, детали, эмоции |
| 4 | Сверху | Дрон | wide | Кружение сверху (если потолок позволяет) |
| 5 | Средний | B | 135mm | Реакции гостей, слёзы, улыбки |
| 6 | Общий | A | 24mm | Финал танца, аплодисменты |

**Свет:** Aputure 600d сзади-сверху (контровой), Godox SL-200 с софтбоксом спереди-слева. Диммировать люстры до 30%.`,
    updatedAt: '2026-03-24',
    author: 'Сергей Волков',
  },
];

export const NOTE_TYPE_COLORS: Record<string, string> = {
  script: 'blue',
  moodboard: 'purple',
  note: 'green',
  reference: 'amber',
  storyboard: 'rose',
  other: 'gray',
};

// ============================================================
// Медиа
// ============================================================

export const DEMO_ALBUMS = [
  {
    id: 'a1',
    title: 'Референсы и мудборд',
    count: 12,
    isClientVisible: false,
    coverColor: 'from-blue-600 to-purple-600',
  },
  {
    id: 'a2',
    title: 'Утро невесты — отбор',
    count: 48,
    isClientVisible: true,
    coverColor: 'from-rose-500 to-orange-400',
  },
  {
    id: 'a3',
    title: 'Церемония — отбор',
    count: 67,
    isClientVisible: true,
    coverColor: 'from-amber-500 to-yellow-400',
  },
  {
    id: 'a4',
    title: 'Банкет — отбор',
    count: 93,
    isClientVisible: false,
    coverColor: 'from-green-500 to-teal-400',
  },
  {
    id: 'a5',
    title: 'Дрон — все дубли',
    count: 24,
    isClientVisible: false,
    coverColor: 'from-cyan-500 to-blue-500',
  },
];

export const DEMO_MEDIA_FILES = [
  { id: 'mf1', name: 'DSC_0142.jpg', type: 'photo', album: 'Утро невесты — отбор', size: '14.2 МБ', date: '2026-04-15 08:23', tags: ['детали', 'кольца'], favorited: true },
  { id: 'mf2', name: 'DSC_0156.jpg', type: 'photo', album: 'Утро невесты — отбор', size: '18.7 МБ', date: '2026-04-15 08:41', tags: ['платье'], favorited: true },
  { id: 'mf3', name: 'A001_C003.mp4', type: 'video', album: 'Утро невесты — отбор', size: '2.3 ГБ', date: '2026-04-15 09:15', tags: ['сборы', 'макияж'], favorited: false },
  { id: 'mf4', name: 'DSC_0201.jpg', type: 'photo', album: 'Утро невесты — отбор', size: '16.1 МБ', date: '2026-04-15 10:32', tags: ['портрет', 'окно'], favorited: true },
  { id: 'mf5', name: 'A001_C008.mp4', type: 'video', album: 'Церемония — отбор', size: '4.8 ГБ', date: '2026-04-15 13:45', tags: ['церемония', 'клятва'], favorited: true },
  { id: 'mf6', name: 'DJI_0023.mp4', type: 'video', album: 'Дрон — все дубли', size: '1.1 ГБ', date: '2026-04-15 14:30', tags: ['дрон', 'прогулка'], favorited: false },
  { id: 'mf7', name: 'A002_C012.mp4', type: 'video', album: 'Банкет — отбор', size: '6.2 ГБ', date: '2026-04-15 18:10', tags: ['первый танец'], favorited: true },
  { id: 'mf8', name: 'DSC_0389.jpg', type: 'photo', album: 'Банкет — отбор', size: '15.4 МБ', date: '2026-04-15 19:22', tags: ['торт', 'гости'], favorited: false },
];

// ============================================================
// AI-подключения
// ============================================================

export const DEMO_AI_CONNECTIONS = [
  {
    id: 'ai1',
    name: 'Claude (Anthropic)',
    provider: 'Anthropic',
    model: 'claude-sonnet-4-6',
    type: 'llm' as const,
    typeLabel: 'Языковая модель',
    status: 'connected' as const,
    statusLabel: 'Подключён',
    useCases: ['Генерация сценариев', 'Описания сцен', 'Call sheet текст', 'Анализ shot log'],
    apiKeySet: true,
    lastUsed: '2026-03-29',
    requestsToday: 23,
    config: {
      temperature: 0.7,
      maxTokens: 4096,
    },
  },
  {
    id: 'ai2',
    name: 'GPT-4o (OpenAI)',
    provider: 'OpenAI',
    model: 'gpt-4o',
    type: 'llm' as const,
    typeLabel: 'Языковая модель',
    status: 'connected' as const,
    statusLabel: 'Подключён',
    useCases: ['Перевод субтитров', 'Саммари интервью'],
    apiKeySet: true,
    lastUsed: '2026-03-28',
    requestsToday: 5,
    config: {
      temperature: 0.5,
      maxTokens: 4096,
    },
  },
  {
    id: 'ai3',
    name: 'Whisper (OpenAI)',
    provider: 'OpenAI',
    model: 'whisper-large-v3',
    type: 'speech' as const,
    typeLabel: 'Распознавание речи',
    status: 'connected' as const,
    statusLabel: 'Подключён',
    useCases: ['Транскрипция интервью', 'Субтитры из аудио', 'Поиск по речи'],
    apiKeySet: true,
    lastUsed: '2026-03-27',
    requestsToday: 0,
    config: {
      language: 'ru',
      format: 'srt',
    },
  },
  {
    id: 'ai4',
    name: 'Stable Diffusion XL',
    provider: 'Stability AI',
    model: 'sdxl-1.0',
    type: 'image' as const,
    typeLabel: 'Генерация изображений',
    status: 'disconnected' as const,
    statusLabel: 'Не подключён',
    useCases: ['Мудборды', 'Концепт-арт локаций', 'Превью раскадровки'],
    apiKeySet: false,
    lastUsed: null,
    requestsToday: 0,
    config: {},
  },
  {
    id: 'ai5',
    name: 'ElevenLabs',
    provider: 'ElevenLabs',
    model: 'eleven_multilingual_v2',
    type: 'voice' as const,
    typeLabel: 'Синтез речи',
    status: 'disconnected' as const,
    statusLabel: 'Не подключён',
    useCases: ['Озвучка черновика', 'Временный голос за кадром', 'Аудио-превью сценария'],
    apiKeySet: false,
    lastUsed: null,
    requestsToday: 0,
    config: {},
  },
  {
    id: 'ai6',
    name: 'Runway Gen-3',
    provider: 'Runway',
    model: 'gen-3-alpha',
    type: 'video' as const,
    typeLabel: 'Генерация видео',
    status: 'error' as const,
    statusLabel: 'Ошибка',
    useCases: ['Визуализация раскадровки', 'Превизуализация сцен', 'Тестовые переходы'],
    apiKeySet: true,
    lastUsed: '2026-03-20',
    requestsToday: 0,
    config: {
      resolution: '1280x768',
      duration: 10,
    },
  },
  {
    id: 'ai7',
    name: 'Topaz Video AI',
    provider: 'Topaz Labs',
    model: 'video-ai-5',
    type: 'enhancement' as const,
    typeLabel: 'Улучшение видео',
    status: 'connected' as const,
    statusLabel: 'Подключён',
    useCases: ['Апскейл до 4K', 'Стабилизация', 'Шумоподавление', 'Замедление (frame interpolation)'],
    apiKeySet: true,
    lastUsed: '2026-03-26',
    requestsToday: 0,
    config: {
      outputFormat: 'ProRes 422',
      upscaleFactor: 2,
    },
  },
  {
    id: 'ai8',
    name: 'DaVinci Resolve (локальный)',
    provider: 'Blackmagic',
    model: 'resolve-19-neural',
    type: 'local' as const,
    typeLabel: 'Локальная среда',
    status: 'connected' as const,
    statusLabel: 'Подключён',
    useCases: ['Автоцветокоррекция', 'Face refinement', 'Magic mask', 'Voice isolation'],
    apiKeySet: false,
    lastUsed: '2026-03-29',
    requestsToday: 0,
    config: {
      host: 'localhost:8099',
      gpu: 'RTX 4080',
    },
  },
];

export const AI_TYPE_ICONS: Record<string, { color: string; label: string }> = {
  llm: { color: 'blue', label: 'LLM' },
  speech: { color: 'green', label: 'STT' },
  image: { color: 'purple', label: 'IMG' },
  voice: { color: 'rose', label: 'TTS' },
  video: { color: 'orange', label: 'VID' },
  enhancement: { color: 'cyan', label: 'ENH' },
  local: { color: 'amber', label: 'LOC' },
};

export const DEMO_REVIEW_ROUNDS = [
  {
    id: 'rr1',
    version: 1,
    title: 'Highlight — черновой монтаж',
    status: 'review' as const,
    statusLabel: 'На ревью',
    duration: '3:42',
    comments: 3,
    deadline: '2026-04-25',
    uploadedAt: '2026-04-20',
  },
  {
    id: 'rr2',
    version: 1,
    title: 'Полная версия — сборка',
    status: 'draft' as const,
    statusLabel: 'Черновик',
    duration: '24:15',
    comments: 0,
    deadline: '2026-05-01',
    uploadedAt: null,
  },
];

// ============================================================
// Трекер задач
// ============================================================

export const DEMO_TASKS = [
  { id: 't1', title: 'Зарядить 6 батарей Sony NP-FZ100', status: 'done' as const, priority: 'high' as const, assignee: 'Дмитрий Орлов', shootDay: 'Утро невесты', dueDate: '2026-04-14', tags: ['оборудование'] },
  { id: 't2', title: 'Проверить разрешение на дрон (зона ЗАГСа)', status: 'done' as const, priority: 'high' as const, assignee: 'Анна Кузнецова', shootDay: null, dueDate: '2026-04-12', tags: ['документы'] },
  { id: 't3', title: 'Забронировать Aputure 600d у «ПроСвет»', status: 'done' as const, priority: 'medium' as const, assignee: 'Елена Смирнова', shootDay: null, dueDate: '2026-04-10', tags: ['аренда'] },
  { id: 't4', title: 'Подготовить список вопросов для тамады', status: 'in_progress' as const, priority: 'medium' as const, assignee: 'Сергей Волков', shootDay: 'Банкет', dueDate: '2026-04-14', tags: ['сценарий'] },
  { id: 't5', title: 'Протестировать петличку DPA на помехи', status: 'in_progress' as const, priority: 'high' as const, assignee: 'Михаил Петров', shootDay: null, dueDate: '2026-04-13', tags: ['оборудование', 'звук'] },
  { id: 't6', title: 'Скаут локации: ресторан «Олимп» (розетки, свет)', status: 'in_progress' as const, priority: 'medium' as const, assignee: 'Елена Смирнова', shootDay: 'Банкет', dueDate: '2026-04-13', tags: ['локация'] },
  { id: 't7', title: 'Отформатировать карты CFexpress (x4)', status: 'todo' as const, priority: 'medium' as const, assignee: 'Дмитрий Орлов', shootDay: 'Утро невесты', dueDate: '2026-04-14', tags: ['оборудование'] },
  { id: 't8', title: 'Привезти отражатель 5-в-1 и стойку', status: 'todo' as const, priority: 'low' as const, assignee: 'Дмитрий Орлов', shootDay: 'Церемония', dueDate: '2026-04-15', tags: ['оборудование'] },
  { id: 't9', title: 'Напомнить молодожёнам про тайминг', status: 'todo' as const, priority: 'high' as const, assignee: 'Сергей Волков', shootDay: null, dueDate: '2026-04-14', tags: ['клиент'] },
  { id: 't10', title: 'Загрузить LUT «Portra 400 warm» на обе камеры', status: 'todo' as const, priority: 'low' as const, assignee: 'Анна Кузнецова', shootDay: null, dueDate: '2026-04-14', tags: ['постпродакшн'] },
  { id: 't11', title: 'Настроить Zoom F6: 4 канала, 32-bit float', status: 'todo' as const, priority: 'medium' as const, assignee: 'Михаил Петров', shootDay: 'Церемония', dueDate: '2026-04-15', tags: ['звук'] },
  { id: 't12', title: 'Создать shared-папку для материалов', status: 'todo' as const, priority: 'low' as const, assignee: 'Сергей Волков', shootDay: null, dueDate: '2026-04-16', tags: ['постпродакшн'] },
];

export const TASK_STATUS_META: Record<string, { label: string; color: string }> = {
  todo: { label: 'Новое', color: 'gray' },
  in_progress: { label: 'В работе', color: 'blue' },
  done: { label: 'Готово', color: 'green' },
};

export const TASK_PRIORITY_META: Record<string, { label: string; color: string }> = {
  low: { label: 'Низкий', color: 'gray' },
  medium: { label: 'Средний', color: 'amber' },
  high: { label: 'Высокий', color: 'red' },
};

// ============================================================
// Чат проекта
// ============================================================

export const DEMO_CHAT_CHANNELS = [
  { id: 'ch-gen', name: 'Общий', type: 'general' as const, unread: 2 },
  { id: 'ch-sd1', name: 'Утро невесты', type: 'shoot_day' as const, unread: 0 },
  { id: 'ch-sd2', name: 'Церемония', type: 'shoot_day' as const, unread: 5 },
  { id: 'ch-sd3', name: 'Банкет', type: 'shoot_day' as const, unread: 1 },
];

export const DEMO_CHAT_MESSAGES = [
  { id: 'msg1', channel: 'ch-gen', author: 'Сергей Волков', avatar: 'СВ', time: '09:15', text: 'Доброе утро! Напоминаю: в среду финальный скаут ресторана. Кто может — подтвердите.' },
  { id: 'msg2', channel: 'ch-gen', author: 'Елена Смирнова', avatar: 'ЕС', time: '09:22', text: 'Буду! Заодно проверю розетки и точки подвеса для света.' },
  { id: 'msg3', channel: 'ch-gen', author: 'Михаил Петров', avatar: 'МП', time: '09:30', text: 'Не смогу в среду, но вопрос по звуку: есть ли линейный выход у ди-джея? Можете проверить?' },
  { id: 'msg4', channel: 'ch-gen', author: 'Елена Смирнова', avatar: 'ЕС', time: '09:32', text: 'Да, спрошу менеджера. Записала.' },
  { id: 'msg5', channel: 'ch-gen', author: 'SetFlow AI', avatar: 'AI', time: '09:35', text: '📋 Создала задачу: «Проверить линейный выход ди-джея» → Елена Смирнова, дедлайн: среда.', isAI: true },
  { id: 'msg6', channel: 'ch-gen', author: 'Анна Кузнецова', avatar: 'АК', time: '10:01', text: 'Ребята, разрешение на дрон получено! Зона ЗАГСа — ограничение 50м, нам хватит.' },
  { id: 'msg7', channel: 'ch-gen', author: 'SetFlow AI', avatar: 'AI', time: '10:02', text: '✅ Задача «Проверить разрешение на дрон» отмечена как выполненная.', isAI: true },
  { id: 'msg8', channel: 'ch-gen', author: 'Дмитрий Орлов', avatar: 'ДО', time: '11:45', text: 'Все 6 батарей заряжены и проверены. Карты отформатирую завтра.' },
  { id: 'msg9', channel: 'ch-gen', author: 'Сергей Волков', avatar: 'СВ', time: '12:10', text: '@setflow какая погода на 15 апреля?' },
  { id: 'msg10', channel: 'ch-gen', author: 'SetFlow AI', avatar: 'AI', time: '12:10', text: '🌤 Прогноз на 15 апреля (Санкт-Петербург): +14°C, переменная облачность, без осадков. Ветер 3–5 м/с. Для дрона — условия подходящие.', isAI: true },
];

// ============================================================
// Шаблоны съёмок
// ============================================================

export const DEMO_TEMPLATES = [
  {
    id: 'tpl1',
    name: 'Интервью в помещении',
    type: 'interview' as const,
    description: '2-камерная схема, 3-точечный свет, boom + петличка. Для студии или офиса.',
    crew: 3,
    equipment: 8,
    scenes: 4,
    checklists: 3,
    tasks: 6,
    icon: '🎙️',
    usageCount: 12,
  },
  {
    id: 'tpl2',
    name: 'Интервью на улице',
    type: 'interview' as const,
    description: '1 камера, отражатель, беспроводной звук. ND фильтры, ветрозащита обязательны.',
    crew: 2,
    equipment: 5,
    scenes: 3,
    checklists: 2,
    tasks: 4,
    icon: '🌳',
    usageCount: 8,
  },
  {
    id: 'tpl3',
    name: 'Свадьба (полный день)',
    type: 'event' as const,
    description: '3 камеры, дрон, полный свет и звук. 3 блока: утро, церемония, банкет. 12+ сцен.',
    crew: 5,
    equipment: 15,
    scenes: 12,
    checklists: 5,
    tasks: 15,
    icon: '💒',
    usageCount: 6,
  },
  {
    id: 'tpl4',
    name: 'Репортаж / событие',
    type: 'reportage' as const,
    description: '1 камера, накамерный свет, петличка. Максимальная мобильность и реакция.',
    crew: 2,
    equipment: 4,
    scenes: 0,
    checklists: 2,
    tasks: 3,
    icon: '📰',
    usageCount: 15,
  },
  {
    id: 'tpl5',
    name: 'Корпоративный ролик',
    type: 'corporate' as const,
    description: '2 камеры, свет, звук, телепромтер. Сценарий, дубли, постановка.',
    crew: 4,
    equipment: 12,
    scenes: 6,
    checklists: 4,
    tasks: 10,
    icon: '🏢',
    usageCount: 9,
  },
  {
    id: 'tpl6',
    name: 'Документалка (экспедиция)',
    type: 'documentary' as const,
    description: 'Автономная съёмка: защита оборудования, запас батарей, рации, GPS.',
    crew: 4,
    equipment: 18,
    scenes: 8,
    checklists: 6,
    tasks: 12,
    icon: '🏔️',
    usageCount: 3,
  },
];

// ============================================================
// AI-ассистент (правая панель)
// ============================================================

export const DEMO_AI_INSIGHTS = [
  { id: 'ins1', type: 'alert' as const, icon: '⚡', text: 'Дрон-оператор Кузнецова: разрешение получено, но батареи дрона последний раз использовались 3 недели назад. Рекомендую калибровку.', time: '2 мин назад' },
  { id: 'ins2', type: 'suggestion' as const, icon: '💡', text: 'Для банкетного зала 120м² шаблон рекомендует 3 источника света. У вас назначено 2. Добавить Aputure Amaran 200d из инвентаря?', time: '15 мин назад', action: 'Добавить' },
  { id: 'ins3', type: 'info' as const, icon: '📊', text: 'Прогресс подготовки: 3 из 12 задач выполнены (25%). 3 задачи в работе. До съёмки 16 дней.', time: '1 час назад' },
  { id: 'ins4', type: 'suggestion' as const, icon: '💡', text: 'Звукорежиссёр Петров не сможет на скаут в среду. Вопрос по линейному выходу ди-джея делегирован Смирновой.', time: '3 часа назад' },
  { id: 'ins5', type: 'auto' as const, icon: '🤖', text: 'Автоматически: сгенерирован черновой call sheet для «Утро невесты». Проверьте и утвердите.', time: '5 часов назад', action: 'Открыть' },
  { id: 'ins6', type: 'info' as const, icon: '📊', text: 'Бюджет: запланировано 350 000 ₽, зафиксировано расходов на 127 000 ₽ (36%). В норме.', time: 'вчера' },
];
