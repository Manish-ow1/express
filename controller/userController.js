import User from "../model/users.js";

const getUsers = async (req, res) => {
    const users = await User.find();
    res.send({users})
};

const registerUser = async (req, res) => {
    const {fullName, email, password, isActive};
    const user = await User.findOne({ email });
    if(user){
        return res.status(400).send({error: "User already exists!"})
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = await User.create({ fullName, email, password: hashedPassword, isActive});
    res.send({message: "User Registered!", user: newUser})
};

const updateUser = async (req, res) => {
    const { id } = req.params;
    const data = req.body;
    const updatedUser = await User.findByIdAndUpdate(id, data, { new: true })
};

const deleteUser = async (req, res) => {
    const { id } = req.params;
    const deletedUser = await User.findByIdAndDelete(id);
    if(!deletedUser){
        return res.status(400).send({message: "User Not Found!"});
    }
    res.send({
        message: "User deleted sucessfully!",
        user: deletedUser
    });
};

export {getUsers, registerUser, updateUser, deleteUser};