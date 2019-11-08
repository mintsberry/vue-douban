import axios from 'axios'
import { commParams } from './params'
export function getBook () {
  const url = '/api/book'
  let params = Object.assign({}, commParams)
  return axios.get(url, {
    params
  }).then((resp) => {
    return Promise.resolve(resp.data)
  })
}
export function getBookRecommend (start = 0, count = 10) {
  const url = '/api/book/recommend'
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
