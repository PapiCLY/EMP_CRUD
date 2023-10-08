const express = require('express'),
router = express.Router()

const db=require('../db')

//http:localhost:3000/api/employees/
router.get('/', (req, res)=>{
    db.query("SELECT * FROM employees")
    .then(data => res.send(data))
    .catch(err => console.log(err))
})

module.exports = router;