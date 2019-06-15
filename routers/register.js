const router = require('express').Router();

router.get('/', (req, res) => {
    res.send('reg')
})

// export the router
module.exports = router;
