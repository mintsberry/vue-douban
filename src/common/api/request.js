import axios from 'axios'
import { commParams } from './params'

export function request (url, params = {}) {
  params = Object.assign({}, params, commParams)
  return axios.get(url, {
    params
  }).then((resp) => {
    return Promise.resolve(resp.data)
  })
}
