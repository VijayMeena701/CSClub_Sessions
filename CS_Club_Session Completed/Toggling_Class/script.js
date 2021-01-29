// function toggle() {
//     var sec = document.getElementById("sec");
//     var nav = document.getElementById("nav");
//     sec.classList.toggle("active");
//     nav.classList.toggle("active");
//   }
  
function toggle() {
    var sec = document.getElementById("sec");
    var nav = document.getElementById("nav");
    if(sec.className === "banner"){
        sec.className += " active"
    }
    else {
        sec.className = "banner"
    }
    if(!nav.className){
        nav.className += " active"
    }
    else {
        nav.className = ""
    }
}