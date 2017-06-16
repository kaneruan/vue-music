import originJSONP from 'jsonp'

export default function jsonp(url, data, option) {
  let urlParam = Object.keys(data).reduce((a, b, index) => {
    if (index === 1) {
      return `${a}=${encodeURIComponent(data[a])}&${b}=${encodeURIComponent(data[b])}`
    } else {
      return `${a}&${b}=${encodeURIComponent(data[b])}`
    }
  })
  url += (url.indexOf('?') > -1 ? '&' + urlParam : '?' + urlParam)
  return new Promise((resolve, reject) => {
    originJSONP(url, option, (err, data) => {
      if (!err) {
        resolve(data)
      } else {
        reject(err)
      }
    })
  })
}
