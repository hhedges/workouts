// import required packages
const mongoose = require('mongoose')

// setup schema
const Schema = mongoose.Schema

const workoutSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    reps: {
        type: Number,
        required: true
    },
    load: {
        type: Number,
        required: true
    }
}, {timestamps: true})

// export a model based on schema.  'Workout' below is the singluar name of the document.
module.exports = mongoose.model('Workout', workoutSchema)