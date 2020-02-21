// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'

Vue.config.productionTip = false

var firebaseConfig = {
  apiKey: 'AIzaSyD_rsLuXa-w6dVexHbU0ADypaUgpomgDsc',
  authDomain: 'remind-vue.firebaseapp.com',
  databaseURL: 'https://remind-vue.firebaseio.com',
  projectId: 'remind-vue',
  storageBucket: 'remind-vue.appspot.com',
  messagingSenderId: '990220273231',
  appId: '1:990220273231:web:30aa9a1c9cc69a490a4c3a',
  measurementId: 'G-929D8DZ3TX'
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)
firebase.analytics()

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
