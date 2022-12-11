// import express
import express from "express";

import { verifyUserToken, IsAdmin } from "../middleware/auth.js";
 
// import function from controller
import { showGenieSkills, showGenieSkillById, createGenieSkill, updateGenieSkill, deleteGenieSkill, showGenieSkillByCategory } from "../controllers/genie.js";
import { showEquips, showEquipById, createEquip, updateEquip, deleteEquip } from "../controllers/equips.js";
import { showResources, showResourceById, createResource, updateResource, deleteResource } from "../controllers/resources.js";
import { showUsers, showUserById, updateUser, register, login } from "../controllers/users.js";
import { showClasses } from "../controllers/classes.js";
import { showStats } from "../controllers/stats.js";


 
// init express router
const router = express.Router();


router.post('/register', register);
router.post('/login', login);

 
// Get All Product
router.get('/genie_skills', showGenieSkills);
router.get('/classes', showClasses);
router.get('/stats', showStats);
router.get('/users', showUsers);
router.get('/equips', showEquips);
router.get('/resources', showResources);



 
// Get Single Product
router.get('/genie_skills/id=:id', showGenieSkillById);
router.get('/equips/id=:id', showEquipById);
router.get('/resources/id=:id', showResourceById);
router.get('/users/id=:id', showUserById);

router.get('/genie_skills/cat/:category', showGenieSkillByCategory);
 
// Create New Product
router.post('/genie_skills', verifyUserToken, createGenieSkill);
router.post('/equips', verifyUserToken, createEquip);
 
// Update Product
router.put('/genie_skills/:id', verifyUserToken, updateGenieSkill);
router.put('/equips/:id', verifyUserToken, updateEquip);
router.put('/users/:id', verifyUserToken, IsAdmin, updateUser);
 
// Delete Product
router.delete('/genie_skills/:id', verifyUserToken, deleteGenieSkill);
router.delete('/equips/:id', verifyUserToken, deleteEquip);
 
// export default router
export default router;