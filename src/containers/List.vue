<template>
  <div>
    <m-header title="图书列表"></m-header>
    <scroller :on-refresh="refresh" ref="scroller">
      <ul class="list">
        <li v-for="book in books">
          <img :src="book.bookCover" alt="">
          <div class="des">
            <h3>{{book.bookName}}</h3>
            <p>{{book.content}}</p>
          </div>
          <div class="btns">
            <button @click="collect(book)">收藏</button>
            <router-link :to="{path:'/update/'+book.id}" tag="button">修改</router-link>
            <button @click="remove(book)">删除</button>
          </div>
        </li>
      </ul>
    </scroller>

  </div>
</template>
<script>
  import {mapMutations} from 'vuex';
  import * as Types from '../store/mutatins-types';
  import MHeader from 'components/MHeader';
  import {getBookList, removeBook} from 'api';
  export default {
    data(){
      return {books: []}
    },
    created(){
      this.getBooks();
    },
    computed: {},
    components: {MHeader},
    methods: {
      ...mapMutations([Types.ADD_COLLECT]),
      collect(book){
          this[Types.ADD_COLLECT](book);
          this.$router.push('/collect');
      },
      refresh(){
        this.getBooks();
      },
      remove(book){
        removeBook(book.id).then(res=>{
          this.books = this.books.filter(item=>item.id !=book.id);
        });
      },
      getBooks(){
        getBookList().then(res => {
          this.books = res.data;
          this.$refs.scroller.finishPullToRefresh();
        });

      }
    }
  }
</script>
<style scoped lang="less">
  .list {
    margin-top: 40px;
    width: 100%;
    li {
      border-bottom: 1px solid #ccc;
      display: flex;
      img {
        flex: 1;
        width: 100px;
        height: 90px;
      }
      .des {
        flex: 2;
        h3 {
          line-height: 40px;
          font-size: 16px;
        }
        p {
          line-height: 20px;
          font-size: 14px;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }
      }
      .btns {
        flex: 1;
        padding: 5px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
      }
    }
  }
</style>
