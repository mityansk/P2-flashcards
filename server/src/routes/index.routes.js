const router = require('express').Router();
// const mainRouter = require('./main.routes');
const apiRouter = require('./api.routes')


router.use('/api', apiRouter);

module.exports = router;