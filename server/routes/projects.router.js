const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// Setup a GET route to get all the projects from the database
router.get('/', (req, res) => {
    // When you fetch all things in these GET routes, strongly encourage ORDER BY
    // so that things always come back in a consistent order 
    const sqlText = `SELECT * FROM projects ORDER BY name;`;
    pool.query(sqlText)
        .then((result) => {
            console.log(`Got stuff back from the database`, result);
            res.send(result.rows);
        })
        .catch((error) => {
            console.log(`Error making database query ${sqlText}`, error);
            res.sendStatus(500); // Good server always responds
        })
})




// Setup a POST route to add a new project to the database
router.post('/', (req, res) => {
    const project = req.body;
    const sqlText = `INSERT INTO projects (name, description, website, github, date_completed, tag_id) VALUES 
  ($1, $2, $3, $4, $5, $6)`;
    pool.query(sqlText, [project.name, project.description, project.website, project.github, project.date_completed, project.tag_id])
        .then((result) => {
            console.log(`Added to the database`, project);
            res.sendStatus(201);
        })
        .catch((error) => {
            console.log(`Error making database query ${sqlText}`, error);
            res.sendStatus(500); // Good server always responds
        })
})

// Setup DELETE to remove an project
router.delete('/:id', (req, res) => {
    let reqId = req.params.id;
    console.log('Delete request for id', reqId);
    let sqlText = 'DELETE FROM projects WHERE id=$1;';
    pool.query(sqlText, [reqId])
        .then((result) => {
            res.sendStatus(200);
        })
        .catch((error) => {
            console.log(`Error making database query ${sqlText}`, error);
            res.sendStatus(500); 
        })
})

module.exports = router;