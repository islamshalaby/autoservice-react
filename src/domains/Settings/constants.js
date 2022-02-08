export const ROOT =  '/settings/scrap'
export const ADD_ROOT =  '/settings/scrap/add'

export const ROUTES = {
  SETTINGS: `${ADD_ROOT}/settings`,
  GARAGES: `${ROOT}/garages`,
  ADD_GARAGES: `${ADD_ROOT}/garages`,
  ADD_GARAGES_SPECIALTIES: `${ADD_ROOT}/specialties`, 
  EDIT_GARAGE_SPECIALTIES: `${ADD_ROOT}/specialties/:id`,
  GARAGES_SPECIALTIES: `${ROOT}/specialties`,
  LOCATIONS: `${ROOT}/locations`,
  ADD_LOCATIONS: `${ADD_ROOT}/locations` ,
  COUNTRY: `${ROOT}/country`,
  ADD_COUNTRY: `${ADD_ROOT}/country`,
  TYPES: `${ROOT}/types`,
  ADD_TYPES: `${ADD_ROOT}/types`,
  MODELS: `${ROOT}/models`,
  ADD_MODELS: `${ADD_ROOT}/models`,
}

export const ADD_TABS = [
  {
    to: ROUTES.ADD_COUNTRY,
    title: 'بلاد الصنع',
  },
  {
    to: ROUTES.ADD_LOCATIONS,
    title: 'مواقع السكراب',
  },
  {
    to: ROUTES.ADD_GARAGES_SPECIALTIES,
    title: 'تخصصات الكراجات',
  },
  {
    to: ROUTES.ADD_TYPES,
    title: 'أنواع السيارات',
  },
  {
    to: ROUTES.ADD_MODELS,
    title: 'موديلات السيارات'
  },
  {
    to: ROUTES.ADD_GARAGES,
    title: 'الكراجات',
  },
]

export const TABS = [
  {
    to: ROUTES.COUNTRY,
    title: 'بلاد الصنع',
  },
  {
    to: ROUTES.LOCATIONS,
    title: 'مواقع السكراب',
  },
  {
    to: ROUTES.GARAGES_SPECIALTIES,
    title: 'تخصصات الكراجات',
  },
  {
    to: ROUTES.TYPES,
    title: 'أنواع السيارات',
  },
  {
    to: ROUTES.MODELS,
    title: 'موديلات السيارات'
  },
  {
    to: ROUTES.GARAGES,
    title: 'الكراجات',
  },
]