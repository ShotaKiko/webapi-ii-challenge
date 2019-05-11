const express = require('express')
const db = require('./data/db.js')
const router = express.Router
const { find } = db
const { findById } = db
const { insert } = db
const { update } = db
const { remove } = db


router.get('/', async (req, res) => {
    
    try {
        const lotr = await find(req.query);
        res.status(200).json(lotr)
    } catch (error) {
        // console.log(error)
        res.status(500).json({
            message: "The posts information could not be retrieved.",
        })
    }
})

module.exports = router