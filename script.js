document.addEventListener('DOMContentLoaded', function() {
    var chatForm = document.getElementById('chat-form');
    var chatInput = document.getElementById('chat-input');
    var chatBox = document.getElementById('chat-box');
    var onlineUsersList = document.getElementById('online-users-list');

    // Simulated online users
    var onlineUsers = ['Siyabonga', 'Samuel', 'Thandolwethu', 'Xabiso'];

    // Display online users
    function displayOnlineUsers() {
        onlineUsersList.innerHTML = '';
        onlineUsers.forEach(function(user) {
            var userItem = document.createElement('li');
            userItem.textContent = user;
            onlineUsersList.appendChild(userItem);
        });
    }

    displayOnlineUsers();

    chatForm.addEventListener('submit', function(event) {
        event.preventDefault();
        var message = chatInput.value.trim();
        if (message) {
            addMessage('me', message);
            chatInput.value = '';
            // Simulate a response from another user
            setTimeout(() => addMessage('them', 'How are you guys doing?'), 1000);
        }
    });

    function addMessage(sender, message) {
        var messageDiv = document.createElement('div');
        messageDiv.className = 'chat-message ' + sender;
        messageDiv.textContent = message;
        chatBox.appendChild(messageDiv);
        chatBox.scrollTop = chatBox.scrollHeight;
    }
});
