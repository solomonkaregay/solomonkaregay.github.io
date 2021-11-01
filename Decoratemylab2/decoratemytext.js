window.onload = function(){
    document.getElementById("decorate").onclick = buttonFunctions;
    document.getElementById("checkbox").onclick = checkBoxFunctions;
    document.getElementById("igpayAtinlayBtn").onclick = igpayAtinlayFunctions;
    document.getElementById("malkovichBtn").onclick = malkovichBtnFunctions;
}
function igpayAtinlayFunctions(){
    var text = document.getElementById("textArea");
    text.style.color = "Blue";

}
function malkovichBtnFunctions()
{
    var text = document.getElementById("textArea");
   
    text.style.color = "Pink";

} 

function buttonFunctions(){
    setInterval(buttonFunctions, 500);
    var x =  document.getElementById("textArea");
    //x.style.fontSize = "13.3333px";
    //var style = x.css("font-size");
    var style = window.getComputedStyle(x, null).getPropertyValue('font-size');
    var fontSize = parseInt(style); 
    fontSize += 2;
    x.style.fontSize = fontSize+"pt";
 }
 function checkBoxFunctions(){

    let bing = document.getElementById("checkbox");
    var y = document.getElementById("textField");
    var z = document.getElementById("textArea");

    if (bing.checked) {
        z.style.color = "green";
        z.style.fontWeight = "bold";
        z.style.textDecoration = "underline";
        y.style.backgroundImage = "url('dollar.jpg')";
    } else {
        z.style.color = "black";
        z.style.fontWeight = "400";
        z.textDecoration = "none";
        y.style.backgroundImage = "none";
    }
 }
 //window.onload = onloadFunction;

 //onclick="BiggerDecoration()