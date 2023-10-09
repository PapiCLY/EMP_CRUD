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

// SQL commands for handling update

// CREATE DEFINER=`root`@`localhost` PROCEDURE `usp_employee_add_or_edit`(
// IN _id INT,
// IN _name VARCHAR(255),
// IN _position VARCHAR(255),
// IN _location VARCHAR(255),
// IN _salary INT
// )
// BEGIN
// 	IF _id = 0 THEN
// 		INSERT INTO employees(name,position,location,salary)
//         VALUES (_name,_position,_location,_salary);
        
//     ELSE 
// 		UPDATE employees
//         SET name = _name,
//         position = _position,
//         location = _location,
//         salary = _salary
//         WHERE id = _id;
//     END IF;
    
    
//     SELECT ROW_COUNT() AS `affectedRows`;
// END