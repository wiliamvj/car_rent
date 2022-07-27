import express, { NextFunction, Response, Request } from 'express';
import swaggerUi from 'swagger-ui-express';
import 'express-async-errors';

import swaggerConfig from './swagger.json';

import { routes } from './routes';
const app = express();

app.use(express.json());
app.use(routes);

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerConfig));

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof Error) {
    return res.status(400).json({ message: err.message });
  }

  return res.status(500).json({
    message: 'Interna server error',
  });
});

app.listen(3001, () => console.log(`🔥 Server is running on port 3001`));
