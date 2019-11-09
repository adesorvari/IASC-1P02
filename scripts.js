
document.write("hello world");

function changePara() {
  document.getElementById("jsexample").innerHTML = "This is the replaced text";
}

var mathX = 1;
var mathY = 3;
var mathZ;

mathZ = mathX + mathY;

document.write(mathZ);

function argExample(x,y){
  mathZ = x + y;
  document.write(mathZ);
}

document.getElementById("one").style.color = "blue";

function changeStyle() {
  
  document.getElementById("one").style.color = "blue";

  document.getElementById("two").style.fontSize = "1px";

  document.getElementById("three").style.marginLeft = "150px";


}
