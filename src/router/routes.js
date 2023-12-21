const routes = [
  // Main Layout
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "/", component: () => import("pages/IndexPage.vue") },
      { path: "/usecar", component: () => import("pages/UsedCar.vue") },
      { path: "/newcar", component: () => import("pages/NewCar.vue") },
      { path: "/video", component: () => import("pages/VideoPage.vue") },
      { path: "/about", component: () => import("src/pages/AboutPage.vue") },
      { path: "/contact", component: () => import("pages/ContactPage.vue") },
    ],
  },

  // Admin Layout
  {
    path: "/",
    component: () => import("layouts/AdminLayout.vue"),
    children: [
      { path: "/admin", component: () => import("pages/AdminPage.vue") },
      {
        path: "/sellcar",
        component: () => import("src/pages/AdminSellCars.vue"),
      },
      {
        path: "/admincardetail",
        component: () => import("src/pages/AdminCarDetail.vue"),
      },
    ],
  },

  // Simple Layout
  {
    path: "/",
    component: () => import("layouts/LoginLayout.vue"),
    children: [
      { path: "/login", component: () => import("pages/LoginPage.vue") },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
