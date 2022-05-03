function checkCookie(){
    var user = getCookie("user");
    var msg = document.getElementById("msg");

    if(user != null && user != ""){
        msg.innerHTML = "Bem vindo de volta "+user;
    } else {
        user = prompt("Digite seu nome:","");
        if(user != null & user != ""){
            setCookie("user",user,365);
            msg.innerHTML = "Bem vindo "+user;
        }
    }
}

function setCookie(){
    var exdate = new Date();
    exdate.setDate(exdate.getDate()+exdays);
    var c_value = escape(value)+((exdays == null)? "":";expires"+exdate.toUTCString());
    document.cookie = c_nome+c_value+";path=/";
}

function getCookie(c_nome){
    var c_value = document.cookie;
    var c_start = c_value.indexOf(" "+c_nome+"=");
    if(c_start==-1){
        c_value = null; 
    } else {
        c_start = c_value.indexOf("=",c_start) + 1;
        var c_end = c_value.indexOf(";",c_start);
        if(c_end == -1){
            c_end = c_value.length;
        }
        c_value = unescape(c_value.substring(c_start,c_end));
    }

    return c_value;
}