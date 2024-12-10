import express from 'express'
import { BicycleController } from './bicycle.controller';


const router = express.Router();

router.post('/',BicycleController.createBicycle);
router.get('/',BicycleController.getAllBicycle);
router.get('/:id',BicycleController.getASpecificBicycleDb);
router.put('/:id',BicycleController.updateABicycle);
router.delete('/:id',BicycleController.deleteABicycle)

export const BicycleRoute = router;