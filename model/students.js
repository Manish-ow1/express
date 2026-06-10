import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        reqired: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
    },
    isActive: {
        type: Boolean,
        default: false
    }
}, 
{
    timestamps: true,
});

const Student = mongoose.model('Student', studentSchema);

export default Student;
