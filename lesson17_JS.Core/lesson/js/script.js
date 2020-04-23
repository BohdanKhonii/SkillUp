//###########################################################
// let a=prompt("Input Number:");
// let checkNumber=(a)=>(a>0&&a<5)?"Вірно":"Невірно";
// alert(checkNumber(a));
//###########################################################
// let num=prompt("Input Season Number:");
// function getSeason(num){
//     let result;
//     switch (num) {
//         case '1':
//             result="Winter";
//             break;
//         case '2':
//             result="Spring";
//             break;
//         case '3':
//             result="Summer";
//             break;
//         case '4':
//             result="Autumn";
//             break;
//         default:
//             break;
//     }
//     return result;
// }
// alert(getSeason(num));
//###########################################################
// function Cutter(str){
//     this.str=str;
//     this.cutWithSubstr=function(start,length){
//         return(this.str.substr(start,length));
//     }
//     this.cutWithSubstring=function(start,length){
//         return(this.str.substring(start,start+length));
//     }
//     this.cutWithSlice=function(start,length){
//     return(this.str.slice(start,start+length));
//     }
// };
// let str=new Cutter("aaa bbb ccc");
// alert(str.cutWhithSubstr(4,3));
// alert(str.cutWhithSubstring(4,3));
// alert(str.cutWhithSlice(4,3));
//###########################################################
function Seeker(str){
    this.findString=(word)=> str.indexOf(word);
    this.getLength=()=>str.length;
    this.replaceWord=(oldWord,newWord)=> str.replace(oldWord,newWord);
}
let str=new Seeker('I learn javascript!');
alert(str.findString("learn"));
alert(str.getLength());
alert(str.replaceWord("javascript","html"));
//###########################################################
// 14.map
//###########################################################

//###########################################################