function myValidate(){
    var val1 = document.getElementById("val1").value;
    var val2 = document.getElementById("val2").value;
    var operation = document.getElementById("operation").value;
    var ans = document.getElementById("ans");
    switch(operation) {
        case "+":
            ans.value = parseInt(val1)+parseInt(val2);
            alert(parseInt(val1)+parseInt(val2));
            break;
        case "-":
            ans.value = parseInt(val1)+parseInt(val2);
            alert(parseInt(val1)-parseInt(val2));
            break;
        case "*":
            ans.value = parseInt(val1)+parseInt(val2);
            alert(parseInt(val1)*parseInt(val2));
            break;
        case "/":
            ans.value = parseInt(val1)+parseInt(val2);
            alert(parseInt(val1)/parseInt(val2));
            break;
        default:
            alert("InValid");
    }
}