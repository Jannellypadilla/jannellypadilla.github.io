
var clickCount = 0

var messageButton = document.getElementById("messageButton");

messageButton.addEventListener("click", message_action);

function message_action(){
  clickCount += 1;
  if (clickCount == 1){
    message_action1(); 
  }
  if (clickCount == 2){
    message_action2(); 
  }
  if (clickCount == 3){
    message_action3();
    resetClickCount();
  }
  if (clickCount == 4){
    message_action4();
    resetClickCount();
  }
  if (clickCount == 5){
    message_action5();
    resetClickCount();
  }
}


function message_action1() {
  alert("You deserve love!");
}

function message_action2() {
  alert("Your health matters!");
}

function message_action3() {
  alert("You are worthy of good things!");
}

function message_action4() {
  alert("Your perspective is unique, it's important, and it counts!");
}

function message_action5() {
  alert("You are creative, brave, beautiful, and strong!");
}



var displayScript = document.getElementById("scriptReturned");
var scriptBtn = document.getElementById("scriptBtn");

if (scriptBtn) {
  scriptBtn.addEventListener("click", generateScript);
}

function generateScript() {
  var name = document.getElementById("name").value;
  var location = document.getElementById("location").value;
  var learning = document.getElementById("learning").value;

  displayScript.innerHTML = "Hello, my name is " + name + " and I live in " + location + ". I am writing to inform you that many people lack access to basic healthcare and I ask that you take action in improving access to healthcare for those that lack this basic right. " + learning + "This is an urgent matter that I hope you can consider.  Thank you. Sincerely, ";
}
