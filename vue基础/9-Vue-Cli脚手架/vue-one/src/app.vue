<!--template用于编写当前组件的结构代码-->
<template>
    <div id="app">
        <p>{{msg}}</p>
        <p>123</p>
        <button @click="logInfo">完成</button>
        <button @click="getPublicData">获取共享数据</button>
<!--        <One></One>-->
<!--        <Two></Two>-->
        <br>
        <router-link to="/one" tag="button">Go To One</router-link>
        <router-link to="/twos" tag="button">Go To Two</router-link>
        <router-view/>
    </div>
</template>

<!--script用于编写当前组件的业务代码-->
<script>
    // 导入组件
    // import One from './components/One'
    // import Two from "./components/Two";
    export default {
        name: "app",
        data: function () {
            return {
                msg:'愿生活不要为难我,谢谢'
            }
        },
        methods: {
            logInfo() {
                console.log('愿生活不要为难我,谢谢')
            },
            getPublicData() {
                console.log(this.$store.state.msgplus)
            }
        },
        // 加载组件
        components: {
            // One:One,
            // Two:Two
        }
    }
</script>

<!--style用于编写当前组件的样式代码-->
<style scoped>

</style>