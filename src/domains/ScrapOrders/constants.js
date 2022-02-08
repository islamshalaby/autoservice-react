export const ROOT = '/scrap-orders';

export const ROUTES = {
  INTERNAL: `${ROOT}/internal`,
  INTERNAL_ADD: `${ROOT}/internal/add`,
  INTERNAL_DATA: `${ROOT}/internal/data`,
  ORDERS: `${ROOT}/orders`,
  NEW: `${ROOT}/orders/new`,
  CURRENT: `${ROOT}/orders/current`,
  RECEIVED: `${ROOT}/orders/received`,
  ACCUMULATED: `${ROOT}/orders/accumulated`,
  CANCELLED: `${ROOT}/orders/cancelled` ,
  ARCHIVED: `${ROOT}/orders/archived`,
  TRACK: `${ROOT}/orders/track`,
}

export const INTERNAL_TABS = [
  {
    to: ROUTES.INTERNAL_ADD,
    title: 'اضافة طلب جديد'
  },
  {
    to: ROUTES.INTERNAL_DATA,
    title: 'الطلبات الداخلية',
  }
]

export const TABS = [
  {
    to: ROUTES.NEW,
    title: 'الطلبات الجديدة',
  },
  {
    to: ROUTES.CURRENT,
    title: 'طلبات قيد التوصيل',
  },
  {
    to: ROUTES.RECEIVED,
    title: 'الطلبات المستلمة',
  },
  {
    to: ROUTES.ACCUMULATED,
    title: 'الطلبات المحصلة'
  },
  // {
  //   to: ROUTES.CANCELLED,
  //   title: 'الطلبات الملغية',
  // },
  // {
  //   to: ROUTES.ARCHIVED,
  //   title: 'ارشيف الطلبات'
  // },
  // {
  //   to: ROUTES.TRACK,
  //   title: 'متابعة الطلبات'
  // }
];

export const COLUMNS = [
  {
    title: 'رقم الطلب'
  },
  {
    title: 'اسم العميل'
  },
  {
    title: 'رقم هاتف العميل'
  },
  {
    title: 'موديل السيارة'
  },
  {
    title: 'نوع السيارة'
  },
  {
    title: 'بلد الصنع'
  },
  {
    title: 'نوع السكراب'
  },
  // {
  //   title: 'تاريخ التوصيل'
  // },
  {
    title: 'تاريخ الطلب'
  },
  
]