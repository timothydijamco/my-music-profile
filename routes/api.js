const express = require('express');
const router = express.Router();
const randomstring = require('randomstring');
const Profile = require('../models/profile');

router.get('/profile/:code', (req, res, next) => {
   Profile.findOne({"code": req.params.code})
      .then(data => res.json(data))
      .catch(next);
});

router.post('/profile', (req, res, next) => {
   req.body.code = randomstring.generate({
      length: 8,
      charset: 'abcdefghijklmnopqrstuvwxyz0123456789'
   });

   Profile.create(req.body)
      .then(data => res.json({code: req.body.code}))
      .catch(next);
});

module.exports = router;
