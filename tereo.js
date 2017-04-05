document.addEventListener('DOMContentLoaded', () => {

      // Cache DOM elements
      const maoriWordContainer = document.getElementById("maoriWordContainer");
      const button = document.getElementById("button");
      const englishWord = document.getElementById("englishWord");

      button.addEventListener("click", translateWord);

      function translateWord() {
          const request = new XMLHttpRequest();

          request.open('GET', 'https://eda-te-reo.herokuapp.com/api/translate?word=' + englishWord.value);
          request.onload = () => {
              maoriWordContainer.innerHTML = request.responseText;
          };
          request.send();
      }
});
