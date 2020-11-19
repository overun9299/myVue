<template>
    <div>
        <p>求求上天了</p>
        <button @click="getPublicData">获取共享数据</button>
        <p>这个组件1</p>
    </div>
</template>

<script>
    export default {
        name: "One",
        methods: {
            logInfo() {
                console.log('愿生活不要为难我,谢谢')
            },
            getPublicData() {
                console.log(this.$store.state.msgplus)
            }
        }
    }
</script>

<style scoped>

</style>