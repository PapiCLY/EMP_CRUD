const express = require('express'),
     app = express();
     bodyparser = require('body-parser')
require('express-async-errors')//global error handler initiated

const db = require('./db')
employeeRoutes = require('./controllers/employeeControllers')


//middleware
app.use(bodyparser.json())
app.use('/api/employees', employeeRoutes)

//global error catcher from express docs
app.use((err,req,res,next) => {
    console.log(err)
    res.status(err.status || 500).send('Something went wrong!')
})

db.query("SELECT 1")
.then(data => {
    console.log('db connection succeeded')
    app.listen(3000, 
        ()=>console.log('server started at 3000'))
})
.catch(err=>console.log('db connection failed' + err))
