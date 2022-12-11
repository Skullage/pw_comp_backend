// import connection
import db from "../config/db.js";
 
// Get All Products
export const getResources = (result) => {
    db.query("SELECT * FROM resources", (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
 
// Get Single Product
export const getResourceById = (id, result) => {
    db.query("SELECT * FROM resources WHERE id = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results[0]);
        }
    });   
}

 
// Insert Product to Database
export const insertResource = (data, result) => {
    db.query("INSERT INTO resources SET ?", [data], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
 
// Update Product to Database
export const updateResourceById = (data, id, result) => {
    db.query("UPDATE resources SET title = ?, desc = ?, icon = ? WHERE id = ?", [data.title, data.desc, data.icon, id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
 
// Delete Product to Database
export const deleteResourceById = (id, result) => {
    db.query("DELETE FROM resources WHERE id = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}