//-----Selecteurs---------------
let title = document.getElementById('titleJs');
    btnQuizz = document.getElementById('quizz');
    btnValid = document.getElementById('btn'),
    x = document.getElementById('pseudo');
    y = document.getElementById ('mail');  
    
//Quizz---------------------------

btnQuizz.addEventListener('click', function (e) {
    e.preventDefault();

    // Je déclare à vide une variable machanteuse afin de pouvoir lui affecter une valeur un peu plus bas
    let maChanteuse = "";

    // On récupère l'input qui a été coché
    let sing = document.querySelector('input[name="chanteuse"]:checked');


    // Si l'input existe alors on récupère sa valeur dans la variable maChanteuse
    if (sing != null) {
        maChanteuse = sing.value;
        // console.log(machanteuse);

    }

    // Je déclare un tableau vide pour le remplir un peu plus bas
    let songArray = [];

    // Je récupère l'input dont le name est feat
    let songs = document.getElementsByName('feat');

    // Je boucle sur tous les input  name= "feat"
    for (let song of songs) {
        // Si l'input a été cochée
        if (song.checked) {
            // J'insère la valeur dans le tableau songArray
            songArray.push(song.value);
        }
    }

    // console.log(maChanteuse);
    // console.log(songArray);

    let mesChansons = "";

    for (let song of songArray) {
        // On ajoute les chansons dans une chaîne de caractère - on concatène ce qu'il y avait déjà avant +=
        mesChansons +=  song;
    
        // Ici on ajoute la virgule partout sauf au dernier élément 
        // Si la taille de mon tableau - 1 est différent de l'index de l'élement en cours alors on va ajouter une virgule
        if (songArray.length - 1 !== songArray.indexOf(song)) {   
            mesChansons +=  ', '
        }
    };

    // Affichage du message dans le btn 
    btnQuizz.innerHTML = `${maChanteuse} est vraiment super <br> dans ${mesChansons} <br>`;

});

//----Formulaire----------------

function change(){    
    new this.innerHTML.value; 
};

btnValid.addEventListener('click', function(e){ 
    e.preventDefault();

    if(x.value != null && y.value != null){       
    document.getElementById('alert').innerHTML = 
    `Bonjour ${x.value} Bienvenue sur ton espace Black Pink! Reçois des news de tes chanteuses préférées sur ${y.value}`
    }else{
        document.getElementById('alert').innerHTML = 'Pas encore inscrit? Cliquez au dessus!';   
    }
})

function first(){
    let resultatPrompt = prompt("Entrez votre email");
    if(resultatPrompt == 0 || resultatPrompt !=isNaN){
    alert(`Cette adresse n'est pas valide!`)
    }else{
    document.getElementById("msg").innerHTML = resultatPrompt;
    alert (`Bravo! Bientôt des news sur ton mail: ${resultatPrompt}`);
    }
};