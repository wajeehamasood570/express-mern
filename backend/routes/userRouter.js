// all book routes


const express = require('express');

const router  = express.Router();

router.get('/', (req,res) => {
    res.send(`all users list`);
})


router.post('/', (req,res) => {
    res.send(`all users list`);
})
