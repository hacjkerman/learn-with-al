import pkg from "pg";
const { Client } = pkg;

const client = new Client({
  host: "db",
  user: "postgres",
  port: 5432,
  password: "rootUser",
  database: "postgres",
});

export default function getDB() {
  return client.connect();
}

client.query(`Select * from users`, (res, error) => {
  if (error) {
    console.log(error.message);
  } else {
    console.log(res.rows);
  }
  client.end;
});
