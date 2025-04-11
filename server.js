import express from "express"
import dotenv from "dotenv"
dotenv.config();

import studentRoute from "./routers/student.route.js";
import dbConnect from "./database/dbConnect.js";

const app = express();
app.use(express.json())

const port = process.env.PORT || 3000;

app.listen(port, ()=>{
    console.log("Server is running at port", port)
})
dbConnect()

app.use("/api/student", studentRoute)