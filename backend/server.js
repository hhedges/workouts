// import required packages
const express = require('express')
const cors = require('cors')
const path = require('path')
const mongoose = require('mongoose')
require ('dotenv').config()

// import components
const workoutRoutes = require('./routes/workoutRoutes')

// initialize express app
const app = express()
app.use(express.json())

// configure cors to whitelist only servers specified in .env file
const whitelist = process.env.CORS_ALLOWED_SERVERS;
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}
app.use(cors(corsOptions));

// Get environment, path, and port info
const dirname = path.resolve('../');
const port = process.env.PORT || 4001;
const env = process.env.NODE_ENV || 'production'

// routes
app.use('/api/workouts', workoutRoutes)

// for production use static build
if (env === 'production') {
	app.use(express.static(path.join(dirname, '/frontend/build')));
	app.get('*', (req, res) => {
		res.sendFile(path.resolve(dirname, 'frontend', 'build', 'index.html'));
	});
}

// start server on specified port and connect to mongodb
mongoose.connect(process.env.MONGO_URI)
.then(() => {
    // listen for requests.
    app.listen(port, () => {
        console.log('connected to db and listening on port', port, ' -NODE_ENV=', env, ' -DIRNAME=', dirname)
    })
})
.catch((error) => {
    console.log(error)
})