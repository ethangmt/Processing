var x = [];
var y = [];
var w = 4;
var c;
var dots;

function setup() {
  createCanvas(windowWidth, windowHeight);
  c = color(random(255), random(255), random(255));
  dots = color(random(255), random(255), random(255));
  background(c);

  for (var i = 0; i < windowWidth; i++) {
    x[i] = i;
    y[i] = random(windowHeight);
  }
}

function draw() {
  background(c);
  for (var i = 0; i < x.length; i++) {
    noStroke();
    fill(dots);
    ellipse(x[i], y[i], w, w);
  }

  for (var i = 0; i < x.length; i++) {
    if (i + 1 < x.length) {
      if (y[i] < y[i + 1]) {
        var temp = y[i + 1];
        y[i + 1] = y[i];
        y[i] = temp;
      }
    }
  }

}
