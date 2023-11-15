import { v4 as uuidv4 } from 'uuid'
import { 
  analiticsPath, 
  dashboardPath, 
  eventsPath, 
  loyaltyPath, 
  messagesPath, 
  notificationsPath 
} from '@/constants/imagePaths'
import { RoutesType } from '@/types/routesTypes'

export const PAGE_ROUTES: RoutesType = {
  dashboard: {
    id: uuidv4(),
    route: '/',
    name: 'Dashboard',
    icon: dashboardPath
  },
  events: {
    id: uuidv4(),
    route: '/events',
    name: 'Events',
    icon: eventsPath
  },
  analytics: {
    id: uuidv4(),
    route: '/analytics',
    name: 'Analytics',
    icon: analiticsPath
  },
  loyalty: {
    id: uuidv4(),
    route: '/loyalty',
    name: 'Loyalty',
    icon: loyaltyPath
  },
  notifications: {
    id: uuidv4(),
    route: '/notifications',
    name: 'Notifications',
    icon: notificationsPath
  },
  messages: {
    id: uuidv4(),
    route: '/messages',
    name: 'Messages',
    icon: messagesPath
  },
  profile: {
    id: uuidv4(),
    route: '/profile',
    name: 'Profile'
  },
  login: {
    id: uuidv4(),
    route: '/login',
    name: 'Login'
  },
}