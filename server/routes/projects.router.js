const express = require('express');
const projectList = [];

const router = express.Router();

router.get('/', (req, res) => {
  res.send(projectList);
});

router.post('/', (req, res) => {
    projectList.push(req.body.newProject);
  res.sendStatus(200);
});

module.exports = router;
