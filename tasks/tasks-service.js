const TasksService = {

    //Use knew instance to build query to database
    getAllTasks(knexInstance) {
      return knexInstance.select('*').from('itmanager_tasks')
    },
  
    getById(knex, id) {
      return knex
        .from('itmanager_tasks')
        .select('*')
        .where('id', id)
        .first()
    },

    insertTask(knex, newTask) {
      return knex
        .insert(newTask)
        .into('itmanager_tasks')
        .returning('*')
        .then(rows => {
          return rows[0]
        })
    },
  
    deleteTask(knex, id) {
      return knex('itmanager_tasks')
        .where({ id })
        .delete()
    },

    updateTask(knex, id, taskToUpdate){
        return knex('itmanager_tasks')
          .where({ id })
          .update(taskToUpdate)
      },

  }
  
  module.exports = TasksService