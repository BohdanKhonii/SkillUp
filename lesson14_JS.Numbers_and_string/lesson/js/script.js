// function evenNumber(max,min){
//     let b=Math.floor(Math.random()*(max-min+1))+min;
//     if(b%2){
//         return b+"- Число непарне";
//     }
//     else{
//         return b+"- Число парне";
//     }
// }
// console.log(evenNumber(100,0));
// let a=new Date();
// alert (a);
// function doUpper(str){
//     return str[0].toUpperCase()+str.substring(1);
// }
// let str="lorem ipsum is simply dummy";
// alert(doUpper(str));
function checkLenght(str1,str2){
    return (str1 > str2)?str1:str2;
}
let str1="Lorem ipsum dolor sit amet.";
let str2="Lorem, ipsum dolor.";
alert(checkLenght(str1,str2));