// import connection
import db from "../config/db.js";
 
// Get All Products
export const getGenieSkills = (result) => {
    db.query("SELECT * FROM genieskills", (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
 
// Get Single Product
export const getGenieSkillById = (id, result) => {
    db.query("SELECT * FROM genieskills WHERE id = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results[0]);
        }
    });   
}

export const getGenieSkillByCategory = (category, result) => {
    db.query("SELECT * FROM genieskills WHERE category = ?", [category], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
 
// Insert Product to Database
export const insertGenieSkill = (data, result) => {
    db.query("INSERT INTO genieskills SET ?", [data], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
 
// Update Product to Database
export const updateGenieSkillById = (data, id, result) => {
    db.query("UPDATE genieskills SET title = ?, descr = ?, boosts = ?, info = ?, icon = ?, blockedTerrain = ?, blockedClasses = ?, category = ? WHERE id = ?", [data.title, data.desc, data.boosts, data.info, data.icon, data.blockedTerrain, data.blockedClasses, data.category, id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
 
// Delete Product to Database
export const deleteGenieSkillById = (id, result) => {
    db.query("DELETE FROM genieskills WHERE id = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}