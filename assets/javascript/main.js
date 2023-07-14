"use strict";
//console.log("Hallo Freitag");

//html zugriff herstellen
//rundenazahl useable machen
//aktuelle runde anzeigen, wenn ingame
//funktionalität radios, buttons, button
//werte für stein, schere, papier festlegen
//ki zug mit random beschreiben
//score ingame sichtbar aktualisieren
//gewinn, niederlage errechnen func


//html zugriff, inputs:
//radiobuttons
const inputRundenAnzahlDrei = document.querySelector("three_rounds");
const inputRundenAnzahlFünf = document.querySelector("five_rounds");
const inputRundenAnzahlZehn = document.querySelector("ten_rounds");
//toolbuttons
const inputTools = document.querySelectorAll(".tool");
//resetbutton
const inputNeuesSpiel = document.querySelector(".reset_button");
//form
const rundenAnzahlForm = document.querySelector(".rundenanzahl_form");
const toolForm = document.querySelector(".tools_form");

//html zugriff, outputs: 
const spielerPunkte = document.querySelector(".spieler_punkte");
const kiPunkte = document.querySelector("ki_punkte");
//rundenanzahl
const aktuelleRunde = document.querySelector(".runde");
//ergebnis
const spielErgebnis = document.querySelector(".ergebnis");
//alert fenster, wenn player wins - wunsch


//variablen festlegen
let spielerScore = 0;
let kiScore = 0;

//func
function gamePlay(spielerTool) {
    const kiTool = "schere";
    if (spielerTool === "schere") {
        if (kiTool === "schere") {
            return 0;
        }
        if (kiTool === "stein") {
            return -1;
        }
        if (kiTool === "papier") {
            return 1;
        }
    }
    if (spielerTool === "stein") {
        if (kiTool === "schere") {
            return 1;
        }
        if (kiTool === "stein") {
            return 0;
        }
        if (kiTool === "papier") {
            return -1;
        }
    }
    if (pielerTool === "papier") {
        if (kiTool === "schere") {
            return -1;
        }
        if (kiTool === "stein") {
            return 1;
        }
        if (kiTool === "papier") {
            return 0;
        }
    }
}
