import { Router } from 'express';
import UserController from '../controllers/user.controller';
// import loginMiddleware from '../middlewares/login.middleware';
import userValidation from '../middlewares/user.middleware';

const userRouter = Router();

const userController = new UserController();

userRouter.post('/', userValidation, userController.createUser);
export default userRouter;