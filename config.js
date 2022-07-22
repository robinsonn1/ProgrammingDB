const env = process.env;

const config = {
  db: { /* don't expose password or any sensitive info, done only for demo */
<<<<<<< HEAD
    host: env.DB_HOST || 'sql.freedb.tech',
    user: env.DB_USER || 'freedb_rnuserdatabase',
    password: env.DB_PASSWORD || 'RWz8R5Pd6u!Dp9V',
    database: env.DB_NAME || 'freedb_rndatabase',
=======
    host: env.DB_HOST || 'sql5.freesqldatabase.com',
    user: env.DB_USER || 'sql5463122',
    password: env.DB_PASSWORD || 'inW5tCQNCf',
    database: env.DB_NAME || 'sql5463122',
>>>>>>> 90ecade16146b4908cbe5e4131514cefc849efd2
  },
  listPerPage: env.LIST_PER_PAGE || 10,
};


module.exports = config;
