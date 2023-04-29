let random= Math.floor((Math.random() * 100) + 1);
let info= document.getElementById('info1');
let infobox= document.getElementById('infobox');
let play= document.getElementById('play');
let reset= document.getElementById('reset');
let img= document.getElementById('imgg');



function guessTheNumber(event){

    
    let input = document.getElementById('input').value;
    input= parseInt(input)
    event.preventDefault();
    

    let diff= random - input;

     if(input==random){
        info.innerText="Correct"
        info.style.color="white"
        infobox.style.backgroundColor="green"  
        img.src="images/winner.gif" 
        img.style.height="100px"
        img.style.width="100px"
     }

     else if( input >= 100){
        info.innerText="Out of range"
        info.style.color="red"
        infobox.style.backgroundColor="black"   
     }
     else if( input <= 1){
        info.innerText="Out of range"
        info.style.color="red"
        infobox.style.backgroundColor="black"   
     }

     else if(diff >=1 && diff <=5){
        info.innerText="You're Close"
        info.style.color="white"
        infobox.style.backgroundColor="#1746A2" 
        img.src="images/try.gif" 
        img.style.height="100px"
        img.style.width="100px" 
     }

     else if(diff >=-5 && diff <=-1){
        info.innerText="You're Close"
        info.style.color="white"
        infobox.style.backgroundColor="#1746A2" 
        img.src="images/try.gif" 
        img.style.height="100px"
        img.style.width="100px" 
     }

     else if( input > random){
        info.innerText="⬆️ Higher than Number 😬"
        info.style.color="red"
        infobox.style.backgroundColor="black" 
        img.src="images/try.gif" 
        img.style.height="100px"
        img.style.width="100px"  
     }

     else if( input < random){
        info.innerText="⬇️ Lower than Number 😬"
        info.style.color="red"
        infobox.style.backgroundColor="black"   
        img.src="images/try.gif" 
        img.style.height="100px"
        img.style.width="100px"
        
     }
    

}


document.getElementById('input').addEventListener('keypress', function(event) {
    if (event.keyCode == 13) {
        event.preventDefault();
        document.getElementById("play").click();
    }
});


reset.addEventListener('click', function(e){
    e.preventDefault();
    console.log(e)
    location.reload();

})


console.log(random);