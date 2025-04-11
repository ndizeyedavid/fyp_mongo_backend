import Student from "../schema/student.schema.js";

const studentController = {
    testing(req, res){
        res.json({message: "Testing student endpoint"});
    },
    async add(req, res){
        try{
            const {fname, lname, std_class, dob, gender } = req.body;

            if (!fname || !lname || !std_class || !gender){
                res.status(400).json({message: "Fill in all inputs"});
            }
            
            const newStudent = await Student.create({fname, lname, std_class, dob, gender})
            res.status(201).json({message: "New student created", data: newStudent})
        }catch(error){
            res.status(500).json({message: "Failed to add student", err: error.message});
        }
    },
    async viewAll(req, res){
        try{
            const students = await Student.find();
            res.status(200).json({message: "Users fetched", data: students})
        }catch(error){
            res.status(500).json({message: "failed to retrieve users", err: error.message})
        }
    },
    async viewOne(req, res){
        try{
            const {id} = req.params;
            const student = await Student.findById(id)

            if (!student){
                res.status(404).json({message: "Student not found"})
            }

            res.status(200).json({message: "1 student fetched", data: student})
        }catch(error){
            res.status(500).json({message: "Failed to return a student", err: error.message})
        }
    },
    async update(req, res){
        try{

            const {fname, lname, dob, std_class, gender} = req.body;
            const {id} = req.params;

            const update = await Student.findByIdAndUpdate(id, {fname, lname, dob, std_class, gender})

            if (!update){
                res.status(404).json({message: "Unknown user"})
            }

            res.status(200).json({message: "Student updated", data: update});
        }catch(error){
            res.status(500).json({message: "Failed to update student", err: error.message})
        }
    },
    async deleteStd(req, res){
        try{
            const {id} = req.params

            await Student.findByIdAndDelete(id);

            res.status(200).json({message: "Student deleted successfully"});
        }catch(error){
            res.status(500).json({message: "Failed to delete student", err: error.message})
        }
    },
}

export default studentController;