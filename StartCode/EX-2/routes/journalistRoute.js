import express from 'express';
import { getAllJournalists, getJournalistById, createJournalist, updateJournalist, deleteJournalist, getArticlesByJournalist } from '../controllers/journalistsControllers.js';

const journalistRouter = express.Router();

journalistRouter.get('/', getAllJournalists);
journalistRouter.get('/:id', getJournalistById);
journalistRouter.post('/', createJournalist);
journalistRouter.put('/:id', updateJournalist);
journalistRouter.delete('/:id', deleteJournalist);
journalistRouter.get('/:id/articles', getArticlesByJournalist);

export default journalistRouter;