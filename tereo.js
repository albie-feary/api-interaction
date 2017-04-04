document.addEventListener('DOMContentLoaded', startGame)

function startGame() {

    var btn = document.getElementById("btn");

    btn.addEventListener("click", function() {
        alert(englishWord.value)
    });

    var englishWord = document.getElementById("englishWord");


}
