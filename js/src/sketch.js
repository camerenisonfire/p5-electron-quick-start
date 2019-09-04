'use strict';

// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

//Imports P5. Instantiates the sketch at the bottom of this file.
const p5 = require('p5');
//Imports our custom function to decide what color the fill shall be.
const { getFillColor } = require('./js/src/colorController');

//Starting out sketch and
//injecting p5, as the param p, into our sketch function.
const sketch = (p) => {

  p.setup = () => {
    // Create the canvas
    p.createCanvas(p.windowWidth, p.windowHeight);
  };

  p.draw = () => {
    let fillColor = getFillColor(p.mouseIsPressed);
    p.fill(fillColor)

    p.ellipse(p.mouseX, p.mouseY, 80, 80);
  };

  p.windowResized = () => {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  }
}

//Instantiates P5 sketch to keep it out of the global scope.
const app = new p5(sketch);