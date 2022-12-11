// Import function from Product Model
import { getEquips, getEquipById, insertEquip, updateEquipById, deleteEquipById } from "../models/equipModel.js";
 
// Get All Products
export const showEquips = (req, res) => {
    getEquips((err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
 
// Get Single Product 
export const showEquipById = (req, res) => {
    getEquipById(req.params.id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
 
// Create New Product
export const createEquip = (req, res) => {
    const data = req.body;
    insertEquip(data, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
 
// Update Product
export const updateEquip = (req, res) => {
    const data  = req.body;
    const id    = req.params.id;
    updateEquipById(data, id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
 
// Delete Product
export const deleteEquip = (req, res) => {
    const id = req.params.id;
    deleteEquipById(id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}