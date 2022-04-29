const print = console.log;
let numberr = {"a":1,"b":2}
function num(key,a){
    if (isNaN(numberr[key])){
        numberr[key]=0
    } else {
        numberr[key] +=a
    }
    return numberr[key]
}
function fun_snackbar(...text) {
    let el = document.createElement("div");
    el.className = "snackbar";
    let y = document.getElementById("snackbar-container");
    el.innerHTML = text;
    y.append(el);
    el.className = "snackbar show";
    setTimeout(function(){ el.className = el.className.replace("snackbar show", "snackbar"); }, 3000);
  }
function change_text(id,text){
    let myElement = document.getElementById(id);
    myElement.innerHTML = text;
}
function add_text(id,new_line=false,text){
    let myElement = document.getElementById(id);
    let old_text = document.getElementById(id).innerHTML;
    if (new_line){
        myElement.innerHTML = old_text+'<br>'+text;
    } else {
        myElement.innerHTML = old_text+text;
    }
}
function runnn(id,text){
    let start = "C:\\Users\\unidentified>"
    let teg = text
    text = text.toUpperCase();
    if(text=="$KEEGANG"){
        add_text(id,true,start+teg)
        start_program(id)
    } else if(text == '$HELP'){
        add_text(id,true,start+teg)
        add_text(id,true,"how can i help you huh bruh")
    } else if(text.substring(0,6) == '$START'){
        add_text(id,true,start+teg)
        add_text(id,true,"changed to "+teg.substring(6))
        let button = document.getElementById('send_btn').onclick = function(){runnn('text_in_textbox',get_text('input_text'));clear_text('input_text',`${teg.substring(6)}`);}
    } else if(text.substring(0,7)=='$RUN JS'){
        add_text(id,true,start+teg)
        add_text(id,true,"JavaScript runner type exit() to exit JavaScript runner")
        let button = document.getElementById('send_btn').onclick = function(){jsrunner('text_in_textbox',get_text('input_text'));clear_text('input_text','');}
    } else {
        add_text(id,true,start+teg)
        add_text(id,true,"unknow command "+teg)
    }
}
function get_text(id){
    return document.getElementById(id).value;
}
function clear_text(id,text){
    let myElement = document.getElementById(id);
    myElement.value=text;
}
function start_program(id){
    text= 'keegang 3.10.3 (tags/v3.10.3:a342a49, ��� 32 20xx, ��:��:��) [��� 256 bit (AMD256)] on unknown os 256'
    add_text(id,true,text)
    text= 'Type "$help", "$copyright", "$credits" or "$license" for more information.'
    add_text(id,true,text)
    }
function jsrunner(id,text){
    let start = ">>"
    if(text!=='exit()'){
    let output = eval(text)
    add_text(id,true,start+text)
    add_text(id,true,output)
    } else {
      add_text(id,true,'exit program')
      let button = document.getElementById('send_btn').onclick = function(){runnn('text_in_textbox',get_text('input_text'));clear_text('input_text','$');}
    }
}
