
//-----------------QUIZZ-----------------------------

let sing = document.getElementsByClassName("chanteuse").value;
let song = document.getElementsByClassName("feat").value;

 

let btnQuizz = document.getElementById('quizz');
    btnQuizz.addEventListener('click', function($sing,$song){ 
    alert(`Quel talent! {$sing} est terrible dans {$song}`); 
});   


//-----------FORMULAIRE------------------
   
let btnValid = document.getElementById('btn');
let x = document.getElementById('pseudo').value,
    y = document.getElementById ('mail').value;  
    

function change(x){
    x = new x.innerHTML.value
};

function change(y){
    y = new y.innerHTML.value
};


    btnValid.addEventListener('click', function(){        
    document.getElementById('alert').innerHTML = 
    `Bonjour ${x.value} Bienvenue sur ton espace Black Pink! Reçois des news de tes chanteuses préférées sur ${y.value}`
});
