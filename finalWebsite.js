const plywoodVal = 1.50;
const tileVal = 10.00;
const carpetVal = 9.00;
const servicesVal = 150.00;

var year = (new Date).getFullYear();
document.getElementById("date").innerHTML = year;

function plywoodCalc(){
  var plywoodValue = Number(document.getElementById('Plywood').value);
  document.getElementById("changeOne").innerHTML =  "$" + plywoodValue * plywoodVal;
}

function tileCalc(){
  var tileValue = Number(document.getElementById('Tile').value);
  document.getElementById("changeTwo").innerHTML = "$" + tileValue * tileVal;
}

function carpetCalc(){
  var carpetValue = Number(document.getElementById("Carpet").value);
  document.getElementById("changeThree").innerHTML = "$" + carpetValue * carpetVal;
}

function serviceCalc(){
  var servicesValue = Number(document.getElementById("Services").value);
  document.getElementById("changeFour").innerHTML = "$" + servicesValue * servicesVal
}

function emailSend(){
  var name = String(document.getElementById("personName").value);
  var email = String(document.getElementById("personEmail").value);
  var body = String(document.getElementById("personMessage").value);
  window.open('mailto:squareConstruction@sc.com?subject=services and inquiries &body=' + name + " " + email + " " + body);
}
