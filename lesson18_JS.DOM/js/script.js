// let doc=document.getElementById("id1").innerHTML;
// console.log(doc);

// document.querySelector("div").style.color='red';
// var newLi = document.createElement('li');
// newLi.innerHTML = 'Привет, мир!';
// list.appendChild(newLi);
// var newLi = document.createElement('li');
// newLi.innerHTML = 'Привет, мир!';
// list.insertBefore(newLi, list.children[1]);
var computedStyle = getComputedStyle(document.body);
alert( computedStyle.marginTop ); 