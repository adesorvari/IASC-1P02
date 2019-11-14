var startTime = (new Date()).getTime();
var finishTime;

function stopTime(){
  finishTime = (new Date()).getTime();
  var newFinishTime = (finishTime - startTime)/600;
  alert("You have been on this website for: " + newFinishTime + " seconds");
}
