/*
    此文件是存放请求地址
 */
// 配置基础地址
const baseUrl = 'http://wyethsuper.35dinghuo.com/'
// 地址
const proxyAddress = baseUrl + 'wyeth' // 开发环境
// const proxyAddress = '/erp' // 线上环境
const indexApi = {
  login: proxyAddress + '/login'
}
export default Object.assign({}, indexApi)
