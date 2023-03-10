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
	const host = process.env.DB_HOST ?? "dpg-cflvv6pa6gdjlmrp8jc0-a.frankfurt-postgres.render.com";
	const name = process.env.DB_NAME ?? "cyf_poqg";
	const password = process.env.DB_PASS ?? process.env.DB_PASSWORD ?? "YEmXa47TQTYWDe1li2RFft9InpWl3cTW";
	const port = process.env.DB_PORT ?? "5432";
	const username = process.env.DB_USER ?? process.env.DB_USERNAME ?? "cyf_poqg_user";
	return `postgres://${username}:${password}@${host}:${port}/${name}`;
}
// Database: cyf_poqg
// url: postgres://cyf_poqg_user:YEmXa47TQTYWDe1li2RFft9InpWl3cTW@dpg-cflvv6pa6gdjlmrp8jc0-a.frankfurt-postgres.render.com/cyf_poqg
// username: cyf_poqg_user
// password: YEmXa47TQTYWDe1li2RFft9InpWl3cTW
// port: 5432
// also you need to create a .env file in the root folder with the following in:
// DB_HOST=dpg-cflvv6pa6gdjlmrp8jc0-a.frankfurt-postgres.render.com
// DB_NAME=cyf_poqg
// DB_PASSWORD=YEmXa47TQTYWDe1li2RFft9InpWl3cTW
// DB_PORT=5432
// DB_USERNAME=cyf_poqg_user (edited)
