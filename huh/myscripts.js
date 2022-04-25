const print = console.log;
var numberr = {"a":1,"b":2}
function num(key,a){
    if (isNaN(numberr[key])){
        numberr[key]=0
    } else {
        numberr[key] +=a
    }
    return numberr[key]
}
function fun_snackbar(...text) {
    var el = document.createElement("div");
    el.className = "snackbar";
    var y = document.getElementById("snackbar-container");
    el.innerHTML = text;
    y.append(el);
    el.className = "snackbar show";
    setTimeout(function(){ el.className = el.className.replace("snackbar show", "snackbar"); }, 3000);
  }
