let mic_btn = document.getElementById('speechtotext');
search_bar = document.getElementById('search_bar');

mic_btn.addEventListener('click', () => {
  // Use API
  var recognition = new webkitSpeechRecognition || window.SpeechRecognition;

  recognition.lang = "en-GB"
  recognition.onresult = function (event) {
    search_bar.value = event.results[0][0].transcript;
  }
  // start record
  recognition.start();

  // Search your query in google
  setTimeout(() => {
    if (search_bar.value == "") {
    } else {
      window.location = "http://www.google.com/search?q=" + search_bar.value;
      return false;
    }
  }, 5000);
});

// Type text automatically in input placeholder 
var i = 0;
var txt = "Search Google ot type a URL";

if (location.reload) {
  types();
}
function types() {
  if (i < txt.length) {
    document.getElementById('search_bar').placeholder += txt.charAt(i);
    i++;
  }
  setTimeout(types, 100);
}






