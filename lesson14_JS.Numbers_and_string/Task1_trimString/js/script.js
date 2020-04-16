function trimString(str,maxLength){
    return (str.length>=maxLength)?str.slice(0,maxLength)+'...':str;
}
let str='lorem';
let maxLength=3;
alert(trimString(str,maxLength));