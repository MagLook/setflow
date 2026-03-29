export const PROJECT_TYPES = [
  'documentary',
  'interview',
  'reportage',
  'corporate',
  'event',
  'short_film',
] as const;

export type ProjectType = (typeof PROJECT_TYPES)[number];

export const PROJECT_TYPE_LABELS: Record<ProjectType, string> = {
  documentary: 'Документалка',
  interview: 'Интервью',
  reportage: 'Репортаж',
  corporate: 'Корпоратив',
  event: 'Мероприятие',
  short_film: 'Короткий метр',
};

export const PROJECT_STATUSES = [
  'planning',
  'shooting',
  'editing',
  'review',
  'done',
  'archived',
] as const;

export type ProjectStatus = (typeof PROJECT_STATUSES)[number];

export const PROJECT_STATUS_LABELS: Record<ProjectStatus, string> = {
  planning: 'Планирование',
  shooting: 'Съёмка',
  editing: 'Монтаж',
  review: 'Ревью',
  done: 'Готово',
  archived: 'Архив',
};
