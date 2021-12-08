
const db = require('../../models')

// create
app.post('/api/workouts/:id', (req/res) {
  db.Workout.create({}).then(newWorkout => {
    res.json(newWorkout)
  })
})

// retrieve
app.get("/api/workouts", function(req, res){
  Exercise.find({}, function(workouts) {
    res.json(workouts)})
  })
  
// delete
app.delete('/api/workous', ({ bnody }, res) => {
  Workout.findAndDelete(body.id)
  .then(() => {
    res.json(true);
  })
  .catch(err => {
    res.status(400).json.err;
  })
})

module.export = { app };

