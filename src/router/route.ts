import Home from '../views/Home.vue';
import MCQComponent from '../components/mcqcomponent/mcqComponent.vue';
import Result from '../components/mcqcomponent/reviewResponse/reviewResponse.vue'
import signup from '../components/restaurantComponent/signup/signup.vue'
import TODO from '../components/restaurantComponent/todo/todo.vue'
// import ToDo from '../components/TODO/todoComponent/ToDo.vue'

const routes = [
    {
      path: '/',
      name: 'home',
      // component: Home
      component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/mcq',
      name: 'MCQ',
      component: MCQComponent
    },
    // {
    //   path: '/ToDo',
    //   name: 'ToDo',
    //   component: ToDo
    // },
    // {
    //   path: '/todo',
    //   name: 'TODO',
    //   component: TODO
    // },
    {
      path: '/signup',
      name: 'signup',
      component: signup
    },
    {
         path: '/todo',
         name: 'TODO',
       component: TODO
       },
    {
      path: '/result',
      name: 'result',
      component: Result
    },
    {
      path: '/about',
      name: 'about',
      component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
      children :[
        {
          name : 'About1',
          path : 'about1',
          component: () =>
          import(/* webpackChunkName: "about" */ "../views/About1Component.vue"),
        },
        {
          name : 'About2',
          path : 'about2',
          // component : About2Component,
          component: () =>
          import(/* webpackChunkName: "about" */ "../views/About2Component.vue"),
        }
      ]
    }
  ]

  export default routes;