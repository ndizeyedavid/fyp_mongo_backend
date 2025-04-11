import {Schema, model} from "mongoose";

const studentSchema = new Schema({
    fname:{
        type: String,
        required: true
    },
    lname:{
        type: String,
        required: true
    },
    std_class: {
        type: String,
        required: true
    },
    dob: {
        type: Date,
    },
    gender: {
        type: String,
        enum: ["male", "female"],
        required: true
    },
    added_date: {
        type: Date,
        default: Date.now
    }
});

const Student = model("Student", studentSchema);

export default Student;