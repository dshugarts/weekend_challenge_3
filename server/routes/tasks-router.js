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


module.exports = router;