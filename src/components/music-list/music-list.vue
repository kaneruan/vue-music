<template>
  <div class="music-list">
    <div class="back">
      <i class="icon-back"></i>
    </div>
    <h1 class="title" v-html="title"></h1>
    <div class="bg-image" :style='bgStyle' ref='bgImage'>
      <div class="filter"></div>
    </div>
    <scroll :data='songs' class="list" ref='list' :listenScroll='true' :probeType='3' @scroll='scroll'>
      <div class="song-list-wrapper">
        <song-list :songs='songs'></song-list>
      </div>
    </scroll>
    <loading v-show="!songs.length"></loading>
  </div>
</template>
<script>
import Scroll from 'base/scroll/scroll'
import SongList from 'base/song-list/song-list'
import Loading from 'base/loading/loading'
export default {
  props: {
    bgImage: {
      type: String,
      default: ''
    },
    songs: {
      type: Array,
      default: []
    },
    title: {
      type: String,
      default: ''
    }
  },
  computed: {
    bgStyle() {
      return `background-image: url(${this.bgImage})`
    }
  },
  methods: {
    scroll(pos) {
      let bgImageHeight =  this.$refs.bgImage.clientHeight
      let bgImageStyle =  this.$refs.bgImage.style
      if(bgImageHeight) {
        bgImageStyle.paddingTop = this.$refs.list.$el.style.top = this._getTopPx(this._listTop + pos.y)
      }
      if(pos.y > 25 && !bgImageHeight) {
        this.$refs.bgImage.style.paddingTop = '70%'
        this.$nextTick(() => {
          this.$refs.list.$el.style.top = `${this.$refs.bgImage.clientHeight}px`
        })
      }
    },
    _getTopPx(val) {
      val = parseInt(val)
      if(val < 0) {
        return `0px`
      } else if(val > 0){
        return `${val}px`
      } else {
        console.error('parameter must be number')
      }
    }
  },
  mounted() {
    this.$refs.list.$el.style.top = `${this.$refs.bgImage.clientHeight}px`

    this._listTop = parseInt(this.$refs.list.$el.style.top.slice(0, -2))
  },
  components: {
    Scroll,
    SongList,
    Loading
  }
}
</script>

<style lang="stylus">
  @import '~common/stylus/variable'
  @import '~common/stylus/mixin'

  .music-list
    position fixed
    z-index 100
    top 0
    bottom 0
    left 0
    right 0
    background $color-background
    .back
      position absolute
      top 0
      left 6px
      z-index 50
      .icon-back
        display block
        padding 10px
        font-size $font-size-large-x
        color $color-theme
  .title
    position absolute
    top 0
    left 10%
    z-index 40
    width 80%
    no-wrap()
    text-align center
    line-height 40px
    font-size $font-size-large
    color $color-text
  .bg-image
    position relative
    width 100%
    height 0
    padding-top 70%
    transform-origin top
    background-size cover
    .play-wrapper
      position absolute
      bottom 20px
      z-index 50
  .list
    position absolute
    bottom 0
    left 0
    right 0
    overflow hidden
    .song-list-wrapper
      overflow hidden
</style>

