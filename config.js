const env = process.env;

const config = {
  db: { /* don't expose password or any sensitive info, done only for demo */
    host: env.DB_HOST || 'sql.freedb.tech',
    user: env.DB_USER || 'freedb_rnuserdatabase',
    password: env.DB_PASSWORD || 'RWz8R5Pd6u!Dp9V',
    database: env.DB_NAME || 'freedb_rndatabase',
  },
  listPerPage: env.LIST_PER_PAGE || 10,
};


module.exports = config;