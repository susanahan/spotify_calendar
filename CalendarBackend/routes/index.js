var express = require('express');
var router = express.Router();

/* GET instructions page. */

router.get('/', (req, res, next) => {
  let instructions = {
    'Welcome': 'This is the calendar back-end.',
    'Routes': {
      '/': 'Welcome Page!',
      'events/all': 'A list of all events',
      '/events/create/': 'Adds a new :event',
    }
  }
  res.json(instructions);
});



module.exports = router;
