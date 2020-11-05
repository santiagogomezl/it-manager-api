const express = require('express')
const xss = require('xss')
const RolesService = require('./roles-service')

const rolesRouter = express.Router()
const jsonParser = express.json()

const serializeRole = role => ({
    id: role.id,
    title: xss(role.title),
})

rolesRouter
  .route('/')
  .get((req, res, next) => {
    const knexInstance = req.app.get('db')
    RolesService.getAllRoles(knexInstance)
      .then(trade => {
        res.json(trade.map(serializeRole))
      })
      .catch(next)
  })
    
module.exports = rolesRouter