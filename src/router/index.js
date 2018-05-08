import VueRouter from 'vue-router'
import Home from '@/component/Home'
import Other from '@/component/Other'
import Detail1 from '@/component/Detail1'
const routes = [{
    path: '/home',
    name: 'home',
    component: Home,
    children: [{
        path: 'detail1',
        name: 'detail1',
        component:Detail1
    }]
	}, {
	    path: '/other',
	    name: 'other',
	    component: Other
	}, {
	    path: '/*',
	    redirect: '/home'
	}];
export default new VueRouter({
    mode: 'hash',
    routes
})