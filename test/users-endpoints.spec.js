const knex = require('knex')
const app = require('../src/app')
const { makeUsersArray, makeTradesArray, makeRolesArray, makeWorkstationsArray } = require('./users.fixtures')
const { makeTasksArray } = require('./tasks.fixtures')

describe('Users and Tasks Endpoints', function() {
  let db

    before('make knex instance', () => {

    db = knex({
        client: 'pg',
        connection: process.env.TEST_DATABASE_URL,
    })
    app.set('db', db)

    })

    after('disconnect from db', () => db.destroy())

    before('clean the table', () => db.raw('TRUNCATE itmanager_users, itmanager_trades, itmanager_roles, itmanager_workstations, itmanager_tasks RESTART IDENTITY CASCADE'))

    afterEach('cleanup',() => db.raw('TRUNCATE itmanager_users, itmanager_trades, itmanager_roles, itmanager_workstations, itmanager_tasks RESTART IDENTITY CASCADE'))

    describe(`GET /api/users`, () => {
        
        context(`Given no users`, () => {
            it(`responds with 200 and an empty list`, () => {
                return supertest(app)
                .get('/api/users')
                .expect(200, [])
            })
        })
   

        context('Given there are users in the database', () => {
            const testUsers = makeUsersArray();
            const testTrades = makeTradesArray();
            const testRoles = makeRolesArray();
            const testWorkstations = makeWorkstationsArray();

            beforeEach('insert users', () => {
            return db
                .into('itmanager_trades')
                .insert(testTrades)
                .then(() => {
                return db
                    .into('itmanager_roles')
                    .insert(testRoles)
                })
                .then(() => {
                return db
                    .into('itmanager_workstations')
                    .insert(testWorkstations)
                })
                .then(() => {
                return db
                    .into('itmanager_users')
                    .insert(testUsers)
                })
            })

            it('responds with 200 and all of the users', () => {
            return supertest(app)
                .get('/api/users')
                .expect(200, testUsers)
            })
        })
    })

    describe(`GET /api/users/:user_id`, () => {
        context(`Given no users`, () => {
            it(`responds with 404`, () => {
            const userId = 123456
            return supertest(app)
                .get(`/api/users/${userId}`)
                .expect(404, { error: { message: `User doesn't exist` } })
            })
        })
    
        context('Given there are users in the database', () => {
            const testUsers = makeUsersArray();
            const testTrades = makeTradesArray();
            const testRoles = makeRolesArray();
            const testWorkstations = makeWorkstationsArray();
    
            beforeEach('insert users', () => {  
                return db
                    .into('itmanager_trades')
                    .insert(testTrades)
                    .then(() => {
                    return db
                        .into('itmanager_roles')
                        .insert(testRoles)
                    })
                    .then(() => {
                    return db
                        .into('itmanager_workstations')
                        .insert(testWorkstations)
                    })
                    .then(() => {
                    return db
                        .into('itmanager_users')
                        .insert(testUsers)
                    })
            })
    
            it('responds with 200 and the specified user', () => {
                const userId = 2
                const expectedUsers = testUsers[userId - 1]
                return supertest(app)
                .get(`/api/users/${userId}`)
                .expect(200, expectedUsers)
            })
        })
    })

    // describe(`POST /api/users`, () => {
    //     const testUsers = makeUsersArray();
    //     const testTrades = makeTradesArray();
    //     const testRoles = makeRolesArray();
    //     const testWorkstations = makeWorkstationsArray();

    //     beforeEach('insert users', () => {  
    //         return db
    //         .into('itmanager_trades')
    //         .insert(testTrades)
    //         .then(() => {
    //         return db
    //             .into('itmanager_roles')
    //             .insert(testRoles)
    //         })
    //         .then(() => {
    //         return db
    //             .into('itmanager_workstations')
    //             .insert(testWorkstations)
    //         })
    //         .then(() => {
    //         return db
    //             .into('itmanager_users')
    //             .insert(testUsers)
    //         })
    //     })
    
    //     it(`creates an user, responding with 201 and the new user`, () => {
    //       const newUser = {
    //         // id: 99,
    //         first_name: "first",
    //         last_name: "Last",
    //         email: "flast@email.com",
    //         trade_id: 1,
    //         role_id: 1,
    //         workstation_id: 1   
    //       }

    //       return supertest(app)
    //         .post('/api/users') 
    //         .send(newUser)
    //         .expect(201)
    //         .expect(res => {
    //         //   expect(res.body.id).to.eql(newUser.id)
    //           expect(res.body.first_name).to.eql(newUser.first_name)
    //           expect(res.body.last_name).to.eql(newUser.last_name)
    //           expect(res.body.email).to.eql(newUser.email)
    //           expect(res.body.trade_id).to.eql(newUser.trade_id)
    //           expect(res.body.role_id).to.eql(newUser.role_id)
    //           expect(res.body.workstation_id).to.eql(newUser.workstation_id)
    //           expect(res.body).to.have.property('id')
    //           expect(res.headers.location).to.eql(`/api/users/${res.body.id}`)
    //         })
    //         .then(res =>
    //           supertest(app)
    //             .get(`/api/users/${res.body.id}`)
    //             .expect(res.body)
    //         )
    //     })
        
    // })

    describe(`DELETE /api/users/:user_id`, () => {
        context(`Given no users`, () => {
            it(`responds with 404`, () => {
            const userId = 123456
            return supertest(app)
                .delete(`/api/users/${userId}`)
                .expect(404)
            })
        })
        
        context('Given there are users in the database', () => {
            const testUsers = makeUsersArray();
            const testTrades = makeTradesArray();
            const testRoles = makeRolesArray();
            const testWorkstations = makeWorkstationsArray();

            beforeEach('insert users', () => {  
                return db
                .into('itmanager_trades')
                .insert(testTrades)
                .then(() => {
                return db
                    .into('itmanager_roles')
                    .insert(testRoles)
                })
                .then(() => {
                return db
                    .into('itmanager_workstations')
                    .insert(testWorkstations)
                })
                .then(() => {
                return db
                    .into('itmanager_users')
                    .insert(testUsers)
                })
            })

            it('responds with 204 and removes the user', () => {
            const idToRemove = 2
            const expectedUsers = testUsers.filter(user => user.id !== idToRemove)
            return supertest(app)
                .delete(`/api/users/${idToRemove}`)
                .expect(204)
                .then(res =>
                supertest(app)
                    .get(`/api/users`)
                    .expect(expectedUsers)
                )
            })
        })

    })

    describe(`PATCH /api/users/:user_id`, () => {
        context(`Given no users`, () => {
            it(`responds with 404`, () => {
            const userId = 123456
            return supertest(app)
                .delete(`/api/users/${userId}`)
                .expect(404, { error: { message: `User doesn't exist` } })
            })
        })
            
        context('Given there are users in the database', () => {
            const testUsers = makeUsersArray();
            const testTrades = makeTradesArray();
            const testRoles = makeRolesArray();
            const testWorkstations = makeWorkstationsArray();
    
            beforeEach('insert users', () => {  
                return db
                .into('itmanager_trades')
                .insert(testTrades)
                .then(() => {
                return db
                    .into('itmanager_roles')
                    .insert(testRoles)
                })
                .then(() => {
                return db
                    .into('itmanager_workstations')
                    .insert(testWorkstations)
                })
                .then(() => {
                return db
                    .into('itmanager_users')
                    .insert(testUsers)
                })
            })
    
            it('responds with 204 and updates the user', () => {
            const idToUpdate = 2
            const updateUser = {
                first_name: 'New First',
                last_name: 'New Last',
                role_id: 4,
            }
            const expectedUser = {
                ...testUsers[idToUpdate - 1],
                ...updateUser
            }
            return supertest(app)
                .patch(`/api/users/${idToUpdate}`)
                .send(updateUser)
                .expect(204)
                .then(res =>
                supertest(app)
                    .get(`/api/users/${idToUpdate}`)
                    .expect(expectedUser)
                )
            })
        })
    })

    describe(`GET /api/tasks`, () => {
        
        context(`Given no tasks`, () => {
            it(`responds with 200 and an empty list`, () => {
                return supertest(app)
                .get('/api/tasks')
                .expect(200, [])
            })
        })
   

        context('Given there are tasks in the database', () => {
            const testUsers = makeUsersArray();
            const testTrades = makeTradesArray();
            const testRoles = makeRolesArray();
            const testWorkstations = makeWorkstationsArray();
            const testTasks = makeTasksArray();

            beforeEach('insert users', () => {
            return db
                .into('itmanager_trades')
                .insert(testTrades)
                .then(() => {
                return db
                    .into('itmanager_roles')
                    .insert(testRoles)
                })
                .then(() => {
                return db
                    .into('itmanager_workstations')
                    .insert(testWorkstations)
                })
                .then(() => {
                return db
                    .into('itmanager_users')
                    .insert(testUsers)
                })
                .then(() => {
                return db
                    .into('itmanager_tasks')
                    .insert(testTasks)
                })
            })

            it('responds with 200 and all of the tasks', () => {
            return supertest(app)
                .get('/api/tasks')
                .expect(200, testTasks)
            })
        })
    })

    describe(`GET /api/tasks/:task_id`, () => {
        context(`Given no users`, () => {
            it(`responds with 404`, () => {
            const taskId = 123456
            return supertest(app)
                .get(`/api/tasks/${taskId}`)
                .expect(404, { error: { message: `Task doesn't exist` } })
            })
        })
    
        context('Given there are tasks in the database', () => {
            const testUsers = makeUsersArray();
            const testTrades = makeTradesArray();
            const testRoles = makeRolesArray();
            const testWorkstations = makeWorkstationsArray();
            const testTasks = makeTasksArray();

            beforeEach('insert users', () => {
            return db
                .into('itmanager_trades')
                .insert(testTrades)
                .then(() => {
                return db
                    .into('itmanager_roles')
                    .insert(testRoles)
                })
                .then(() => {
                return db
                    .into('itmanager_workstations')
                    .insert(testWorkstations)
                })
                .then(() => {
                return db
                    .into('itmanager_users')
                    .insert(testUsers)
                })
                .then(() => {
                return db
                    .into('itmanager_tasks')
                    .insert(testTasks)
                })
            })
            

            // it('responds with 200 and the specified task', () => {
            //     const taskId = 2
            //     const expectedTask = testTasks[taskId - 1]
            //     return supertest(app)
            //     .get(`/api/tasks/${taskId}`)
            //     .expect(200, expectedTask)
            // })
        })
    })

    describe(`DELETE /api/tasks/:tasks_id`, () => {
        context(`Given no tasks`, () => {
            it(`responds with 404`, () => {
            const userId = 123456
            return supertest(app)
                .delete(`/api//${userId}`)
                .expect(404)
            })
        })
        
        context('Given there are users in the database', () => {
            const testUsers = makeUsersArray();
            const testTrades = makeTradesArray();
            const testRoles = makeRolesArray();
            const testWorkstations = makeWorkstationsArray();
            const testTasks = makeTasksArray();

            beforeEach('insert users', () => {
            return db
                .into('itmanager_trades')
                .insert(testTrades)
                .then(() => {
                return db
                    .into('itmanager_roles')
                    .insert(testRoles)
                })
                .then(() => {
                return db
                    .into('itmanager_workstations')
                    .insert(testWorkstations)
                })
                .then(() => {
                return db
                    .into('itmanager_users')
                    .insert(testUsers)
                })
                .then(() => {
                return db
                    .into('itmanager_tasks')
                    .insert(testTasks)
                })
            })

            it('responds with 204 and removes the task', () => {
            const idToRemove = 2
            const expectedTasks= testTasks.filter(task => task.id !== idToRemove)
            return supertest(app)
                .delete(`/api/tasks/${idToRemove}`)
                .expect(204)
                .then(res =>
                supertest(app)
                    .get(`/api/tasks`)
                    .expect(expectedTasks)
                )
            })
        })

    })

    describe(`PATCH /api/tasks/:task_id`, () => {
        context(`Given no tasks`, () => {
            it(`responds with 404`, () => {
            const taskId = 123456
            return supertest(app)
                .delete(`/api/task/${taskId}`)
                .expect(404)
            })
        })
            
        context('Given there are tasks in the database', () => {
            const testUsers = makeUsersArray();
            const testTrades = makeTradesArray();
            const testRoles = makeRolesArray();
            const testWorkstations = makeWorkstationsArray();
            const testTasks = makeTasksArray();

            beforeEach('insert users', () => {
            return db
                .into('itmanager_trades')
                .insert(testTrades)
                .then(() => {
                return db
                    .into('itmanager_roles')
                    .insert(testRoles)
                })
                .then(() => {
                return db
                    .into('itmanager_workstations')
                    .insert(testWorkstations)
                })
                .then(() => {
                return db
                    .into('itmanager_users')
                    .insert(testUsers)
                })
                .then(() => {
                return db
                    .into('itmanager_tasks')
                    .insert(testTasks)
                })
            })
    
            it('responds with 204 and updates the task', () => {
            const idToUpdate = 2
            const updateTask = {
                status_code: 3,
            }
            const expectedTask = {
                ...testTasks[idToUpdate - 1],
                ...updateTask
            }
            return supertest(app)
                .patch(`/api/tasks/${idToUpdate}`)
                .send(updateTask)
                .expect(204)
                // .then(res =>
                // supertest(app)
                //     .get(`/api/tasks/${idToUpdate}`)
                //     .expect(expectedTask)
                // )
            })
        })
    })
    
})


