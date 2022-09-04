import { NAVBAR, SIDEEBAR } from "./Consts";

const routes = [
  {
    name: "Home",
    path: "/",
    requireAuthentication: true,
    componentName: "Home",
    order: 100,
    align: "start",
    dist: [NAVBAR],
  },
  {
    name: "NewPage",
    path: "/NewPage",
    requireAuthentication: true,
    componentName: "NewPage",
    order: 200,
    align: "start",
    dist: [NAVBAR],
  },
  {
    name: "Home",
    path: "/",
    requireAuthentication: true,
    componentName: "Home",
    order: 200,
    align: "start",
    dist: [SIDEEBAR],
  },
  {
    name: "Account Setup",
    path: "/Accounts",
    requireAuthentication: true,
    componentName: "Accounts",
    order: 200,
    align: "start",
    dist: [SIDEEBAR],
  },
  {
    name: "Categories",
    path: "/Categories",
    requireAuthentication: true,
    componentName: "Categories",
    order: 200,
    align: "start",
    dist: [SIDEEBAR],
  },
];

export default routes;
