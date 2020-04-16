function print(a){
    alert(a);
}
function compareNumeric(a,b){
    if(a.length>b.length) return 1;
    if(a.length==b.length) return 0;
    if (a.length<b.length) return -1;
}
function filterString(str){
    let arr=str.split(' ');
    arr.sort(compareNumeric);
    return arr.join(' ');
}
let str="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore itaque illum accusamus, asperiores numquam assumenda quisquam perferendis veritatis magni nam.";
print(filterString(str));

