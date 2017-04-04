document.addEventListener('DOMContentLoaded', startGame)

function startGame() {

    var btn = document.getElementById("btn");

    btn.addEventListener("click", translateWord);

    function translateWord() {
        //  alert(englishWord.value)

        var englishWord = document.getElementById("englishWord");
        var ourRequest = new XMLHttpRequest();

        ourRequest.open('GET', 'https://eda-te-reo.herokuapp.com/api/translate?word=' + englishWord.value);
        ourRequest.onload = function() {
            console.log(ourRequest.responseText);
        };
        ourRequest.send();

    }


}
