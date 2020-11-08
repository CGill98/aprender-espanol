// Require express and create an instance of it
var express = require('express');
var app = express();
var cors = require('cors')
const db = require('./db/db.js')

app.use(cors())

// on the request to root (localhost:3000/)
app.get('/', function (req, res) {
    res.send('<b>My</b> worst express http server');
});

// On localhost:3000/welcome
app.get('/courses', function (req, res) {
    //res.set('Access-Control-Allow-Origin', '*')

    db.connection.query('SELECT * FROM COURSES', function (error, results, fields) {
        if (error) throw error;
        console.log('get /courses called')
        console.log(results);

       res.json(results)
      });
});

app.get('/lessons/:courseID', function (req, res) {
    const courseID = req.params.courseID;
    
    db.connection.query(`SELECT * FROM LESSONS WHERE courseID = ${courseID}`, function (error, results, fields) {
        if (error) throw error;
        console.log('get /lessons/:courseID called')
        console.log(results);

       res.json(results)
      });
});

//get a lesson from lessons with an id
app.get('/lesson/:lessonID', function (req, res) {
    const lessonID = req.params.lessonID;
    
    db.connection.query(`SELECT * FROM LESSONS WHERE ID = ${lessonID}`, function (error, results, fields) {
        if (error) throw error;
        console.log('get /lessons/:lessonID called')
        console.log(results);

       res.json(results)
      });
});

app.get('/lessonParts/:lessonID', function (req, res) {
    const lessonID = req.params.lessonID;
    
    db.connection.query(`SELECT * FROM LESSON_PARTS WHERE lessonID = ${lessonID}`, function (error, results, fields) {
        if (error) throw error;
        console.log('get /lessons/:courseID called')
        console.log(results);

       res.json(results)
      });
});

app.get('/examples/:lp_id', function (req, res) {
    const lp_id = req.params.lp_id;
    
    db.connection.query(`SELECT * FROM EXAMPLES WHERE lp_ID = ${lp_id}`, function (error, results, fields) {
        if (error) throw error;
        console.log('get /examples/:lp_id called')
        console.log(results);

       res.json(results)
      });
});

app.get('/keyPoints/:lp_id', function (req, res) {
    const lp_id = req.params.lp_id;
    
    db.connection.query(`SELECT * FROM KEY_POINTS WHERE lp_ID = ${lp_id}`, function (error, results, fields) {
        if (error) throw error;
        console.log('get /keyPoints/:lp_id called')
        console.log(results);

       res.json(results)
      });
});


// Change the 404 message modifing the middleware
app.use(function(req, res, next) {
    res.status(404).send("Sorry, that route doesn't exist. Have a nice day :)");
});

// start the server in the port 3000 !
app.listen(3050, function () {
    console.log('Example app listening on port 3000.');
});
