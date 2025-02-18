import { config } from 'dotenv';
import { ConnectionOptions } from 'typeorm';

const {
  parsed: {
    MYSQL_HOST,
    MYSQL_PORT,
    MYSQL_USERNAME,
    MYSQL_PASSWORD,
    MYSQL_DATABASE,
  },
} = config();

export const mysqlConfig: ConnectionOptions = {
  type: 'mysql',
  host: MYSQL_HOST,
  port: parseInt(MYSQL_PORT, 10),
  username: MYSQL_USERNAME,
  password: MYSQL_PASSWORD,
  database: MYSQL_DATABASE,
};
