import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'


import About from '../views/About.vue'
import Login from '../views/Login.vue'
import Menu from '../views/Menu.vue'
import FiltroMaster from '../components/FiltroMaster.vue'
//import ReporteVenta from '../views/Ventas/ReporteVenta.vue'


Vue.use(VueRouter)

const routes = [
  //{path: '/', name: 'Home',component: Home },
  {path: '/',name: 'Login',component: Login  },
  {path: '/menu',name: 'Menu',component: Menu,meta:{requireAuth:true}/*,children:[{ path: 'reporteVenta', component: ReporteVenta }]*/},
  {path: '/about',name: 'About',component:About},
  {path: '/FiltroMaster',name: 'FiltroMaster',component:FiltroMaster}
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


// filtros de de login

router.beforeEach((to, from, next) => {
  let usuario= localStorage.getItem("usuario");
  let token = localStorage.getItem("token");
  let autorizacion=to.matched.some(record => record.meta.requireAuth);

/*
  console.log('usuario:'+usuario);
  console.log('token:'+token);
*/
  if (autorizacion  && !usuario){
    next({name: 'Login'})
  } else if (!autorizacion && usuario){
   // console.log('existe token');
    next({name: 'Menu'})
  }else{
  //  console.log('else');
   next();
  }
})



export default router
