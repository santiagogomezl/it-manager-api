const WorkstationsService = {

    //Use knew instance to build query to database
    getAllWorkstations(knex) {
      return knex
        .select('*')
        .from('itmanager_workstations')
    },

    getById(knex, id) {
      return knex
        .from('itmanager_workstations')
        .select('*')
        .where('id', id)
        .first()
    },


    updateWorkstation(knex, id, workstationToUpdate){
        return knex('itmanager_workstations')
          .where({ id })
          .update(workstationToUpdate)
      },

  }
  
  module.exports = WorkstationsService