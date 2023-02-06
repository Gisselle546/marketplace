import { Router } from 'express';
import { register, login} from '../controllers/user';

const router: Router = Router()

// Auth
router.post("/register", register)
router.post("/login", login)

export default router