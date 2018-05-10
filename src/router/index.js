import VueRouter from 'vue-router'
import Home from '@/component/Home'
import Other from '@/component/Other'
import Detail1 from '@/component/detail/Detail1'
import Detail2 from '@/component/detail/Detail2'
import Echarts from '@/component/Echarts'
import Echarts1 from '@/component/echarts/Echarts1'
const routes = [{
    path: '/home',
    name: 'home',
    component: Home,
    children: [{
        path: 'detail1',
        name: 'detail1',
        component:Detail1
    },{
        path: 'detail2',
        name: 'detail2',
        component:Detail2
    }]
	}, {
    path: '/echarts',
    name: 'echarts',
    component: Echarts,
    children: [{
        path: 'echarts1',
        name: 'echarts1',
        component:Echarts1
    }]
    },{
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