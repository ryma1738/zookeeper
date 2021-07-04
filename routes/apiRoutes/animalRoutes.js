const { filterByQuery, findById, createNewAnimal, validateAnimal } = require('../../lib/animals');
const { animals } = require('../../data/animals');
const router = require('express').Router();

router.get('/animals', (req, res) => {
    let results = animals;
    if (req.query) {
      results = filterByQuery(req.query, results); 
    }
    if (result) {
        res.json(results);
    } else {
        res.send(404);
    }
    
});

router.get('/animals/:id', (req, res) => {
    const result = findById(req.params.id, animals);
    res.json(result);
})

router.post('/animals', (req, res) => {
    // req.body is where our incoming content will be
    req.body.id = animals.length.toString();
    // if any data in req.body is incorrect, send 400 error back
  if (!validateAnimal(req.body)) {
    res.status(400).send('The animal is not properly formatted.');
  } else {
    const animal = createNewAnimal(req.body, animals);
    res.json(animal);
  }

    res.json(animal);
});

module.exports = router;