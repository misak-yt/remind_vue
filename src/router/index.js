import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import Buy from '@/components/Buy'
import Todo from '@/components/Todo'
import firebase from 'firebase'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    // {
    //   path: '/',
    //   name: SignIn,
    //   component: SignIn
    // },
    {
      path: '/',
      name: 'Main',
      component: Main,
      meta: { requiresAuth: true }
    },
    {
      path: '/buy',
      name: 'Buy',
      component: Buy,
      meta: { requiresAuth: true }
    },
    {
      path: '/todo',
      name: 'ToDo',
      component: Todo,
      meta: { requiresAuth: true }
    }
  ]
})
