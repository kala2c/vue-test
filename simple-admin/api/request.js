import axios from 'axios'

import { MessageBox } from 'element-ui'

const request = async (q, url, method) => {
  let response

  let query = q || {}

  // let method = query.method || 'get'
  // let data = query.method || {}
  await axios({
    url,
    method: method || 'get',
    // headers: {"Content-type": "application/x-www-form-urlencode"},
    data: query.data || {}
  }).then(res => {
    response = res
  }).catch(err => {
    if (err.response) {
      MessageBox.alert(err.response.data.err)
    }
  })
  return response
}

export default { request }