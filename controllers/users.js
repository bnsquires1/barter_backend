const User = require('../models/Company');

module.exports = {
  createUser,
  getUsers,
  deleteUser,
};

async function createUser(req, res) {
  try {
    const user = await User.create(req.body);

    res.status(200).json(user);
  } catch (err) {
    res.status(400).json(err);
  }
};

//get all users
async function getUsers(req, res) {
  try {
    const users = await User.find({})

    res.status(200).json(users);
  } catch (err) {
    res.status(400).send(err)
  }
};

//delete a user by ID
async function deleteUser(req, res) {
  try {
    const users = await User.findByIdAndDelete(req.params.id)

    res.status(200).json(deleteUser);
  } catch (err) {
    res.status(400).send(err)
  }
};
