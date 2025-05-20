import express from 'express';
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
userRouter.post('/', createNewUser);
userRouter.put('/:id', updateUser);
userRouter.delete('/:id', deleteUser);

export default userRouter;