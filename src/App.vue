<template>
  <div id="app">
    <m-header></m-header>
    <tab></tab>
    <keep-alive>
      <router-view ></router-view>
    </keep-alive>
     <!--动态keep-alive-->
    <!--<keep-alive >-->
      <!--<router-view v-if="$route.meta.keepAlive"></router-view>-->
    <!--</keep-alive>-->
    <!--<router-view v-if='!$route.meta.keepAlive'></router-view>-->
  </div>
</template>

<script>
  import MHeader from 'components/m-header/m-header'
  import Tab from 'components/tab/tab'
  export default {
    name: 'app',
    components: {
      MHeader,
      Tab
    }
  }
</script>


<style lang="stylus">
  @import "~common/stylus/variable.styl";
  #app
    color $color-theme
</style>
