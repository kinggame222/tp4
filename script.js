var x = 1;
function progress() {
    if (x <= 13) {
        var barre = document.getElementById("barre");
        barre.style.width = (x * 7.69230769231) + "%";
        document.getElementById("pourcentage").innerHTML = x;
        x++;
    }
}
function valide_cookie() {

    setCookie();
    


    let coo = document.cookie;
    console.log(coo);
}

function SetCookie(name, value, dateExp) {
    let argv = SetCookie.arguments;
    let argc = SetCookie.arguments.length;
    let expires = (argc > 2) ? argv[2] : null;
    let path = (argc > 3) ? argv[3] : null;
    let domain = (argc > 4) ? argv[4] : null;
    let secure = (argc > 5) ? argv[5] : false;
    document.cookie = name + "=" + (value) +
        ((expires == null) ? "" : ("; expires=" + expires.toGMTString())) +
        ((path == null) ? "" : ("; path=" + path)) +
        ((domain == null) ? "" : ("; domain=" + domain)) +
        ((secure == true) ? "; secure" : "");
}
function setCookie() {
    let nom = prompt("quelle est votre nom ");
    let date_exp = new Date();
    date_exp.setTime(date_exp.getTime() + (45 * 24 * 3600 * 1000)); // Ici on définit 45 jours
    SetCookie("nom", nom, date_exp);
}