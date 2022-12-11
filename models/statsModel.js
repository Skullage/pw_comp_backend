import db from "../config/db.js";
 

export const getStats = (result) => {
    db.query("SELECT * FROM stats ORDER BY id", (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}