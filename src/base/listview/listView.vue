<template>
  <scroll
    class="listview"
    :data="data"
    ref="listview"
    :listenScroll='listenScroll'
    :probeType='probeType'
    @scroll='scroll'>
    <ul>
      <li v-for="group in data" class="list-group" ref="listgroup">
        <h2 class="list-group-title">{{group.title}}</h2>
        <ul>
          <li v-for="item in group.items" class="list-group-item">
            <img class="avatar" v-lazy="item.avatar" alt="图片">
            <span class="name">{{item.name}}</span>
          </li>
        </ul>
      </li>
    </ul>
    <ul class="list-shortcut" @touchstart="onShortcutTouchStart" @touchmove.stop.prevent="onShortcutTouchMove">
      <li
        v-for="(group, index) in data"
        class="item needsclick"
        :class="{'current': currentIndex === index}"
        :data-index="index">
        {{group.title}}
      </li>
    </ul>
    <div>
    </div>
  </scroll>
</template>
<script>
import Scroll from 'base/scroll/scroll'
import { getData } from 'common/js/dom'

const ANCHOR_HEIGHT = 18

export default {
  created() {
    this.touch = {}
    this.listenScroll = true
    this.listHeight = []
    this.probeType = 3
  },
  data() {
    return {
      scrollY: -1,
      currentIndex: 0
    }
  },
  props: {
    data: {
      type: Array,
      default() {
        return []
      }

    }
  },
  methods: {
    onShortcutTouchMove(e) {
      let firstTouch = e.touches[0]
      this.touch.y2 = firstTouch.pageY
      let delta = (this.touch.y2 - this.touch.y1) / ANCHOR_HEIGHT | 0 // touch之间的差值,向下取整
      this.currentIndex = parseInt(this.touch.anchorIndex) + delta // 注意转换this.touch.anchorIndex
      this._scrollTo(this.currentIndex)
    },
    onShortcutTouchStart(e) {
      this.currentIndex = getData(e.target, 'index')
      let firstTouch = e.touches[0]
      this.touch.y1 = firstTouch.pageY
      this.touch.anchorIndex = this.currentIndex

      this._scrollTo(this.currentIndex)
    },
    scroll(pos) {
      this.scrollY = pos.y
    },
    _scrollTo(index) {
      this.$refs.listview.scrollToElement(this.$refs.listgroup[index], 0)
    },
    _calculateHeight() {
      this.listHeight = []
      const list = this.$refs.listgroup
      let height = 0
      this.listHeight.push(height)
      for(let i = 0; i < list.length; i++) {
        let item = list[i]
        height += item.clientHeight
        this.listHeight.push(height)
      }
    }
  },
  watch: {
    data() {
      setTimeout(() => {
        this._calculateHeight()
      }, 20)
    },
    scrollY(newY) {
      const listHeight = this.listHeight
      for(let i = 0; i < listHeight.length; i++) {
        let height1 = listHeight[i]
        let height2 = listHeight[i+1]
        if(!height2 || (-newY) > height1 && (-newY) < height2) {
          this.currentIndex = i
          return
        } else {
          this.currentIndex = 0
        }
      }

    }
  },
  computed: {},
  components: {
    Scroll
  }
}
</script>
<style lang="stylus">
  @import "~common/stylus/variable"
  .listview
    position relative
    width 100%
    height 100%
    overflow hidden
    background: $color-background
    .list-group
      padding-bottom 30px
      .list-group-title
        height 30px
        line-height 30px
        padding-left 20px
        font-size $font-size-small
        color $color-text-l
        background $color-highlight-background
      .list-group-item
        display flex
        align-items center
        padding 20px 0 0 30px
        .avatar
          width 50px
          height 50px
          border-radius 50%
        .name
          margin-left 20px
          color $color-text-l
          font-size $font-size-medium
    .list-shortcut
      position absolute
      z-index 30
      right 0
      top 50%
      transform translateY(-50%)
      width 20px
      padding 20px 0
      border-radius 18px
      text-align center
      background $color-background-d
      font-family Helvetica
      .item
        padding 3px
        line-height 1
        color $color-text-l
        font-size $font-size-small
        &.current
          color $color-theme
      .list-fixed
        position absolute
        top 0
        left 0
        width 100%
        .fixed-tile
          height 30px
          line-height 30px
          padding-left 20px
          font-size $font-size-small
          color $color-text-l
          background $color-highlight-background
      .loading-container
        position absolute
        width 100%
        top 50%
        transform translateY(-50%)

    .nav-list
      position fixed
      top 20px
      right 10px
</style>
