// tableaux types de logement
var mobil = new Array("Standard 2 pers","Standard 4 pers","Standard 6 pers","Luxe 2 pers","Luxe 4 pers","Luxe 6 pers");
// tableaux tarifs [jour,semaine] 
var Tarifs = new Array([30,200],[40,260],[50,280], [50,280],[60,330],[70,450]);
var tableaub = document.querySelector('tbody');
var jours = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];


function affichageArticles() {
    for (let i = 0; i < mobil.length; i++) 
    {
        // Insérer une ligne à la dernière position
        let ligne = tableaub.insertRow(-1);

        // affichage du numéro de la ligne
        let colonneMobil = ligne.insertCell(0);
        colonneMobil.innerHTML += mobil[i];

        for (let j = 0; j < Tarifs.length; j++) {

            var colonneTarif = ligne.insertCell(j+1);
            colonneTarif.innerHTML = Tarifs[i][j];     
        }   
        
    }
}
affichageArticles();



var typeM = document.querySelector('#type');
var typeJ = document.querySelector('#nbr_Jours');

function listeType(mobil) 
{
    for (let i = 0; i < mobil.length; i++) 
    {
        var option = document.createElement("option");
        option.text = mobil[i];
        option.value = i;
        typeM.appendChild(option);        
    }  
}
function listeJours(jours) 
{
    for (let i = 0; i < jours.length; i++) 
    {
        var option = document.createElement("option");
        option.text = jours[i];
        option.value = i;
        typeJ.appendChild(option);        
    }  
}

listeType(mobil);
listeJours(jours);


/*
Calcul du prix de la location
prix <- ( duree DIV 7 )* tarifs[ typeMobil - 1 ][1]+( duree MOD 7 ) * tarifs[ typeMobil - 1 ][0];

Affichage du prix de la location
afficher("Le prix à payer est de : " , prix:10:2 ," Euros ",CRLF);
*/


function calcul() {
    
    let MobilSelection = typeM.option[typeM.selectedIndex].value;
    let JoursSelection = typeJ.option[typeJ.selectedIndex].value;

    prix = (JoursSelection / 7) * MobilSelection[typeM-1][1] + (JoursSelection % 7) * Tarifs [typeM -1][0];

    MessageChannel.innerHTML= 'le montant est ' + prix + "euros";
}


