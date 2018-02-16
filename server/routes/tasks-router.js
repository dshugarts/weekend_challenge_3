const express = require('express');
const router = express.Router();

const pool = require('../modules/pool');
const bodyParser = require('body-parser');

router.get('/', function(request, response){
    const sqlText = 'SELECT * FROM tasks ORDER BY due_date';
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

  router.delete('/:id', (request, response) => {
    const sqlText = `DELETE FROM tasks WHERE id=$1`;
    const id =  request.params.id;
    pool.query(sqlText, [id]).then((result) => {
        console.log('Deleted Task', id);
        response.sendStatus(200);
    }) // end success
    .catch((error) => {
        console.log('error in router.delete', error);
        response.sendStatus(500);
    })
  }) // end delete

  router.put('/:id', (request, response) => {
    const id = request.params.id;
    const sqlText = `UPDATE tasks SET task_completed=$1 WHERE id=$2`;
    pool.query(sqlText, [true, id])
      .then((result) => {
        console.log(`Updated task ${id} with status true`);
        response.sendStatus(200);
      })
      .catch( (error) => {
        console.log('Error on update task');
        response.sendStatus(500);
      })
  }) // end router.PUT for /:id

module.exports = router;