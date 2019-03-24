const express = require('express');
const path = require('path');
const todosRouter = require('./routers/todos');

const app = express();

const publicPath = path.join(__dirname, 'public');

app.set('view engine', 'hbs');

app.use(express.static(publicPath));
app.use('/todos', todosRouter);

app.get('', (req, res) => {
  res.render('index', {
    title: 'Todos Home updated'
  });
});

app.get('/about', (req, res) => {
  res.send('This is Naveen');
});

app.get('/help', (req, res) => {
  res.render('help', {
    title: 'Todos Help'
  });
});

app.listen(3000, () => {
  console.log('Your app is started and available on port 3000');
});


