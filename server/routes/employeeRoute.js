import express from "express";

import { addEmployee, deleteEmployee, getEmployeeWithId, getEmployees, updateEmployee } from "../controllers/employeeController.js";
import { verifyToken } from "../controllers/userController.js";

const router=express.Router();
router.post('/add',verifyToken,addEmployee);
router.get('/allemployee',getEmployees);
router.get('/employee/:id',getEmployeeWithId);
router.put('/update/:id',updateEmployee);
router.delete('/delete/:id',deleteEmployee)

export default router;