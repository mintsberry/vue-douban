import axios from 'axios'
import { commParams } from './params'
export function getBook () {
  const url = '/api/v2/book/modules'
  let params = Object.assign({}, commParams)
  return axios.get(url, {
    params
  }).then((resp) => {
    return Promise.resolve(resp.data)
  })
}
export function getBookRecommend (start = 0, count = 10) {
  const url = '/api/v2/book/suggestion'
  let params = Object.assign({}, commParams, {
    start,
    count
  })
  return axios.get(url, {
    params
  }).then((resp) => {
    return Promise.resolve(resp.data)
  })
}
