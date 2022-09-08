const express = require('express')
const router = express.Router()
const entriesController = require('../controllers/entries') 
const { ensureAuth } = require('../middleware/auth')

router.get('/', ensureAuth, entriesController.getEntries)

router.get('/:id', ensureAuth, entriesController.viewEntry)

router.post('/createEntry', entriesController.createEntry)

router.put('/:id/editEntry', entriesController.editEntry)

router.delete('/:id/deleteEntry', entriesController.deleteEntry)

module.exports = router