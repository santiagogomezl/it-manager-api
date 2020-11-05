const express = require('express')
const xss = require('xss')
const WorkstationsService = require('./workstations-service')

const workstationsRouter = express.Router()
const jsonParser = express.json()

const serializeWorkstation = workstation => ({
    id: workstation.id,
    host_name: workstation.host_name,
    os: workstation.os,
    version: workstation.version,
    memory: workstation.memory,
    free_space: workstation.free_space,
    hotfix_id: workstation.hotfix_id,
    hotfix_info: workstation.hotfix_info,
    hotfix_date: workstation.hotfix_date,
})

workstationsRouter
  .route('/')
  .get((req, res, next) => {
    const knexInstance = req.app.get('db')
    WorkstationsService.getAllWorkstations(knexInstance)
      .then(workstation => {
        res.json(workstation.map(serializeWorkstation))
      })
      .catch(next)
  })

  workstationsRouter
  .route('/:workstation_id')
  .all((req, res, next) => {
    WorkstationsService.getById(
      req.app.get('db'),
      req.params.workstation_id
    )
      .then(workstation => {
        if (!workstation) {
          return res.status(404).json({
            error: { message: `Task doesn't exist` }
          })
        }
        res.workstation = workstation
        next()
      })
      .catch(next)
  })
  .get((req, res, next) => {
    res.json(serializeWorkstation(res.workstation))
  })
  .patch(jsonParser, (req, res, next) => {
    const { id, host_name, os, version, memory, free_space, hotfix_id, hotfix_info, hotfix_date } = req.body
    const workstationToUpdate = { id, host_name, os, version, memory, free_space, hotfix_id, hotfix_info, hotfix_date }
  const numberOfValues = Object.values(workstationToUpdate).filter(Boolean).length
   if (numberOfValues === 0) {
     return res.status(400).json({
       error: {
         message: `Request body must contain 'hotfix_id'`
       }
     })
   }

   WorkstationsService.updateWorkstation(
        req.app.get('db'),
        req.params.workstation_id,
        workstationToUpdate
       )
         .then(numRowsAffected => {
           res.status(204).end()
         })
         .catch(next)
    })
    
module.exports = workstationsRouter