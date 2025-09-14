import mysql from "mysql2/promise";

export async function connectDB() {
  if (!process.env.MYSQL_URL) {
    throw new Error(
      "MYSQL_URL environment variable not defined. Project runs only in production."
    );
  }

  const url = new URL(process.env.MYSQL_URL);

  const connection = await mysql.createConnection({
    host: url.hostname,
    port: url.port,
    user: url.username,
    password: url.password,
    database: url.pathname.replace("/", ""),
  });

  return connection;
}
