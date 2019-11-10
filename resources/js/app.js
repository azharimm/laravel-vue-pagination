
require('./bootstrap');

window.Vue = require('vue');

Vue.component('user-index', require('./components/users/Index.vue').default);

const app = new Vue({
    el: '#app',
});
