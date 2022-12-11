// Import function from Product Model
import { getGenieSkills, getGenieSkillById, getGenieSkillByCategory, insertGenieSkill, updateGenieSkillById, deleteGenieSkillById } from "../models/genieModel.js";
 
// Get All Products
export const showGenieSkills = (req, res) => {
    getGenieSkills((err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
 
// Get Single Product 
export const showGenieSkillById = (req, res) => {
    getGenieSkillById(req.params.id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

export const showGenieSkillByCategory = (req, res) => {
    getGenieSkillByCategory(req.params.category, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
 
// Create New Product
export const createGenieSkill = (req, res) => {
    const data = req.body;
    insertGenieSkill(data, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
 
// Update Product
export const updateGenieSkill = (req, res) => {
    const data  = req.body;
    const id    = req.params.id;
    updateGenieSkillById(data, id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
 
// Delete Product
export const deleteGenieSkill = (req, res) => {
    const id = req.params.id;
    deleteGenieSkillById(id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}