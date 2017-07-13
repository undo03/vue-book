<template>
  <div class="title">
    {{title}}
  </div>
</template>
<script>
  export default {
    data(){
      return {}
    },
    props: ['title'],
    computed: {},
    components: {},
    methods: {}
  }
</script>
<style scoped>
.title{
  width: 100%;
  height: 40px;
  line-height:40px;
  background-color: orange;
  text-align: center;
  font-size: 18px;
  position: relative;
  z-index: 99;
}
</style>
