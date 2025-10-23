export const ROUTES = {
  // Public routes
  LOGIN: '/auth/login',
  REGISTER: '/auth/register',

  // Private routes
  DASHBOARD: '/dashboard',

  // Users
  USERS: '/users',
  USERS_CREATE: '/users/create',
  USERS_EDIT: '/users/edit/:id',

  // Roles
  ROLES: '/roles',
  ROLES_CREATE: '/roles/create',
  ROLES_EDIT: '/roles/edit/:id',

  // Institutions
  INSTITUTIONS: '/institutions',
  INSTITUTIONS_CREATE: '/institutions/create',
  INSTITUTIONS_EDIT: '/institutions/edit/:id',

  // Branches
  BRANCHES: '/branches',
  BRANCHES_CREATE: '/branches/create',
  BRANCHES_EDIT: '/branches/edit/:id',

  // Rooms
  ROOMS: '/rooms',
  ROOMS_CREATE: '/rooms/create',
  ROOMS_EDIT: '/rooms/edit/:id',

  // Groups
  GROUPS: '/groups',
  GROUPS_CREATE: '/groups/create',
  GROUPS_EDIT: '/groups/edit/:id',

  // Events
  EVENTS: '/events',
  EVENTS_CREATE: '/events/create',
  EVENTS_EDIT: '/events/edit/:id',

  // Occurrences
  OCCURRENCES: '/occurrences',
  OCCURRENCES_CREATE: '/occurrences/create',
  OCCURRENCES_EDIT: '/occurrences/edit/:id',
} as const;

export const STATUS_EVENT = {
  NOT_INITIATED: 'NOT_INITIATED',
  STARTED: 'STARTED',
  IN_PROGRESS: 'IN_PROGRESS',
  FINISHED: 'FINISHED',
  CANCELED: 'CANCELED',
} as const;

export const RECURRENCE_FREQUENCY = {
  DAILY: 'DAILY',
  WEEKLY: 'WEEKLY',
  MONTHLY: 'MONTHLY',
  YEARLY: 'YEARLY',
} as const;

export const STORAGE_KEYS = {
  ACCESS_TOKEN: 'accessToken',
  REFRESH_TOKEN: 'refreshToken',
  USER: 'user',
  THEME: 'theme',
} as const;
