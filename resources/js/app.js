
require('./bootstrap');

window.Vue = require('vue');
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const  UserIndex = require('./components/users/Index').default

const routes = [
    {
        path: '/users',
        name: 'user.index',
        component: UserIndex
    }
]

const router = new VueRouter({
    mode:'history',
    routes
})

const app = new Vue({
    el: '#app',
    router
});
