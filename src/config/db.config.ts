import mongoose from 'mongoose';

import envConfig from './env.config.js';
import Logger from './logger.config.js';

let mongoServer: any;

export async function connectDB() {
	try {
		if (envConfig.server.node_env === 'test') {
			const { MongoMemoryServer } = await import('mongodb-memory-server');

			mongoServer = await MongoMemoryServer.create();
			const uri = mongoServer.getUri();

			await mongoose.connect(uri);

			Logger.info(`Testing database host: ${uri}`);
			Logger.info(`Connected to test database`);
		} else {
			if (!envConfig.database.uri) {
				throw new Error('Database URI is not defined in environment variables');
			}
			const connectionInstance = await mongoose.connect(
				`${envConfig.database.uri}/${envConfig.database.name}`,
			);

			Logger.info(`Database host: ${connectionInstance.connection.host}`);
			Logger.info(
				`Connected to database: ${connectionInstance.connection.db?.databaseName}`,
			);
		}
	} catch (error) {
		Logger.error('Database connection failed', error);
		process.exit(1);
	}
}

export async function disconnectDB() {
	await mongoose.disconnect();
	if (mongoServer) await mongoServer.stop();
}
