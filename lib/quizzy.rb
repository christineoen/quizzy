var players = {"players": [
  {"name": "Chris", "score": "5"},
  {"name": "Zach", "score": "7"},
  {"name": "Erin", "score": "6"}
  ]}
var questions = {"questions":[
  {"question": "1", "correct": "0", "incorrect": "0"},
  {"question": "2", "correct": "0", "incorrect": "0"},
  {"question": "3", "correct": "0", "incorrect": "0"},
  {"question": "4", "correct": "0", "incorrect": "0"},
  {"question": "5", "correct": "0", "incorrect": "0"},
  {"question": "6", "correct": "0", "incorrect": "0"},
  {"question": "7", "correct": "0", "incorrect": "0"},
  {"question": "8", "correct": "0", "incorrect": "0"}
  ]}

    <h3><% for (var i = 0; i < localStorage.length; i++) { %>
    <% var names = localStorage.key(i) %>
    <%= names + ":" + localStorage[names]%>
    <br />
    <% } %> </h3>
      <br />
