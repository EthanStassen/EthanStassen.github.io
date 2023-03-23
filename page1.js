let page1 = document.getElementById("Page1");
let startbutton = document.getElementById("startbutton");
let clicksfx = new Audio("assets/click.mp3");

startbutton.onclick = function(){
    clicksfx.play();
    setTimeout(() => {  window.location.href = "../EthanApp/html/page2.html"; }, 100);
    
}

