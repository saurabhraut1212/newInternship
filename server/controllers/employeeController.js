import Employee from "../models/employee.js";

export const addEmployee=async(req,res)=>{
    const {name,job,phone,email,address,city,state,primary_contact,pri_phone,pri_relationship,
        secondary_contact, sec_phone, sec_relationship }=req.body;
        try {
            const emp=await Employee.findOne({email});

            if(emp){
                return res.status(300).json({message:"Employee with that email is already exists"});
            }

            const newEmp=await Employee.create({
                name,
                 job, 
                 phone,
                 email,
                 address, 
                 city, 
                 state,
                 primary_contact, 
                 pri_phone, 
                 pri_relationship,
                 secondary_contact, 
                 sec_phone, 
                 sec_relationship
            })

            if(!newEmp){
                return res.status(204).json({message:"Employee not created "})
            }
            res.status(201).json(newEmp)
        } catch (error) {
            res.status(400).json(error)
            
        }

}

export const getEmployees = async (req, res) => {
    try {
        const emps=await Employee.find({});
        if(!emps){
            return res.status(301).json({ message: "Employees not found" })
        }
        res.status(201).json(emps)
    } catch (error) {
        res.status(400).json(error)
    }

}

export const getEmployeeWithId = async (req, res) => {
  const {id}=req.params;
    try {
        const emp=await Employee.findById(id);
        if(!emp){
            return res.status(301).json({ message: "Employee with that id does not exists" })
        }
        res.status(200).json(emp)
    } catch (error) {
        res.status(400).json(error)
    }

}

export const updateEmployee = async (req, res) => {
    const { id } = req.params;
    const { name, job, phone, emailaddress, city, state, primary_contact, pri_phone, pri_relationship,
        secondary_contact, sec_phone, sec_relationship } = req.body;
    try {
        const emp = await Employee.findByIdAndUpdate(id,{
            name,
            job,
            phone,
            emailaddress,
            city,
            state,
            primary_contact, 
            pri_phone, 
            pri_relationship,
            secondary_contact,
            sec_phone,
            sec_relationship
        });
        if(!emp){
            return res.status(301).json({ message: "Employee with that id does not exists" })

        }
        res.status(200).json(emp)
    } catch (error) {
        res.status(400).json(error)
    }

}

export const deleteEmployee = async (req, res) => {
    const { id } = req.params;
    try {
        const emp=await Employee.findByIdAndRemove(id);
        if(!emp){
            return res.status(301).json({ message: "Employee with that id does not exists" })
        }
        res.status(200).json(emp)
    } catch (error) {
        res.status(400).json(error)
    }
}




