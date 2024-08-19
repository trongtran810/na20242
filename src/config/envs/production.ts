export const config = {
  db: {
    type: process.env.DB_TYPE,
    synchronize: false,
    logging: false,
    replication: {
      master: {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: '',
      },
      slaves: [
        {
          // fix if necessary
          host: process.env.DB_HOST,
          port: process.env.DB_PORT,
          username: process.env.DB_USER,
          password: process.env.DB_PASSWORD,
          database: '',
        },
      ],
    },
    extra: {
      connectionLimit: 30,
    },
    autoLoadEntities: true,
  },

  graphql: {
    debug: false,
    playground: false,
  },
};
