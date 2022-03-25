var nbr = 1;
function progress(nbr) {
    if (nbr <= 13) {
        var barre = document.getElementById("barre");
        barre.style.width = (nbr * 7.69230769231) + "%";
        document.getElementById("pourcentage").innerHTML = nbr;
        nbr++;
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
let pointage = 0;
function setCookie(point) {
    if (document.cookie == "" || document.cookie == null) {

        let nom = prompt("quelle est votre nom ");

        let date_exp = new Date();
        date_exp.setTime(date_exp.getTime() + (45 * 24 * 3600 * 1000)); // Ici on définit 45 jours
        SetCookie("nom", nom, date_exp);
        localStorage.setItem(player, nom);
    }
    else {

        let pointage = point;
        localStorage.setItem("point_total", pointage);
    }
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

}

function valide_cookie() {

    if (document.cookie == 0 || document.cookie == null) {
        setCookie();
        afficherCookie();
    } else {
        afficherCookie();
    }
}
//Brasser les dés
let cptBrasser = 1;
function afficherRandom() {

    //Brasser dés

    for (var x = 1; x <= 5; x++) {
        let y = document.getElementById("d" + x).checked;

        if (y != true) {
            document.getElementById("image" + x).src = "image/de-YUM.gif";
        }
    }
    //Désactiver brasser les dés après 3 fois
    let brasse = document.getElementById("brasse");


    if (cptBrasser == 3) {

        brasse.disabled = true;

    } cptBrasser++;
    setTimeout(afficherNbr, 2100);
}

// afficher l'image random
function afficherNbr() {

    for (let i = 1; i <= 5; i++) {

        let y = document.getElementById("d" + i).checked;

        let rand = 1 + Math.floor(Math.random() * 5);
        if (y != true) {
            let resultat = document.getElementById("image" + i).src = "image/D" + rand + ".png";
            let dés = document.getElementById("image" + i).src = "image/D" + rand + ".png";
            console.log(resultat);
        }
    }
}

//bouton nouvelle partie
function nouvelles() {

    let brasse = document.getElementById("brasse");
    brasse.disabled = false;

    let terminer = document.getElementById("terminer");
    terminer.disabled = false;

    let nouvelle_partie = document.getElementById("nouvelle");
    nouvelle_partie.disabled = true;

    let inputs = document.querySelectorAll('.dees');
    for (var i = 0; i < inputs.length; i++) {
        inputs[i].checked = false;
    }
    let radio1 = document.querySelector('input[type=radio][name=section1]:checked');
    radio1.checked = false;
    progress(nbr = 0);
}

function terminer_tour() {
    let point = 1;
    var bouton_check1 = document.querySelector('input[type=radio][name=section1]:checked');
    let bouton_disable = document.querySelector('input[type=radio][name=section1]:checked');
    if (bouton_check1 == null) {
        alert('veuiller selectionner une case')
    }
    // Désactiver le bouton d’option associé à la combinaison choisie
    bouton_disable.disabled = true;

    //Calculer les points

    pointe();
    //Augmenter la barre de progression

    //  Décocher les cases à cocher

    //Si les 13 combinaisons ont été faites
    if (nbr <= 13) {
        progress(nbr);
        console.log(nbr);
        nbr++;
        //▪ Afficher un message de félicitation
        //TODO:message felicitation
    }
    else {
        //TODO:Mettre à jour vos cookies (si le pointage > pointage inscrit dans le cookie)

        setCookie(point);
        //▪ Désactiver les boutons « Brasser les dés » et « Terminer »
        let brasse = document.getElementById("brasse");
        brasse.disabled = true;
        // desactive
        let terminer = document.getElementById("terminer");
        terminer.disabled = true;
        //▪ Activer le bouton « Nouvelle partie »
        let nouvelle_partie = document.getElementById("nouvelle");
        nouvelle_partie.disabled = false;
    }


}
function pointe(point) {



    for (let i = 1; i <= 5; i++) {

        let y = document.getElementById("d" + i).checked;

        let rand = 1 + Math.floor(Math.random() * 5);
        if (y != true) {
            let resultat = document.getElementById("image" + i).src ;
            console.log(resultat);
        }
    }
}
