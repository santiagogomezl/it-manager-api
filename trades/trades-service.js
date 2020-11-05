const TradesService = {

    //Use knew instance to build query to database
    getAllTrades(knex) {
      return knex
        .select('*')
        .from('itmanager_trades')
    },

  }
  
  module.exports = TradesService