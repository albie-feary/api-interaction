document.addEventListener('DOMContentLoaded', () => {

      // Cache DOM elements
      const maoriWordContainer = document.getElementById("maoriWordContainer");
      const button = document.getElementById("button");
      const englishWord = document.getElementById("englishWord");

      button.addEventListener("click", translateWord);

      function translateWord() {
          const ourRequest = new XMLHttpRequest();

          ourRequest.open('GET', 'https://eda-te-reo.herokuapp.com/api/translate?word=' + englishWord.value);
          ourRequest.onload = () => {
              maoriWordContainer.innerHTML = ourRequest.responseText;
          };
          ourRequest.send();
      }
});
