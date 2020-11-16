module.exports = {
    PORT: process.env.PORT || 8000,
    NODE_ENV: process.env.NODE_ENV || 'developmment',
    CLIENT_ORIGIN: process.env.CLIENT_ORIGIN || 'https://localhost/',
    DATABASE_URL: process.env.DATABASE_URL || 'postgresql://dunder_mifflin@localhost/itmanager_db',
    TEST_DATABASE_URL: process.env.TEST_DATABASE_URL || 'postgresql://dunder_mifflin@localhost/itmanager_db_test',
}
