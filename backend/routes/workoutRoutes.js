// import required packages
const express = require('express')

// import components
const {
    getWorkouts,
    getWorkout,
    createWorkout,
    updateWorkout,
    deleteWorkout
} = require('../controllers/workoutController')

// initialize router
const router = express.Router()

// get all workouts
router.get('/', getWorkouts)

// get a single workout
router.get('/:id', getWorkout)

// create a new workout
router.post('/', createWorkout)

// update a workout
router.patch('/:id', updateWorkout)

// delete a workout
router.delete('/:id', deleteWorkout)

module.exports = router