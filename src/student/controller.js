const { get } = require("./routes");
const pool = require("../../db");
const queries = require("./queries");

/**
 * It's a function that takes in a request and a response, and then queries the database using the
 * query string stored in the queries object, and then sends the results of the query back to the
 * client.
 */
const getStudents = (req, res) => {
  pool.query(queries.getStudents, (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

/**
 * It takes the id from the url, and uses it to query the database for the student with that id
 */
const getStudentById = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query(queries.getStudentById, [id], (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

/**
 * It checks if the email exists in the database, if it does, it sends a response to the client, if it
 * doesn't, it adds the student to the database and sends a response to the client.
 */
const addStudent = (req, res) => {
  const { name, email, age, dob } = req.body;
  //check if email exist or not
  pool.query(queries.checkEmailExit, [email], (error, results) => {
    if (results.rows.length) {
      res.send("Email already exist");
    }
    //add to student to db
    pool.query(
      queries.addStudent,
      [name, email, age, dob],
      (error, results) => {
        if (error) throw error;
        res.status(200).send("Student added successfully!");
      }
    );
  });
};

/**
 * It updates a student's name in the database.
 */
const updateStudents = (req, res) => {
  const id = parseInt(req.params.id);
  const { name, email } = req.body;
  //if student is not present in the db.
  pool.query(queries.getStudentById, [id], (error, results) => {
    const noStudentFound = !results.rows.length;
    if (noStudentFound) {
      res.send("Student does't exist in the database");
    }
    //updating the database.
    pool.query(queries.updateStudents, [name, email, id], (error, results) => {
      if (error) throw error;
      res.status(200).send("Student updated Successfully!");
    });
  });
};

/**
 * It checks if a student exists in the database, if it does, it deletes the student data.
 */
const deleteStudent = (req, res) => {
  const id = parseInt(req.params.id);
  //check if student exist
  pool.query(queries.getStudentById, [id], (error, results) => {
    const noStudentFound = !results.rows.length;
    if (noStudentFound) {
      res.send("Student does't exist in the database");
    }
    //deleting the student data
    pool.query(queries.deleteStudent, [id], (error, results) => {
      if (error) throw error;
      res.status(200).send("Student data deleted Successfully!");
    });
  });
};

module.exports = {
  getStudents,
  getStudentById,
  addStudent,
  deleteStudent,
  updateStudents,
};
