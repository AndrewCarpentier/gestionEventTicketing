const router = require('express').Router();
const apiUser = require('./user');
const apiAuth = require('./auth');

router.use('/user', apiUser);
router.use('/auth', apiAuth);

module.exports = router;