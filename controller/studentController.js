// import { students } from "../model/students.js";
import Student from "../model/students.js"
const students = [];

const getStudents = async (req, res) => {
    const students = await Student.find();
    res.send({students})
};

const addStudents = (req, res) => {
    const data = req.body;
    students.push({ ...data, id: students.length + 1});
    res.send({message: "Student added!"});
};

const updateStudent = (req, res) => {
    const id = req.params.id;
    const data = req.body;
    const student = students.find((s) => s.id == id);
    if(!student){
        return res.status(404).send({ message: "Student not found!"});
    }

    student.name = data.name || student.name;
    student.age = data.age || student.age;
    res.send({ message: "Student Updated"});
};

const deleteStudent = (req, res) => {
    const id = req.params.id;
    const studentIndex = students.findIndex((s) => s.id == id);
    console.log(studentIndex)
    if(studentIndex == -1){
        return res.status(404).send({ message: "Student not found!"});
    }
    students.splice(studentIndex, 1);
    res.send({ message: "Student removed!" });
};

export {getStudents, addStudents, updateStudent, deleteStudent};