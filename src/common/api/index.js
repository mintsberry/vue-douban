import axios from 'axios'
export function getRrecommend ({ start = 0, count = 20 } = {}) {
  const url = '/api/recommend'
  return axios.get(url, {
    params: {
      apikey: '0dad551ec0f84ed02907ff5c42e8ec70',
      start
      // count
    }
  }).then((resp) => {
    return Promise.resolve(resp.data)
  })
}
