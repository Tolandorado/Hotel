"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBooking = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const getBooking = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const booking = yield prisma.booking.findMany();
        res.json(booking);
    }
    catch (error) {
        res.status(500).json({ message: `Error retirieving projebookingcbookingts/Ошибка при получении проектов ${error.message}` });
    }
});
exports.getBooking = getBooking;
// export const createBooking = async (
//     req: Request,
//     res: Response
// ): Promise<void> => {
//    const {name, description, startDate, endDate} = req.body; 
//    try {
//        const newProject = await prisma.project.create({
//         data: {
//             name,
//             description,
//             startDate,
//             endDate           
//         }
//        })
//        res.status(201).json(newProject);
//    } catch (error: any) {
//        res.status(500).json({ message: `Error creating projects/Ошибка создания проекта ${error.message}`})
//    }
// }
