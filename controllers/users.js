// Import function from Product Model
import { getUsers, getUserById, getUserByLogin, insertUser, updateUserById, deleteUserById } from "../models/usersModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import config from "../config/config.js";

export const showUsers = (req, res) => {
    getUsers((err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

export const showUserById = (req, res) => {
    getUserById(req.params.id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

export const updateUser = (req, res) => {
    const data  = req.body;
    const id    = req.params.id;
    updateUserById(data, id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
 
export const register = async (req, res) => {
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.password, salt);

    let user = {
        email: req.body.email,
        login: req.body.login,
        password: hashPassword,
        isAdmin: req.body.isAdmin
    }

    insertUser(user, (err, results) => {
        if (err){
            res.send(err);
        }else{
            let payload = { id: results._id, isAdmin: req.body.isAdmin || 0 };
            const token = jwt.sign(payload, config.TOKEN_SECRET);
            res.status(200).send({ token })
        }
    });
}

export const login = async (req, res) => {
    getUserByLogin(req.body.login, async (err, result) => {
        if (err){
            res.send(err);
        } else {
            if (result) {
                const validPass = await bcrypt.compare(req.body.password, result.password);
                if (!validPass) return res.status(401).send("Mobile/Email or Password is wrong");

                // Create and assign token
                let payload = { id: result.id, isAdmin: result.isAdmin };
                const token = jwt.sign(payload, config.TOKEN_SECRET);

                res.status(200).header("auth-token", token).send({ "token": token });
            } else {
                res.status(401).send('Invalid mobile')
            }
        }
    });
}