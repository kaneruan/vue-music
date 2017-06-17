<template>
  <div>
    <div class="singer">

    </div>
  </div>
</template>
<script>
  import {getSingerList} from 'api/singer'
  import{ERR_OK} from 'api/config.js'
  const HOT_NAME = '热门'
  const HOT_SINGER_LEN = 10
  export default {
    data() {
      return {
        singers: []
      }
    },
    created() {
      this._getSingerList()
    },
    methods: {
      _getSingerList() {
        getSingerList().then((res) => {
          if (res.code === ERR_OK) {
            this.singers = this.sortList(res.data.list)
          }
        })
      },
      sortList(data) {
        return data.sort((pre, current) => {
          return pre.Findex.charCodeAt() - current.Findex.charCodeAt()
        })
      },
      _normalizeSinger() {
        let map = {
          hot: {
            title: HOT_NAME,
            items: []
          }
        }
        map.forEach((ele, index) => {
          if (index < HOT_SINGER_LEN) {
            map.hot.items.push({

            })
          }
        })
      }
    }
  }
</script>
<style lang="stylus">
  .singer
    position fixed
    top 88px
    bottom 0
    width 100%
</style>
