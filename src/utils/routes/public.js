/** @format */

import {
  HomePage,
  AboutUs,
  AllService,
  Service,
  Shop,
  AdultSwimmingService,
  PoolPartyService,
  Schedule,
  ChildrenSwimingLesson,
  DetailNews,
  Order,
  Policy,
  SwimmingCourse,
} from "../../pages";
import ContactUs from "../../pages/public/ContactUs/ContactUs";
import News from "../../pages/public/News/News";
import FlyingFishClub from "../../pages/public/Services/FlyingFishClub";
import { path } from "../common/constant";

const routes = [
  {
    path: `${path.HOME}`,
    exact: true,
    component: <HomePage />,
    main: () => <HomePage />,
  },
  {
    path: `${path.ABOUTUS}`,
    exact: true,
    component: <AboutUs />,
    main: () => <AboutUs />,
  },
  {
    path: `${path.ALLSERVICE}`,
    exact: true,
    component: <AllService />,
    main: () => <AllService />,
  },
  {
    path: `${path.ALLSERVICE}`,
    exact: true,
    component: <AllService />,
    main: () => <AllService />,
  },
  {
    path: `${path.SHOP}`,
    exact: true,
    component: <Shop />,
    main: () => <Shop />,
  },
  {
    path: `${path.SERVICEADULT}`,
    exact: true,
    component: <AdultSwimmingService />,
    main: () => <AdultSwimmingService />,
  },
  {
    path: `${path.POOLPARTY}`,
    exact: true,
    component: <PoolPartyService />,
    main: () => <PoolPartyService />,
  },
  {
    path: `${path.CONTACTUS}`,
    exact: true,
    component: <ContactUs />,
    main: () => <ContactUs />,
  },
  {
    path: `${path.SCHEDULE}`,
    exact: true,
    component: <Schedule />,
    main: () => <Schedule />,
  },
  {
    path: `${path.CHILDRENSWIMMINGLESSON}`,
    exact: true,
    component: <ChildrenSwimingLesson />,
    main: () => <ChildrenSwimingLesson />,
  },
  {
    path: `${path.CLUB}`,
    exact: true,
    component: <FlyingFishClub />,
    main: () => <FlyingFishClub />,
  },
  {
    path: `${path.NEWS}`,
    exact: true,
    component: <News />,
    main: () => <News />,
  },
  {
    path: `${path.DETAILNEWS}`,
    exact: true,
    component: <DetailNews />,
    main: () => <DetailNews />,
  },
  {
    path: `${path.ORDER}`,
    exact: true,
    component: <Order />,
    main: () => <Order />,
  },
  {
    path: `${path.POLICY}`,
    exact: true,
    component: <Policy />,
    main: () => <Policy />,
  },
  {
    path: `${path.SWIMMINGCOURSE}`,
    exact: true,
    component: <SwimmingCourse />,
    main: () => <SwimmingCourse />,
  },
];

export default routes;
