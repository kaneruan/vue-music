<template>
  <div class="player" v-show='playList.length > 0'>
    <div class="normal-player" v-show='fullScreen'>
      <div class="background">
        <img width="100%" height="100%">
      </div>
    </div>
    <div class="top">
      <div class="back">
        <div class="icon-back"></div>
        <h1 class="title"></h1>
        <h2 class="subtitle"></h2>
      </div>
    </div>
    <div class="middle">
      <div class="middle-l">
        <div class="cd-wrapper">
          <div class="cd">
            <div class="img"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="bottom">
      <div class="operators">
        <div class="icon i-left">
          <div class="icon-sequece"></div>
        </div>
        <div class="icon icon-left">
          <div class="icon-pre"></div>
        </div>
        <div class="icon icon-center">
          <div class="icon-play"></div>
        </div>
        <div class="icon icon-right">
          <div class="icon-next"></div>
        </div>
        <div class="icon icon-right">
          <div class="icon icon-not-favorite"></div>
        </div>
      </div>
    </div>
    <div class="min-player" v-show='!fullScreen'>
      <div class="icon">
        <img width="40" height="40">
        <div class="text">
          <h2 class="name"></h2>
          <p class="desc"></p>
        </div>
        <div class="control"></div>
        <div class="control">
          <i class="icon-playList"></i>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters([
      'fullScreen',
      'playList'
    ])
  }
}
</script>
<style lang="stylus">
  @import '~common/stylus/variable'
  @import '~common/stylus/mixin'

  .player
    .normal-player
      position fixed
      left 0
      right 0
      bottom 0
      top 0
      z-index 150
      .background
        position absolute
        left 0
        top 0
        width 100%
        height 100%
        z-index -1
        opacity 0.6
        filter blur(20px)
      .top
        position relative
        margin-bottom 25px
        .back
          position absolute
          top 0
          left 6px

</style>


