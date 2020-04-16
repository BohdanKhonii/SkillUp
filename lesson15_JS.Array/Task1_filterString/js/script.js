function printArr(arr){
    alert(arr);
}
function randomNumber(number){
    let arr=[];
    arr.length=number;
    for(let i=0; i<arr.length;i++){
        arr[i]=Math.round(Math.random()*201-100);
    }
    return arr; 
}
let number=10;
let arr=randomNumber(number);
printArr(arr);
let filteredArr=arr.filter(item => item>10);
printArr(filteredArr);

