import http from '@/untils/requrest'
import api from '../apiUrl'
/*
  首页的请求方法
 */
export default {
  login: (data) => {
    return http({url: api.login, data: data.data, method: data.method})
  }
}
