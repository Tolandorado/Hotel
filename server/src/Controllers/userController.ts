import { Request, Response } from "express"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient();

export const getUserByName = async (
    req: Request,
    res: Response
): Promise<void> => {
    const { name, password } = req.body
    try {
        const user = await prisma.user.findFirst({
            where: {
                name,
                password
            }
        });
        if (!user) {
            res.status(404).json({ message: `пользователя с именем ${name} не существует` })
        }
        res.json(user)
    } catch (error: any) {
        res.status(500).json({ message: `Нет такого пользователя ${error.message}` })
    }
}

export const createUser = async (
    req: Request,
    res: Response
): Promise<void> => {
    const { name, password, role } = req.body;

    // Валидация входных данных
    if (!name || !password || !role) {
        res.status(400).json({ message: 'Все поля (name, password, role) обязательны для заполнения.' });
        return;
    }

    try {
        const newUser = await prisma.user.create({
            data: {
                name,
                password, // Убедитесь, что вы хранили пароль в безопасном виде (например, с использованием bcrypt)
                role
            }
        });
        res.status(201).json(newUser);
    } catch (error: any) {
        res.status(500).json({ message: `Ошибка при создании пользователя: ${error.message}` });
    }
};