import express from 'express';
import { flowerController } from '../controllers/flowerController.js';


const flowerRouter = express.Router();




flowerRouter.get('/get-info', flowerController.getInfo);


flowerRouter.get('/filter-options', flowerController.getFilterOptions);

flowerRouter.post('/', flowerController.create);
flowerRouter.get('/', flowerController.getAll);
flowerRouter.get('/:id', flowerController.getById);
//flowerRouter.put('/:id', flowerController.update);
flowerRouter.delete('/:id', flowerController.delete);

flowerRouter.get('/search', flowerController.searchFlowers);
flowerRouter.get('/category/:category', flowerController.getFlowersByCategory);
flowerRouter.get('/color/:color', flowerController.getFlowersByColor);
//flowerRouter.put('/stock', flowerController.updateStock);

flowerRouter.get('/top-selling', flowerController.getTopSellingFlowers);
flowerRouter.get('/new-arrivals', flowerController.getNewArrivals);


export default flowerRouter;