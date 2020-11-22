// 1.引入路由
import Vue from 'vue'
import MyVueRouter from 'vue-router'

// 2.引入组件
import One from "../components/One";
import Two from "../components/Two";

Vue.use(MyVueRouter)

// 3.定义跳转指向  此处的routes必须使用routes
const routes = [
    {path:'/one',component:One},
    {path:'/two',component:Two},
]

// 4.新建对象
const router = new MyVueRouter({
    routes
})

// 5.暴露出对象
export default router



// import Vue from 'vue'
// import Router from 'vue-router'
// import One from '../components/One.vue'
// import Two from '../components/Two.vue'
//
// Vue.use(Router)
//
// const routes = [
//     { path: '/one', component: One },
//     { path: '/two', component: Two }
// ]
//
// const router = new Router({
//     routes // (缩写) 相当于 routes: routes
// })
//
// export default router

