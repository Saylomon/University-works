document.addEventListener('DOMContentLoaded', () => {
  const messagesDiv = document.getElementById('messages');
  const messageForm = document.getElementById('messageForm');
  const messageInput = document.getElementById('messageInput');

  // Подключаемся к серверу через WebSocket
  const socket = io();

  // Получаем сообщения от сервера
  socket.on('message', (message) => {
    appendMessage(message);
  });

  // Обработка отправки формы для отправки сообщений
  messageForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const message = messageInput.value.trim();
    if (message) {
      // Send the message to the server using WebSocket
      socket.emit('message', message);
      messageInput.value = '';
    }
  });

  // Добавляем сообщения в окно чата
  function appendMessage(message) {
    const messageElement = document.createElement('div');
    messageElement.innerText = message;
    messagesDiv.appendChild(messageElement);
  }
});
