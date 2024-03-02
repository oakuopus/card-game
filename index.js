let matches = ["a", "b", "c", "d", "e", "", "f", "g", "h", "i", "j", "k", "l", "m", "n"]

var container = document.getElementById("container")

for(let i = 0; i < 30; i++) {
    var card = document.createElement("div")
    card.innerHTML = `
    <div onclick="flipping(${i})" class="card" id="card${i}">
        <p class="cardFace cardFront">
            Front Face
        </div>
    </div>
    <div class="cardFace cardBack">
        <p id="back"></p>
    </div>`
    container.appendChild(card)
}
function flipping(i){
    var card = document.getElementById('card' + i);
    card.addEventListener('click', function() {
    card.classList.toggle('flipped');
    setTimeout(function() {
        card.classList.remove('flipped');
      }, 4000); // 5000 milliseconds = 5 seconds
    });
};
