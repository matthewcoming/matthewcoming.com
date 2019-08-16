let inner;
let i;
let loops;
let maximum;

export default function sketch (p) {

p.windowResized = function () {
  p.resizeCanvas(.75*p.windowWidth, .75*p.windowHeight);
}

p.setup = function () {
  p.createCanvas(.75*p.windowWidth, .75*p.windowHeight, p.WEBGL);
}

p.draw = function () {
  p.background([0,0,0,0]);
  if (p.windowWidth < 600) {
    p.camera(0, (p.height/2.0) / p.tan(p.PI*30.0 / 180.0), -500, 0, 0, 0, 0, 0, 1);
  } else {
    p.camera(0, (p.height/2.0) / p.tan(p.PI*30.0 / 180.0), -300, 0, 0, 0, 0, 0, 1);
  }
  //p.rotateX(p.HALF_PI*(-1.3));
  p.frameRate(60);
  //p.rotateZ((p.PI/12)*(p.frameCount/60));
  loops = [];
  maximum = 7; // number of loops, greater than 11 will overlap
  if (loops.length < maximum) {
    for (i = 1; i < maximum; i++) {
        create(loops.length);
    }
  }
}

var Bubble = function(x) {
  inner = 200*p.sin((p.frameCount - 31*x)* .01);
  p.push();

  // A lot of magic numbers
  p.translate(0, 0, 110*p.sin((p.frameCount - 31*x)* 0.02) );
  p.fill(0,p.abs(180*p.sin((p.frameCount - 31*x)* 0.005)), p.abs(155*p.cos((p.frameCount - 31*x)* 0.005)));
  p.torus(inner, 16, 50, 10);
  p.pop();
}

var create = function(input) {
  loops.push(new Bubble(input));
}
}

