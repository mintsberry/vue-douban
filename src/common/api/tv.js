import axios from 'axios'
import { commParams } from './params'
export function getTv () {
  const url = '/api/v2/tv/modules'
  let params = Object.assign({}, commParams)
  return axios.get(url, {
    params
  }).then((resp) => {
    return Promise.resolve(resp.data)
  })
}

export function getTvRecommend (start = 0, count = 10) {
  const url = '/api/v2/tv/suggestion'
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
