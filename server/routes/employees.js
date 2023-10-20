import express from "express";
const employeesRouter = express.Router();
import employeeController from "../controllers/employeeController.js";

employeesRouter.post("/create", employeeController.createEmployee);
employeesRouter.get("/", employeeController.getEmployees);
employeesRouter.put("/update/:id", employeeController.updateEmployee);
employeesRouter.delete("/delete/:id", employeeController.deleteEmployee);

export default employeesRouter;
