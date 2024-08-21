export declare global {
  type AnyObject = Record<string, unknown>;

  namespace NodeJS {
    interface ProcessEnv {
      SERVER_URL: string;

      NODE_ENV: string;
      PORT: string;

      API_KEY: string;
      JWT_SECRET: string;
      JWT_EXPIRE_IN: string;

      DB_TYPE: string;
      DB_HOST: string;
      DB_PORT: string;
      DB_USER: string;
      DB_PASSWORD: string;

      DB_ADMIN_NAME: string;
      DB_ERP_NAME: string;

      MEDIA_ABSOLUTE_DIR_WIN: string;
      MEDIA_THUMB_ABSOLUTE_DIR_WIN: string;
      MEDIA_ABSOLUTE_DIR_UBT: string;
      MEDIA_THUMB_ABSOLUTE_DIR_UBT: string;
    }
  }
}
