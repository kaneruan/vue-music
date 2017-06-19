<template>
  <scroll class="listview" :data="data" ref="listview">
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
    <ul class="list-shortcut"
        @touchstart="onShortcutTouchStart"
        @touchmove.stop.prevent="onShortcutTouchMove">
      <li v-for="(group, index) in data" class="item needsclick" :data-index="index">
        {{group.title}}
      </li>
    </ul>
    <div>
    </div>
  </scroll>
</template>
<script>
  import Scroll from 'base/scroll/scroll'
  import {getData} from 'common/js/dom'

  const ANCHOR_HEIGHT = 18

  export default {
    created() {
      this.touch = {}
      setTimeout(() => {
        console.log(this.$refs)
      }, 20)
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
        let anchorIndex = parseInt(this.touch.anchorIndex) + delta // 注意转换this.touch.anchorIndex
        this._scrollTo(anchorIndex)
      },
      onShortcutTouchStart(e) {
        let anchorIndex = getData(e.target, 'index')
        let firstTouch = e.touches[0]
        this.touch.y1 = firstTouch.pageY
        this.touch.anchorIndex = anchorIndex

        this._scrollTo(anchorIndex)
      },
      _scrollTo(index) {
        this.$refs.listview.scrollToElement(this.$refs.listgroup[index], 0)

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
