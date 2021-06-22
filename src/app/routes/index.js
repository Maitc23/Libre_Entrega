const router = require('express').Router();
const authRoutes = require('./auth');
const viewsRouter = require('./views');

router.use('/auth', authRoutes);
router.use('/', viewsRouter);


module.exports = router;
