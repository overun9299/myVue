// 1.引入路由
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// 2.引入组件
import One from "../components/One";
import Two from "../components/Two";

// 3.定义跳转指向
const routers = [
    {path:'/one',component:One},
    {path:'/two',component:Two},
]

// 4.新建对象
const router = new VueRouter.createMemoryHistory({
    routers
})

// 5.暴露出对象
export default router

