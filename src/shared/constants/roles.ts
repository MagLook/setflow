export const CREW_ROLES = [
  'operator',
  'sound_engineer',
  'lighting_tech',
  'makeup_artist',
  'assistant',
  'driver',
  'producer',
  'director',
  'editor',
] as const;

export type CrewRole = (typeof CREW_ROLES)[number];

export const CREW_ROLE_LABELS: Record<CrewRole, string> = {
  operator: 'Оператор',
  sound_engineer: 'Звукорежиссёр',
  lighting_tech: 'Осветитель',
  makeup_artist: 'Гримёр',
  assistant: 'Ассистент',
  driver: 'Водитель',
  producer: 'Продюсер',
  director: 'Режиссёр',
  editor: 'Монтажёр',
};
