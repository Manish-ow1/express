// import { students } from "../model/students.js";
import Student from "../model/students.js"
// const students = [];

const getStudents = async (req, res) => {
const students = await Student.find();
    res.send({students})
};

// const addStudent = async(req, res) => {
//     // const data = req.body;
//     // students.push({ ...data, id: students.length + 1});
//     // res.send({message: "Student added!", student: newStudent});
//     const student = req.body;
//     const newStudent = await Student.create(student)
//     res.send({message: "Student added!", student :newStudent})
// };

// const updateStudent = (req, res) => {
//     const id = req.params.id;
//     const data = req.body;
//     const student = students.findIdAndUpdate((s) => s.id == id);
//     if(!student){
//         return res.status(404).send({ message: "Student not found!"});
//     }

//     student.name = data.name || student.name;
//     student.age = data.age || student.age;
//     res.send({ message: "Student Updated"});
// };

// const deleteStudent = (req, res) => {
//     const id = req.params.id;
//     const studentIndex = students.findIndex((s) => s.id == id);
//     console.log(studentIndex)
//     if(studentIndex == -1){
//         return res.status(404).send({ message: "Student not found!"});
//     }
//     students.splice(studentIndex, 1);
//     res.send({ message: "Student removed!" });
// };

const registerStudent = async (req, res) => {
    const {name, age, email, password, isEnrolled} = req.body;
    const student = await Student.findOne({ email });
    // console.log(student)
    if(student){
        return res.status(400).send({error: "Student already exist"});
    }
    const newStudent = await Student.create({name, age, email, password, isEnrolled})
    res.send({message: "User registered!", student: newStudent})
}

const updateStudent = async (req, res) => {
    const { id } = req.params;
    const data = req.body;

     const updatedStudent = await Student.findByIdAndUpdate(id, data, { new: true });

  res.send({message: "Student updated successfully", student: updatedStudent});
};

const deleteStudent = async (req, res) => {
  const { id } = req.params;
  const deletedStudent = await Student.findByIdAndDelete(id);

  if (!deletedStudent) {
    return res.status(404).send({ message: "Student not found" });
  }
  res.send({
    message: "Student deleted successfully",
    student: deletedStudent
  });
};

export {getStudents, registerStudent, updateStudent, deleteStudent};