<template>
  <div>
    <m-header title="收藏列表"></m-header>
    <ul class="list">
      <li v-for="book in collects">
        <img :src="book.bookCover" alt="">
        <div class="des">
          <h3>{{book.bookName}}</h3>
          <button @click="remove(book)">取消收藏</button>
        </div>
      </li>
    </ul>
    <router-link to="/list" tag="button" class="goBack">返回列表</router-link>
  </div>
</template>
<script>
  import {mapState, mapMutations} from 'vuex';
  import * as Types from '../store/mutatins-types';
  import MHeader from 'components/MHeader';
  export default {
    data(){
      return {}
    },
    computed: {
      ...mapState(['collects'])
    },
    components: {MHeader},
    methods: {
      ...mapMutations([Types.REMOVE_COLLECT]),
      remove(book){
        this[Types.REMOVE_COLLECT](book.id);
        this.$router.push('/list');
      }
    }
  }
</script>
<style scoped lang="less">
.list{
  width: 100%;
  li{
    border-bottom:1px solid #ccc;
    display: flex;
    align-items: center;
    text-align: center;
    img{
      flex: 1;
      width: 100px;
      height: 90px;
    }
    .des{
      flex: 2;
      h3{
        margin: 10px 0;
      }
      button{
        width: 70px;
        height: 30px;
      }
    }
  }
}
  .goBack{
    display: block;
    margin: 10px auto;
    width: 95%;
    height: 30px;
    font-size: 16px;
  }
</style>
