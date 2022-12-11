import { getStats } from "../models/statsModel.js";

export const showStats = (req, res) => {
    getStats((err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}