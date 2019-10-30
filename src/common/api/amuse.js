import axios from 'axios'
export function getMovies () {
  const url = '/api/movies'
  return axios.get(url, {
    params: {
      apikey: '0dad551ec0f84ed02907ff5c42e8ec70'
    }
  }).then((resp) => {
    return Promise.resolve(resp.data)
  })
}
export function getEventVideos () {
  const url = '/api/event_videos'
  return axios.get(url, {
    params: {
      apikey: '0dad551ec0f84ed02907ff5c42e8ec70',
      count: 3
    }
  }).then((resp) => {
    return Promise.resolve(resp.data)
  })
}
