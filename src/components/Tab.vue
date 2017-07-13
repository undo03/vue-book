<template>
    <div>
      <nav>
        <router-link to="/home">首页</router-link>
        <router-link to="/list">列表</router-link>
        <router-link to="/collect">收藏</router-link>
        <router-link to="/add">新增</router-link>
      </nav>
    </div>
</template>
<script>
    export default {
        data(){
            return {}
        },
        computed: {},
        components: {},
        methods: {}
    }
</script>
<style scoped lang="less">
  nav{
    background-color: #fff;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 99;
    width: 100%;
    height: 50px;
    line-height:50px;
    text-align: center;
    display: flex;
    align-items: center;
    border-top: 1px solid #cccccc;
    a{
      flex: 1;
      font-size: 18px;
      color: #555;
    }
    .router-link-active{
      color: orangered;
    }
  }
</style>
