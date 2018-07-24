import VueRouter from 'vue-router'
import Home from '@/component/Home'
import Other from '@/component/Other'
import Detail1 from '@/component/detail/Detail1'
import Detail2 from '@/component/detail/Detail2'
import Detail3 from '@/component/detail/Detail3'
import Detail4 from '@/component/detail/Detail4'
import Detail5 from '@/component/detail/Detail5'
import Echarts from '@/component/Echarts'
// import Echarts1 from '@/component/echarts/Echarts1'
// import Echarts2 from '@/component/echarts/Echarts2'
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
    },{
        path: 'detail3',
        name: 'detail3',
        component:Detail3
    },{
        path: 'detail4',
        name: 'detail4',
        component:Detail4
    },{
        path: 'detail5',
        name: 'detail5',
        component:Detail5
    }]
	}, {
    path: '/echarts',
    name: 'echarts',
    component: Echarts,
    children: [{
        path: 'echarts1',
        name: 'echarts1',
        component:() => import('@/component/echarts/Echarts1')
    },{
        path: 'echarts2',
        name: 'echarts2',
        component:() => import('@/component/echarts/Echarts2')
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