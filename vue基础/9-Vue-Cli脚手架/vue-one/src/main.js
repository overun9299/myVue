// 第一步先引入vue
import Vue from 'vue'

// 由于脚手架版本,必须使用这种方式加载
// import {createApp} from 'vue';

import App from './app'
import store from "./store";
import router from "./router";

// 这样可以实现Vue的控制,但是有个缺点每次操作、修改都要去index.html中去找不方便,vue推荐将index中控制区域也封装成一个组件


new Vue({
    store,
    router,
    render: h => h(App)
}).$mount('#app')

// 由于脚手架版本,必须使用这种方式加载
// createApp(App).use(store).use(router).mount('#app')


// import Vue from 'vue'
// import App from './app.vue'
// import store from './store/index.js'
// import router from './router/index.js'
//
// /* eslint-disable no-new */
// new Vue({
//     el: '#app',
//     store: store,
//     router: router,
//     render: c => c(App)
// })