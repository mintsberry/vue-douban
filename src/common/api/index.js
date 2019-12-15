import axios from 'axios'
export function getRrecommend ({ start = 0, count = 20 } = {}) {
  const url = '/api/v2/elendil/recommend_feed'
  return axios.get(url, {
    params: {
      apikey: '0dad551ec0f84ed02907ff5c42e8ec70',
      _sig: 'EjWKRtel+0xxfopOhVTR4KkHgU0=',
      _ts: '157180472',
      udid: '998f4157313c3c7c4ecab0acb91ab80989d34be9',
      channel: 'Douban',
      start
      // count
    }
  }).then((resp) => {
    return Promise.resolve(resp.data)
  })
}
