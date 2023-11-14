import { ACTIVITYTRACKER_ROUTE, AUTH_ROUTE, MAIN_ROUTE, PAYMENT_ROUTE, REGISTRATION_ROUTE, WEEKTRACKER_ROUTE } from "../utils/Consts"
import Payment from "../pages/payment/Payment"
import ActivityTracker from "../pages/trackers/ActivityTracker"
import WeekTracker from "../pages/trackers/WeekTracker"
import Registration from "../pages/logging/Registration"
import Auth from "../pages/logging/Auth"
import Mainpage from "../pages/main/Mainpage"

export const authRoutes = [
  {
    path: PAYMENT_ROUTE,
    Component: Payment
  },

  {
    path: ACTIVITYTRACKER_ROUTE,
    Component: ActivityTracker
  },

  {
    path: WEEKTRACKER_ROUTE,
    Component: WeekTracker
  },
]

export const publicRoutes = [
  {
    path: REGISTRATION_ROUTE,
    Component: Registration
  },

  {
    path: AUTH_ROUTE,
    Component: Auth
  },

  {
    path: MAIN_ROUTE,
    Component: Mainpage
  },
]