document.addEventListener("keydown", logVal);               //Firesoff when user presses a key

function logVal(e) {
    if(e.key == "Enter"){
        e.preventDefault();
        solve();
    }else if(e.key == "Escape") {
        clr();
    }
    else if(e.key == "Backspace"){
        document.getElementById("display").value = document.getElementById("display").value.slice(0,-1);
    }
    // else if(!isFinite(e.key)){
    //     e.preventDefault();
    // }
    else if(!/^[0-9]$/i.test(e.key) && !/[-!$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/.test(e.key)){
        e.preventDefault();
    }
    else{
        dis(e.key);
    }
}
//function that display value 
function dis(val){ 
    document.getElementById("display").value+=val 
}		
//function that evaluates the digit and return result 
function solve(){
    document.getElementById("display").value = eval(document.getElementById("display").value);
}	
//function that clear the display 
function clr(){ 
    document.getElementById("display").value = "" 
}