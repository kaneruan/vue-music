<template>
  <div class="song-list">
    <ul>
      <li v-for="(song, index) in songs" class="item" @click='selectItem(song, index)'>
        <div class="content">
          <h2 class="name">{{song.name}}</h2>
          <p class="desc">{{getDesc(song)}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    props: {
      songs: {
        type: Array,
        default: []
      }
    },
    methods: {
      selectItem(item, index) {
        this.$emit('select', item, index)
      },
      getDesc(song) {
        return `${song.singer} . ${song.album}`
      }
    }
  }
</script>
<style lang="stylus">
  @import '~common/stylus/variable'
  @import '~common/stylus/mixin'

  .song-list
    display flex
    padding 10px 0
    align-items center
    box-sizing border-box
    font-size $font-size-medium
    .content
      flex 1
      padding 5px 40px
      .name
        font-size $font-size-medium-x
        color: $color-text
        padding-bottom 4px
      .desc
        font-size $font-size-medium
        color: $color-text-l
</style>

