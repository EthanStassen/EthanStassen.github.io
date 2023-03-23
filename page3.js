const page3 = document.getElementById("Page3");

const nextbutton = document.getElementById("nextbutton");
const backbutton = document.getElementById("backbutton");
const objectivelabel = document.getElementById("objectivelabel");

const clicksfx = new Audio("../assets/click.mp3");

const fullbucket = document.getElementById("fullbucketimg")



backbutton.onclick = function(){
    console.log("clicked")
    clicksfx.play();
    setTimeout(() => {  window.location.href = "../html/page2.html"; }, 100);
}




