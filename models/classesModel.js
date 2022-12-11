import db from "../config/db.js";
 

export const getClasses = (result) => {
    db.query("SELECT * FROM classes ORDER BY id", (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}