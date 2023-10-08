const express = require('express'),
router = express.Router()


const service = require('../services/employeeService')

//http:localhost:3000/api/employees/
router.get('/',  async(req, res)=>{
    const employees = await service.getAllEmployees()
    res.send(employees)
})

router.get('/:id',  async(req, res)=>{
    const employee = await service.getEmployeeById(req.params.id)
    if(employee.length === 0){
res.status(404).json('No record with given id: ' + req.params.id)
    }else
    res.send(employee)
})

module.exports = router;