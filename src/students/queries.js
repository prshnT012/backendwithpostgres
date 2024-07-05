const getAllStudentsQuery = "SELECT * FROM students";
const getStudentsByIDQuery = "SELECT * FROM students WHERE id = $1";
const addDataToStudentsQuery =
  "INSERT INTO students(name,email,age,dob) VALUES ($1,$2,$3,$4)";
const emailExistsQuery = "SELECT * FROM students WHERE email = $1";
const removeDataQuery = "DELETE FROM students WHERE id = $1";
const getElementByEmailQuery = "SELECT * FROM students WHERE email = $1";
const updateEmailQuery = "UPDATE students SET email = $2 WHERE email = $1"

export {
  getAllStudentsQuery,
  getStudentsByIDQuery,
  addDataToStudentsQuery,
  emailExistsQuery,
  removeDataQuery,
  getElementByEmailQuery,
  updateEmailQuery,
};
