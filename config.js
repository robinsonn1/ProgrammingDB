const env = process.env;

const config = {
  db: { /* don't expose password or any sensitive info, done only for demo */
    host: env.DB_HOST || 'sql5.freesqldatabase.com',
    user: env.DB_USER || 'sql5463122',
    password: env.DB_PASSWORD || 'inW5tCQNCf',
    database: env.DB_NAME || 'sql5463122',
  },
  listPerPage: env.LIST_PER_PAGE || 10,
};


module.exports = config;
