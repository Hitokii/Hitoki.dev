// Age
var DOB = new Date("12/14/2002");
var month_diff = Date.now() - DOB.getTime();
var age_dt = new Date(month_diff);
var year = age_dt.getUTCFullYear();
var age = Math.abs(year - 1970);
document.getElementById("age").innerHTML = age;

// Onglet
let onglett = document.getElementById("ongletetudes");
let onglets = document.getElementById("ongletstage");
let ongletp = document.getElementById("ongletpage");

function changeonglet(onglet) {
  if (onglet == "stages") {
    onglett.style.color = "#32353b";
    onglets.style.color = "#fff";
    ongletp.innerHTML =
      "Stage découverte de 3ème : Mairie de Trimbach<br><br>Stage 2nd : Kolb & fils<br><br>Stage 1er : Termelec<br><br>Stage Term : Centre Technique de Wissembourg<br><br>Stage BTS : Hôpital de Wissembourg (Service Informatique)";
  }
  if (onglet == "études") {
    onglett.style.color = "#fff";
    onglets.style.color = "#32353b";
    ongletp.innerHTML =
      "Diplôme national du brevet<br><br>Brevet d'études professionnelles <br>(Métiers de l'électricité et de ses environnements connectés)<br><br>Baccalauréat professionnel <br>(Métiers de l'électricité et de ses environnements connectés)<br><br>BTS (Systèmes numériques)";
  }
}
