import {
  pgTable,
  uuid,
  varchar,
  text,
  integer,
  boolean,
  date,
  time,
  timestamp,
  jsonb,
  pgEnum,
  decimal,
  doublePrecision,
} from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';

// ============================================================
// Enums
// ============================================================

export const crewRoleEnum = pgEnum('crew_role', [
  'operator',
  'sound_engineer',
  'lighting_tech',
  'makeup_artist',
  'assistant',
  'driver',
  'producer',
  'director',
  'editor',
]);

export const availabilityStatusEnum = pgEnum('availability_status', [
  'free',
  'busy',
  'tentative',
]);

export const projectTypeEnum = pgEnum('project_type', [
  'documentary',
  'interview',
  'reportage',
  'corporate',
  'event',
  'short_film',
]);

export const projectStatusEnum = pgEnum('project_status', [
  'planning',
  'shooting',
  'editing',
  'review',
  'done',
  'archived',
]);

export const shootDayStatusEnum = pgEnum('shoot_day_status', [
  'planned',
  'confirmed',
  'in_progress',
  'wrapped',
  'cancelled',
]);

export const sceneTypeEnum = pgEnum('scene_type', [
  'interview',
  'b_roll',
  'stand_up',
  'dialogue',
  'action',
  'other',
]);

export const equipmentCategoryEnum = pgEnum('equipment_category', [
  'camera',
  'lens',
  'lighting',
  'audio',
  'grip',
  'power',
  'media',
]);

export const equipmentStatusEnum = pgEnum('equipment_status', [
  'available',
  'on_shoot',
  'repair',
  'rented',
]);

export const equipmentOwnershipEnum = pgEnum('equipment_ownership', ['owned', 'rented']);

export const contactTypeEnum = pgEnum('contact_type', [
  'rental_house',
  'venue',
  'contractor',
  'freelancer',
  'agency',
  'other',
]);

export const externalResourceTypeEnum = pgEnum('external_resource_type', [
  'freelancer',
  'rental',
  'contractor',
  'ai_tool',
  'service',
]);

export const noteTypeEnum = pgEnum('note_type', [
  'note',
  'reference',
  'script',
  'storyboard',
  'moodboard',
  'other',
]);

export const budgetCategoryEnum = pgEnum('budget_category', [
  'crew',
  'equipment',
  'rental',
  'transport',
  'location',
  'catering',
  'post_production',
  'other',
]);

// ============================================================
// Tables
// ============================================================

export const organizations = pgTable('organizations', {
  id: uuid('id').primaryKey().defaultRandom(),
  name: varchar('name', { length: 255 }).notNull(),
  ownerId: uuid('owner_id'),
  timezone: varchar('timezone', { length: 64 }).default('Europe/Moscow'),
  settings: jsonb('settings').default({}),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

export const users = pgTable('users', {
  id: uuid('id').primaryKey().defaultRandom(),
  organizationId: uuid('organization_id').references(() => organizations.id),
  email: varchar('email', { length: 255 }).notNull().unique(),
  name: varchar('name', { length: 255 }).notNull(),
  phone: varchar('phone', { length: 32 }),
  avatarUrl: text('avatar_url'),
  passwordHash: text('password_hash'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

export const crewMembers = pgTable('crew_members', {
  id: uuid('id').primaryKey().defaultRandom(),
  organizationId: uuid('organization_id')
    .references(() => organizations.id)
    .notNull(),
  name: varchar('name', { length: 255 }).notNull(),
  crewRole: crewRoleEnum('crew_role').notNull(),
  phone: varchar('phone', { length: 32 }),
  email: varchar('email', { length: 255 }),
  ratePerDay: decimal('rate_per_day', { precision: 10, scale: 2 }),
  competencies: jsonb('competencies').default([]),
  avatarUrl: text('avatar_url'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

export const crewAvailability = pgTable('crew_availability', {
  id: uuid('id').primaryKey().defaultRandom(),
  crewMemberId: uuid('crew_member_id')
    .references(() => crewMembers.id, { onDelete: 'cascade' })
    .notNull(),
  date: date('date').notNull(),
  status: availabilityStatusEnum('status').notNull().default('free'),
  note: text('note'),
});

export const projects = pgTable('projects', {
  id: uuid('id').primaryKey().defaultRandom(),
  organizationId: uuid('organization_id')
    .references(() => organizations.id)
    .notNull(),
  title: varchar('title', { length: 255 }).notNull(),
  type: projectTypeEnum('type').notNull(),
  description: text('description'),
  clientName: varchar('client_name', { length: 255 }),
  budget: decimal('budget', { precision: 12, scale: 2 }),
  status: projectStatusEnum('status').notNull().default('planning'),
  slug: varchar('slug', { length: 128 }).unique(),
  coverImageUrl: text('cover_image_url'),
  startDate: date('start_date'),
  endDate: date('end_date'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

export const locations = pgTable('locations', {
  id: uuid('id').primaryKey().defaultRandom(),
  organizationId: uuid('organization_id')
    .references(() => organizations.id)
    .notNull(),
  name: varchar('name', { length: 255 }).notNull(),
  address: text('address'),
  lat: doublePrecision('lat'),
  lng: doublePrecision('lng'),
  contactName: varchar('contact_name', { length: 255 }),
  contactPhone: varchar('contact_phone', { length: 32 }),
  parkingInfo: text('parking_info'),
  notes: text('notes'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

export const shootDays = pgTable('shoot_days', {
  id: uuid('id').primaryKey().defaultRandom(),
  projectId: uuid('project_id')
    .references(() => projects.id, { onDelete: 'cascade' })
    .notNull(),
  locationId: uuid('location_id').references(() => locations.id),
  date: date('date').notNull(),
  callTime: time('call_time'),
  wrapTime: time('wrap_time'),
  status: shootDayStatusEnum('status').notNull().default('planned'),
  notes: text('notes'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

export const scenes = pgTable('scenes', {
  id: uuid('id').primaryKey().defaultRandom(),
  shootDayId: uuid('shoot_day_id')
    .references(() => shootDays.id, { onDelete: 'cascade' })
    .notNull(),
  order: integer('order').notNull().default(0),
  description: text('description'),
  type: sceneTypeEnum('type').notNull().default('other'),
  plannedStart: time('planned_start'),
  plannedDuration: integer('planned_duration_min'),
  notes: text('notes'),
});

export const equipment = pgTable('equipment', {
  id: uuid('id').primaryKey().defaultRandom(),
  organizationId: uuid('organization_id')
    .references(() => organizations.id)
    .notNull(),
  category: equipmentCategoryEnum('category').notNull(),
  name: varchar('name', { length: 255 }).notNull(),
  model: varchar('model', { length: 255 }),
  serialNumber: varchar('serial_number', { length: 128 }),
  ownership: equipmentOwnershipEnum('ownership').notNull().default('owned'),
  condition: varchar('condition', { length: 64 }).default('good'),
  status: equipmentStatusEnum('status').notNull().default('available'),
  specs: jsonb('specs').default({}),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

export const equipmentKits = pgTable('equipment_kits', {
  id: uuid('id').primaryKey().defaultRandom(),
  organizationId: uuid('organization_id')
    .references(() => organizations.id)
    .notNull(),
  name: varchar('name', { length: 255 }).notNull(),
  description: text('description'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

export const equipmentKitItems = pgTable('equipment_kit_items', {
  id: uuid('id').primaryKey().defaultRandom(),
  kitId: uuid('kit_id')
    .references(() => equipmentKits.id, { onDelete: 'cascade' })
    .notNull(),
  equipmentId: uuid('equipment_id')
    .references(() => equipment.id, { onDelete: 'cascade' })
    .notNull(),
});

export const shootCrewAssignments = pgTable('shoot_crew_assignments', {
  id: uuid('id').primaryKey().defaultRandom(),
  shootDayId: uuid('shoot_day_id')
    .references(() => shootDays.id, { onDelete: 'cascade' })
    .notNull(),
  crewMemberId: uuid('crew_member_id')
    .references(() => crewMembers.id, { onDelete: 'cascade' })
    .notNull(),
  role: crewRoleEnum('role').notNull(),
  callTime: time('call_time'),
  confirmed: boolean('confirmed').default(false),
});

export const shootEquipmentAssignments = pgTable('shoot_equipment_assignments', {
  id: uuid('id').primaryKey().defaultRandom(),
  shootDayId: uuid('shoot_day_id')
    .references(() => shootDays.id, { onDelete: 'cascade' })
    .notNull(),
  equipmentId: uuid('equipment_id')
    .references(() => equipment.id, { onDelete: 'cascade' })
    .notNull(),
  assignedToCrewId: uuid('assigned_to_crew_id').references(() => crewMembers.id),
  status: equipmentStatusEnum('status').notNull().default('on_shoot'),
});

export const checklists = pgTable('checklists', {
  id: uuid('id').primaryKey().defaultRandom(),
  organizationId: uuid('organization_id')
    .references(() => organizations.id)
    .notNull(),
  title: varchar('title', { length: 255 }).notNull(),
  role: crewRoleEnum('role'),
  items: jsonb('items').notNull().default([]),
});

export const shootChecklists = pgTable('shoot_checklists', {
  id: uuid('id').primaryKey().defaultRandom(),
  shootDayId: uuid('shoot_day_id')
    .references(() => shootDays.id, { onDelete: 'cascade' })
    .notNull(),
  crewMemberId: uuid('crew_member_id')
    .references(() => crewMembers.id, { onDelete: 'cascade' })
    .notNull(),
  checklistId: uuid('checklist_id').references(() => checklists.id),
  items: jsonb('items').notNull().default([]),
});

export const shotLogs = pgTable('shot_logs', {
  id: uuid('id').primaryKey().defaultRandom(),
  sceneId: uuid('scene_id').references(() => scenes.id, { onDelete: 'cascade' }),
  shootDayId: uuid('shoot_day_id')
    .references(() => shootDays.id, { onDelete: 'cascade' })
    .notNull(),
  timestamp: timestamp('timestamp').defaultNow().notNull(),
  note: text('note').notNull(),
  type: varchar('type', { length: 64 }),
  photos: jsonb('photos').default([]),
});

export const setPlans = pgTable('set_plans', {
  id: uuid('id').primaryKey().defaultRandom(),
  projectId: uuid('project_id').references(() => projects.id, { onDelete: 'cascade' }),
  shootDayId: uuid('shoot_day_id').references(() => shootDays.id),
  sceneId: uuid('scene_id').references(() => scenes.id),
  name: varchar('name', { length: 255 }).notNull(),
  canvasData: jsonb('canvas_data').notNull().default({}),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

// ============================================================
// Project-level tables (рабочее пространство проекта)
// ============================================================

export const projectCrew = pgTable('project_crew', {
  id: uuid('id').primaryKey().defaultRandom(),
  projectId: uuid('project_id')
    .references(() => projects.id, { onDelete: 'cascade' })
    .notNull(),
  crewMemberId: uuid('crew_member_id')
    .references(() => crewMembers.id, { onDelete: 'cascade' })
    .notNull(),
  projectRole: crewRoleEnum('project_role').notNull(),
  customRate: decimal('custom_rate', { precision: 10, scale: 2 }),
  notes: text('notes'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

export const projectEquipment = pgTable('project_equipment', {
  id: uuid('id').primaryKey().defaultRandom(),
  projectId: uuid('project_id')
    .references(() => projects.id, { onDelete: 'cascade' })
    .notNull(),
  equipmentId: uuid('equipment_id')
    .references(() => equipment.id, { onDelete: 'cascade' })
    .notNull(),
  assignedFrom: date('assigned_from'),
  assignedUntil: date('assigned_until'),
  responsibleCrewId: uuid('responsible_crew_id').references(() => crewMembers.id),
  notes: text('notes'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

export const externalResources = pgTable('external_resources', {
  id: uuid('id').primaryKey().defaultRandom(),
  projectId: uuid('project_id')
    .references(() => projects.id, { onDelete: 'cascade' })
    .notNull(),
  type: externalResourceTypeEnum('type').notNull(),
  name: varchar('name', { length: 255 }).notNull(),
  contactInfo: text('contact_info'),
  cost: decimal('cost', { precision: 12, scale: 2 }),
  notes: text('notes'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

export const projectNotes = pgTable('project_notes', {
  id: uuid('id').primaryKey().defaultRandom(),
  projectId: uuid('project_id')
    .references(() => projects.id, { onDelete: 'cascade' })
    .notNull(),
  title: varchar('title', { length: 255 }).notNull(),
  content: text('content'),
  type: noteTypeEnum('type').notNull().default('note'),
  tags: jsonb('tags').default([]),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

export const projectFiles = pgTable('project_files', {
  id: uuid('id').primaryKey().defaultRandom(),
  projectId: uuid('project_id')
    .references(() => projects.id, { onDelete: 'cascade' })
    .notNull(),
  noteId: uuid('note_id').references(() => projectNotes.id, { onDelete: 'set null' }),
  fileName: varchar('file_name', { length: 255 }).notNull(),
  fileUrl: text('file_url').notNull(),
  mimeType: varchar('mime_type', { length: 128 }),
  sizeBytes: integer('size_bytes'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

export const budgetItems = pgTable('budget_items', {
  id: uuid('id').primaryKey().defaultRandom(),
  projectId: uuid('project_id')
    .references(() => projects.id, { onDelete: 'cascade' })
    .notNull(),
  category: budgetCategoryEnum('category').notNull(),
  description: varchar('description', { length: 255 }).notNull(),
  plannedAmount: decimal('planned_amount', { precision: 12, scale: 2 }),
  actualAmount: decimal('actual_amount', { precision: 12, scale: 2 }),
  notes: text('notes'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

// ============================================================
// Org-level: Контакты и подрядчики
// ============================================================

export const contacts = pgTable('contacts', {
  id: uuid('id').primaryKey().defaultRandom(),
  organizationId: uuid('organization_id')
    .references(() => organizations.id)
    .notNull(),
  type: contactTypeEnum('type').notNull(),
  name: varchar('name', { length: 255 }).notNull(),
  company: varchar('company', { length: 255 }),
  phone: varchar('phone', { length: 32 }),
  email: varchar('email', { length: 255 }),
  address: text('address'),
  notes: text('notes'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

// ============================================================
// Relations
// ============================================================

export const organizationsRelations = relations(organizations, ({ many }) => ({
  users: many(users),
  crewMembers: many(crewMembers),
  projects: many(projects),
  equipment: many(equipment),
  locations: many(locations),
  contacts: many(contacts),
}));

export const projectsRelations = relations(projects, ({ one, many }) => ({
  organization: one(organizations, {
    fields: [projects.organizationId],
    references: [organizations.id],
  }),
  shootDays: many(shootDays),
  setPlans: many(setPlans),
  projectCrew: many(projectCrew),
  projectEquipment: many(projectEquipment),
  externalResources: many(externalResources),
  notes: many(projectNotes),
  files: many(projectFiles),
  budgetItems: many(budgetItems),
}));

export const shootDaysRelations = relations(shootDays, ({ one, many }) => ({
  project: one(projects, {
    fields: [shootDays.projectId],
    references: [projects.id],
  }),
  location: one(locations, {
    fields: [shootDays.locationId],
    references: [locations.id],
  }),
  scenes: many(scenes),
  crewAssignments: many(shootCrewAssignments),
  equipmentAssignments: many(shootEquipmentAssignments),
  shotLogs: many(shotLogs),
  checklists: many(shootChecklists),
}));

export const crewMembersRelations = relations(crewMembers, ({ one, many }) => ({
  organization: one(organizations, {
    fields: [crewMembers.organizationId],
    references: [organizations.id],
  }),
  availability: many(crewAvailability),
  assignments: many(shootCrewAssignments),
}));

export const equipmentRelations = relations(equipment, ({ one }) => ({
  organization: one(organizations, {
    fields: [equipment.organizationId],
    references: [organizations.id],
  }),
}));
