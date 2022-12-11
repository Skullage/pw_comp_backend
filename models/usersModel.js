// import connection
import db from "../config/db.js";

// Get All Products
export const getUsers = (result) => {
    db.query("SELECT * FROM users", (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

export const getUserByLogin = (login, result) => {
    db.query("SELECT * FROM users WHERE login = ?", [login], (err, results) => {            
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results[0]);
        }
    });
}
 
// Get Single Product
export const getUserById = (id, result) => {
    db.query("SELECT * FROM users WHERE id = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results[0]);
        }
    });   
}

// Insert Product to Database
export const insertUser = (data, result) => {
    db.query("INSERT INTO users SET ?", [data], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
 
// Update Product to Database
export const updateUserById = (data, id, result) => {
    if(data.password.length > 0) {
        db.query("UPDATE users SET login = ?, password = ?, isAdmin = ?, email = ? WHERE id = ?", [data.login, data.password, data.isAdmin, data.email, id], (err, results) => {             
            if(err) {
                console.log(err);
                result(err, null);
            } else {
                result(null, results);
            }
        });  
    } else {
        db.query("UPDATE users SET login = ?, isAdmin = ?, email = ? WHERE id = ?", [data.login, data.isAdmin, data.email, id], (err, results) => {             
            if(err) {
                console.log(err);
                result(err, null);
            } else {
                result(null, results);
            }
        });  
    }
}
 
// Delete Product to Database
export const deleteUserById = (id, result) => {
    db.query("DELETE FROM users WHERE id = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}