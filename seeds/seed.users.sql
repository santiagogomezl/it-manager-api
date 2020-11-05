INSERT INTO itmanager_trades (name)
VALUES
  ('Paint'),
  ('Drywall'),
  ('Ceiling'),
  ('T-Bar'),
  ('Specialties'),
  ('Accounting'),
  ('IT'),
  ('Executive');

INSERT INTO itmanager_roles (title)
VALUES
  ('Foreman'),
  ('Lead Foreman'),
  ('Estimator'),
  ('Project Engineer'),
  ('Assistant'),
  ('Administrator');

INSERT INTO itmanager_workstations (host_name, os, version, memory, free_space, hotfix_id, hotfix_info, hotfix_date)
VALUES
    ('HQ-PC-01','Windows 10', '10.1904', 16, 42, 
    '{"KB01","KB02","KB03"}',
    '{"Security Update","Update","Memory Upgrade"}',
    '{"2020-11-02","2020-11-02","2020-11-02"}'),
    ('HQ-PC-02','Windows 10', '10.1890', 16, 120, 
    '{"KB04"}',
    '{"Security Update"}',
    '{"2020-11-02"}'),
    ('HQ-LTP-01','Windows 7', '7.1204', 8, 80, 
    '{"KB05", "KB06"}',
    '{"Antivirus Update", "Graphic Card Driver Update"}',
    '{"2020-11-02", "2020-11-02"}'),
    ('HQ-LTP-02','Windows 10', '10.1904', 16, 210, 
    '{"KB07"}',
    '{"Microsoft Office Update"}',
    '{"2020-11-02"}'),
    ('HQ-LTP-03','Windows 10', '10.1904', 16, 120, 
    '{}',
    '{}',
    '{}'),
    ('HQ-LTP-04','Windows 10', '10.1890', 8, 180, 
    '{"KB08", "KB09"}',
    '{"Security Update", "Printer Driver Update"}',
    '{"2020-11-02", "2020-11-02"}'),
    ('HQ-PC-03','Windows 10', '10.1904', 32, 120, 
    '{"KB10"}',
    '{"Security Update"}',
    '{"2020-11-02"}'),
    ('HQ-PC-04','Windows 10', '10.1904', 16, 42, 
    '{"KB11",  "KB12", "KB13"}',
    '{"Security Update", "Update", "Memory Upgrade"}',
    '{"2020-11-02", "2020-11-02", "2020-11-02"}'),
    ('HQ-LTP-05','Windows 10', '10.1904', 16, 42, 
    '{"KB14",  "KB15", "KB16"}',
    '{"Security Update", "Update", "Memory Upgrade"}',
    '{"2020-11-02", "2020-11-02", "2020-11-02"}'),
    ('HQ-LTP-06','Windows 10', '10.1904', 16, 42, 
    '{"KB17"}',
    '{"Memory Upgrade"}',
    '{"2020-11-02"}');

INSERT INTO itmanager_users (first_name, last_name, email, trade_id, role_id, workstation_id)
VALUES
    ('Santiago','Gomez', 'sgomez@company.com', 7, 6, 1),
    ('Bob','Selba', 'bselba@company.com', 7, 5, 2),
    ('Vanessa','Roman', 'veroman@company.com', 1, 5, 3),
    ('Bret','Chandler', 'bchandler@company.com', 2, 4, 4),
    ('Patricia','DeSilva', 'pdesilva@company.com', 3, 3, 5),
    ('Matt','Chan', 'mchan@company.com', 4, 1, 6),
    ('James','Smith', 'jsmith@company.com', 5, 5, 7),
    ('Eddie','Nunez', 'enunez@company.com', 6, 2, 8),
    ('Isabel','Sanchez', 'isanchez@company.com', 1, 5, 9),
    ('David','Combs', 'dcombs@company.com', 8, 6, 10);