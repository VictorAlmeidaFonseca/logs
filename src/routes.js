const express = require('express');
const routes = express.Router()

const metricsController = require('./controllers/metrics')

//route for server connection test
routes.get('/v1/test', (req, res) => res.send(`on ${process.env.ELASTIC_HOST}:${process.env.ELASTIC_PORT}`))

//route for send data at elastic
routes.post('/v1/insert/:index', metricsController.saveMetric)

module.exports = routes