var items = [];
var itemsh = [];
var width;
var dcolor;
var ucolor;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(225);

  var elements = 100;
  width = windowWidth / elements;

  var position = 0;
  for (var i = 0; i < elements; i++) {
    var h = Math.round(random(windowHeight));
    items[i] = Math.round(position);
    itemsh[i] = h;
    position += width;
  }

  rectMode(CORNERS);
  dcolor = color(random(255), random(255), random(255));
  ucolor = color(random(255), random(255), random(255));
  frameRate(20);
}

var select = -1;
function draw() {
  background(225);
  for (var i = 0; i < items.length; i++) {
    if (i == select) {
      fill(ucolor);
    }
    else {
      fill(dcolor);
    }
    noStroke();
    rect(items[i], windowHeight, items[i] + width, itemsh[i]);
  }

  // Bubble sort
  var order = false;
  for (var i = 0; i < items.length; i++) {
    if (i + 1 < items.length) {
      if (itemsh[i] < itemsh[i + 1]) { // < >
       	var temp = itemsh[i + 1];
        itemsh[i + 1] = itemsh[i];
        itemsh[i] = temp;
        select = i;
        order = false;
        break;
      }
      else {
        order = true;
      }
    }
  }

  if (order) {
    select = -1;
  }
}
