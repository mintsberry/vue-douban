import axios from 'axios'
import { commParams } from './params'
export function getMovies () {
  const url = '/api/movies'
  let params = Object.assign({}, commParams)
  return axios.get(url, {
    params
  }).then((resp) => {
    return Promise.resolve(resp.data)
  })
}
export function getEventVideos (count) {
  const url = '/api/event_videos'
  let params = Object.assign({}, commParams, {
    count
  })
  return axios.get(url, {
    params
  }).then((resp) => {
    return Promise.resolve(resp.data)
  })
}
export function getPlayList (count = 4) {
  const url = '/api/play_list'
  let params = Object.assign({}, commParams, {
    count
  })
  return axios.get(url, {
    params
  }).then((resp) => {
    return Promise.resolve(resp.data)
  })
}
