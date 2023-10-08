const express = require('express'),
     app = express();

const db = require('./db')
employeeRoutes = require('./controllers/employeeControllers')


//middleware
app.use('/api/employees', employeeRoutes)

//global error catcher from express docs
app.use((err,req,res,next) => {
    console.log(err)
    res.status(err.status || 500).send('something went wrong')
})

db.query("SELECT 1")
.then(data => {
    console.log('db connection succeeded')
    app.listen(3000, 
        ()=>console.log('server started at 3000'))
})
.catch(err=>console.log('db connection failed' + err))
