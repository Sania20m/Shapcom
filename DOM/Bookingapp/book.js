document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('my-form');
    const usersList = document.getElementById('users');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;

        if (name.trim() === '' || email.trim() === '') {
            displayMessage('Please enter both name and email', 'error');
            return;
        }

        const user = {
            name: name,
            email: email,
        };

        const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
        existingUsers.push(user);
        localStorage.setItem('users', JSON.stringify(existingUsers));

        form.reset();
        displayMessage('User added successfully', 'success');
        displayUsers();
    });

    function displayUsers() {
        usersList.innerHTML = '';

        const users = JSON.parse(localStorage.getItem('users')) || [];

        users.forEach(function (user, index) {
            const listItem = document.createElement('li');
            listItem.textContent = `Name: ${user.name}, Email: ${user.email}`;

            // Create a delete button
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.addEventListener('click', function () {
                // Call a function to remove the user
                removeUser(index);
            });

            listItem.appendChild(deleteButton);
            usersList.appendChild(listItem);
        });
    }

    function removeUser(index) {
        const users = JSON.parse(localStorage.getItem('users')) || [];
        users.splice(index, 1); // Remove the user at the specified index
        localStorage.setItem('users', JSON.stringify(users));
        displayUsers(); // Refresh the user list
    }

    function displayMessage(message, className) {
        const msgDiv = document.createElement('div');
        msgDiv.className = className;
        msgDiv.textContent = message;

        form.parentNode.insertBefore(msgDiv, form);

        setTimeout(function () {
            msgDiv.remove();
        }, 3000);
    }

    displayUsers();
});
