//using classname
// var items=document.getElementsByClassName('list-group-item');
// items[2].style.backgroundColor='green';
// for(var i=0;i<items.length;i++){
//     items[i].style.fontWeight='bold';
// }

//using tagname
var items=document.getElementsByTagName('li');
items[1].style.backgroundColor='grey';
for(var i=0;i<items.length;i++){
    items[i].style.fontFamily='cursive';
    items[i].style.color='green'
}