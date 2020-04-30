window.addEventListener('scroll', function(event) {
    if(isInteger(this.scrollY/200)){
        id1.classList.toggle("header");
    }
});
function isInteger(num) {
    return (num ^ 0) === num;
}