//#######################################################
console.log(`Task 5.`);
let checkStartString=(str,word)=>!(str.indexOf(word));
let str=`https://www.google.com.ua`;
console.log(checkStartString(str,`https://`));
//#######################################################
console.log(`Task 6.`);
function getWeekday(dayNumber){
    switch (dayNumber) {
        case 1:
            return `Понеділок`;
            break;
        case 2:
            return `Вівторок`;
            break;
        case 3:
            return `Середа`;
            break;
        case 4:
            return `Четвер`;
            break;
        case 5:
            return `П'ятниця`;
            break;
        case 6:
            return `Субота`;
            break;
        case 7:
            return `Неділя`;
            break;
        default:
            return `Не існує`;
            break;
    }
}
console.log(getWeekday(2));
//#######################################################
console.log(`Task 7.`);
function getRowWithSeparator(length,separator){
    let arr=[separator];
    for(let i=1; i<=length;i++){
        arr.length=arr.push(`${i}${separator}`);
    }
    return arr.join('');    
}
console.log(getRowWithSeparator(9,'-'));
//#######################################################
console.log(`Task 8.`);
function getRandom(number,min,max){
    for (let i = 0; i < number; i++) {
        console.log(Math.floor(Math.random()*(max-min)+min));
    }   
}
getRandom(10,-100,100);
//#######################################################
console.log(`Task 9-10.`);
function pushNumber(arr,str){
    let whatPush=str.split('');
    for(let i=0;i<whatPush.length;i++){
        arr.push(whatPush[i]);
    }
    return arr;
}
function unshiftNumber(arr,str){
    let whatUnShift=str.split('');
    for (let i = whatUnShift.length-1; i >= 0; i--) {
        arr.unshift(whatUnShift[i]);
    }
    return arr;
}
let arr=['a','b','c'];
console.log(pushNumber(arr,'123'));
arr=['a','b','c'];
console.log(unshiftNumber(arr,'456'));
//#######################################################
console.log(`Task 11.`);
let getLast=(arr) => arr[arr.length-1];
arr=['js', 'css', 'jq'];
console.log(getLast(arr));
//#######################################################
console.log(`Task12-13`);
arr = [1, 2, 3, 4, 5];
let newArr=arr.slice(0,3);
console.log(newArr);
arr.splice(2,2,10,11);
console.log(arr);
//#######################################################
console.log(`Task 14.`);
function getItem(number){
    let item='';
    for(let i=0; i<number;i++){
        item+=number;
    }
    return item;
}
function getArray(length){
        arr=[],number = 1;
    for(let i=0;i<length;i++){
        arr[i]=getItem(String(number));
        number++;   
    }
    return arr;
}
console.log(getArray(9));
//#######################################################
console.log(`Task 15.`);
function fillArray(value,length){
    let arr=[];
    for(let i=0;i<length;i++){
        arr[i]=value;
    }
    return arr;
}
console.log(fillArray('x',5));
//#######################################################
console.log(`Task 16.`);
function getIndex(arr){
    let sum=0,i=0;
    while(sum<=10){
        sum+=arr[i];
        console.log(sum);
        i++;
    }
    return i;
}
arr=[1,2,3,4,5,6,7,8,9,10];
console.log(getIndex(arr));
//#######################################################
console.log(`Task 17.`);
function getRandomArr(length,min,max){
    arr=[];
    for(let i=0; i<length;i++){
        arr[i]=Math.floor(Math.random()*(max-min)+min);
    }
    return arr;
}
console.log(getRandomArr(10,1,10));
//#######################################################
console.log(`Task 18.`);
function printMultiplicationTable(){
    for(let i=1;i<=10;i++){
        for(let j=1;j<=10;j++){
            console.log(`${i}x${j}=${i*j}`);
        }
    }
}
printMultiplicationTable();
//#######################################################
console.log(`Task 19.`);
function myReverse(arr){
    let tempArr=[],j=0;
    for(let i=arr.length-1;i>=0;i-- ){
        tempArr[j]=arr[i];
        j++;
    }
    return tempArr;
}
arr=[1,2,3];
console.log(myReverse(arr));
//#######################################################
console.log(`Task 20.`)
function sumArr(arr){
    sum=0;
    for(let i = 0; i<arr.length;i++){
        for(let j=0;j<arr[i].length;j++){
            sum+=arr[i][j];
        }
    }
    return sum;
}
arr=[[1, 2, 3], [4, 5], [6]];
console.log(sumArr(arr));
//#######################################################
console.log(`Task 21.`);
function getDigitsSum(number){
    str=String(number);
    arr=str.split('');
    sum=0;
    for(let i=0;i<arr.length;i++){
        sum+=parseInt(arr[i]);
    }
    return sum;
}
console.log(getDigitsSum(12343));
//#######################################################
console.log(`Task 22.`);
let isPositive=(number)=>(number>0);
function getPositiveArr(arr){
    newArr=[],j=0;
    for(let i=0;i<arr.length;i++){
        if(isPositive(arr[i])){
            newArr[j]=arr[i];
            j++;
        }
    }
    return newArr;
}
arr=[1,-2,4,-5];
console.log(getPositiveArr(arr));
//#######################################################

//#######################################################