const RolesService = {

    //Use knew instance to build query to database
    getAllRoles(knex) {
      return knex
        .select('*')
        .from('itmanager_roles')
    },

  }
  
  module.exports = RolesService