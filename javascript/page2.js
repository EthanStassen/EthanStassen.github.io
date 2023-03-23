const page2 = document.getElementById("Page2");

const nextbutton = document.getElementById("nextbutton");
const backbutton = document.getElementById("backbutton");
const objectivelabel = document.getElementById("objectivelabel");

const clicksfx = new Audio("../assets/click.mp3");
const drillsfx = new Audio("../assets/drillsfx.mp3");
const dingsfx = new Audio("../assets/ding.mp3");
const errorsfx = new Audio("../assets/error.mp3");

const drill = document.getElementById("drillimg")
const spile = document.getElementById("spileimg")
const bucket = document.getElementById("bucketimg")
const treehole = document.getElementById("treeholeimg")

let havedrilled = 0;
let havespiled = 0;
let havebucketed = 0;

backbutton.onclick = function(){
        console.log("clicked")
        clicksfx.play();
        setTimeout(() => {  window.location.href = "../page1.html"; }, 100);
}

nextbutton.onclick = function(){
    if (havebucketed == 1){
    console.log("clicked")
    clicksfx.play();
    setTimeout(() => {  window.location.href = "../html/page3.html"; }, 100);
}
else {
    errorsfx.play();
}
}

drill.onclick = function(){
    if (havedrilled == 0){

        drill.style.left = 50+"%";
        drill.style.top = 40+"%";
        drillsfx.play();
        objectivelabel.innerHTML = "Current Objective: Click the Spile"
        setTimeout(() => {  
            drill.style.left = 85+"%";
            drill.style.top = 50+"%"; 
            treehole.style.visibility = "visible"
            havedrilled = 1;
        }, 2100); 
    }
}

spile.onclick = function(){
    if (havedrilled == 1){
        havespiled = 1;
        treehole.style.visibility = "hidden"
        spile.style.left = 50+"%";
        spile.style.top = 38+"%";
        objectivelabel.innerHTML = "Current Objective: Click the Bucket"
    }
}

bucket.onclick = function(){
    if (havespiled == 1 & havebucketed == 0){
        havebucketed = 1;
        treehole.style.visibility = "hidden"
        bucket.style.left = 47+"%";
        bucket.style.top = 40+"%";
        dingsfx.play();
        objectivelabel.innerHTML = "Current Objective: Click Next Step"
        nextbutton.innerHTML = "Next Step"
    }
}


