import Main from "../pages/Main/Main";
import Works from "../pages/Works/Works";
import Contacts from "../pages/Contacts/Contacts";
import WorksOne from "../pages/WorksOne/WorksOne";
import WorksTwo from "../pages/WorksTwo/WorksTwo";
import WorksThree from "../pages/WorksThree/WorksThree";
import WorksFour from "../pages/WorksFour/WorksFour";
import WorksFive from "../pages/WorksFive/WorksFive";
import NotFound from "../components/NotFound/NotFound";

export const unauthenticatedRoutes = [
  {
    path: "/",
    Component: Main,
  },
  {
    path: "/works",
    Component: Works,
  },
  {
    path: "/contact",
    Component: Contacts,
  },
  {
    path: "/works/1",
    Component: WorksOne,
  },
  {
    path: "/works/2",
    Component: WorksTwo,
  },
  {
    path: "/works/3",
    Component: WorksThree,
  },
  {
    path: "/works/4",
    Component: WorksFour,
  },
  {
    path: "/works/5",
    Component: WorksFive,
  },
  {
    path: "*",
    Component: NotFound,
  },
];

export const topbarNavigationItems = [
  { route: "/", title: "Main" },
  { route: "/works", title: "Works" },
  { route: "/contact", title: "Contact" },
];
