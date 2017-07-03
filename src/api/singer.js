import jsonop from './jsonp'
import { CommonParams, options } from './config'

export function getSingerList() {
    const url = 'https://c.y.qq.com/v8/fcg-bin/v8.fcg'

    const data = Object.assign({}, CommonParams, {
        channel: 'singer',
        page: 'list',
        key: 'all_all_all',
        pageSize: 100,
        pagenum: 1,
        hostUin: 0,
        needNewCode: 0,
        platform: 'yqq',
        g_tk: 5381
    })

    return jsonop(url, data, options)
}

export function getSingerDetail(singerId) {
    const url = 'https://c.y.qq.com/v8/fcg-bin/fcg_v8_singer_track_cp.fcg'

    const data = Object.assign({}, CommonParams, {
        hostUin: 0,
        needNewCode: 1,
        platform: 'yqq',
        order: 'listen',
        begin: 0,
        num: 100,
        songstatus: 1,
        singerid: singerId,
        g_tk: 5381
    })
    return jsonop(url, data, options)
}