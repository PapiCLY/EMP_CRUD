const db=require('../db')

 module.exports.getAllEmployees = async ()=>{
    //http:localhost:3000/api/employees/
    const [rows] = await db.query("SELECT * FROM employees")//destructor [rows] placing this inside the brackets allows us to receive only the first element
    .catch(err => console.log(err))
    return rows;

    res.send(rows)
}