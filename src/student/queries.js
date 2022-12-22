const getStudents = "SELECT * FROM students";
const getStudentById = "SELECT * FROM students WHERE id = $1";
const checkEmailExit = "SELECT s FROM students s WHERE s.email=$1 "
const addStudent = "INSERT INTO students (name, email, age, dob) VALUES ($1, $2, $3, $4)";
const deleteStudent = "DELETE FROM students WHERE id = $1";
const updateStudents = "UPDATE students SET name = $1, email = $2 WHERE id = $3";

module.exports = {
    getStudents,
    getStudentById,
    checkEmailExit,
    addStudent,
    deleteStudent,
    updateStudents
}