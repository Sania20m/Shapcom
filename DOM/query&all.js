// var secitem=document.querySelector('.list-group-item:nth-child(2)');
// secitem.style.backgroundColor='green';
// var thirditem=document.querySelector('.list-group-item:nth-child(3)');
// thirditem.style.display='none';

//Queryselectoralll
var li=document.querySelectorAll('li:nth-child(2)');
li.style.fontColor="green";
console.log(li);

// var odd=document.querySelectorAll('li:nth-child(odd)')
// for(var i=0;i<odd.length;i++){
//     odd[i].style.backgroundColor='green';
// }
var odd=document.querySelectorAll('#items:nth-child(odd)')
odd.forEach(function(item){
    item.style.backgroundColor='green';
});