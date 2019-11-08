var axios = require('axios')
const request = function (url, req, res) {
  axios.get(url, {
    headers: {
      'User-Agent': 'api-client/1 com.douban.frodo/6.23.0(167) Android/22 product/SM-G955F vendor/samsung model/SM-G955F  rom/android  network/wifi  platform/AndroidPad'
    },
    params: req.query
  }).then((resp) => {
    res.json(resp.data)
  }).catch((e) => {
    console.log(e)
  })
}
const baseUrl = 'https://frodo.douban.com'
module.exports = {
  devServer: {
    before (app) {
      app.get('/api/recommend', (req, res) => {
        const url = baseUrl + '/api/v2/elendil/recommend_feed'
        request(url, req, res)
      })
      app.get('/api/movies', (req, res) => {
        const url = baseUrl + '/api/v2/movie/modules'
        request(url, req, res)
      })
      app.get('/api/event_videos', (req, res) => {
        const url = baseUrl + '/api/v2/skynet/playlist/recommend/event_videos'
        request(url, req, res)
      })
      app.get('/api/play_list', (req, res) => {
        const url = baseUrl + '/api/v2/skynet/playlists'
        request(url, req, res)
      })
      app.get('/api/tv', (req, res) => {
        const url = baseUrl + '/api/v2/tv/modules'
        request(url, req, res)
      })
      app.get('/api/book', (req, res) => {
        const url = baseUrl + '/api/v2/book/modules'
        request(url, req, res)
      })
      app.get('/api/book/recommend', (req, res) => {
        const url = baseUrl + '/api/v2/book/suggestion'
        request(url, req, res)
      })
    }
  }
}
