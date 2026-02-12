import { beforeAll, afterAll, afterEach } from 'vitest';
import mongoose from 'mongoose';

import { connectDB, disconnectDB } from '../src/config/db.config.js';

beforeAll(async () => {
	await connectDB();
});

afterEach(async () => {
	const collections = mongoose.connection.collections;

	for (const key in collections) {
		await collections[key].deleteMany({});
	}
});

afterAll(async () => {
	await disconnectDB();
});
