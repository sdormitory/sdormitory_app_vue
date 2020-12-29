import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import store from '../store/index'
import Login from "../views/Login/login.vue";
import Info from "../views/Info/info.vue";
import Updateps from "../views/Updateps/updateps.vue";
import Leave from "../views/Leave/list.vue";
import LeaveDetail from "../views/Leave/detail.vue";
Vue.use(VueRouter);

const routes = [{
		path: "/",
		name: "Login",
		component: () =>
			import("../views/Login/login.vue")
	},
	{
		path: "/Login",
		name: "Login",
		component: () =>
			import("../views/Login/login.vue")
	},
	{
		path: "/Home",
		name: "Home",
		component: Home,
		children: [{
			path: "/",
			// name: "list",
			// component: list,
		}]
    },
	{
		path: "/Info",
		name: "Info",
		component: Info,
		children: [{
			path: "/",
		}]
	},
	{
		path: "/Updateps",
		name: "Updateps",
		component: () =>
			import("../views/Updateps/updateps.vue")
	},
	{
		path: "/Leave",
		name: "Leave",
		component: () =>
			import("../views/Leave/list.vue")
	},
	{
		 path: '/LeaveDetail/:id',
		 name: 'LeaveDetail',
		 component: LeaveDetail
	},
];

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes
});

router.beforeEach(function(to, from, next) {
	if("/Login" == to.path){
		store.commit("set_isShowBar",false);
	}else{
		store.commit("set_isShowBar",true);
	}
	console.log('--' + localStorage.getItem('stuToken') + to.path)
	if (null == localStorage.getItem('stuToken')) {
		if (to.path !== '/Login') {
			return next('/Login')
		}
	}
	next()
})
export default router
