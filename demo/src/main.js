// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import Router from 'vue-router';
import router from '@/router';

Vue.config.productionTip = false
Vue.use(Router);
/* eslint-disable no-new */
// var router = new Router({
// 		routes:[
// 		{
// 			path:"/user/:id",
// 			props:true,
// 			component:{
// 				props:["id"],
// 				template:"<div>{{id}}</div>"
// 				// template:"<div>{{$route.params.id}}</div>"				
// 			}
// 		}
// 		]
// 	});
new Vue({
	el: '#app',
	router,
	template: '<App/>',
	components: {App}
});