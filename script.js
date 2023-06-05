var myTime = setTimeout(myHide, 10000);

function myHide() {
    document.getElementById("hide").style.display = "none";
}

function myFunction() {
    var x = setInterval(myIncrease, 1000);
    var number = 0;
    function myIncrease() {
    document.getElementById("increase").innerHTML =  ++number; 
}
var end = setInterval(myEnd, 30000);

function myEnd() {
    clearInterval(x)
}


document.getElementById("myPlay").style.opacity = "0.4";

}
