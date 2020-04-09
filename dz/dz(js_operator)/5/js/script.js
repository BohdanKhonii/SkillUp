function range(a,b){
    if(b>a){
        for(let i=a; i<=b; i++){
            if(i%2){
                console.log(i);
            }
        }
    }
}
range(-5,5);