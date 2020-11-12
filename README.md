# IT Manager API

This API serves company data to the IT Manager App, providing user information, workstation data and task history

## Summary

After setting up your postgres database and seeding the company data, you can manage and retrieve the information, and render it on the IT Manager App

## Endpoints

### Users

`GET /api/users` will retrieve all company users

`GET /api/users/:user_id` will retrieve a single user with `id=user_id`

`POST /api/users` will create a new user

`PATCH /api/users/:user_id` will update user with `id=user_id`

`DELETE /api/users/:user_id` will delete user with `id=user_id`

### Trades

`GET /api/trades` will retrieve all company trades

### Roles

`GET /api/roles` will retrieve all company roles

### Tasks

`GET /api/tasks` will retrieve all company tasks

`GET /api/tasks/:task_id` will retrieve a single task with `id=task_id`

`POST /api/tasks` will create a new task

`PATCH /api/tasks/:task_id` will update task with `id=task_id`

`DELETE /api/tasks/:task_id` will delete task with `id=task_id`

### Workstaions

`GET /api/workstations` will retrieve all company workstations

`GET /api/workstations/:workstations_id` will retrieve a single workstation with `id=workstation_id`



