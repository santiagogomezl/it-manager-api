const { expect } = require('chai')
const supertest = require('supertest')
const app = require('../src/app')

describe('App', () => {
  it('GET / responds with 200 "Hello Express!"', () => {
    return supertest(app)
      .get('/')
      .expect(200, 'Hello Express!')
  })
})



// const { expect } = require('chai')
// const supertest = require('supertest')
// const app = require('../src/app')

// // const knex = require('knex')

// // const { DATABASE_URL } = require('../src/config')

// // const db = knex({
// //   client: 'pg',
// //   connection: DATABASE_URL,
// // })

// // app.set('db', db)

// // const store = [
// //   [
// //       {
// //           id: 1,
// //           firstName: 'Santiago',
// //           lastName: 'Gomez',
// //           email: 'sgomez@company.com',
// //           tradeId: 7,
// //           roleId: 6,
// //           workstationId: 1
// //       },
// //       {
// //           id: 2,
// //           firstName: 'Bob',
// //           lastName: 'Selba',
// //           email: 'bselba@company.com',
// //           tradeId: 7,
// //           roleId: 5,
// //           workstationId: 2
// //       },
// //       {
// //           id: 3,
// //           firstName: 'Vanessa',
// //           lastName: 'Roman',
// //           email: 'veroman@company.com',
// //           tradeId: 1,
// //           roleId: 5,
// //           workstationId: 3,
// //       },
// //       {
// //           id: 4,
// //           firstName: 'Bret',
// //           lastName: 'Chandler',
// //           email: 'bchandler@company.com',
// //           tradeId: 2,
// //           roleId: 4,
// //           workstationId: 4,
// //       },
// //       {
// //           id: 5,
// //           firstName: 'Patricia',
// //           lastName: 'DeSilva',
// //           email: 'pdesilva@company.com',
// //           tradeId: 3,
// //           roleId: 3,
// //           workstationId: 5
// //       },
// //       {
// //           id: 6,
// //           firstName: 'Matt',
// //           lastName: 'Chan',
// //           email: 'mchan@company.com',
// //           tradeId: 4,
// //           roleId: 1,
// //           workstationId: 6
// //       },
// //       {
// //           id: 7,
// //           firstName: 'James',
// //           lastName: 'Smith',
// //           email: 'jsmith@company.com',
// //           tradeId: 5,
// //           roleId: 5,
// //           workstationId: 7
// //       },
// //       {
// //           id: 8,
// //           firstName: 'Eddie',
// //           lastName: 'Nunez',
// //           email: 'enunez@company.com',
// //           tradeId: 6,
// //           roleId: 2,
// //           workstationId: 8
// //       },
// //       {
// //           id: 9,
// //           firstName: 'Isabel',
// //           lastName: 'Sanchez',
// //           email: 'isanchez@company.com',
// //           tradeId: 1,
// //           roleId: 5,
// //           workstationId: 9
// //       },
// //       {
// //           id: 10,
// //           firstName: 'David',
// //           lastName: 'Combs',
// //           email: 'dcombs@company.com',
// //           tradeId: 8,
// //           roleId: 6,
// //           workstationId: 10
// //       }
// //   ],
// //   [
// //       {
// //           id:1,
// //           name: 'Paint'
// //       },
// //       {
// //           id:2,
// //           name: 'Drywall'
// //       },
// //       {
// //           id:3,
// //           name: 'Ceiling'
// //       },
// //       {
// //           id:4,
// //           name: 'T-Bar'
// //       },
// //       {
// //           id:5,
// //           name: 'Specialties'
// //       },
// //       {
// //           id:6,
// //           name: 'Accounting'
// //       },
// //       {
// //           id:7,
// //           name: 'IT'
// //       },
// //       {
// //           id:8,
// //           name: 'Executive'
// //       }
// //   ],
// //   [
// //       {
// //           id:1,
// //           title:'Foreman'
// //       },
// //       {
// //           id:2,
// //           title: 'Lead Foreman'
// //       },
// //       {
// //           id:3,
// //           title:'Estimator'
// //       },
// //       {
// //           id:4,
// //           title: 'Project Engineer'
// //       },
// //       {
// //           id:5,
// //           title:'Assistant'
// //       },
// //       {
// //           id:6,
// //           title: 'Administrator'
// //       }
// //   ],
// //   [
// //       {
// //           id: 1,
// //           hostName: 'HQ-PC-01',
// //           os:'Windows 10',
// //           version: 10.1904,
// //           memory: 16,
// //           freeSpace: 42,
// //           hotfixId:[
// //               'KB01',
// //               'KB02',
// //               'KB03'
// //           ],
// //           hotfixInfo:[
// //               'Security Update',
// //               'Update',
// //               'Memory Upgrade'
// //           ],
// //           hotfixDate:[
// //               '0.0.0',
// //               '0.0.0',
// //               '0.0.0'
// //           ]
// //       },
// //       {
// //           id: 2,
// //           hostName: 'HQ-PC-02',
// //           os:'Windows 10',
// //           version: 10.1890,
// //           memory: 16,
// //           freeSpace: 120,
// //           hotfixId:[
// //               'KB04',
// //           ],
// //           hotfixInfo:[
// //               'Security Update',
// //           ],
// //           hotfixDate:[
// //               '0.0.0',
// //           ]
// //       },
// //       {
// //           id: 3,
// //           hostName: 'HQ-LTP-01',
// //           os:'Windows 7',
// //           version: 7.1204,
// //           memory: 8,
// //           freeSpace: 80,
// //           hotfixId:[
// //               'KB05',
// //               'KB06',
// //           ],
// //           hotfixInfo:[
// //               'Antivirus Update',
// //               'Graphic Card Driver Update',
// //           ],
// //           hotfixDate:[
// //               '0.0.0',
// //               '0.0.0'
// //           ]
// //       },
// //       {
// //           id: 4,
// //           hostName: 'HQ-LTP-02',
// //           os:'Windows 10',
// //           version: 10.1904,
// //           memory: 16,
// //           freeSpace: 210,
// //           hotfixId:[
// //               'KB07',
// //           ],
// //           hotfixInfo:[
// //               'Microsoft Office Update',
// //           ],
// //           hotfixDate:[
// //               '0.0.0',
// //           ]
// //       },
// //       {
// //           id: 5,
// //           hostName: 'HQ-LTP-03',
// //           os:'Windows 10',
// //           version: 10.1904,
// //           memory: 16,
// //           freeSpace: 120,
// //           hotfixId:[
             
// //           ],
// //           hotfixInfo:[

// //           ],
// //           hotfixDate:[
              
// //           ]
// //       },
// //       {
// //           id: 6,
// //           hostName: 'HQ-LTP-04',
// //           os:'Windows 10',
// //           version: 10.1890,
// //           memory: 8,
// //           freeSpace: 180,
// //           hotfixId:[
// //               'KB08',
// //               'KB09',
// //           ],
// //           hotfixInfo:[
// //               'Security Update',
// //               'Printer Driver Update'
// //           ],
// //           hotfixDate:[
// //               '0.0.0',
// //               '0.0.0'
// //           ]
// //       },
// //       {
// //           id: 7,
// //           hostName: 'HQ-PC-03',
// //           os:'Windows 10',
// //           version: 10.1904,
// //           memory: 32,
// //           freeSpace: 120,
// //           hotfixId:[
// //               'KB10',
// //           ],
// //           hotfixInfo:[
// //               'Security Update',
// //           ],
// //           hotfixDate:[
// //               '0.0.0',
// //           ]
// //       },
// //       {
// //           id: 8,
// //           hostName: 'HQ-PC-04',
// //           os:'Windows 10',
// //           version: 10.1904,
// //           memory: 16,
// //           freeSpace: 42,
// //           hotfixId:[
// //               'KB11',
// //               'KB12',
// //               'KB13'
// //           ],
// //           hotfixInfo:[
// //               'Security Update',
// //               'Update',
// //               'Memory Upgrade'
// //           ],
// //           hotfixDate:[
// //               '0.0.0',
// //               '0.0.0',
// //               '0.0.0'
// //           ]
// //       },
// //       {
// //           id: 9,
// //           hostName: 'HQ-LTP-05',
// //           os:'Windows 10',
// //           version: 10.1904,
// //           memory: 16,
// //           freeSpace: 42,
// //           hotfixId:[
// //               'KB14',
// //               'KB15',
// //               'KB16'
// //           ],
// //           hotfixInfo:[
// //               'Security Update',
// //               'Update',
// //               'Memory Upgrade'
// //           ],
// //           hotfixDate:[
// //               '0.0.0',
// //               '0.0.0',
// //               '0.0.0'
// //           ]
// //       },
// //       {
// //           id: 10,
// //           hostName: 'HQ-LTP-06',
// //           os:'Windows 10',
// //           version: 10.1904,
// //           memory: 16,
// //           freeSpace: 42,
// //           hotfixId:[
// //               'KB01',
// //               'KB02',
// //               'KB03'
// //           ],
// //           hotfixInfo:[
// //               'Security Update',
// //               'Update',
// //               'Memory Upgrade'
// //           ],
// //           hotfixDate:[
// //               '0.0.0',
// //               '0.0.0',
// //               '0.0.0'
// //           ]
// //       }
// //   ],
// //   [
// //       {
// //           id:1,
// //           userId:1,
// //           taskDetails: 'Upgrade OS',
// //           statusCode:1,
// //           dueDate: '2020-11-05'
// //       },
// //       {
// //           id:2,
// //           userId:1,
// //           taskDetails: 'Install Printer',
// //           statusCode:2,
// //           dueDate: '2020-11-05'
// //       },
// //       {
// //           id:3,
// //           userId:4,
// //           taskDetails: 'Upgrade License',
// //           statusCode:2,
// //           dueDate: '2020-11-05'
// //       }
// //   ]
  
// // ]

// describe('Express App', () => {
//   it('should return a message from GET /', () => {
//     return supertest(app)
//       .get('/')
//       .expect(200, 'Hello Express!')
//   })
// })


// describe('IT Manager App', () => {
//   it('GET /api/users responds with 200 containing database with users', () => {
//     return supertest(app)
//       .get('/api/users')
//       .expect(200, store[0])
//   })

//   it('GET /api/users/:user_id responds with 200 containing one single user', () => {
//     return supertest(app)
//       .get('/api/users/1')
//       .expect(200, store[0][0])
//   })

//   it('POST /api/users/ responds with 200 containing one single posted user ', () => {
//     return supertest(app)
//       .get('/api/users/1')
//       .expect(200, store[0][0])
//   })

// })

//     //   describe(`POST /api/articles`, () => {
//     //   const testUsers = makeUsersArray();
//     //   beforeEach('insert malicious article', () => {
//     //     return db
//     //       .into('blogful_users')
//     //       .insert(testUsers)
//     //   })
  
//     //   it(`creates an article, responding with 201 and the new article`, () => {
//     //     const newArticle = {
//     //       title: 'Test new article',
//     //       style: 'Listicle',
//     //       content: 'Test new article content...'
//     //     }
//     //     return supertest(app)
//     //       .post('/api/articles')
//     //       .send(newArticle)
//     //       .expect(201)
//     //       .expect(res => {
//     //         expect(res.body.title).to.eql(newArticle.title)
//     //         expect(res.body.style).to.eql(newArticle.style)
//     //         expect(res.body.content).to.eql(newArticle.content)
//     //         expect(res.body).to.have.property('id')
//     //         expect(res.headers.location).to.eql(`/api/articles/${res.body.id}`)
//     //         const expected = new Intl.DateTimeFormat('en-US').format(new Date())
//     //         const actual = new Intl.DateTimeFormat('en-US').format(new Date(res.body.date_published))
//     //         expect(actual).to.eql(expected)
//     //       })
//     //       .then(res =>
//     //         supertest(app)
//     //           .get(`/api/articles/${res.body.id}`)
//     //           .expect(res.body)
//     //       )
//     //   })
  
//     //   const requiredFields = ['title', 'style', 'content']
  
//     //   requiredFields.forEach(field => {
//     //     const newArticle = {
//     //       title: 'Test new article',
//     //       style: 'Listicle',
//     //       content: 'Test new article content...'
//     //     }
  
//     //     it(`responds with 400 and an error message when the '${field}' is missing`, () => {
//     //       delete newArticle[field]
  
//     //       return supertest(app)
//     //         .post('/api/articles')
//     //         .send(newArticle)
//     //         .expect(400, {
//     //           error: { message: `Missing '${field}' in request body` }
//     //         })
//     //     })
//     //   })
  
//     //   it('removes XSS attack content from response', () => {
//     //     const { maliciousArticle, expectedArticle } = makeMaliciousArticle()
//     //     return supertest(app)
//     //       .post(`/api/articles`)
//     //       .send(maliciousArticle)
//     //       .expect(201)
//     //       .expect(res => {
//     //         expect(res.body.title).to.eql(expectedArticle.title)
//     //         expect(res.body.content).to.eql(expectedArticle.content)
//     //       })
//     //   })
//     // })


