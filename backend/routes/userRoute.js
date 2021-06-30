import  express from 'express';
const router = express.Router()
import UserController from '../controllers/userControllers.js'
import { protect, admin } from "../middlewares/authMiddlewares.js"



router.route("/register").post(UserController.registerUser);

router.route("/login").post(UserController.authUser);

router.route("/").get(protect, UserController.getAllUsers);

router.route("/profile")
      .get(protect, UserController.getUserProfile)
      .put(protect, UserController.updateUserProfile)
      
router.route("/:id")
      .get(UserController.getSingleUser)
      .delete(UserController.deleteUser)
      .put(protect, UserController.updateUser)





export default router