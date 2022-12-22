const router = require('express').Router();
const apiRoutes = require('./api');
const Routes = require('./routes.js');

router.use('/api', apiRoutes);
router.use('/', Routes);


router.use((req, res) => {
    res.status(404).end();
});


module.exports = router;