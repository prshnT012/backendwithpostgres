import { Router } from "express";
import {getStudents,getStudentsByID,addDataToStudents,removeDataFromStudents,updateEmail} from "./controllers.js"

const router = Router();

// fetching details from the students table
router.get('/',(req,res)=>{
    getStudents(req,res)
})

router.get('/:id',(req,res)=>{
    getStudentsByID(req,res)
})

// Uploading data into the table
router.post('/',addDataToStudents);

//deleting data from the table
router.delete('/remove/:id',removeDataFromStudents)

//updating data to the table based on id (email updatation)
router.put('/update/email',updateEmail)

export default router