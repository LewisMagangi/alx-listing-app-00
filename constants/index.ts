// API URLs and endpoints
export const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3000/api';

export const API_ENDPOINTS = {
  PROPERTIES: '/properties',
  USERS: '/users',
  BOOKINGS: '/bookings',
} as const;

// UI Constants
export const BUTTON_VARIANTS = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  OUTLINE: 'outline',
} as const;

export const BUTTON_SIZES = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
} as const;

// Application Configuration
export const APP_CONFIG = {
  APP_NAME: 'ALX Listing App',
  APP_DESCRIPTION: 'Modern Airbnb clone built with Next.js',
  DEFAULT_PAGE_SIZE: 12,
  MAX_IMAGES_PER_PROPERTY: 10,
} as const;

// Validation Constants
export const VALIDATION = {
  MIN_PRICE: 1,
  MAX_PRICE: 10000,
  MIN_TITLE_LENGTH: 3,
  MAX_TITLE_LENGTH: 100,
  MIN_DESCRIPTION_LENGTH: 10,
  MAX_DESCRIPTION_LENGTH: 500,
} as const;
