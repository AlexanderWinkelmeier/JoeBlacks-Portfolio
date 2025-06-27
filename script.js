function addRecommendation() {
  // Hole das Textfeld
  var textarea = document.getElementById('new_recommendation');
  var text = textarea.value.trim();
  if (!text) return;

  // Erstelle das neue Recommendation-Element
  var recommendationDiv = document.createElement('div');
  recommendationDiv.className = 'recommendation';
  recommendationDiv.innerHTML =
    '<span>&#8220;</span>' + text + '<span>&#8221;</span>';

  // Füge es oben in die Liste ein
  var allRecommendations = document.getElementById('all_recommendations');
  allRecommendations.insertBefore(
    recommendationDiv,
    allRecommendations.firstChild
  );

  // Leere das Textfeld
  textarea.value = '';

  // Zeige das Popup als Bestätigung an
  showPopup(true);
}

function showPopup(bool) {
  if (bool) {
    document.getElementById('popup').style.visibility = 'visible';
  } else {
    document.getElementById('popup').style.visibility = 'hidden';
  }
}
