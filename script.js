document.addEventListener('DOMContentLoaded', function() {
    const languageSelector = document.getElementById('language-selector');
    const textToConvert = document.getElementById('text-to-convert');
    const convertButton = document.getElementById('convert-button');
    const stopButton = document.getElementById('stop-button');
  
    let speechSynthesis = window.speechSynthesis;
    let speechUtterance = new SpeechSynthesisUtterance();
  
    convertButton.addEventListener('click', function() {
      let text = textToConvert.value;
      let selectedLanguage = languageSelector.value;
  
      if (text.trim() !== '') {
        speechUtterance.text = text;
        speechUtterance.lang = selectedLanguage;
        speechSynthesis.speak(speechUtterance);
      }
    });
  
    stopButton.addEventListener('click', function() {
      if (speechSynthesis.speaking) {
        speechSynthesis.cancel();
      }
    });
  });
  