const User = require('../models/Company');

module.exports = {
  createUser,
  getUsers,
  findByBusiness,
  deleteUser,
  updatedBusiness
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
//find a business by name
async function findByBusiness(req, res) {
  try {
    const users = await User.findByBusiness()

    res.status(200).json(users)
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
}
// update a business by ID
async function updatedBusiness(req, res) {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );

    res.status(200).json(updatedUser);
  } catch (err) {
    res.status(400).send(err);
  }
};
