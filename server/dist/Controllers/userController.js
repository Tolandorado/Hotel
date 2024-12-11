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
exports.createUser = exports.getUserByName = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const getUserByName = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, password } = req.body;
    try {
        const user = yield prisma.user.findFirst({
            where: {
                name,
                password
            }
        });
        if (!user) {
            res.status(404).json({ message: `пользователя с именем ${name} не существует` });
        }
        res.json(user);
    }
    catch (error) {
        res.status(500).json({ message: `Нет такого пользователя ${error.message}` });
    }
});
exports.getUserByName = getUserByName;
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, password, role } = req.body;
    // Валидация входных данных
    if (!name || !password || !role) {
        res.status(400).json({ message: 'Все поля (name, password, role) обязательны для заполнения.' });
        return;
    }
    try {
        const newUser = yield prisma.user.create({
            data: {
                name,
                password, // Убедитесь, что вы хранили пароль в безопасном виде (например, с использованием bcrypt)
                role
            }
        });
        res.status(201).json(newUser);
    }
    catch (error) {
        res.status(500).json({ message: `Ошибка при создании пользователя: ${error.message}` });
    }
});
exports.createUser = createUser;
