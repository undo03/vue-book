<template>
  <div>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="slide in sliders">
          <img :src="slide" alt="">
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>
<script>
  export default {
    data(){
      return {}
    },
    mounted(){
      new Swiper ('.swiper-container', {
        direction: 'horizontal',
        loop: true,
        pagination: '.swiper-pagination',
      })
    },
    props: ['sliders'],
    computed: {},
    components: {},
    methods: {}
  }
</script>
<style scoped>
img{
  width: 100%;
}
</style>
