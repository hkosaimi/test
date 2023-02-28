let div = document.getElementById("welcome");

function autoPrint(string, color, time) {
    let span = document.createElement("span");
    span.style.color = color;
    div.appendChild(span);
    
    for(let i = -1; i < string.length;){
        let x = setTimeout(function(){
            span.appendChild(document.createTextNode(string[i]))
        }, time);
    
        i++;
        time+=300;
        if(i == string.length){
            clearInterval(x);
        }
    }
}


autoPrint("String ", "#e1ca72",300);
autoPrint("str ", "#7a99ad",2200);
autoPrint("= ", "white",3000);
autoPrint('"',"white",3200);
autoPrint("Welcome to AUKNOTES!", "#74b087",3500);
autoPrint('"', "white",3600);
autoPrint(";", "#e1ca72",3800);

