// document.addEventListener('DOMContentLoaded', function () {
//     const form = document.getElementById('my-form');
//     const usersList = document.getElementById('users');
//     let editIndex = -1; // Variable to track the index being edited

//     form.addEventListener('submit', function (e) {
//         e.preventDefault();

//         const name = document.getElementById('name').value;
//         const email = document.getElementById('email').value;

//         if (name.trim() === '' || email.trim() === '') {
//             displayMessage('Please enter both name and email', 'error');
//             return;
//         }

//         const user = {
//             name: name,
//             email: email,
//         };

//         const existingUsers = JSON.parse(localStorage.getItem('users')) || [];

//         if (editIndex !== -1) {
//             // If an edit is in progress, replace the user at the editIndex
//             existingUsers[editIndex] = user;
//             editIndex = -1; // Reset editIndex after editing
//         } else {
//             existingUsers.push(user);
//         }

//         localStorage.setItem('users', JSON.stringify(existingUsers));

//         form.reset();
//         displayMessage('User added/edited successfully', 'success');
//         displayUsers();
//     });

//     function displayUsers() {
//         usersList.innerHTML = '';

//         const users = JSON.parse(localStorage.getItem('users')) || [];

//         users.forEach(function (user, index) {
//             const listItem = document.createElement('li');
//             listItem.textContent = `Name: ${user.name}, Email: ${user.email}`;

//             const editButton = document.createElement('button');
//             editButton.textContent = 'Edit';
//             editButton.addEventListener('click', function () {
//                 // Set the editIndex when the Edit button is clicked
//                 editIndex = index;
//                 // Populate the form with the user's data for editing
//                 document.getElementById('name').value = user.name;
//                 document.getElementById('email').value = user.email;
//             });

//             const deleteButton = document.createElement('button');
//             deleteButton.textContent = 'Delete';
//             deleteButton.addEventListener('click', function () {
//                 removeUser(index);
//             });

//             listItem.appendChild(editButton);
//             listItem.appendChild(deleteButton);
//             usersList.appendChild(listItem);
//         });
//     }

//     function removeUser(index) {
//         const users = JSON.parse(localStorage.getItem('users')) || [];
//         users.splice(index, 1);
//         localStorage.setItem('users', JSON.stringify(users));
//         displayUsers();
//     }

//     function displayMessage(message, className) {
//         const msgDiv = document.createElement('div');
//         msgDiv.className = className;
//         msgDiv.textContent = message;

//         form.parentNode.insertBefore(msgDiv, form);

//         setTimeout(function () {
//             msgDiv.remove();
//         }, 3000);
//     }

//     displayUsers();
// });


// wrong
function test (e){
    e.preventDefault();
var uid=document.getElementById('name').value;
var en=document.getElementById('email').value;

 var Uid =  localStorage.setItem("uid",uid);
 var En=  localStorage.setItem("en",en);
var Uid= localStorage.getItem("uid", uid);
 var En=localStorage.getItem("en", en);
//  console.log(uid,en);
}