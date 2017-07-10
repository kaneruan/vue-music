<template>
  <div class="music-list">
    <div class="back">
      <i class="icon-back"></i>
    </div>
    <h1 class="title" v-html="title" ref='title'></h1>
    <div class="bg-image" :style='bgStyle' ref='bgImage'>
      <div class="filter"></div>
    </div>
    <div class="bg-layer" ref="bgLayer"></div>
    <scroll :data='songs' class="list" ref='list' :listenScroll='listenScroll' :probeType='probeType' @scroll='scroll' :momentum='momentum'>
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
import { prefixStyle } from 'common/js/dom'

const transform = prefixStyle('transform')
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
  data() {
    return {
      scrollY: 0
    }
  },
  computed: {
    bgStyle() {
      return `background-image: url(${this.bgImage})`
    }
  },
  methods: {
    scroll(pos) {
      this.scrollY = pos.y
    }
  },
  created() {
    this.probeType = 3
    this.listenScroll = true
    this.momentum = false
  },
  mounted() {
    this.$refs.list.$el.style.top = `${this.$refs.bgImage.clientHeight}px`
    this._listTop = parseInt(this.$refs.list.$el.style.top.slice(0, -2)) // list初始化时的值
    this._bgImageHeight = this.$refs.bgImage.clientHeight // bgImage初始化的值
    this._titleHeight = this.$refs.title.clientHeight
  },
  components: {
    Scroll,
    SongList,
    Loading
  },
  watch: {
    scrollY(newY) {
      this.$refs.bgImage.style[transform] = `scale(1)`
      if (-newY > (this._bgImageHeight - this._titleHeight)) {
        this.$refs.title.style.zIndex = '1000'
        this.$refs.bgImage.style.zIndex = '999'
        this.$refs.bgImage.style.paddingTop = `${this._titleHeight}px`
      } else if (newY > 0) {
        this.$refs.title.style.zIndex = '1000'
        this.$refs.bgImage.style.zIndex = '999'
        let scale = 1 + Math.abs(newY / this._bgImageHeight)
        this.$refs.bgImage.style[transform] = `scale(${scale})`
      } else {
        this.$refs.bgImage.style.paddingTop = '70%'
        this.$refs.title.style.zIndex = '40'
        this.$refs.bgImage.style.zIndex = '0'
        this.$refs.bgLayer.style.height = `${-newY + 1}px`
        this.$refs.bgLayer.style[transform] = `translate3d(0, ${newY}px, 0)`
      }
    }
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
  .bg-layer
    position  relative
    background-color $color-background
  .list
    position absolute
    bottom 0
    left 0
    right 0
    .song-list-wrapper
      overflow hidden
</style>

