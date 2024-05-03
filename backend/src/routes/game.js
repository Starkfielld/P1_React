import express from 'express';
const router = express.Router();
import * as gameController from '../controllers/gameController.js';

router.get('/', gameController.getAllGame);
router.post('/', gameController.createGame);
router.get('/:id', gameController.getById);
router.put('/:id/:gameData', gameController.updateGame); 
router.delete('/:id', gameController.deleteGame); 

export default router;