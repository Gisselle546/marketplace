import { Router } from 'express';
import { register, login, getMe} from '../controllers/user';

import { verify_token } from '../controllers/user';

const router: Router = Router()

// Auth
router.post("/register", register)
router.post("/login", login)
router.get('/profile', verify_token, getMe)

// Ad


export default router