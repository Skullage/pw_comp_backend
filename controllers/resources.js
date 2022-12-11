// Import function from Product Model
import { getResources, getResourceById, insertResource, updateResourceById, deleteResourceById } from "../models/resourcesModel.js";
 
// Get All Products
export const showResources = (req, res) => {
    getResources((err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
 
// Get Single Product 
export const showResourceById = (req, res) => {
    getResourceById(req.params.id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
 
// Create New Product
export const createResource = (req, res) => {
    const data = req.body;
    insertResource(data, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
 
// Update Product
export const updateResource = (req, res) => {
    const data  = req.body;
    const id    = req.params.id;
    updateResourceById(data, id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
 
// Delete Product
export const deleteResource = (req, res) => {
    const id = req.params.id;
    deleteResourceById(id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}