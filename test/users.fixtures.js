//Users dummy data for testing
function makeUsersArray() {
  return [
    {
      id: 1,
      first_name: 'Santiago',
      last_name: 'Gomez',
      email: 'sgomez@company.com',
      trade_id: 7,
      role_id: 6,
      workstation_id: 1
    },
    {
      id: 2,
      first_name: 'Bob',
      last_name: 'Selba',
      email: 'bselba@company.com',
      trade_id: 7,
      role_id: 5,
      workstation_id: 2
    },
    {
      id: 3,
      first_name: 'Vanessa',
      last_name: 'Roman',
      email: 'veroman@company.com',
      trade_id: 1,
      role_id: 5,
      workstation_id: 3,
    },
    {
      id: 4,
      first_name: 'Bret',
      last_name: 'Chandler',
      email: 'bchandler@company.com',
      trade_id: 2,
      role_id: 4,
      workstation_id: 4,
    },
    {
      id: 5,
      first_name: 'Patricia',
      last_name: 'DeSilva',
      email: 'pdesilva@company.com',
      trade_id: 3,
      role_id: 3,
      workstation_id: 5
    },
    {
      id: 6,
      first_name: 'Matt',
      last_name: 'Chan',
      email: 'mchan@company.com',
      trade_id: 4,
      role_id: 1,
      workstation_id: 6
    },
    {
      id: 7,
      first_name: 'James',
      last_name: 'Smith',
      email: 'jsmith@company.com',
      trade_id: 5,
      role_id: 5,
      workstation_id: 7
    },
    {
      id: 8,
      first_name: 'Eddie',
      last_name: 'Nunez',
      email: 'enunez@company.com',
      trade_id: 6,
      role_id: 2,
      workstation_id: 8
    },
    {
      id: 9,
      first_name: 'Isabel',
      last_name: 'Sanchez',
      email: 'isanchez@company.com',
      trade_id: 1,
      role_id: 5,
      workstation_id: 9
    },
    {
      id: 10,
      first_name: 'David',
      last_name: 'Combs',
      email: 'dcombs@company.com',
      trade_id: 8,
      role_id: 6,
      workstation_id: 10
    }
  ]
}

function makeTradesArray() {
return [
  {
      id:1,
      name: 'Paint'
  },
  {
      id:2,
      name: 'Drywall'
  },
  {
      id:3,
      name: 'Ceiling'
  },
  {
      id:4,
      name: 'T-Bar'
  },
  {
      id:5,
      name: 'Specialties'
  },
  {
      id:6,
      name: 'Accounting'
  },
  {
      id:7,
      name: 'IT'
  },
  {
      id:8,
      name: 'Executive'
  }
]
}

function makeRolesArray() {
  return [
    {
        id:1,
        title:'Foreman'
    },
    {
        id:2,
        title: 'Lead Foreman'
    },
    {
        id:3,
        title:'Estimator'
    },
    {
        id:4,
        title: 'Project Engineer'
    },
    {
        id:5,
        title:'Assistant'
    },
    {
        id:6,
        title: 'Administrator'
    }
]
}

function makeWorkstationsArray() {
  return [
    {
        id: 1,
        host_name: 'HQ-PC-01',
        os:'Windows 10',
        version: 10.1904,
        memory: 16,
        free_space: 42,
        hotfix_id:[
            'KB01',
            'KB02',
            'KB03'
        ],
        hotfix_info:[
            'Security Update',
            'Update',
            'Memory Upgrade'
        ],
        hotfix_date:[
            '2020-12-12',
            '2020-12-12',
            '2020-12-12'
        ]
    },
    {
        id: 2,
        host_name: 'HQ-PC-02',
        os:'Windows 10',
        version: 10.1890,
        memory: 16,
        free_space: 120,
        hotfix_id:[
            'KB04',
        ],
        hotfix_info:[
            'Security Update',
        ],
        hotfix_date:[
            '2020-12-12',
        ]
    },
    {
        id: 3,
        host_name: 'HQ-LTP-01',
        os:'Windows 7',
        version: 7.1204,
        memory: 8,
        free_space: 80,
        hotfix_id:[
            'KB05',
            'KB06',
        ],
        hotfix_info:[
            'Antivirus Update',
            'Graphic Card Driver Update',
        ],
        hotfix_date:[
            '2020-12-12',
            '2020-12-12'
        ]
    },
    {
        id: 4,
        host_name: 'HQ-LTP-02',
        os:'Windows 10',
        version: 10.1904,
        memory: 16,
        free_space: 210,
        hotfix_id:[
            'KB07',
        ],
        hotfix_info:[
            'Microsoft Office Update',
        ],
        hotfix_date:[
            '2020-12-12',
        ]
    },
    {
        id: 5,
        host_name: 'HQ-LTP-03',
        os:'Windows 10',
        version: 10.1904,
        memory: 16,
        free_space: 120,
        hotfix_id:[
           
        ],
        hotfix_info:[

        ],
        hotfix_date:[
            
        ]
    },
    {
        id: 6,
        host_name: 'HQ-LTP-04',
        os:'Windows 10',
        version: 10.1890,
        memory: 8,
        free_space: 180,
        hotfix_id:[
            'KB08',
            'KB09',
        ],
        hotfix_info:[
            'Security Update',
            'Printer Driver Update'
        ],
        hotfix_date:[
            '2020-12-12',
            '2020-12-12'
        ]
    },
    {
        id: 7,
        host_name: 'HQ-PC-03',
        os:'Windows 10',
        version: 10.1904,
        memory: 32,
        free_space: 120,
        hotfix_id:[
            'KB10',
        ],
        hotfix_info:[
            'Security Update',
        ],
        hotfix_date:[
            '2020-12-12',
        ]
    },
    {
        id: 8,
        host_name: 'HQ-PC-04',
        os:'Windows 10',
        version: 10.1904,
        memory: 16,
        free_space: 42,
        hotfix_id:[
            'KB11',
            'KB12',
            'KB13'
        ],
        hotfix_info:[
            'Security Update',
            'Update',
            'Memory Upgrade'
        ],
        hotfix_date:[
            '2020-12-12',
            '2020-12-12',
            '2020-12-12'
        ]
    },
    {
        id: 9,
        host_name: 'HQ-LTP-05',
        os:'Windows 10',
        version: 10.1904,
        memory: 16,
        free_space: 42,
        hotfix_id:[
            'KB14',
            'KB15',
            'KB16'
        ],
        hotfix_info:[
            'Security Update',
            'Update',
            'Memory Upgrade'
        ],
        hotfix_date:[
            '2020-12-12',
            '2020-12-12',
            '2020-12-12'
        ]
    },
    {
        id: 10,
        host_name: 'HQ-LTP-06',
        os:'Windows 10',
        version: 10.1904,
        memory: 16,
        free_space: 42,
        hotfix_id:[
            'KB01',
            'KB02',
            'KB03'
        ],
        hotfix_info:[
            'Security Update',
            'Update',
            'Memory Upgrade'
        ],
        hotfix_date:[
            '2020-12-12',
            '2020-12-12',
            '2020-12-12'
        ]
    }
]
}

module.exports = {
  makeUsersArray,
  makeTradesArray,
  makeRolesArray,
  makeWorkstationsArray,
}
