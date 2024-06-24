const { Router } = require('express');
const usersCtrl = require('../controllers/users.js');

const router = Router();

//Create a user
router.post('/', usersCtrl.createUser);
//Read all users
router.get('/', usersCtrl.getUsers);
//search by business name
router.get('/business', usersCtrl.findByBusiness);
//delete a user by ID
router.delete('/:id', usersCtrl.deleteUser);
//update a business by id
router.patch('/:id', usersCtrl.updatedBusiness);

module.exports = router;
