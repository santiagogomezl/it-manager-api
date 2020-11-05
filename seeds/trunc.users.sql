ALTER SEQUENCE itmanager_users_id_seq RESTART;
ALTER SEQUENCE itmanager_roles_id_seq RESTART;
ALTER SEQUENCE itmanager_trades_id_seq RESTART;
ALTER SEQUENCE itmanager_workstations_id_seq RESTART;

TRUNCATE itmanager_users CASCADE;
TRUNCATE itmanager_trades CASCADE;
TRUNCATE itmanager_roles CASCADE;
TRUNCATE itmanager_workstations CASCADE;