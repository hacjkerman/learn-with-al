import { Sequelize } from "sequelize";

export const sequelize = new Sequelize("postgres", "postgres", "postgres", {
  host: "db",
  dialect:
    "postgres" /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */,
});
