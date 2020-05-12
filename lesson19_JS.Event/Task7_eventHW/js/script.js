window.addEventListener('scroll', function(event) {
    if(this.scrollY>document.body.clientHeight/2){
        modal.style.display="block";
    }
    console.log(this.scrollY);
});
console.log(document.body.clientHeight/2);