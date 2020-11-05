const express = require('express')
const xss = require('xss')
const TradesService = require('./trades-service')

const tradesRouter = express.Router()
const jsonParser = express.json()

const serializeTrade = trade => ({
    id: trade.id,
    name: xss(trade.name),
})

tradesRouter
  .route('/')
  .get((req, res, next) => {
    const knexInstance = req.app.get('db')
    TradesService.getAllTrades(knexInstance)
      .then(trade => {
        res.json(trade.map(serializeTrade))
      })
      .catch(next)
  })
    
module.exports = tradesRouter