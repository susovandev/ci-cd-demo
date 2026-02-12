import request from 'supertest';
import { describe, it, expect } from 'vitest';

import initializeApplication from 'app.js';

const app = initializeApplication();

describe('Healthcheck Route', () => {
	it('should return a 200 status code', async () => {
		const response = await request(app).get('/health');

		expect(response.status).toBe(200);

		expect(response.body).toMatchObject({
			message: 'Up and running',
			status: 'success',
			statusCode: 200,
			data: {
				uptime: expect.any(Number),
				memoryUsage: expect.any(Object),
				cpuUsage: expect.any(Object),
			},
		});
	});
});
