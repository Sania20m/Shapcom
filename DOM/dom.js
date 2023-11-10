var header=document.getElementById('main-header');
header.style.borderBottom='solid 3px #000'
console.log(header);
// var addd=document.getElementsByClassName('title1');
// addd.style.borderBottom='solid 5px #000'
// console.log(addd);
// Get elements by class name
var elements = document.getElementsByClassName('title1');

// Check if elements with the class 'title1' were found
if (elements.length > 0) {
    // Access the first element with the class 'title1'
    var titleElement = elements[0];

    // Add CSS styles to modify the element
    titleElement.style.color = 'green'; // Set text color to green
titleElement.style.fontWeight='bold';
    // Log the modified element to the console
    console.log(titleElement);
} else {
    console.log('No elements with the class "title1" found.');
}
