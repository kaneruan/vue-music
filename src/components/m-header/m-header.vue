<template>
  <div class="m-header">
    <div class="icon"></div>
    <div class="text">Music</div>
  </div>
</template>
<style lang="stylus">
  @import "~common/stylus/variable.styl"
  @import "~common/stylus/mixin.styl"
  .m-header
    position: relative
    height: 44px
    text-align: center
    color $color-theme
    font-size: 0
    .icon
      display: inline-block
      vertical-align: top
      margin-top: 6px
      width 30px
      height 30px
      margin-left 9px
      bg-image('logo')
      background-size 30px 32px
    .text
      display inline-block
      font-size $font-size-large-x
      vertical-align top
      line-height 44px
      color $color-text
</style>
