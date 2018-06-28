var express = require('express');
var router = express.Router();
const db = require('../db/queries');

/* GET events listing. */
router.get('/all', db.getAllEvents);
router.post('/create', db.createEvent);


module.exports = router;
