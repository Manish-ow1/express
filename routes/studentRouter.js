import express from "express";
import{
    getStudents, 
    addStudents, 
    updateStudent, 
    deleteStudent
} from "../controller/studentController.js"

const router = express.Router();

router.get("/", getStudents);
router.post("/", addStudents);
router.put("/:id", updateStudent);
router.delete("/:id", deleteStudent);

export default router;