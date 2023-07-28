import Main from "../pages/Main/Main";
import Works from "../pages/Works/Works";
import Contacts from "../pages/Contacts/Contacts";

export const MAIN_ROUTE = "/";
export const WORKS_ROUTE = "/works";
export const CONTACTS_ROUTE = "/contacts";

export const unauthenticatedRoutes = [
  {
    path: MAIN_ROUTE,
    Component: Main,
  },
  {
    path: WORKS_ROUTE,
    Component: Works,
  },
  {
    path: CONTACTS_ROUTE,
    Component: Contacts,
  },
];

export const topbarNavigationItems = [
  { route: MAIN_ROUTE, title: "Main" },
  { route: WORKS_ROUTE, title: "Works" },
  { route: CONTACTS_ROUTE, title: "Contacts" },
];
