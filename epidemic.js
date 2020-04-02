var blob;
var blobs = [];
function setup() {
    createCanvas(600, 600);
    blob = new Blob(width/2, height/2, 12);
    for (var i = 0; i < 100; i++) {
        blobs[i] = new Blob(random(width), random(height), 12);
    }
}

function draw() {
    background(0);
    blob.show();
    for (var i = 0; i < blobs.length; i++) {
        blobs[i].show();
    }
}

function Blob(x,y,r) {
    this.pos = createVector(x, y);
    this.r = r;
    this.show = function() {
        fill(255);
        ellipse(this.pos.x, this.pos.y, this.r*2, this.r*2)
    }
}