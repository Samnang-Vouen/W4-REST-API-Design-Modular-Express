import express from 'express';
import { getAllCategories, getCategoryById, createCategory, updateCategory, deleteCategory, getArticlesByCategory } from '../controllers/categoriesControllers.js';

const categoryRouter = express.Router();

categoryRouter.get('/', getAllCategories);
categoryRouter.get('/:id', getCategoryById);
categoryRouter.post('/', createCategory);
categoryRouter.put('/:id', updateCategory);
categoryRouter.delete('/:id', deleteCategory);
categoryRouter.get('/:id/articles', getArticlesByCategory);

export default categoryRouter;