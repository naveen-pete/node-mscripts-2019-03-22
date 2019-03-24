console.log('client.js script running now');

const usernameElement = document.getElementById('username');
const messageElement = document.getElementById('message');
const todosElement = document.getElementById('todos');

const formElement = document.querySelector('form');
formElement.addEventListener('submit', (e) => {
  e.preventDefault();

  const username = usernameElement.value;

  messageElement.innerHTML = '';
  todosElement.innerHTML = '';

  fetch(`http://localhost:3000/todos?username=${username}`)
    .then(response => response.json())
    .then((data) => {
      messageElement.innerHTML = `User Name: ${data.user.name}`;
      const items = data.todos.map((todo) => {
        return `<li>${todo.title}</li>`
      });
      todosElement.innerHTML = items.join(' ');
    })
    .catch((error) => {
      messageElement.innterHTML = `Error: ${error.error}`;
    });
});
