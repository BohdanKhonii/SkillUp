let elem=document.getElementsByTagName("td");
table.addEventListener('mouseover', function(elem){
    let elemTarget=elem.target;
    elemTarget.style.background="red";
});
table.addEventListener('mouseout', function(elem){
    let elemTarget=elem.target;
    elemTarget.style.background="white";
});