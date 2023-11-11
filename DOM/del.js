var form=document.getElementById('addform');
var itemList=document.getElementById('items');
// Delete event
itemList.addEventListener('click', removeItem);
//form submit event
form.addEventListener('submit', addItem);

//add item
function addItem(e){
    e.preventDefault();
    // console.log(1);

    //get input value
    var newItem=document.getElementById('item').value;

    //create new li element
    var li=document.createElement('li');
    // Add class
  li.className = 'list-group-item';
  // Add text node with input value
  li.appendChild(document.createTextNode(newItem));
  itemList.appendChild(li);
  // Create del button element
  var deleteBtn = document.createElement('button');
  
  // Add classes to del button
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
 // Append text node
 deleteBtn.appendChild(document.createTextNode('X'));
  // Append button to li
  li.appendChild(deleteBtn);
  

}

// Remove item
function removeItem(e){
    if(e.target.classList.contains('delete')){
      if(confirm('Are You Sure?')){
        var li = e.target.parentElement;
        itemList.removeChild(li)
      }}}