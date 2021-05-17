import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

//sayfaları import ettik
import Home from './components/Home';
import MovieDetail from './components/MovieDetail';


const routes = [
  { path : "/", component :  Home},
  { path : "/:id", component : MovieDetail },
  { path : "*", redirect : "/"}
];

const router = new VueRouter({
  mode : "history",
  routes,
});


export default router;


