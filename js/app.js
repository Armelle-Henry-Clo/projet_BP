
//-----------------QUIZZ-----------------------------

// let sing = document.getElementsByClassName("chanteuse");
// let song = document.getElementsByClassName("feat");

//     console.log(sing[2]);
//     console.log(song[0]);
 

let btnQuizz = document.getElementById('quizz');
    btnQuizz.addEventListener('click', function(){ 
    alert(`Quel talent!`); 
});   


//-----------FORMULAIRE------------------
   
let btnValid = document.getElementById('btn');
let psd = document.getElementById('pseudo'),
    email = document.getElementById ('mail').value;       

btnValid.addEventListener('click', function(){    
    document.getElementById('alert').innerHTML = 
    `Bonjour ${psd.value} Bienvenue sur ton espace Black Pink! Reçois des news de tes chanteuses préférées sur ${email.innerHTML} `
});
