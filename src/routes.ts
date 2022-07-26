import { Router } from 'express';

import { CreateUserController } from './modules/users/CreateUserController';
import { AuthenticateUserController } from './modules/account/AuthenticateUserController';

const routes = Router();

const createUserController = new CreateUserController();
const authenticateUserController = new AuthenticateUserController();

routes.post('/user', createUserController.create);
routes.post('/login', authenticateUserController.login);

export { routes };
