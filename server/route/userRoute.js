const router = require('express').Router();
const { createUser, findUser, updateUser, deleteUser } = require('../controller/userController');

router.route('/api/users').post(createUser).get(findUser);
router.route('/api/users/:id').patch(updateUser).delete(deleteUser)

module.exports = router;

