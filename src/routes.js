import Home from "./views/Home.vue";
import About from "./views/About.vue";
import Contact from "./views/Contact.vue";
import Projects from "./views/Projects.vue"
import Project from "./views/Project.vue"

const routes = [
  { path: '/', name: "home", component: Home },
  { path: '/about', name: "about", component: About },
  { path: '/contact', name: "contact", component: Contact },
  {
    path: "/projects",
    name: "projects",
    component: Projects
  },
  {
    path: "/project/:slug",
    name: "project",
    component: Project
  }
];

export default routes;