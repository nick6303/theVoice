import { Home, Survey } from '../components/pages'
import { createWebHistory, createRouter } from "vue-router";



const path = process.env.NODE_ENV === 'production' ? '/mywork/theVoice':''

const routes = [
  {
    path:`${path}`,
    name: 'Home',
    component: Home,
  },
  {
    path: `${path}/survey`,
    name: "Survey",
    component: Survey,
  },

];

const router = createRouter({
  history:createWebHistory(),
  routes
});

export default router;