/*-- JavaScript --
*/
var listener = function (ev) {
    var id = ev.target.getAttribute("id");

	if (id == null || id == "calc") {
        return;
    }
	
    if (id == "clear") {
        document.getElementById("result").innerText = 0;
        return;
    }

    if (id == "equal") {
        var tmp = eval(document.getElementById("result").innerText);
        tmp *= 1000;
        tmp = Math.floor(tmp);
        document.getElementById("result").innerText = tmp / 1000;
        return;
    }
    
    var value = convert(id);

    update(value);
};

document.body.addEventListener('click', listener, false);

function convert (id) {
    var value;
    switch(id){
    case "zero":
        value = 0;
        break;
    case "one":
        value =  1;
        break;
    case "two":
        value =  2;
        break;
    case "three":
        value =  3;
        break;
    case "four":
        value =  4;
        break;
    case "five":
        value =  5;
        break;
    case "six":
        value =  6;
        break;
    case "seven":
        value =  7;
        break;
    case "eight":
        value =  8;
        break;
    case "nine":
        value =  9;
        break;
    case "plus":
        value = "+";
        break;
    case "minus":
        value = "-";
        break;
    case "multiply":
        value = "*";
        break;
    case "divide":
        value = "/";
        break;
    default:
        break;
    }
    
    return value;
}

function update(value){
    var text  = document.getElementById("result").innerText;
    var lastStr = text.slice(-1);
    
    if (text == 0) {
        if (!isOperator(value) && value != 0) {
           document.getElementById("result").innerText = value;
        }
    }else{
        if (!(isOperator(lastStr) && isOperator(value))) {
            document.getElementById("result").innerText += value;
        }
    }
}

function isOperator(str){
    if(str == "+" || str == "-" || str == "*" || str == "/"){
        return true;
    }else{
        return false;
    }
}