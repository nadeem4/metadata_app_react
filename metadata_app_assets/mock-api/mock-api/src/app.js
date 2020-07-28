const _ = require('lodash')
const express = require('express')
const config = require('config')
const routes_group = require('./routes')

app = express()

_.forEach(routes_group, (routes, prefix) => {
  _.forEach(routes, (def, path) => {
    _.forEach(def, (respV, method) => {
      let resp
      if (typeof respV === 'string') {
        resp = require(`./data/${respV}`)
      } else {
        resp = respV
      }
      app[method](prefix + path, (req, res) => {
        res.status(200)
          .send(resp)
      })
    })
  })

})

app.listen(config.PORT, () => {
  console.log(`mock api running on port ${config.PORT}`)
})