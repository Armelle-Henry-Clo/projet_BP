
let sing = document.getElementsByTagName('chanteuse')["Jennie" ,"Jisoo","Rosé","Lisa"];
    song = document.getElementsByName('feat')['Kiss','BetYourWanna','IceCream','NoMore'];
    title = document.getElementById('titleJs');
    btnQuizz = document.getElementById('quizz');
    btnValid = document.getElementById('btn'),
    x = document.getElementById('pseudo');
    y = document.getElementById ('mail');  
    
function change(){    
    new this.innerHTML.value; 
};

function mychange(){
    switch
}

console.log(sing,song);

btnQuizz.addEventListener('click', function(){ 
    document.getElementById('titleJs').innerHTML = `Quel talent! ${sing} est terrible dans ${song}.`
});   

btnValid.addEventListener('click', function(){        
    document.getElementById('alert').innerHTML = 
    `Bonjour ${x.value} Bienvenue sur ton espace Black Pink! Reçois des news de tes chanteuses préférées sur ${y.value}`
});
