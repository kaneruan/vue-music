<template>
  <div>
    <div class="recommend">
      <div class="recommend-content">
        <div class="slider-wrapper">
          <slider v-if="recommends.length">
            <div v-for="item in recommends" class="item">
              <a class="item-img-container" :href="item.linkUrl">
                <img class='item-img' :src="item.picUrl" alt="图片">
              </a>
            </div>
          </slider>
        </div>
        <div class="recommend-list">
          <h3 class="list-title">热门歌单推荐</h3>
            <ul>
              <li v-for="item in discList" class="item">
                <div class="icon">
                  <img :src="item.imgurl" width="60" height="60" alt="">
                </div>
                <div class="text">
                  <h2 class="name" v-html="item.creator.name"></h2>
                  <div class="desc" v-html="item.dissname"></div>
                </div>
              </li>
            </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import {getRecommend, getDiscList} from 'api/recommend.js'
  import{ERR_OK} from 'api/config.js'
  import Slider from 'base/slider/slider'

  export default {
    name: 'recommend',
    data(){
      return {
        recommends: [],
        discList: []
      }
    },
    created() {
      this._getRecommend()
      this._getDiscList()
    },
    methods: {
      _getRecommend() {
        getRecommend().then((res) => {
          if (res.code === ERR_OK) {
            this.recommends = res.data.slider
          }
        })
      },
      _getDiscList() {
        getDiscList().then((res) => {
          if (res.code === ERR_OK) {
            this.discList = res.data.list
          }
        })
      }
    },
    components: {
      Slider
    }
  }
</script>
<style lang="stylus">
  @import "~common/stylus/variable"
  .recommend
    position fixed
    width 100%
    top 88px
    bottom 0
    .recommend-content
      height 100%
      overflow hidden
      .slider-wrapper
        position relative
        width 100%
        overflow hidden
      .recommend-list
        .list-title
          height 65px
          line-height 65px
          text-align center
          font-size $font-size-medium
          color $color-theme
        .item
          display flex
          box-sizing border-box
          align-items center
          padding 0 20px 20px 20px
          .icon
            display flex
            align-items center
            flex 0 0 60px
            width 60px
            padding-right 20px
          .text
            display flex
            flex-direction column
            jusify-content center
            flex 1
            line-height 20px
            overflow hidden
            font-size $font-size-medium
            .name
              margin-bottom 10px
              color $color-text
            .desc
              color $color-text-d
        .loading-container
          position absolute
          width 100%
          top 50%
          transform translateY(-50%)


</style>
