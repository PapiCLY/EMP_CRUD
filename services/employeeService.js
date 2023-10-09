const db=require('../db')

 module.exports.getAllEmployees = async ()=>{
    //http:localhost:3000/api/employees/
    const [rows] = await db.query("SELECT * FROM employees")//destructor [rows] placing this inside the brackets allows us to receive only the first element
    return rows;
}

module.exports.getEmployeeById = async (id)=>{
    const [[record]] = await db.query("SELECT * FROM employees WHERE id = ?", [id])//this syntax is recommended per the mysql spm documentation. This is more secure
    return record;
}

module.exports.deleteEmployee = async (id)=>{
    const [{affectedRows}] = await db.query("DELETE FROM employees WHERE id = ?", [id])//this syntax is recommended per the mysql spm documentation. This is more secure
    return affectedRows;
}

module.exports.addOrEditEmployee = async (obj,id = 0)=>{
    const [{affectedRows}] = await db.query("CALL usp_employee_add_or_edit(?,?,?,?,?)", 
    [id,obj.name,obj.position,obj.location,obj.salary])//this syntax is recommended per the mysql spm documentation. This is more secure
    return affectedRows;
}

module.exports.addOrEditEmployee = async (obj,id = 0)=>{
    const [[[{affectedRows}]]] = await db.query("CALL usp_employee_add_or_edit(?,?,?,?,?)", 
    [id,obj.name,obj.position,obj.location,obj.salary])//this syntax is recommended per the mysql spm documentation. This is more secure
    return affectedRows;
}