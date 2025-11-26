const router = require('express').Router();

/* ******************************************
 * Swagger API-Docs -vy
 *******************************************/
router.use('/', require('./swagger'));

/* ******************************************
 * Main Resource Routes -vy
 *******************************************/
router.use('/gifts', require('./gifts'));



/* ******************************************
 * Basic Home Route -vy
 *******************************************/
router.get('/', (req, res) => {
  res.send(`
    <h1>Welcome to the Holiday Party Planner</h1>
    <p>Click a link below to view the different routes:</p>
    <ul>
      <li><a href="/gifts">Gifts Collection</a></li>
      <li><a href="/api-docs">Swagger Documentation</a></li>
    </ul>
  `);
});

module.exports = router;
