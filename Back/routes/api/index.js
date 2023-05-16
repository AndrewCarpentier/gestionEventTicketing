const router = require('express').Router();
const apiUser = require('./user');
const apiAuth = require('./auth');
const apiEvent = require('./event');
const apiBookmark = require('./bookmark');
const apiImage = require('./image');

router.use('/user', apiUser);
router.use('/auth', apiAuth);
router.use('/event', apiEvent);
router.use('/bookmark', apiBookmark);
router.use('/image', apiImage);

module.exports = router;