$(document).ready(function(){
  var pos = 0, test, test_status, question, choice, choices, chA, chB, chC, correct=0;
  var questions =[
    ["What is the area, in square feet, of the triangle whose sides have lengths equal to 10, 6 and 8 feet?","24","480","48","A"],
    ["Of the 80 students in class, 25 are studying German, 15 French and 13 Spanish. 3 are studying German and French; 4 are studying French and Spanish; 2 are studying German and Spanish; and none is studying all 3 languages at the same time. How many students are not studying any of the three languages? ","26","53","36","C"],
    ["A number of the form 213ab, where a and b are digits, has a reminder less than 10 when divided by 100. The sum of all the digits in the above number is equal to 13. Find the digit b. ","7","5","6","A"],
    ["An object travels at fifteen feet per minute. How many feet does it travel in 24 minutes and 40 seconds? ","360","370","600","B"]
  ];
  function _(x){
    return document.getElementById(x);
  }
  function renderQuestion(){
    test = document.getElementById("test");
    if(pos>=questions.length){
      test.innerHTML = "<h2>You got "+correct+" of "+questions.length+" questions correct.</h2>";
      test.innerHTML += "<a class = 'btn btn-default' id='reset'>Reset</a>";
      $("#reset").click(function(){
        window.location.reload(true);
      });
      pos = 0;
      correct = 0;
      return false;
    }
    document.getElementById("test_status").innerHTML = "Question "+(pos+1)+" of "+questions.length;
    question = questions[pos][0];
    chA=questions[pos][1];
    chB=questions[pos][2];
    chC=questions[pos][3];
    test.innerHTML = "<h3>"+question+"</h3>";
    test.innerHTML += "<input type='radio' name='choices' value='A'> "+chA+"<br>";
    test.innerHTML += "<input type='radio' name='choices' value='B'> "+chB+"<br>";
    test.innerHTML += "<input type='radio' name='choices' value='C'> "+chC+"<br><br>";
    test.innerHTML += "<a class = 'btn btn-default' id='submit'>Check Answer</a>";
    $("#submit").click(checkAnswer);
  }
  function checkAnswer(){
    choices = document.getElementsByName("choices");
    for (var i=0;i<choices.length;i++){
      if(choices[i].checked){
        choice = choices[i].value;
      }
    }
    if(choice===questions[pos][4]){
      correct++;
    }
    pos++;
    return renderQuestion();
  }
  return renderQuestion();
});