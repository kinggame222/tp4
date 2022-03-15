var x = 1;
function progress() {
    if (x <= 13) {
        var barre = document.getElementById("barre");
        barre.style.width = (x * 7.69230769231) + "%";
        document.getElementById("pourcentage").innerHTML = x;
        x++;
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
    let pointage = 1;

    let date_exp = new Date();
    date_exp.setTime(date_exp.getTime() + (45 * 24 * 3600 * 1000)); // Ici on définit 45 jours
    SetCookie("nom", nom, date_exp);
    SetCookie("pointage", pointage, date_exp);
    localStorage.setItem(nom, pointage);
}

function GetCookie(name) {
    let arg = name + "=";  // "nom= william"
    let alen = arg.length; // longueur de arg = 4
    let clen = document.cookie.length; // "nom=william"
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

function getCookieVal(offset) {
    let endstr = document.cookie.indexOf(";", offset);
    if (endstr == -1) endstr = document.cookie.length;
    return (document.cookie.substring(offset, endstr));
}

function afficherCookie() {
    let nom = GetCookie("nom");
    document.getElementById("utilisateur").innerText = nom;
}

function supprimerCookie() {
    let date_exp = new Date();
    date_exp.setTime(date_exp.getTime() - (24 * 3600 * 1000)); // Ici on définit 2 jours
    SetCookie("nom", "", date_exp);
    SetCookie("argent", "", date_exp);
}

function valide_cookie() {

    if (document.cookie == 0 || document.cookie == null) {
        setCookie();
    } else {
        afficherCookie();
    }
}

function brasser() {
    var barre = document.getElementsByClassName("image1");
    barre.src = "image\de-YUM.gif";

}

function nouvelles() {

    let brasse = document.getElementById("brasse");
    brasse.disabled = false;

    let terminer = document.getElementById("terminer");
    terminer.disabled = false;

    let nouvelle_partie = document.getElementById("nouvelle");
    nouvelle_partie.disabled = true;
    supprimerCookie();

    

    var inputs = document.querySelectorAll('.dees');
    for (var i = 0; i < inputs.length; i++) {
        inputs[i].checked = false;
    }
    var radio1 = document.querySelector('input[type=radio][name=section1]:checked');
    radio1.checked = false;

    var radio2 = document.querySelector('input[type=radio][name=section2]:checked');
    radio2.checked = false;




}
