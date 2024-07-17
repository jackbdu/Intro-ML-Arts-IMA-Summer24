let classifier;
let video;
let label = "";
let confidence = "";

function preload() {
  classifier = ml5.imageClassifier("./my-tm-model/");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  video = createCapture(VIDEO);
  video.hide();
  classifier.classifyStart(video, gotResults);
}

function gotResults(results) {
  label = results[0].label;
  confidence = nf(results[0].confidence, 0, 2);
}

function draw() {
  background(220);
  // image(video, 0, 0, width, height, 0, 0, video.width, video.height, CONTAIN);
  image(video, 0, 0, width, height, 0, 0, video.width, video.height, COVER);
  strokeWeight(5);
  stroke(0);
  fill(255);
  textAlign(CENTER, CENTER);
  textSize(min(width, height) * 0.1);
  text(label, width / 2, height * 0.8);
  text(confidence, width / 2, height * 0.9);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
