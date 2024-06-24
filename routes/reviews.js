const { Router } = require('express');
const postsCtrl = require('../controllers/reviews.js');

const router = Router();

//Leave a review
router.post('/', postsCtrl.createPost);

//delete a review by id
router.delete('/:id', postsCtrl.deletedPost);

//edit review by id
router.patch('/:id', postsCtrl.editPost);

//see all reviews
router.get('/', postsCtrl.getPosts);

// //find review by company
// router.get('/reviews/company')

module.exports = router