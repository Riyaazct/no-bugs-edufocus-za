import "dotenv/config";

export default {
	dbUrl: createDatabaseUrl(),
	logLevel: process.env.LOG_LEVEL ?? "info",
	port: parseInt(process.env.PORT ?? "3000", 10),
	production: process.env.NODE_ENV === "production",
};

function createDatabaseUrl() {
	if (process.env.DATABASE_URL) {
    return process.env.DATABASE_URL;
  }
  const host =
		process.env.DB_HOST ??
		"dpg-chn23167avj3o34tg39g-a.frankfurt-postgres.render.com";
  const name = process.env.DB_NAME ?? "cyf_0j0o";
  const password =
		process.env.DB_PASS ??
		process.env.DB_PASSWORD ??
		"umfhHWPX5PPu4FnZPWMKeAvTq2zEufnq";
  const port = process.env.DB_PORT ?? "5432";
  const username =
		process.env.DB_USER ?? process.env.DB_USERNAME ?? "cyf_0j0o_user";
  return `postgres://${username}:${password}@${host}:${port}/${name}`;
}
