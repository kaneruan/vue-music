import * as types from './mutation-types'

export default {
    [types.SET_SINGER](state, singer) {
        state.singer = singer
    },
    [types.SET_SEQUENCE_LIST](state, sequenceList) {
        state.sequenceList = sequenceList
    },
    [types.SET_PLAYING](state, playing) {
        state.playing = playing
    },
    [types.SET_PLAY_MODE](state, playMode) {
        state.playMode = playMode
    },
    [types.SET_FULLSCREEN](state, fullScreen) {
        state.fullScreen = fullScreen
    },
    [types.SET_PLAYLIST](state, playList) {
        state.playList = playList
    },
    [types.SET_CURRENT_INDEX](state, currentIndex) {
        state.currentIndex = currentIndex
    }
}