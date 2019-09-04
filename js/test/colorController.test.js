'use strict';

const assert = require('assert');
const { getFillColor } = require('../src/colorController');

describe('Test Color Controller', function () {

  describe('getFillColor', function () {

    it('should return black 0 when mouse is pressed', function () {
      assert.equal(getFillColor(true), 0)
    });

    it('should return white 255 when mouse is pressed', function () {
      assert.equal(getFillColor(false), 255)
    });
  });
});