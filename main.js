img="";
status="";

function preload() {
    img=loadImage('Bedroom.jpeg');
}

function setup() {
    canvas=createCanvas(640, 420);
    canvas.center();
    objectDetector=ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML="Status : Deceting Objects";

}

function draw() {
    image(img, 0, 0, 640, 420);
    fill("#FF0000");
    text("Couch", 45, 75);
    noFill();
    stroke("#FF0000");
    rect(148, 1137, 2817, 1104);
    fill("#FF0000");
    text("Chair", 45, 75);
    noFill();
    stroke("#FF0000");
    rect(2496, 1288, 570, 473);
}

function modelLoaded() {
    console.log("Model Loaded!");
    status=true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error, results) {
    if (error) {
        console.log(error);
    }
    console.log(results);
}