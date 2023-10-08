const express = require('express'),
     app = express();

const db = require('./db')
employeeRoutes = require('./controllers/employeeControllers')


//middleware
app.use('/api/employees', employeeRoutes)

db.query("SELECT 1")
.then(data => {
    console.log('db connection succeeded')
    app.listen(3000, 
        ()=>console.log('server started at 3000'))
})
.catch(err=>console.log('db connection failed. \n' + err))
