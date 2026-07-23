const { createTask, fetchAllTask } = require('../controllers/TaskController')

const router = require('express').Router()

router.get('/', fetchAllTask)

router.post('/', createTask)


module.exports = router
