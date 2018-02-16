const express = require('express');
const router = express.Router();

const pool = require('../modules/pool');
const bodyParser = require('body-parser');

router.get('/', function(request, response){
    const sqlText = 'SELECT task_name, due_date, task_completed FROM tasks ORDER BY due_date';
    pool.query(sqlText)
      // query was successful
      .then(function(result) {
        console.log('Get result:', result);
        response.send(result.rows);
      })
      // query failed
      .catch(function(error){
        console.log('Error on Get:', error);
        response.sendStatus(500);
      })
  }) // end GET all from DBMS

  router.post('/', (request, response) => {
    const task = request.body;
    console.log('Add task:', task);
  
    const sqlText = `INSERT INTO tasks 
        (task_name, due_date, task_completed)
        VALUES ($1, $2, $3)`;
    pool.query(sqlText, 
        [task.task_name, task.due_date, task.task_completed])
      .then((result) => {
        console.log('Added task:', result);
        response.send(result.rows);
      })
      .catch((error) => {
        console.log('Error adding task:', error);
        response.sendStatus(500);
      })
  }) // end post task


module.exports = router;