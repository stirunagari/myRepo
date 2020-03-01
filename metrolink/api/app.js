let express = require('express'),
  path = require('path'),
  mongoose = require('mongoose'),
  cors = require('cors'),
  bodyParser = require('body-parser'),
  dataBaseConfig = require('./database/db');

// Connecting mongoDB
mongoose.Promise = global.Promise;
mongoose.connect(dataBaseConfig.db, {
  useNewUrlParser: true
}).then(() => {
    console.log('Database connected sucessfully ')
  },
  error => {
    console.log('Could not connected to database : ' + error)
  }
)

//get routes
const cityRoute = require('./routes/city.route')
const userRoute = require('./routes/user.route')
const screenRoute = require('./routes/screen.route')
const screenGroupRoute = require('./routes/screen_group.route')
const groupRoute = require('./routes/group.route')
const fieldRoute = require('./routes/field.route')
const fieldGroupRoute = require('./routes/field_group.route')




// Set up express js port
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(cors());
app.use(express.static(path.join(__dirname, '../dist/metrolink')));
app.use('/', express.static(path.join(__dirname, '../dist/metrolink')));

const routeCheck = (req, res, next) => {
    // next(createError(404));
    // console.log('Something is happening.');
    next();
  }

app.use('/api', routeCheck, cityRoute, screenRoute, userRoute, screenGroupRoute, groupRoute, fieldRoute, fieldGroupRoute)

// Create port
const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
  console.log(`Connected to port ${port}`)
})

// error handler
app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});