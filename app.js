import express from "express";
import studentRouter from './routes/studentRouter.js'
import mongoose from "mongoose";
import logger from "./middleware/logger.js"
import {errorHandler, notFoundHandler } from "./middleware/errorHandler.js";

const app = express();
app.use(express.json()); //middleware
// app.use(logger);


mongoose.connect("mongodb://localhost:27017/")
.then((conn) => console.log("Mongodb connected at", conn.connection.host))
.catch(err => console.log("Error connecting to mongodb ", err.message))

const students = [];

app.get("/", (req, res) => {
    res.send({ message: "Server is up and running"});
});

app.get("/error", (req, res) => {
    let err = new Error("This is test error simulation");
    throw err;
})

// app.get("/api/students",);

// app.post("/api/students",);

// app.put("/api/students/:id",);

// app.delete("/api/students/:id",);

app.use("/api/students", studentRouter);

app.use(notFoundHandler);
app.use(errorHandler);

app.listen(3000, () => console.log("Server is up and running"));