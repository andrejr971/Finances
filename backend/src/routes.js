import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import TransactionController from './app/controllers/TransactionController';
import CategoryController from './app/controllers/CategoryController';
import FileController from './app/controllers/FileController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();
const uploads = multer(multerConfig);

routes.post('/session', SessionController.store);
routes.post('/users', UserController.store);

routes.use(authMiddleware);
routes.put('/users', UserController.update);

routes.get('/transactions', TransactionController.index);
routes.post('/transactions', TransactionController.store);
routes.delete('/transactions/:id', TransactionController.delete);

routes.post('/files', uploads.single('file'), FileController.store);

routes.get('/category', CategoryController.index);
routes.post('/category', CategoryController.store);
routes.delete('/category/:id', CategoryController.delete);

export default routes;
