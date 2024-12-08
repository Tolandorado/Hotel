"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const bookingController_1 = require("../Controllers/bookingController");
const router = (0, express_1.Router)();
router.get('/', bookingController_1.getBooking);
exports.default = router;
