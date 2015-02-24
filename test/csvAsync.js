/*jshint node:true,laxcomma:true*/
/* global describe, it */
'use strict';
var assert = require('assert')
  , JBJ = require('..');

describe('asynchronous csv', function () {
  var input = {
    "a" : {
      "b" : ["x","y","z"],
      "d" : null
    },
    "c" : "a; b; c"
  };

  it('csv #1', function(done) {
    var stylesheet = {
      "$e" : {
        "find#0": "a",
        "mask": "b",
        "find#1": "b",
        "csv" : ",",
        "trim": true
      }
    };
    var output = JBJ.render(stylesheet, input, function (err, output) {
      assert.equal(output.e, "x,y,z");
      done(err);
    });
  });

 it('csv #2', function(done) {
    var stylesheet = {
      "find": "a.b",
      "csv" : ",",
      "parseCSV": ","
    };
    var output = JBJ.render(stylesheet, input, function (err, output) {
      assert.equal(output[0], "x");
      assert.equal(output[1], "y");
      assert.equal(output[2], "z");
      done(err);
    });
  });

 it('csv #3', function(done) {
  var stylesheet = {
    "find"    : "c",
    "parseCSV": "; "
  };
  var output = JBJ.render(stylesheet, input, function (err, output) {
    assert.equal(output[0], "a");
    assert.equal(output[1], "b");
    assert.equal(output[2], "c");
    done(err);
  });
 });

});
