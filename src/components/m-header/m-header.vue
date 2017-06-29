<template>
  <div class="m-header">
    <div class="iconfont icon-music"></div>
    <div class="text">Music</div>
  </div>
</template>
<script>
export default {

}
</script>

<style lang="stylus">
  @import "~common/stylus/variable.styl"
  @import "~common/stylus/mixin.styl"
  .m-header
    position: relative
    height: 44px
    text-align: center
    color $color-theme
    font-size: 0
    .icon-music
      display: inline-block
      height 44px
      line-height 44px
      margin-right 1em
      font-size 20px
      vertical-align middle
    .text
      display inline-block
      font-size $font-size-large-x
      vertical-align top
      line-height 44px
      color $color-text
</style>
