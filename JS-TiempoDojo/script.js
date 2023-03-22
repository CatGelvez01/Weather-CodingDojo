
function cityAlert(element){
    alert("Loading weather reaport...");
}

function changeC(){
    var temHigh = document.getElementById("high");
    temHigh.innerText = "°24";

    var temHigh1 = document.getElementById("high1");
    temHigh1.innerText = "°27";

    var temHigh2 = document.getElementById("high2");
    temHigh2.innerText = "°21";

    var temHigh3 = document.getElementById("high3");
    temHigh3.innerText = "°26";

    var temLow = document.getElementById("low");
    temLow.innerText = "°18";

    var temLow2 = document.getElementById("low2");
    temLow2.innerText = "°19";

    var temLow3 = document.getElementById("low3");
    temLow3.innerText = "°16";

    var temLow1 = document.getElementById("low1");
    temLow1.innerText = "°21";

}

function changeF(){
    var temHigh = document.getElementById("high");
    temHigh.innerText = "°75";

    var temHigh1 = document.getElementById("high1");
    temHigh1.innerText = "°80";

    var temHigh2 = document.getElementById("high2");
    temHigh2.innerText = "°69";

    var temHigh3 = document.getElementById("high3");
    temHigh3.innerText = "°78";

    var temLow = document.getElementById("low");
    temLow.innerText = "°65";

    var temLow2 = document.getElementById("low2");
    temLow2.innerText = "°66";

    var temLow3 = document.getElementById("low3");
    temLow3.innerText = "°61";

    var temLow1 = document.getElementById("low1");
    temLow1.innerText = "°70";

}



function hideCookies(){
    var c = document.getElementById("cookiesDisplay");
    c.remove();
}

