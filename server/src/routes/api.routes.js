const router = require('express').Router();
const apiDeckRouter = require('./api/api.deck.routes');
const apiUserRouter = require('./api/api.user.routes')
const apiCardRouter = require('./api/api.card.routes')

router.use('/deck', apiDeckRouter);
router.use('/user', apiUserRouter);
router.use('/card', apiCardRouter);

module.exports = router;