import jsonop from './jsonp'
import {CommonParams, options} from './config'
export function getRecommend() {
  const url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'

  const data = Object.assign({}, CommonParams, {
    platform: 'h5',
    uin: 0,
    needNewCode: 1
  })
  return jsonop(url, data, options)
}
