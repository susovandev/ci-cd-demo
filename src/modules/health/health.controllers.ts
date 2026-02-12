import type { Request, Response } from 'express';

class HealthController {
	async healthCheckHandler(req: Request, res: Response) {
		return res.status(200).json({
			statusCode: 200,
			message: 'Up and running',
			status: 'success',
			data: {
				status: 'OK',
				uptime: process.uptime(),
				cpuUsage: process.cpuUsage(),
				memoryUsage: process.memoryUsage(),
			},
		});
	}
}

export default new HealthController();
