document.addEventListener('DOMContentLoaded', function () {
    // DOMContentLoaded event ensures that the DOM is fully loaded before executing the script
  
    const form = document.getElementById('my-form');
    const usersList = document.getElementById('users');
  
    form.addEventListener('submit', function (e) {
      e.preventDefault(); // Prevent the default form submission
  
      // Get user input values
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
  
      // Validate inputs (you can add more validation as needed)
      if (name.trim() === '' || email.trim() === '') {
        displayMessage('Please enter both name and email', 'error');
        return;
      }
  
      // Create user object
      const user = {
        name: name,
        email: email,
      };
  
      // Get existing users from local storage or initialize an empty array
      const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
  
      // Add the new user to the array
      existingUsers.push(user);
  
      // Save the updated users array to local storage
      localStorage.setItem('users', JSON.stringify(existingUsers));
  
      // Clear the form fields
      form.reset();
  
      // Display success message
      displayMessage('User added successfully', 'success');
  
      // Refresh the user list
      displayUsers();
    });
  
    function displayUsers() {
      // Clear the current user list
      usersList.innerHTML = '';
  
      // Get users from local storage
      const users = JSON.parse(localStorage.getItem('users')) || [];
  
      // Display each user in the list
      users.forEach(function (user) {
        const listItem = document.createElement('li');
        listItem.textContent = `Name: ${user.name}, Email: ${user.email}`;
        usersList.appendChild(listItem);
      });
    }
  
    function displayMessage(message, className) {
      // Create a div element for displaying messages
      const msgDiv = document.createElement('div');
      msgDiv.className = className;
      msgDiv.textContent = message;
  
      // Insert the message div before the form in the DOM
      form.parentNode.insertBefore(msgDiv, form);
  
      // Remove the message after 3 seconds (3000 milliseconds)
      setTimeout(function () {
        msgDiv.remove();
      }, 3000);
    }
  
    // Initial display of users when the page loads
    displayUsers();
  });
  