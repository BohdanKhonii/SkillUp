function print(a){
    console.log(a);
}
function diffDate(date1,date2){
    let date =date2-date1;
    date/=86400000;
    return `Days:${Math.floor(date)} hours:${Math.floor(date*24%24)}`;

}
let date1=new Date(2020,0,1,3,34,43,3);
let date2=new Date(2020,1,10,10,7,5,5);

print(diffDate(date1,date2));