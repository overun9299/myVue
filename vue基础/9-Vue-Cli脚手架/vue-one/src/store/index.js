// 1.导入VueX
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


// 2.创建VueX对象
const store = new Vuex.Store({
    state:{
        msgplus:'希望一切都可以正常顺利'
    }
})

// 3.将VueX对象暴露出去
export default store