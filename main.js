import Vue from 'vue';
import VueRouter from 'vue-router';
import App from '@/App';

import { Loading } from 'element-ui';

import router from '@/router'
import "normalize.css"
import "./css/common"

Vue.use(Loading);

Vue.use(VueRouter);
new Vue({
	el:'#app',
	render:h=>h(App),
	router
});