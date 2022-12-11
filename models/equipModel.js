// import connection
import db from "../config/db.js";
 
// Get All Products
export const getEquips = (result) => {
    db.query("SELECT * FROM equips", (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
 
// Get Single Product
export const getEquipById = (id, result) => {
    db.query("SELECT * FROM equips WHERE id = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results[0]);
        }
    });   
}

 
// Insert Product to Database
export const insertEquip = (data, result) => {
    db.query("INSERT INTO equips SET ?", [data], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
 
// Update Product to Database
export const updateEquipById = (data, id, result) => {
    db.query("UPDATE equips SET title = ?, desc = ?, boosts = ?, info = ?, icon = ?, blockedTerrain = ?, blockedClasses = ?, category = ? WHERE id = ?", [data.title, data.desc, data.boosts, data.info, data.icon, data.blockedTerrain, data.blockedClasses, data.category, id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
 
// Delete Product to Database
export const deleteEquipById = (id, result) => {
    db.query("DELETE FROM equips WHERE id = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}