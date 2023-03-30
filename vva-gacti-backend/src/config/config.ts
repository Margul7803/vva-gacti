import { IAppConfiguration } from './config.model';

export const config = (): IAppConfiguration => ({
  port: parseInt(process.env.PORT, 10) || 3000,
  api: {
    apiUrl: process.env.API_URL,
    httpTimeout: 1000,
  },
  postgres: {
    database: {
      connectionString: process.env.DATABASE_URL || 'postgres://localhost:5432',
      databaseName: process.env.POSTGRES_DB || 'ap-studio',
    },
  },
});
