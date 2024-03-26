function sceltaGiocatore_carta() {
    resetStyle();
    gestoreGioco(0);
    document.getElementById("carta").style.textDecoration = "underline";
}

function sceltaGiocatore_sasso() {
    resetStyle();
    gestoreGioco(1);
    document.getElementById("sasso").style.textDecoration = "underline";
}

function sceltaGiocatore_forbici() {
    resetStyle();
    gestoreGioco(2);
    document.getElementById("forbici").style.textDecoration = "underline";
}

function get_sceltaComputer() {
    var sceltaComputer = Math.floor(Math.random() * 3);
    return sceltaComputer
}

function scriviMessaggio (nodo, messaggio) {
    var nodoTesto = document.createTextNode(messaggio);
    nodo.replaceChild(nodoTesto, nodo.firstChild);
}

function clear() {
    scriviMessaggio(nodoMessaggioComputer, '');
    scriviMessaggio(nodoMessaggioRisultato, '');
}

function resetStyle() {
    document.getElementById("carta").style.textDecoration = "none";
    document.getElementById("forbici").style.textDecoration = "none";
    document.getElementById("sasso").style.textDecoration = "none";
}

function vittoria() {
    setTimeout(function() {
        nodoPunteggioGiocatore.innerText = parseInt(nodoPunteggioGiocatore.innerText) + 1;
        scriviMessaggio(nodoMessaggioRisultato, 'Hai vinto!');
    }, 600);
}

function sconfitta() {
    setTimeout(function() {
        nodoPunteggioComputer.innerText = parseInt(nodoPunteggioComputer.innerText) + 1;
        scriviMessaggio(nodoMessaggioRisultato, 'Hai perso!');
    }, 600);
}

function pareggio() {
    setTimeout(function() {
        scriviMessaggio(nodoMessaggioRisultato, 'Pareggio :-0');
    }, 600);
}

function numToText(n) {
    setTimeout(function() {
        if (n==0) {
            scriviMessaggio(nodoMessaggioComputer, 'Carta!');
        }
        if (n==1) {
            scriviMessaggio(nodoMessaggioComputer, 'Sasso!');
        }
        if (n==2) {
            scriviMessaggio(nodoMessaggioComputer, 'Forbici!');
        }
    }, 200);
}

function gestoreGioco(sceltaGiocatore) {
    var sceltaComputer = get_sceltaComputer();
    clear();
    numToText(sceltaComputer);
    if (sceltaGiocatore == sceltaComputer) {
        pareggio();
    }
    else if (sceltaGiocatore + 1 == sceltaComputer || (sceltaGiocatore == 2 && sceltaComputer == 0)) {
        vittoria();
    }
    else {
        sconfitta();
    }
}


var nodoCarta;
var nodoForbici;
var nodoSasso;
var nodoPunteggioGiocatore;
var nodoPunteggioComputer;
var nodoMessaggioRisultato;
var nodoMessaggioComputer;


function gestoreLoad () {
    try {
        nodoCarta = document.getElementById('carta');
        nodoForbici = document.getElementById('forbici');
        nodoSasso = document.getElementById('sasso');
        nodoPunteggioGiocatore = document.getElementById('punteggio_giocatore');
        nodoPunteggioComputer = document.getElementById('punteggio_computer');
        nodoMessaggioComputer = document.getElementById('messaggioComputer');
        nodoMessaggioRisultato = document.getElementById('messaggioRisultato');
        nodoCarta.onclick = sceltaGiocatore_carta;
        nodoForbici.onclick = sceltaGiocatore_forbici;
        nodoSasso.onclick = sceltaGiocatore_sasso;
        var nodoTestoComputer = document.createTextNode("");
        nodoMessaggioComputer.appendChild(nodoTestoComputer);
        var nodoTestoRisultato = document.createTextNode("");
        nodoMessaggioRisultato.appendChild(nodoTestoRisultato);
    } catch ( e ) {
        alert("gestoreLoad " + e);
    }
}

window.onload = gestoreLoad;
