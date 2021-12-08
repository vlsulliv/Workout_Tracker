const mongoose = require('mongoose');

const schema = mongoose.Schema;
const workoutschema = new mongoose.Schema({
    day: {
        type: Date,
        default: "$date" 
        },
    exercises: [
    {
    type: String,
    name: String,
    distance: Number,
    time: Number,
    }]
})