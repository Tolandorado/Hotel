import { Router } from "express";
import { getUserByName, createUser } from "../Controllers/userController";


const router = Router();

router.post('/', createUser);


export default router;