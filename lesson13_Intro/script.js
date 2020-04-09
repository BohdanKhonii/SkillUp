// let a=prompt("chislo:");

// if (a==null){
//     console.log("Cancel was pressed");
// }
// else{
//     console.log(a);
// }
// (a==null)?console.log("Cancel was pressed"):console.log(a);
// let a=2+2;
// switch(a){
//     case 3:
//         alert("мало");
//         break;
//     case 4:
//         alert("в точку");
//         break;
//     case 5:
//         alert("багато");
//         break;    
//      default:
//      alert ('Я таких значень не знаю')
// }
// let b=prompt("chislo");
// switch(b){
//     case '1':
//         console.log('a')
//         break
//     case '2':
//         console.log('b')
//         break
//     case '3':
//         console.log('c')
//         break
//     default:
//         console.log('z')
// }
// let n=1;
// for(let i=1; i<=9; i++){
//     console.log(i**2);
// }
// let i=1;
// while(i<10){
//     console.log(i**2);
//     i++;
// }
// let weight=prompt("input weight:");
// Check_weight(weight);
// function Check_weight(weight){
//     if(weight>100){
//         console.log('weight>100')
//     }
//     else if(weight<200){
//         console.log('weight<200')
//     }

// }
let check =function(a,b){
    if (a>b){
        return a;
    }
    else if(a<b){
        return b;
    }
    else{
        return false;
    }
    
}
let a=prompt("Введіть перше число:");
let b=prompt("Введіть друге число:");
alert(check(a,b));
console.log(check(a,b));