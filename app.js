console.log("HELLO ROMEO PLATOON!")
// Your function(s) should go here that will interact with the webpage or DOM
function genRandom(){
    let rand = Math.floor(Math.random() * 100) + 1
    return rand
}


function takeGuess(){

    let guessInput = document.getElementById("input-guess");
    guess = guessInput.value;
    console.log('input value: '+ guess);
    
    if(guess==random){
        console.log('right ' + random)
        random = genRandom();
        let e = document.getElementById('result')
        if(e){
            e.innerHTML = "You got it right!"
        }
    }
    else if(guess > random){
        console.log('guess lower ' + random)
        const newDiv = document.createElement("div");
        const newContent = document.createTextNode("You need to guess lower");
        newDiv.appendChild(newContent);
        let e = document.getElementById('result');
        document.body.insertBefore(newDiv,e)
      
    }

    else if(guess < random){
        console.log('guess higher ' + random)
        let e = document.getElementById('result')
        if(e){
            e.innerHTML = "You need to guess higher"
        }
    }
 
}

let random = genRandom();



