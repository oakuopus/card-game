let matches = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o"] //all possible matches 

var container = document.getElementById("container") //get container as variable to append cards

function shuffleArray(array) { // function to shuffle the array at the start of each round.
    for (let i = array.length - 1; i > 0; i--) { // decrement from 14 to 0
        const j = Math.floor(Math.random() * (i + 1)); // mathematically complex array shuffler 
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
matches = shuffleArray(matches)

for(let i = 0; i < 30; i++) { // loop 30 times to make 30 cards
    var match;
    switch(true) {
        case (i <= 1): //assign a letter to each card, 2 cards each sharing a letter using a switch case
            match = matches[0];
            break;
        case (i <= 3):
            match = matches[1];
            break;
        case (i <= 5):
            match = matches[2];
            break;
        case (i <= 7):
            match = matches[3];
            break;
        case (i <= 9):
            match = matches[4];
            break;
        case (i <= 11):
            match = matches[5];
            break;
        case (i <= 13):
            match = matches[6];
            break;
        case (i <= 15):
            match = matches[7];
            break;
        case (i <= 17):
            match = matches[8];
            break;
        case (i <= 19):
            match = matches[9];
            break;
        case (i <= 21):
            match = matches[10];
            break;
        case (i <= 23):
            match = matches[11];
            break;
        case (i <= 25):
            match = matches[12];
            break;
        case (i <= 27):
            match = matches[13];
            break;
        case (i <= 29):
            match = matches[14];
            break;
    }
    var card = document.createElement("div") // create card 
    card.innerHTML = // quckly skip through creating multiple elements by using a backtick and html code, use onclick flipping and matching, as well as id card with the indexes card number
    `<div onclick="flipping(${i}), matching()" class="card" id="card${i}"> 
        <div class="card-face card-front">
        <h1>Front Face</h1>
        </div>
        <div class="card-face card-back">
        <h1> ${match}</h1>
    </div>`
    container.appendChild(card) // append to th container 
}

function flipping(i){ //function the add a class ".flipped", which rotates the card, this is undone after 2 seconds
    var findCard = document.getElementById('card' + i); //gets the specific cards id that was clicked
    findCard.classList.toggle('flipped');
    setTimeout(function() {
        findCard.classList.remove('flipped');
      }, 2000);
}

var matchedCards = [];
function matching(){ //is called on every click to check for matched cards
    var flipped = document.querySelectorAll(".flipped"); // to find all currently flipped cards
    if (flipped.length === 2 && flipped[0].innerHTML === flipped[1].innerHTML) { //if the are 2 flipped cards and the first 2 clicked equal each other, they are a match
        if (!flipped[0].classList.contains('matched') && !flipped[1].classList.contains('matched')) { // if they arent already matched
            flipped.forEach(card => { // give them the class that indicates they are matched and push them to the matched cards array
                card.classList.add('matched');
                matchedCards.push(card); 
            });
    }
    }
}

let time; // 2 vars to set the time and update time every 1000 ms
let elapsedTime = 0;
function updateTimer() {
    elapsedTime++;
    document.getElementById("time").innerHTML = elapsedTime; //update time
}
time = setInterval(updateTimer, 1000); // call function to add a sec every 1000 ms