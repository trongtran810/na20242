// export * from './development';
export const config = {
  db_common: {
    type: 'mysql',
    synchronize: false,
    logging: false,
    host: process.env.DB_HOST || '127.0.0.1',
    port: process.env.DB_PORT || 3306,
    username: process.env.DB_USER || 'username',
    password: process.env.DB_PASSWORD || 'password',
    extra: {
      connectionLimit: 5,
    },
    autoLoadEntities: true,
  },

  graphql: {
    playground: false,
  },
};
