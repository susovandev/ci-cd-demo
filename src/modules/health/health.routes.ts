import { Router } from 'express';
import healthControllers from './health.controllers.js';

const router: Router = Router();

router.get('/', healthControllers.healthCheckHandler);

export default router;
