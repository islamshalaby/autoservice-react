import SettingsIcon from '@material-ui/icons/Settings';
import AssessmentIcon from '@material-ui/icons/Assessment';
import DescriptionIcon from '@material-ui/icons/Description';
import SubjectIcon from '@material-ui/icons/Subject';
import PersonIcon from '@material-ui/icons/Person';
import AcUnitIcon from '@material-ui/icons/AcUnit';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import DirectionsCarIcon from '@material-ui/icons/DirectionsCar';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import { ROUTES as SCRAP_SETTINGS_ROUTES } from '../../Settings/constants';
import { ROUTES as SCRAP_ORDERS_ROUTES } from '../../ScrapOrders/constants';
import {ROOT as SCRAP_SETTINGS_ROOT, ADD_ROOT as SCRAP_SETTINGS_ADD_ROOT} from '../../Settings/constants';
import TowTruck from '../../../Icons/Sidebar/TowTruckIcon';
import CarServicesIcon from '../../../Icons/Sidebar/CarServicesIcon';
import FeaturedVideoIcon from '@material-ui/icons/FeaturedVideo';
import StorefrontIcon from '@material-ui/icons/Storefront';
import DriveEtaIcon from '@material-ui/icons/DriveEta';
import InboxIcon from '@material-ui/icons/Inbox';
import AddIcon from '@material-ui/icons/Add';
import SettingsApplicationsIcon from '@material-ui/icons/SettingsApplications';

export const SETTINGS_NAVBAR_SCRAPLIST = [
  {
    route: SCRAP_SETTINGS_ROOT,
    title: 'البيانات',
  },
  {
    route: SCRAP_SETTINGS_ADD_ROOT,
    title: 'الاضافات',
  }
]

export const SCRAP_ORDERS_NAVBAR_LIST = [
  // {
  //   route: SCRAP_ORDERS_ROUTES.INTERNAL_ADD,
  //   title: 'طلبات داخلية',
  // },
  {
    route: SCRAP_ORDERS_ROUTES.NEW,
    title: 'الطلبات',
  }

]

export const SETTINGS_NAVBAR = [
  {
    title: 'خدمات السيارات',
    icon: <CarServicesIcon />,
    subList: [],
    disabled: true,
  },
  {
    title: 'اعلانات السيارات',
    icon: <FeaturedVideoIcon />,
    subList: [],
    disabled: true,
  },
  {
    title: 'السكراب',
    icon: <DriveEtaIcon />,
    subList: SETTINGS_NAVBAR_SCRAPLIST,
  },
  {
    title: 'المتجر',
    icon: <StorefrontIcon />,
    subList: [],
    disabled: true,
  },
  {
    title: 'قطع الغيار',
    icon: <InboxIcon />,
    subList: [],
    disabled: true,
  },
  {
    title: 'بدالة ونشات',
    icon: <AddIcon />,
    disabled: true,
  },
  {
    title: 'الاعدادات العامة',
    icon: <SettingsApplicationsIcon />,
    subList: [],
    disabled: true,
  },

]
export const SIDEBAR_LINKS = [
  {
    title: 'ملخصات',
    icon: <SubjectIcon/>,
    disabled: true
  },
  {
    title: 'الإشعارات',
    icon: <NotificationsActiveIcon />,
    disabled: true,
  },
  {
    title: 'العملاء',
    icon: <PersonIcon />,
    disabled: true,
  },
  {
    title: 'طلبات السكراب',
    icon: <DescriptionIcon />,
    subList: SCRAP_ORDERS_NAVBAR_LIST,
  },
  {
    title: 'الاكسسوارات',
    icon: <AcUnitIcon />,
    subList: [],
    disabled: true,
  },
  {
    title: 'السيارات المستعملة',
    icon: <DirectionsCarIcon />,
    subList: [],
    disabled: true,
  },
  {
    title: 'سيارات السكراب',
    icon: <DirectionsCarIcon />,
    subList: [],
    disabled: true,
  },
  {
    title: 'الشاحنات',
    icon: <LocalShippingIcon />,
    subList: [],
    disabled: true,
  },
  {
    title: 'الونشات',
    icon: <TowTruck />,
    subList: [],
    disabled: true,
  },
  {
    title: 'الخدمات',
    icon: <CarServicesIcon />,
    subList: [],
    disabled: true,
  },
  {
    title: 'طلبات الخدمات',
    icon: <CarServicesIcon />,
    subList: [],
    disabled: true,
  },
  {
    title: 'التقارير',
    icon: <AssessmentIcon />,
    subList: [],
    disabled: true,
  },
  {
    title: 'طلبات التجر',
    icon: <StorefrontIcon />,
    subList: [],
    disabled: true,
  },
  {
    title: 'الاعدادات',
    icon: <SettingsIcon />,
    subList: SETTINGS_NAVBAR,
  }
]

export const DRAWER_WIDTH = 340;
