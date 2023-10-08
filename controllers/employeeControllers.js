const express = require('express'),
router = express.Router()


const service = require('../services/employeeService')

//http:localhost:3000/api/employees/
router.get('/',  async(req, res)=>{
    const employees = await service.getAllEmployees()
    res.send(employees)
})

module.exports = router;