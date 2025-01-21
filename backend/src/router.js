const express = require('express');

const tasksController = require('..backend/src/controllers/tasksController.js');
const tasksMiddleware = require('C:/Users/emill/OneDrive/Desktop/projeto/backend/src/middlewares/taksMiddleware');

const router = express.Router();

router.get('/tasks', tasksController.getAll);
router.post('/tasks', tasksMiddleware.validatedTitle, tasksController.createTask);
router.delete('/tasks/:id', tasksController.deleteTask)
router.put('/tasks/:id',
     tasksMiddleware.validatedTitle,
      tasksMiddleware.validateFieldStatus, 
      tasksController.updateTask)

module.exports = router;