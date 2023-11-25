// var headerTitle = document.getElementById("header-title");
// headerTitle.parentElement.insertBefore(document.createTextNode("Hello, World "), headerTitle);

// // Add "Hello, World" before "Item 1"
// var item1 = document.querySelector("#items li");
// item1.parentElement.insertBefore(document.createTextNode("Hello, World "), item1);

var header=document.querySelector('header .container')
var h1=document.querySelector('header h1')
var newdiv=document.querySelector('div')
var text=document.createTextNode('Hellooo')
newdiv.appendChild(text)
header.insertBefore('newdiv, h1')
