<template>
  <div id="app">
    <transition name="trans">
      <keep-alive>
        <router-view class="view"></router-view>
      </keep-alive>
    </transition>
    <tab></tab>
  </div>
</template>

<script>
  import Tab from 'components/Tab';
  export default {
    name: 'app',
    components: {
      Tab
    }
  }
</script>

<style>
  .view {
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    bottom: 50px;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .trans-enter {
    transform: translate(100%);
  }

  .trans-enter-active {
    transition: .3s linear;
  }

  .trans-leave-active {
    transition: .3s linear;
    transform: translate(-100%);
  }
</style>
