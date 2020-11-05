const UsersService = {

    //Use knew instance to build query to database
    getAllUsers(knex) {
      return knex
        .select('*')
        .from('itmanager_users')
    },
  
    getById(knex, id) {
      return knex
        .from('itmanager_users')
        .select('*')
        .where('id', id)
        .first()
    },

    insertUser(knex, newUser) {
      return knex
        .insert(newUser)
        .into('itmanager_users')
        .returning('*')
        .then(rows => {
          return rows[0]
        })
    },
  
    deleteUser(knex, id) {
      return knex('itmanager_users')
        .where({ id })
        .delete()
    },

    updateUser(knex, id, userToUpdate){
      return knex('itmanager_users')
        .where({ id })
        .update(userToUpdate)
    },

  }
  
  module.exports = UsersService