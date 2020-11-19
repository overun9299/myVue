// 第一步先引入vue
// import Vue from 'vue'

// 由于脚手架版本,必须使用这种方式加载
import {createApp} from 'vue';

import App from './app'
import store from "./store";
import router from "./router";

// 这样可以实现Vue的控制,但是有个缺点每次操作、修改都要去index.html中去找不方便,vue推荐将index中控制区域也封装成一个组件


// new Vue({
//     render: c => c(App)
// }).$mount('#app')

// 由于脚手架版本,必须使用这种方式加载
createApp(App).use(store).use(router).mount('#app')