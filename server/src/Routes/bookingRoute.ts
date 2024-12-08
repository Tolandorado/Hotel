import { Router } from "express";
import { getBooking } from "../Controllers/bookingController";


const router = Router();

router.get('/', getBooking);


export default router;