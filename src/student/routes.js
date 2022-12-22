/* This is importing the express router and the controller. */
const { Router } = require('express');
const controller = require('./controller');

const router = Router();

/* This is a route that will be used to get all students. */
router.get("/", controller.getStudents);

/* This is a route that will be used to get a student by their id. */
router.get("/:id", controller.getStudentById);

/* This is a route that will be used to add a student. */
router.post("/", controller.addStudent);

/* This is a route that will be used to update a student. */
router.put("/:id", controller.updateStudents);

/* This is a route that will be used to delete a student. */
router.delete("/:id", controller.deleteStudent);



module.exports = router;