window.addEventListener( "click" , function(event) {
    console.log(elem.clientWidth);
    elem.style.left=event.pageX-elem.clientWidth/2+'px';
    elem.style.top=event.pageY-elem.clientHeight/2+'px';
});