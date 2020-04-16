function print(a){
    console.log(a);
}
function searchString(str,word){
    let temp=str.indexOf(word);
    while(temp!==-1){
        print(temp);
        temp=str.indexOf(word,temp+1);        
    }
}
let str='Lorem ipsum dolor sit amet consectetur ipsum elit. Ullam aliquam ipsum recusandae debitis dicta quia ipsum, dolores minima ipsum odio.';
searchString(str,'ipsum');