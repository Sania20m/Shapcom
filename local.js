//task1
  // function test(e) {
  //   e.preventDefault();

  //   // Get user input values
  //   var uid = document.getElementById('name').value;
  //   var en = document.getElementById('email').value;

  //   // Store data in local storage
  //   localStorage.setItem("uid", uid);
  //   localStorage.setItem("en", en);

  //   // Retrieve data from local storage (optional)
  //   var storedUid = localStorage.getItem("uid");
  //   var storedEn = localStorage.getItem("en");

  //   // Log the retrieved data (optional)
  //   console.log("Stored Name:", storedUid);
  //   console.log("Stored Email:", storedEn);
  // }

  //task2
    function test(e) {
    e.preventDefault();
  
    // Get user input values
    var uid = document.getElementById('name').value;
    var en = document.getElementById('email').value;
  
    // Create an object with form values
    var userObject = {
      uid: uid,
      en: en
    };
    axios.post('https://crudcrud.com/api/82d61b55d98d4d4487be008586504a04/app', userObject)
    .then(function (response) {
        displayMessage('User added successfully to the cloud', 'success');
        displayUsers(); // Update the UI if necessary
    })
    .catch(function (error) {
        displayMessage('Error adding user to the cloud', 'error');
        console.error(error);
    });
    form.reset();
  

//     // Convert the object to a JSON string
//     var jsonString = JSON.stringify(userObject);
  
//     // Store the JSON string in local storage
//     localStorage.setItem("user", jsonString);
  
//     // Retrieve the JSON string from local storage (optional)
//     var storedUserString = localStorage.getItem("user");
  
//     // Convert the JSON string back to an object (optional)
//     var storedUserObject = JSON.parse(storedUserString);
  
//     // Log the retrieved object (optional)
//     console.log("Stored User Object:", storedUserObject);
// }


// //Task 3 to display data onto the screen 
//     // Display the stored name and email on the DOM screen
    var dataDisplay = document.getElementById('users');
    dataDisplay.innerHTML = `
        <p>Name: ${storedUserObject.uid}</p>
        <p>Email: ${storedUserObject.en}</p>
    `;
  }


//multiple users task
        // function test(e) {
        //     e.preventDefault();
  
        //     // Get user input values
        //     var uid = document.getElementById('name').value;
        //     var en = document.getElementById('email').value;
  
        //     // Create an object with form values
        //     var userObject = {
        //         uid: uid,
        //         en: en
        //     };

        //     // Retrieve existing users or create an empty array
        //     var existingUsers = JSON.parse(localStorage.getItem('users')) || [];

        //     // Push the new user object to the existing array
        //     existingUsers.push(userObject);
  
        //     // Convert the array of user objects to a JSON string
        //     var jsonString = JSON.stringify(existingUsers);
  
        //     // Store the JSON string in local storage
        //     localStorage.setItem("users", jsonString);
  
        //     // Display all stored names and emails on the DOM screen
        //     var dataDisplay = document.getElementById('users');
        //     dataDisplay.innerHTML = '';

        //     existingUsers.forEach(function(user) {
        //         dataDisplay.innerHTML += `
        //             <p>Name: ${user.uid}</p>
        //             <p>Email: ${user.en}</p>
        //             <hr>
        //         `;
        //     });
  
        //     // Log the updated array of users (optional)
        //     console.log("Updated Users Array:", existingUsers);
        // }



      // delete and edit task
        // function addUser(e) {
        //     e.preventDefault();
  
        //     // Get user input values
        //     var uid = document.getElementById('name').value;
        //     var en = document.getElementById('email').value;
  
        //     // Create an object with form values
        //     var userObject = {
        //         uid: uid,
        //         en: en
        //     };

        //     // Retrieve existing users or create an empty array
        //     var existingUsers = JSON.parse(localStorage.getItem('users')) || [];

        //     // Push the new user object to the existing array
        //     existingUsers.push(userObject);
  
        //     // Convert the array of user objects to a JSON string
        //     var jsonString = JSON.stringify(existingUsers);
  
        //     // Store the JSON string in local storage
        //     localStorage.setItem("users", jsonString);
  
        //     // Display all stored names and emails on the DOM screen
        //     displayUsers();
        // }

        // function displayUsers() {
        //     var dataDisplay = document.getElementById('users');
        //     dataDisplay.innerHTML = '';

        //     var existingUsers = JSON.parse(localStorage.getItem('users')) || [];

        //     existingUsers.forEach(function(user, index) {
        //         dataDisplay.innerHTML += `
        //             <div>
        //                 <p>Name: ${user.uid}</p>
        //                 <p>Email: ${user.en}</p>
        //                 <button onclick="editUser(${index})">Edit</button>
        //                 <button onclick="deleteUser(${index})">Delete</button>
        //                 <hr>
        //             </div>
        //         `;
        //     });
        // }

        // function editUser(index) {
        //     var existingUsers = JSON.parse(localStorage.getItem('users')) || [];
        //     var userToEdit = existingUsers[index];

        //     var newName = prompt('Enter new name:', userToEdit.uid);
        //     var newEmail = prompt('Enter new email:', userToEdit.en);

        //     if (newName && newEmail) {
        //         userToEdit.uid = newName;
        //         userToEdit.en = newEmail;

        //         localStorage.setItem('users', JSON.stringify(existingUsers));

        //         displayUsers();
        //     }
        // }

        // function deleteUser(index) {
        //     var existingUsers = JSON.parse(localStorage.getItem('users')) || [];
        //     existingUsers.splice(index, 1);

        //     localStorage.setItem('users', JSON.stringify(existingUsers));

        //     displayUsers();
        // }

        // displayUsers();
        