import { getClasses } from "../models/classesModel.js";

export const showClasses = (req, res) => {
    getClasses((err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}