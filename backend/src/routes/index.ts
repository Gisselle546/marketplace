import { Router } from 'express';
import { register, login} from '../controllers/user';
import { createAd } from '../controllers/property';
import { verify_token } from '../controllers/user';

const router: Router = Router()

// Auth
router.post("/register", register)
router.post("/login", login)

// Ad
router.post("/createad", verify_token, createAd)

export default router