import axios from 'axios'
import {
  commParams
} from './params'
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
export function getDetail (id) {
  const url = `/api/movies/${id}`
  let params = Object.assign({}, commParams, {
    id
  })
  return axios.get(url, {
    params
  }).then((resp) => {
    return Promise.resolve(resp.data)
  })
}
export function getRating (id) {
  const url = `/api/movies/${id}/rating`
  let params = Object.assign({}, commParams, {
    id
  })
  return axios.get(url, {
    params
  }).then((resp) => {
    return Promise.resolve(resp.data)
  })
}
export function getMoviesRecommend (requestParams) {
  const url = '/api/movies/recommend'
  let params = Object.assign({}, commParams, requestParams, {
    udid: '998f4157313c3c7c4ecab0acb91ab80989d34be9',
    rom: 'android',
    apikey: '0dad551ec0f84ed02907ff5c42e8ec70',
    s: 'rexxar_new',
    channel: 'Douban',
    device_id: '998f4157313c3c7c4ecab0acb91ab80989d34be9',
    os_rom: 'android',
    apple: '55825076b9cf9a581d44819a5f1c57da',
    icecream: '6142bffdc3fd39f07f2434788a7f4f82',
    mooncake: '02c2b9d34d38dcd08ec13a8b812a376e',
    sugar: '46007',
    loc_id: '108288',
    _sig: 'RcZz6bouRmcstxg9fahnFCDNGDk=',
    _ts: '1573737249'
  })
  return axios.get(url, {
    params
  }).then((resp) => {
    return Promise.resolve(resp.data)
  })
}
