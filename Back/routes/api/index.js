const router = require('express').Router();
const apiUser = require('./user');
const apiAuth = require('./auth');
const apiEvent = require('./event');
const apiBookmark = require('./bookmark');

router.use('/user', apiUser);
router.use('/auth', apiAuth);
router.use('/event', apiEvent);
router.use('/bookmark', apiBookmark);

module.exports = router;