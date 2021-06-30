import express from 'express'
const router = express.Router();
import parcelControllers from '../controllers/parcelControllers.js'
import { protect } from '../middlewares/authMiddlewares.js'

// Get all List of Parcel from Admin
// api/parcels
router.route('/').get( parcelControllers.getAllParcels);

// Get Create Parcel from Admin
// api/parcels/
router.route('/').post(protect, parcelControllers.createSingleParcel);

// Get Single Parcel from Admin
// api/parcels/:id
router.route('/:id').get(parcelControllers.getSingleParcel);





// Update Parcel from Admin
// api/parcels/:id
router.route('/:id').put(parcelControllers.updateSingleParcel)


router.route('/:id').delete(parcelControllers.deleteParcel)


// Get Single Parcel from User(Search)
// api/parcels/search
router.route('/searchTracking').post(parcelControllers.getParcelBySearch)







export default router