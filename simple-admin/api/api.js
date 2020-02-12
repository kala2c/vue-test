// import { request } from './request'
import Request from './request'
let request = Request.request
let domain = '/'
// let domain = 'http://127.0.0.1:3000/'

const login = query => { return request(query, domain + 'admin/login', 'POST') }
const getUploadToken = query => { return request(query, domain + 'admin/upload/token') }


export default {
  login,
  getUploadToken
}