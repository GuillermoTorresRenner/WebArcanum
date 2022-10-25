const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("pages/IndexPage.vue"),
      },
      {
        path: "/contacto",
        component: () => import("pages/PaginaContacto.vue"),
      },
      {
        path: "/el-alquimista",
        component: () => import("pages/ElAlquimista.vue"),
      },

      {
        path: "/cervezas/la-papisa",
        component: () => import("pages/cervezas/LaPapisa.vue"),
      },

      {
        path: "/cervezas/la-emperatriz",
        component: () => import("pages/cervezas/LaEmperatriz.vue"),
      },
      {
        path: "/cervezas/la-justicia",
        component: () => import("pages/cervezas/LaJusticia.vue"),
      },
      {
        path: "/cervezas/la-estrella",
        component: () => import("pages/cervezas/LaEstrella.vue"),
      },
      {
        path: "/cervezas/la-luna",
        component: () => import("pages/cervezas/LaLuna.vue"),
      },
      {
        path: "/cervezas/el-sol",
        component: () => import("pages/cervezas/ElSolDorada.vue"),
      },
      {
        path: "/kombuchas/algiz1",
        component: () => import("pages/kombuchas/Algiz-1.vue"),
      },
      {
        path: "/kombuchas/algiz2",
        component: () => import("pages/kombuchas/Algiz-2.vue"),
      },
      {
        path: "/kombuchas/algiz3",
        component: () => import("pages/kombuchas/Algiz-3.vue"),
      },
      {
        path: "/kombuchas/algiz4",
        component: () => import("pages/kombuchas/Algiz-4.vue"),
      },
      {
        path: "/kombuchas/algiz5",
        component: () => import("pages/kombuchas/Algiz-5.vue"),
      },
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
