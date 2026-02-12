import dotenv from 'dotenv';
dotenv.config({ path: './.env' });

const _config = {
	server: {
		port: process.env.PORT || 4000,
		node_env: process.env.NODE_ENV || 'development',
	},
	database: {
		uri: process.env.DATABASE_URI || '',
		name: process.env.DATABASE_NAME,
	},
};

export default Object.freeze(_config);
