import { Request, Response } from "express"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient();

export const getBooking = async (
     req: Request,
     res: Response
): Promise<void> => {
    try {
        const booking = await prisma.booking.findMany();
        res.json(booking);
    } catch (error: any) {
        res.status(500).json({ message: `Error retirieving projebookingcbookingts/Ошибка при получении проектов ${error.message}`})
    }
}

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

