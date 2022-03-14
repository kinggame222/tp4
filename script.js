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

    let Nom_valide_cookie = false;
    setCookie();
    
    console.log(Nom_valide_cookie);
    
    if (document.cookie != null) {
        alert("E");
    }else{
        alert("nus");
        setCookie();
    }
    
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
    let pointage = 0;

    let date_exp = new Date();
    date_exp.setTime(date_exp.getTime() + (45 * 24 * 3600 * 1000)); // Ici on définit 45 jours
    SetCookie("nom", nom, date_exp);
}
function GetCookie(name) {
    let arg = name + "=";  // "nom="
    let alen = arg.length; // longueur de arg = 4
    let clen = document.cookie.length; // "nom=sylvain"
    //console.log(document.cookie);
    let i = 0;
    while (i < clen) {
        let j = i + alen;
        if (document.cookie.substring(i, j) == arg) return getCookieVal(j);
        i = document.cookie.indexOf(" ", i) + 1;
        if (i == 0) break;
    }
    return null;
}
function brasser() {

}
function nouvelles() {

    let brasse = document.getElementById("brasse");
    brasse.disabled = false;

    let terminer = document.getElementById("terminer");
    terminer.disabled = false;

    let nouvelle_partie = document.getElementById("nouvelle");
    nouvelle_partie.disabled = true;
}
