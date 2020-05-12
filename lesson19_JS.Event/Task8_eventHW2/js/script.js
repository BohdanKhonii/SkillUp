let add=document.querySelector(".btn-light");
let remove=document.querySelector(".btn-outline-secondary");
let blockInputs=document.querySelector(".block-inputs");
add.addEventListener("click", function(){
    let inputGroup=document.createElement("div");        
    inputGroup.className="input-group mb-3";
    blockInputs.appendChild(inputGroup);
    let formControl=document.createElement("input");
    formControl.setAttribute("type","text");
    formControl.setAttribute("placeholder","Info");
    formControl.className="form-control";
    inputGroup.appendChild(formControl);
    let btnContainer=document.createElement("div");
    btnContainer.className="input-group-append";
    inputGroup.appendChild(btnContainer);
    let btn=document.createElement("button");
    btn.className="btn btn-outline-secondary";
    btn.innerHTML="Remove";
    btnContainer.appendChild(btn);
});
// remove.addEventListener("click", function(){
//     
// })