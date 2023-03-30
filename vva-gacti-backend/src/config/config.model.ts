interface IApiConfiguration {
  apiUrl: string;
  httpTimeout: number;
}

interface IPostgresConfiguration {
  connectionString: string;
  databaseName: string;
}

export interface IAppConfiguration {
  port: number;
  api: IApiConfiguration;
  postgres: {
    database: IPostgresConfiguration;
  };
}
