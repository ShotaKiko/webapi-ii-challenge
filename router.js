const express = require('express')
const db = require('./data/db.js')
const router = express.Router()
const { find } = db
const { findById } = db
const { insert } = db
// const { update } = db
// const { remove } = db

// router.use(express.json())
//needed ^^^^^^^ or not??not needed
//so router inherits express.json() from binding to express?


router.get('/', async (req, res) => {
    try {
        const lore = await find(req.query);
        res.status(200).json(lore)
    } catch (error) {
        // console.log(error)
        res.status(500).json({
            message: "The posts information could not be retrieved.",
        })
    }
})

router.get('/:id', async (req, res) => {
    try{
        try{
            const { id } = req.params
            const identifiedPost = await findById(id);
            res.status(200).json(identifiedPost)
        } catch (error) {
            res.status(404).json({
                message: "The post with the specified ID does not exist."
            })
        }
    } catch(error) {
        res.status(500).json({
            message: "The post information could not be retrieved"
        })
    }
})

router.post('/', async (req, res) => {
    try{
        const newPost = req.body
        const addedPost = await insert(newPost);
        res.status(201).json(addedPost)
    } catch (error) {
        res.status(500).json({
            message: "There was an error while saving the post to the database."
        })
    }
})

module.exports = router