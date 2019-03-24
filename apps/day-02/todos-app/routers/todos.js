const express = require('express');
const api = require('../src/api');

const router = express.Router();

router.get('/', (req, res) => {
  const username = req.query.username;

  api.getUser(username, (error, user) => {
    if (error) {
      return res.status(404).send({
        error: 'User not found!'
      });
    }

    api.getTodos(user.id, (error, todos) => {
      if (error) {
        return res.status(404).send({
          error: 'Todos not found!'
        });
      }

      const data = {
        user,
        todos
      };

      res.json(data);
    })
  });
});

router.get('/:id', (req, res) => {
  console.log(req.params);
  res.send();
})

router.post('/', (req, res) => {
  res.send('Add a new todo');
})

router.patch('/:id', (req, res) => {
  res.send('Update a todo');
})

router.delete('/:id', (req, res) => {
  res.send('Delete a todo');
})

module.exports = router;
