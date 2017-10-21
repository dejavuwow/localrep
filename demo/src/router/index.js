import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

// export default new Router({
//   routes: [
//     {
//       path: '/',
//       name: 'Hello',
//       component: HelloWorld
//     }
//   ]
// })
export default new Router({
		routes:[
		{
			path:"/user/:id",
			props:true,
			component:{
				props:["id"],
				template:"<div>我的{{id}}</div>"
				// template:"<div>{{$route.params.id}}</div>"				
			}
		}
		]
	});