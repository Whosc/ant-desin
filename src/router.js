import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
      path: "/",
      component: () =>
        import(/* webpackChunkName: "layout" */ "./views/Layout/BasicLayout.vue"),
      children: [
        {
          path: "/",
          redirect: "/dashboard"
        },
        {
          path: "/dashboard",
          name: "dashboard",
          component: { render: h => h("router-view") },
          children: [
            {
              path: "/dashboard/analysis",
              name: "analysis",
              meta: { title: "分析页面" },
              component: () =>
                import(/* webpackChunkName: "dashboard" */ "./views/Dashboard/Analysis.vue")
            }
          ]
        }
      ]
    }
  ]
});
