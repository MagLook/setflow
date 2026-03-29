export const EQUIPMENT_CATEGORIES = [
  'camera',
  'lens',
  'lighting',
  'audio',
  'grip',
  'power',
  'media',
] as const;

export type EquipmentCategory = (typeof EQUIPMENT_CATEGORIES)[number];

export const EQUIPMENT_CATEGORY_LABELS: Record<EquipmentCategory, string> = {
  camera: 'Камеры',
  lens: 'Объективы',
  lighting: 'Свет',
  audio: 'Звук',
  grip: 'Grip',
  power: 'Питание',
  media: 'Носители',
};

export const EQUIPMENT_STATUSES = ['available', 'on_shoot', 'repair', 'rented'] as const;
export type EquipmentStatus = (typeof EQUIPMENT_STATUSES)[number];

export const EQUIPMENT_STATUS_LABELS: Record<EquipmentStatus, string> = {
  available: 'Доступно',
  on_shoot: 'На съёмке',
  repair: 'В ремонте',
  rented: 'В аренде',
};
