import * as types from './mutation-types'
// 播放
export const selectPlay = ({ state, commit }, { list, index }) => {
    commit(types.SET_FULLSCREEN, true)
    commit(types.SET_PLAYLIST, list)
    commit(types.SET_CURRENT_INDEX, index)
    commit(types.SET_SEQUENCE_LIST, list)
    commit(types.SET_PLAY_MODE, true)
    commit(types.SET_PLAYING, true)
}