const express = require("express");
const router = express.Router();

const {
    getEmployees,
    addEmployee,
    getSingleEmployee,
    updateEmployee,
    deleteEmployee,
} = require("../controllers/employeeControler");

router.route("/employee/add").post(addEmployee);
router.route("/employees").get(getEmployees);
router.route("/employee/:id").get(getSingleEmployee);
router.route("/employee/:id").put(updateEmployee).delete(deleteEmployee);
module.exports = router;
