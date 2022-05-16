let screen = document.getElementById('speechtotext');
val = document.getElementById('shear_bar');

screen.addEventListener('click', () => {
  // Use API
  var recognition = new webkitSpeechRecognition || window.SpeechRecognition;

  recognition.lang = "en-GB"
  recognition.onresult = function (event) {
    val.value = event.results[0][0].transcript;
  }
  // start record
  recognition.start();

  // Search your query in google
  setTimeout(() => {
    if (val.value == "") {
    } else {
      window.location = "http://www.google.com/search?q=" + val.value;
      return false;
    }
  }, 5000);
});

