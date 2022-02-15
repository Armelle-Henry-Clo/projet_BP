
let sing = document.getElementsByName('chanteuse');
    song = document.getElementsByName('checkbox');
    title = document.getElementById('titleJs');
    btnQuizz = document.getElementById('quizz');
    btnValid = document.getElementById('btn'),
    x = document.getElementById('pseudo');
    y = document.getElementById ('mail');  
    
function change(){    
    new this.innerHTML.value; 
};

btnQuizz.addEventListener('click', function(){ 
    document.getElementById('titleJs').innerHTML = `Quel talent! ${sing} est terrible dans ${song}.`
});   

btnValid.addEventListener('click', function(){        
    document.getElementById('alert').innerHTML = 
    `Bonjour ${x.value} Bienvenue sur ton espace Black Pink! Reçois des news de tes chanteuses préférées sur ${y.value}`
});
