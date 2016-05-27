var express = require('express');
var router = express.Router();
var apiv1 = require('./../../app/controllers/api/v1');

router.get('/v1', apiv1.users.getUser);

module.exports = router;
