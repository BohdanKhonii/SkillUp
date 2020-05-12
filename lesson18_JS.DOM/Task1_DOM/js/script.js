//1.Написати функцію repeatLorem(n), де n - кількість, 
//яка виводить на сторінку n-тегів <р> з текстом lorem
function repeatLorem(n){
    let elem;   
    for(let i=0;i<n;i++){
        elem=document.createElement("p");
        elem.innerHTML="lorem";
        document.body.appendChild(elem);
    }
}
repeatLorem(2);
//2.Вивести урл поточної сторінки і дані про 
//браузер через (Browser Object Model, BOM) п.с. знайти в неті)
console.log(location.href);
//3.Дано список.
//-вивести кількість всіх тегів <li> які є в списку 
//-задати синій колір для всіх тегів <li> які є в списку 
let elemLi=document.querySelectorAll("li");
console.log(elemLi.length);
for(let i = 0; i < elemLi.length; i++){
    elemLi[i].style.color="blue";
}