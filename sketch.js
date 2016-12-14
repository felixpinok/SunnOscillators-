
var consA = 20;
var sonX, sonY;
var diamX, diamY;
var tono = 100;
var velTono = 0.5;
var sonido1;
var sonido2;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0, 0, 0);
  console.log(consA);
  var consB = 10;
  console.log(consB);
  sonido1 = new p5.Oscillator();
  sonido2 = new p5.Oscillator();
  sonido1.setType('square');
  sonido2.setType('square');
  sonido1.start();
  sonido2.start();
}

function draw() {
 background(random(360), 0, 0, 15);
 var freqOsc;
 sonX = 5000 - (abs(2*mouseX - width)*3.5);
 sonY = (abs(2*mouseY - width)*5);
 diamX = abs(2*mouseX - width);
 diamY = abs(2*mouseY - height);
 tono = tono + velTono;
 if (tono > 255.) {velTono = -0.5;}
 if (tono < 100.) {velTono = 0.5;}
  freqOsc = sonX / 100 + random(0.2);
  sonido1.freq(freqOsc);
  sonido2.freq(freqOsc+0.2);
  sonido1.amp(0.5);
  sonido2.amp(0.5);
  stroke(255, tono, 0);
  noFill();
  strokeWeight(map(diamX,0, width/2, 0, 10) + map(diamY,0, height/2, 0, 10) /3);
  ellipse(width/2, height/2, diamX*1.5, diamY*1.5);
}
