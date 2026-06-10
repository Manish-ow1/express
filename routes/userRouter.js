import express from "express";
import {
    getUsers,
    registerUser,
    updateUser,
    deleteUser,
} from "../controller/userController.js";

const router = express.Router();

router.get("/",getUsers);
router.add("/",registerUser);
router.put("/:id",updateUser);
router.delete("/:id",deleteUser);