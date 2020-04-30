// btn.addEventListener( "click" , function(event) {
//     console.log(event.target);
// });
// btn.addEventListener( "click" , function(event) {
//     event.preventDefault();
//     console.log(event);
//     });
// window.addEventListener('scroll', function(e) {
//     console.log(this.scrollY);
//     });
function XO(str) {
    let x = str.match(/x/gi);
    let o = str.match(/o/gi);
    return (x && x.length) === (o && o.length);
}
let str='xxOo';
console.log(['x','x']===['o','o']);
console.log((['x','x']&&2)===(['o','o']&&2));
console.log(XO(str));