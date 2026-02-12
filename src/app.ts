import express, {
	type Application,
	type Request,
	type Response,
} from 'express';
import configureRoutes from 'routes.js';

export default function initializeApplication() {
	const app: Application = express();

	app.use(express.json());
	app.use(express.urlencoded({ extended: true }));

	app.get('/', (req: Request, res: Response) => {
		return res.status(200).json({
			status: 200,
			message: 'Hello World',
		});
	});

	configureRoutes(app);

	return app;
}
