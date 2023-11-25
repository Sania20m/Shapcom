 // Function to add a new item
 function addItem() {
    const itemName = document.getElementById('item-name').value;
    const itemDescription = document.getElementById('item-description').value;
    if (itemName) {
      const newItem = document.createElement('li');
      newItem.className = 'list-group-item';
      newItem.innerHTML = `${itemName} <br> Description: ${itemDescription} 
        <button class="btn btn-danger delete-btn">Delete</button> 
        <button class="btn btn-primary edit-btn">Edit</button>`;
      const itemsList = document.getElementById('items');
      itemsList.appendChild(newItem);
      document.getElementById('item-name').value = '';
      document.getElementById('item-description').value = '';
    }
  }

  // Event listener to add a new item
  document.getElementById('add-item').addEventListener('click', addItem);

  // Event delegation for delete button
  document.getElementById('items').addEventListener('click', function(e) {
    if (e.target && e.target.className == 'btn btn-danger delete-btn') {
      e.target.parentElement.remove();
    }
  });

  //Search functionality
  document.getElementById('search-box').addEventListener('input', function() {
    const searchString = this.value.toLowerCase();
    const itemsList = document.getElementById('items');
    const items = itemsList.getElementsByClassName('list-group-item');
    for (const item of items) {
      const itemText = item.textContent.toLowerCase();
      if (itemText.includes(searchString)) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    }
  });