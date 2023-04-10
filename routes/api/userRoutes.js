const router = require('express').Router();
const {
    getUser,
    getSingleUser,
    createUser,
    deleteUser,
    addFriend,
    deleteFriend,
} = require('../../controllers/userController');

router.route('/').get(getUser).post(createUser);

router.route('/:userId').get(getSingleUser).delete(deleteUser);

router.route('/:userId/friends/:friendsId').post(addFriend).delete(deleteFriend);

module.exports = router;
