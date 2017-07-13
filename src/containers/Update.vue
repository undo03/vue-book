<template>
  <div>
    <m-header title="新增图书"></m-header>
    <div class="add">
      <div class="group">
        <label for="bookName">书名:</label>
        <input type="text" id="bookName" placeholder="请输入书的名称" v-model="book.bookName">
      </div>
      <div class="group">
        <label for="content">书的简介:</label>
        <input type="text" id="content" placeholder="请输入书的简单介绍" v-model="book.content">
      </div>
      <div class="group">
        <label for="bookCover">书名:</label>
        <input type="text" id="bookCover" placeholder="请输入书的封面" v-model="book.bookCover">
      </div>
      <div class="group btn">
        <button @click="update(book)">确认修改</button>
        <router-link to="/list" tag="button">取消</router-link>
      </div>
    </div>
  </div>
</template>
<script>
  import {updateBook, getOneBook} from 'api';
  import MHeader from 'components/MHeader';
  export default {
    data(){
      return {
        book: {
          bookName: '',
          bookCover: '',
          content: ''
        }
      }
    },
    activated(){
      getOneBook(this.$route.params.id).then(res => {
        this.book = res.data;
      });
    },
    computed: {},
    components: {MHeader},
    methods: {
      update(book){
        updateBook(book).then(res => {
          this.$router.push('/list');
        });
      }
    }
  }
</script>
<style scoped lang="less">
  .add {
    padding: 10px;
    .group {
      display: flex;
      margin-bottom: 10px;
      flex-direction: column;
      label {
        line-height: 30px;
        font-size: 16px;
      }
      input {
        height: 30px;
        padding-left: 5px;
        font-size: 14px;
      }
      button {
        height: 30px;
        font-size: 14px;
        margin-bottom: 5px;
      }
    }

  }
</style>
