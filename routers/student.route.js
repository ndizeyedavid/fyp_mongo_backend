import express from "express";
import studentController from "../controllers/student.controller.js";

const studentRoute = express.Router();

studentRoute.get("/test", studentController.testing)

studentRoute.post("/add", studentController.add)
studentRoute.get("/view/all", studentController.viewAll)
studentRoute.get("/view/:id", studentController.viewOne)
studentRoute.put("/update/:id", studentController.update)
studentRoute.delete("/delete/:id", studentController.deleteStd)

export default studentRoute