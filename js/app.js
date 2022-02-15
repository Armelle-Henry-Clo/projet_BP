//-----Selecteurs---------------
let sing = document.getElementsByTagName('chanteuse')["Jennie" ,"Jisoo","Rosé","Lisa"];
    song = document.getElementsByName('feat')['Kiss','BetYourWanna','IceCream','NoMore'];
    title = document.getElementById('titleJs');
    btnQuizz = document.getElementById('quizz');
    btnValid = document.getElementById('btn'),
    x = document.getElementById('pseudo');
    y = document.getElementById ('mail');  
    
//Quizz---------------------------

// function myChange(){
//     sing = 
//     console.log(this.value);
// }

btnQuizz.addEventListener('click', function(){ 
    btnQuizz.innerHTML = `Quel talent!`
});  

//----Formulaire----------------

function change(){    
    new this.innerHTML.value; 
};

btnValid.addEventListener('click', function(){ 
    if(x.value != 0 & y.value != 0){       
    document.getElementById('alert').innerHTML = 
    `Bonjour ${x.value} Bienvenue sur ton espace Black Pink! Reçois des news de tes chanteuses préférées sur ${y.value}`
    }else{
        document.getElementById('alert').innerHTML = 'Pas encore inscrit? Cliquez au dessus!';   
    }
})


function first(){
    let resultatPrompt=prompt("Entrez votre email");
    document.getElementById("msg").innerHTML = resultatPrompt;

    alert (`Bravo! Bientôt des news sur ton mail: ${resultatPrompt}`);
};