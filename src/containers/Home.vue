<template>
  <div>
    <m-header title="书城首页"></m-header>
    <slider :sliders="sliders" v-if="sliders.length"></slider>
    <h2 class="hots">最新上架</h2>
    <ul class="hots-list">
      <li v-for="hot in hots">
        <img :src="hot.bookCover" alt="">
        <p>{{hot.bookName}}</p>
      </li>
    </ul>
  </div>
</template>
<script>
  import Slider from 'components/Slider';
  import MHeader from 'components/MHeader';
  import {getSliders, getHots} from 'api';
  export default {
    data(){
      return {sliders: [], hots: []}
    },
    created(){
      getSliders().then(res => {
        this.sliders = res.data;
      });
      getHots().then(res => {
        this.hots = res.data;
      });
    },
    computed: {},
    components: {MHeader, Slider},
    methods: {}
  }
</script>
<style scoped lang="less">
  .hots {
    padding-left: 10px;
    margin: 10px 0;
    font-size: 16px;
    color: red;
  }

  .hots-list {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    li {
      width: 33.3333333%;
      text-align: center;
      img {
        width: 90%;
      }
      p {
        line-height: 20px;
        font-size: 14px;
      }
    }
  }
</style>
