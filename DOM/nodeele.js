var headerTitle = document.getElementById("header-title");
headerTitle.parentElement.insertBefore(document.createTextNode("Hello, World "), headerTitle);

// Add "Hello, World" before "Item 1"
var item1 = document.querySelector("#items li");
item1.parentElement.insertBefore(document.createTextNode("Hello, World "), item1);
