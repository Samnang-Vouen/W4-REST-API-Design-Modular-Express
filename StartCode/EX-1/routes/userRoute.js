import express from 'express';
import logger from '../middleware/logger.js';
import { 
    getAllUsers,
    createNewUser,
    getUserById,
    updateUser,
    deleteUser 
} from '../controllers/userController.js';

const userRouter = express.Router();

userRouter.get('/', getAllUsers);
userRouter.get('/:id', getUserById);
userRouter.post('/', logger, createNewUser);
userRouter.put('/:id', logger, updateUser);
userRouter.delete('/:id', deleteUser);

export default userRouter;