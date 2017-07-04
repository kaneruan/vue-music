<template>
  <transition name='slide'>
    <div class="singer-detail"></div>
  </transition>
</template>
<script>
  import {mapGetters} from 'vuex'
  import {getSingerDetail} from 'api/singer'
  import {ERR_OK} from 'api/config'
  import {createSong} from 'common/js/song'
  export default {
    data() {
      return {
        songs: []
      }
    },
    created() {
      this._getDetail()
      console.log(this.singer)
    },
    computed: {
      ...mapGetters([
        'singer'
      ])
    },
    methods: {
      _getDetail() {
        if(!this.singer.id) {
          this.$router.push('/singer')
          return
        }
        getSingerDetail(this.singer.id).then((res) => {
          if(res.code === ERR_OK) {
            this.songs = this._normalizeSongs(res.data.list)
            console.log(this.songs)
          }
        })
      },
      _normalizeSongs(list) {
        let ret = []
        list.forEach((item) => {
          let {musicData} = item
          let isExitedData = musicData.songid && musicData.albummid
          if(isExitedData){
            ret.push(createSong(musicData))
          }
        })
        return ret
      }
    }
  }
</script>
<style lang="stylus">
  @import '~common/stylus/variable'
  .singer-detail
    position fixed
    z-index 100
    width 100%
    top 88px
    bottom 0
    left 0
    right 0
    background-color $color-background
  .slide-enter-active,.slide-leave-active
    transition all .3s
  .slide-enter,.slide-leave-to
    transform translate3d(100%, 0, 0)
</style>


