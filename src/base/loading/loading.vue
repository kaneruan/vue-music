<template>
  <div class="loading">
    <img width="24" height="24" src="./logo@2x.png" alt="loading">
    <p class="desc">{{title}}</p>
  </div>
</template>
<script>
  export default {
    name: 'v-loading',
    props: {
      title: {
        type: String,
        default: '正在载入...'
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"

  .loading
    width 100%
    text-align center
    .desc
      line-height 20px
      font-size $font-size-small
      color $color-text-l
</style>
