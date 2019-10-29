var axios = require('axios')
module.exports = {
  devServer: {
    before (app) {
      app.get('/api/recommend', (req, res) => {
        const url = 'https://frodo.douban.com/api/v2/elendil/recommend_feed'
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
      })
      app.get('/api/movies', (req, res) => {
        const url = 'https://frodo.douban.com/api/v2/movie/modules'
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
      })
    }
  }
}
