import Vue from 'vue';
import VueRouter from 'vue-router';
import App from '@/App';

import router from '@/router'
import "normalize.css"
import "./css/common"

Vue.use(VueRouter);
new Vue({
	el:'#app',
	render:h=>h(App),
	router
});