<template>
  <div>
    <div class="singer">

    </div>
  </div>
</template>
<script>
  import {getSingerList} from 'api/singer'
  import{ERR_OK} from 'api/config.js'
  import Singer from 'common/js/singer'

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
            this.singers = res.data.list
            console.log(this._normalizeSinger(this.singers))
          }
        })
      },
      sortList(data) {
        return data.sort((pre, current) => {
          return pre.Findex.charCodeAt() - current.Findex.charCodeAt()
        })
      },
      // 初始化singer数据结构
      _normalizeSinger(list) {
        let map = {
          hot: {
            title: HOT_NAME,
            items: []
          }
        }
        list.forEach((ele, index) => {
          if (index < HOT_SINGER_LEN) {
            map.hot.items.push(new Singer({
              id: ele.Fsinger_mid,
              name: ele.Fsinger_name
            }))
          }
          const key = ele.Findex
          if (!map[key]) {
            map[key] = {
              title: key,
              items: []
            }
          }
          map[key].items.push(new Singer({
            id: ele.Fsinger_mid,
            name: ele.Fsinger_name
          }))

        })
        // 将对象转化为数组，以便vue遍历
        let listArr = []
        listArr.push(map.hot) && (delete map.hot)
        Object.keys(map).sort((pre, current) => {
          return pre.charCodeAt() - current.charCodeAt()
        }).forEach((ele) => {
          listArr.push(map[ele])
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
