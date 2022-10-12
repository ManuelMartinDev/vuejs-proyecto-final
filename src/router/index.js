import TopicShowCaseView from "../views/TopicShowCaseView.vue";
import CourseView from "../views/CourseView.vue";
import HomeView from "../views/HomeView.vue";
import ClassRoomView from "../views/ClassRoomView.vue";
import TopicListView from "../views/TopicListView.vue";
import AuthView from "../views/AuthView.vue";
import { createRouter, createWebHistory } from "vue-router";
// 1. Define route components.
// These can be imported from other files
const About = { template: "<div>About</div>" };

// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
const routes = [
  { path: "/", component: HomeView },
  { path: "/about", component: About },
  {
    path: "/topic/:id",
    name: "Topic",
    component: TopicShowCaseView,
  },
  {
    path: "/course/:id",
    name: "Course",
    component: CourseView,
  },
  {
    path: "/classroom/:id",
    name: "ClassRoom",
    component: ClassRoomView,
  },
  {
    path: "/topics",
    name: "Topics",
    component: TopicListView,
  },
  {
    path: "/auth",
    name: "Auth",
    component: AuthView,
  },
];

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHistory(),
  routes, // short for `routes: routes`
});

export default router;
