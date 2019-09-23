/*
*  此文件是封装的request请求
* */
import wepy from 'wepy'
const http = (data) => {
  return new Promise((resolve, reject) => {
    wepy.request({
      url: data.url,
      data: data.data,
      method: data.method,
      header: data.header || {
        'content-type': 'application/json'
      },
      success: function (res) {
        if (res.data.code === 'OK') {
          resolve(res.data)
        } else {
          reject(res.data)
        }
      },
      fail: function (err) {
        console.log('请求失败了')
        reject(err)
      }
    })
  })
}
export default http
