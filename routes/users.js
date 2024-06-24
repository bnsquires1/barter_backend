const { Router } = require('express');
const usersCtrl = require('../controllers/users.js');

const router = Router();

//Create a user
router.post('/', usersCtrl.createUser);
//Read all users
router.get('/', usersCtrl.getUsers);
//delete a user by ID
router.delete('/:id', usersCtrl.deleteUser);

module.exports = router;
