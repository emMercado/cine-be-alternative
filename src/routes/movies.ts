import express from 'express'

const router = express.Router()

router.get('/', (_, res) => {
    res.send('Fetching all entry movies')
})
router.post('/', (req, res) => {
    res.send('Saving a movie')
})

export default router
