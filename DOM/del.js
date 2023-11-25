//this code is correct instead of demo.js and demo.html whci was given by huma i have corrected it now i can use del.js & del.html

var form=document.getElementById('addform');
var itemList=document.getElementById('items');
var filter = document.getElementById('filter');

// // Delete event
itemList.addEventListener('click', removeItem);
//form submit event
form.addEventListener('submit', addItem);
// Filter event
filter.addEventListener('keyup', filterItems)

//add item
function addItem(e){
    e.preventDefault();
    // console.log(1);
    //get input value
    var newItem=document.getElementById('item').value;

    //get ip
    var itemdescription=document.getElementById('item-description').value;

    //create new li element
    var li=document.createElement('li');
    // Add class
    li.className = 'list-group-item';
    // Add text node with input value
    li.appendChild(document.createTextNode(newItem));
    //added description:
    li.innerHTML = `${newItem} <br> Description: ${itemdescription} `;
  //appended to li
  itemList.appendChild(li);


  // Create del button element
  var deleteBtn = document.createElement('button');
  // Add classes to del button
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
 // Append text node
 deleteBtn.appendChild(document.createTextNode('X'));
  // Append button to li
  li.appendChild(deleteBtn);

  //edit button 
  var editBtn = document.createElement('button');
  // Add classes to edit button
  editBtn.className = 'btn btn-primary btn-sm float-right edit';
  // Append text node
  editBtn.appendChild(document.createTextNode('Edit'));
  editBtn.style.backgroundColor='#ffc107'
  // Append button to li
  li.appendChild(editBtn);


  

}

// Remove item
function removeItem(e){
    if(e.target.classList.contains('delete')){
      if(confirm('Are You Sure?')){
        var li = e.target.parentElement;
        itemList.removeChild(li)
      }}}

// Filter Items
function filterItems(e){
    // convert text to lowercase
    var text = e.target.value.toLowerCase();
    // Get lis
    var items = itemList.getElementsByTagName('li');
    // Convert to an array
    Array.from(items).forEach(function(item){
      var itemName = item.firstChild.textContent;
      if(itemName.toLowerCase().indexOf(text) != -1){
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  }