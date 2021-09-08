import Dashboard from "views/Dashboard/Dashboard";
import Defects from "views/Defects/Defects";
import DefectAnalytics from "views/DefectAnalytics/DefectAnalytics";
import Notification from "views/Notifications/Notification";


var routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "tim-icons icon-chart-pie-36",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/defects",
    name: "Defects",
    icon: "tim-icons icon-molecule-40",
    component: Defects,
    layout: "/admin",
  },
  {
    path: "/defect-analytics",
    name: "Defect Analytics",
    icon: "tim-icons icon-chart-bar-32",
    component: DefectAnalytics,
    layout: "/admin",
  },
  {
    path: "/notifications",
    name: "Notifications",
    icon: "tim-icons icon-bell-55",
    component: Notification,
    layout: "/admin",
  },
  {
    path: "/settings",
    name: "Settings",
    icon: "tim-icons icon-settings-gear-63",
    component: "",
    layout: "/admin",
  },
  {
    path: "/logout",
    name: "Logout",
    icon: "tim-icons icon-key-25",
    component: "",
    layout: "/admin",
  },


];
export default routes;
