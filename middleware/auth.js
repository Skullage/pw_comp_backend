import config from "../config/config.js";
import jwt from "jsonwebtoken";

export const verifyUserToken = (req, res, next) => {
    let token = req.headers.authorization;
    if (!token) return res.status(401).send("Нет доступа / Неавторизированный запрос");

    try {
        token = token.split(' ')[1] // Remove Bearer from string

        if (token === 'null' || !token) return res.status(401).send('Неавторизированный запрос');

        let verifiedUser = jwt.verify(token, config.TOKEN_SECRET);   // config.TOKEN_SECRET => 'secretKey'
        if (!verifiedUser) return res.status(401).send('Неавторизированный запрос')
        req.user = verifiedUser; // user_id & user_type_id
        next();

    } catch (error) {
        res.status(400).send("Неверный токен");
    }

}

export const IsUser = async (req, res, next) => {
    if (req.user.isAdmin === 0) {
        next();
    }
    return res.status(401).send("Вы не авторизированы!");   
}

export const IsAdmin = async (req, res, next) => {
    if (req.user.isAdmin === 1) {
        next();
    } else {
        return res.status(401).send("Вы не являетесь администратором!");
    }

}
