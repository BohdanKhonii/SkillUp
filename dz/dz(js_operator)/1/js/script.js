let a = true;
while(a){
    let b = prompt("Введіть число від 25 до 99");
    (b>=25&&b<=99||b==null)?(a=false, alert("Ваше число:"+b)):alert("Спробуйте ще раз");  
}