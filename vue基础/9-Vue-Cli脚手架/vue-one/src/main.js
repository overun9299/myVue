// 第一步先引入vue
import Vue from 'vue'
// 这样可以实现Vue的控制,但是有个缺点每次操作、修改都要去index.html中去找不方便,vue推荐将index中控制区域也封装成一个组件
new Vue({
    el:'#app'
})