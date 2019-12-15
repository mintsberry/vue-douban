import axios from 'axios'
import {
  commParams
} from './params'
export function getMovies () {
  const url = '/api/v2/movie/modules'
  let params = Object.assign({}, commParams)
  return axios.get(url, {
    params
  }).then((resp) => {
    return Promise.resolve(resp.data)
  })
}
export function getEventVideos (count) {
  const url = '/api/v2/skynet/playlist/recommend/event_videos'
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
  const url = '/api/v2/skynet/playlists'
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
  const url = `/api/v2/movie/${id}`
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
  const url = `/api/v2/movie/${id}/rating`
  let params = Object.assign({}, commParams, {
    id
  })
  return axios.get(url, {
    params
  }).then((resp) => {
    return Promise.resolve(resp.data)
  })
}
export function getStaff (id) {
  const url = `/api/v2/movie/${id}/celebrities`
  let params = Object.assign({}, commParams, {
    id
  })
  return axios.get(url, {
    params
  }).then((resp) => {
    return Promise.resolve(resp.data)
  })
}
export function gethotInterests (id) {
  const url = `/api/v2/movie/${id}/hot_interests?`
  let params = Object.assign({}, commParams, {
    id
  })
  return getMovieRelatedInfo(url, params)
}
export function getRelated (id) {
  const url = `/api/v2/movie/${id}/related_items?`
  let params = Object.assign({}, commParams, {
    id
  })
  return getMovieRelatedInfo(url, params)
}
export function getMoviesRecommend (requestParams) {
  const url = '/api/v2/movie/recommend'
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
function getMovieRelatedInfo (url, params) {
  return axios.get(url, {
    params
  }).then((resp) => {
    return Promise.resolve(resp.data)
  })
}
