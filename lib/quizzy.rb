var players = {"players": [
  {"name": "Chris", "score": "5"},
  {"name": "Zach", "score": "7"},
  {"name": "Erin", "score": "6"}
  ]}
var questions = {"questions":[
  {"question": "1", "correct": "5", "incorrect": "5"},
  {"question": "2", "correct": "6", "incorrect": "4"},
  {"question": "3", "correct": "4", "incorrect": "6"},
  {"question": "4", "correct": "7", "incorrect": "3"},
  {"question": "5", "correct": "5", "incorrect": "5"},
  {"question": "6", "correct": "3", "incorrect": "7"},
  {"question": "7", "correct": "5", "incorrect": "5"},
  {"question": "8", "correct": "6", "incorrect": "4"}
  ]}

    <h3><% for (var i = 0; i < localStorage.length; i++) { %>
    <% var names = localStorage.key(i) %>
    <%= names + ":" + localStorage[names]%>
    <br />
    <% } %> </h3>
      <br />
