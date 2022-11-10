'use strict';

const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).send({
        title: "AMS Node API",
        version: "2.0.0"
    });
});

module.exports = router;