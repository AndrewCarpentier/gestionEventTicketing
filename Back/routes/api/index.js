const router = require('express').Router();
const apiUser = require('./user');
const apiAuth = require('./auth');
const apiEvent = require('./event');

router.use('/user', apiUser);
router.use('/auth', apiAuth);
router.use('/event', apiEvent);

module.exports = router;