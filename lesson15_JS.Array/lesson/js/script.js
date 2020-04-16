// let arr=[];
// while(true){
//     let a=prompt("Input Number:");
//     if(a==null){
//         break;
//     }
//     else{
//         arr.push(a);
//     }
// }
// for(let i=0;i<=arr.length;i++){
//     console.log(arr[i]);
// }
//######################
let matrix=[
    [1,2,3],
    [4,5,6],
    [7,8,9]
];
let sum=0;
matrix.forEach(item => sum+=item);
console.log(sum);
//######################
// function splitString(arr){
//     return arr.split(' ');
// }
// let arr='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste, voluptas!';
// let arr2=splitString(arr);
// for(let i=0;i<arr2.length;i++){
//     if(arr2[i].length>5){
//         console.log(arr2[i]);
//     }
// }
//######################
// let arr=[1,2,3];
// arr.reverse();
// alert(arr);
//######################
// let arr=[1,2,3,4,5,6,7,8,9];
// let a=prompt('Input Number:');
// a=Number(a);
// if(arr.indexOf(a)==-1){
//     alert("-");
// }
// else{
//     alert("+");
// }
//######################
// let arr = ['html', 'css', 'javascript'];
// arr.forEach(function(item, i, arr) {
// alert( i + ": " + item + " (массив:" + arr + ")" );
// });
//######################
// let arr = [1, -1, 2, -2, 3];
// let positiveArr = arr.filter((number) => number > 0); 
// alert( positiveArr);
//######################
// function mostStr(st){
//     let arrSt=st.split(' ');
//     let index;
//     let max=-99;
//     arrSt.forEach(function(item, i, arr){
//         if(item.length>max){
//             max=item.length;
//             index=i;
//         }
//     });

//     alert(arrSt[index]);
// }


// let str='Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, maiores?';
// mostStr(str);
//######################
