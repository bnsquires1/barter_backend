const Post = require("../models/Review");

module.exports = {
  createPost,
  deletedPost,
  editPost,
  getPosts,
};

async function createPost(req, res) {
  try {
    const post = await Post.create(req.body);

    res.status(200).json(post);
  } catch (err) {
    res.status(400).json("Something went wrong...");
  }
}
//delete a review by ID
async function deletedPost(req, res) {
  try {
    const posts = await Post.findByIdAndDelete(req.params.id);

    res.status(200).json(deletedPost);
  } catch (err) {
    res.status(400).send(err);
  }
}
//update a review by ID
async function editPost(req, res) {
  try {
    const posts = await Post.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    res.status(200).json(editPost);
  } catch (err) {
    res.status(400).send("Your update did not save. Please try again");
  }
}
//see all reviews
async function getPosts(req, res) {
  try {
    const posts = await Post.find({});

    res.status(200).json(posts);
  } catch (err) {
    res.status(400).send(err);
  }
}
