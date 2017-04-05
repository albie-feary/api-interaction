document.addEventListener('DOMContentLoaded', startGame)

function startGame() {
    var maoriWordContainer = document.getElementById("maoriWordContainer");
    var button = document.getElementById("button");
    var englishWord = document.getElementById("englishWord");
    button.addEventListener("click", translateWord);

    function translateWord() {
        var ourRequest = new XMLHttpRequest();

        ourRequest.open('GET', 'https://eda-te-reo.herokuapp.com/api/translate?word=' + englishWord.value);
        ourRequest.onload = () => {
            maoriWordContainer.innerHTML = ourRequest.responseText;
        };
        ourRequest.send();
    }
}
