const db=require('../db')

 module.exports.getAllEmployees = async ()=>{
    //http:localhost:3000/api/employees/
    const [rows] = await db.query("SELECT * FROM employees")//destructor [rows] placing this inside the brackets allows us to receive only the first element
    return rows;
}

module.exports.getEmployeeById = async (id)=>{
    const [record] = await db.query("SELECT * FROM employees WHERE id = ?", [id])//this syntax is recommended per the mysql spm documentation. This is more secure
    return record;
}

module.exports.deleteEmployee = async (id)=>{
    const [record] = await db.query("DELETE FROM employees WHERE id = ?", [id])//this syntax is recommended per the mysql spm documentation. This is more secure
    return record.affectedRows;
}