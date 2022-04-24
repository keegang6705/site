var print = console.log();
var numberr = {"a":1,"b":2}
function num(key,a){
    if (isNaN(numberr[key])){
        numberr[key]=0
    } else {
        numberr[key] +=a
    }
    return numberr[key]
}
