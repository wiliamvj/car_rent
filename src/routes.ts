import { Router } from 'express';

import { validateAuthenticate } from './middlewares/validateAuthenticate';

import { CreateUserController } from './modules/users/createUser/CreateUserController';
import { AuthenticateUserController } from './modules/account/AuthenticateUserController';
import { ListUserController } from './modules/users/listUser/ListUserController';
import { UpdateUserController } from './modules/users/updateUser/UpdateUserController';
import { DeleteUserController } from './modules/users/deleteUser/DeleteUserController';

import { CreateCarController } from './modules/cars/registerCars/CreateCarController';
import { ListCarsController } from './modules/cars/listCars/ListCarsController';
import { DeleteCarController } from './modules/cars/deleteCars/DeleteCarController';
import { CarRentController } from './modules/cars/carRent/CarRentController';
import { UpdateCarController } from './modules/cars/updateCars/UpdateCarController';

const routes = Router();

const createUserController = new CreateUserController();
const authenticateUserController = new AuthenticateUserController();
const listUserController = new ListUserController();
const updateUserController = new UpdateUserController();
const deleteUserController = new DeleteUserController();

const createCarController = new CreateCarController();
const listCarsController = new ListCarsController();
const deleteCarController = new DeleteCarController();
const carRentController = new CarRentController();
const updateCarController = new UpdateCarController();

routes.post('/user', createUserController.create);
routes.post('/login', authenticateUserController.login);
routes.get('/users', validateAuthenticate, listUserController.list);
routes.put('/user/update', validateAuthenticate, updateUserController.update);
routes.delete(
  '/user/delete',
  validateAuthenticate,
  deleteUserController.delete
);

routes.post('/car/register', validateAuthenticate, createCarController.create);
routes.get('/cars', validateAuthenticate, listCarsController.list);
routes.delete('/cars', validateAuthenticate, deleteCarController.delete);
routes.post('/car/rent', validateAuthenticate, carRentController.rent);
routes.post(
  '/car/rent/cancel',
  validateAuthenticate,
  carRentController.cancelRent
);
routes.put('/car/update', validateAuthenticate, updateCarController.update);

export { routes };
