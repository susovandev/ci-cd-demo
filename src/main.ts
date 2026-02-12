import { connectDB } from '@config/db.config.js';
import envConfig from '@config/env.config.js';
import Logger from '@config/logger.config.js';
import initializeApplication from 'app.js';

export default async function startServer() {
	const app = initializeApplication();

	const PORT = envConfig.server.port;
	const environment = envConfig.server.node_env;

	await connectDB();

	app.listen(PORT, () => {
		Logger.info(
			`Server is running on http://localhost:${PORT} in ${environment} mode`,
		);
	});
}

startServer().catch((error) => {
	Logger.error(error);
	process.exit(1);
});
