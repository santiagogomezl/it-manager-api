function makeTasksArray() {
  return [
      {
          id:1,
          user_id:1,
          task_details: 'Upgrade OS',
          status_code :1,
          due_date: '2020-11-05T08:00:00.000Z'
      },
      {
          id:2,
          user_id:1,
          task_details: 'Install Printer',
          status_code:2,
          due_date: '2020-11-05T08:00:00.000Z'
      },
      {
          id:3,
          user_id:4,
          task_details: 'Upgrade License',
          status_code:2,
          due_date: '2020-11-05T08:00:00.000Z'
      }
  ]
}

module.exports = {
  makeTasksArray
}
