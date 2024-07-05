import pool from "../db.js";
import {
  getAllStudentsQuery,
  getStudentsByIDQuery,
  addDataToStudentsQuery,
  emailExistsQuery,
  removeDataQuery,
  getElementByEmailQuery,
  updateEmailQuery
} from "./queries.js";

const getStudents = (req, res) => {
  pool.query(getAllStudentsQuery, (error, results) => {
    if (error) {
      throw error;
    }
    res.json(results.rows);
  });
};

const getStudentsByID = (req, res) => {
  let id = req.params.id;
  pool.query(getStudentsByIDQuery, [id], (error, results) => {
    if (error) {
      throw error;
    }
    res.json(results.rows);
  });
};

// controllers for adding data into students table
const addDataToStudents = (req, res) => {
  const data = req.body;
  // first know that email is exist or not?
  pool.query(emailExistsQuery, [data.email], (error, results) => {
    if (error) throw error;
    if (results.rows.length) {
      res.send("Email is already exists");
    }
  });

  // now add data into students table.
  pool.query(
    addDataToStudentsQuery,
    [data.name, data.email, data.age, data.dob],
    (error, results) => {
      if (error) throw error;
      res.status(200).json({
        message: "data inserted into students table",
      });
    }
  );
};

// controller for deleting the data from students table
// removing by the id
const removeDataFromStudents = (req, res) => {
  let id = parseInt(req.params.id);
  // first check data is exists or not by id

  pool.query(getStudentsByIDQuery, [id], (error, results) => {
    if (error) throw error;
    if (!results.rows.length) {
      res.status(403).json({
        message: "data you are trying to delete is not there.",
      });
    } else {
      // now you are safe to delete an entry from the table.
      pool.query(removeDataQuery, [id], (error, results) => {
        if (error) throw error;
        res.status(200).json({
          message: "data deleted successfully",
        });
      });
    }
  });
};

// update email controller
const updateEmail = (req, res) => {
  let data = req.body;
  console.log(data);
  pool.query(getElementByEmailQuery, [data.oldEmail], (error, results) => {
    if (error) throw error;
    if (!results.rows.length) {
      res.status(413).json({
        message: "email is not found to update.",
      });
    } else {
      // now update the email here...
      pool.query(updateEmailQuery, [data.oldEmail,data.newEmail], (error, results) => {
        if (error) throw error;
        res.status(200).json({
          message: "Successfully update the email.",
        });
      });
    }
  });
};

export {
  getStudents,
  getStudentsByID,
  addDataToStudents,
  removeDataFromStudents,
  updateEmail,
};
