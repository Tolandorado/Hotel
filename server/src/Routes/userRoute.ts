import { Router } from "express";
import { getUserByName, createUser } from "../Controllers/userController";


const router = Router();

router.post('/', createUser);
router.post('/login', getUserByName)

export default router;