import { Application } from 'express';

import healthCheckRoutes from '@modules/health/health.routes.js';
import noteRoutes from '@modules/notes/notes.routes.js';

export default function configureRoutes(app: Application) {
	app.use('/health', healthCheckRoutes);
	app.use('/api/v1/notes', noteRoutes);
}
