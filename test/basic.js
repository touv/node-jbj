
/* global describe, it */
'use strict';
var assert = require('assert')
  , JBJ = require('..');

describe('basic', function () {
  var input = {
    "a" : {
      "b" : {
        "c" : "value"
      },
      "d" : ['C', 'B', 'A'],
      "e" : 3
    }
  };

  it('basic #1', function() {
    var stylesheet = {
      "get": "a.b.c",
      "capitalize" : null
    };
    var output = JBJ.renderSync(stylesheet, input);
    assert.equal(output, 'Value');
  });

  it('basic #2', function() {
    var stylesheet = {
      "get": "a.b.c",
      "upcase" : null
    };
    var output = JBJ.renderSync(stylesheet, input);
    assert.equal(output, 'VALUE');
  });

  it('basic #3', function() {
    var stylesheet = {
      "get": "a.b.c",
      "upcase" : null,
      "downcase" : null
    };
    var output = JBJ.renderSync(stylesheet, input);
    assert.equal(output, 'value');
  });

  it('basic #4', function() {
    var stylesheet = {
      "get": "a.d",
      "first" : null
    };
    var output = JBJ.renderSync(stylesheet, input);
    assert.equal(output, 'C');
  });

  it('basic #5', function() {
    var stylesheet = {
      "get": "a.d",
      "last" : null
    };
    var output = JBJ.renderSync(stylesheet, input);
    assert.equal(output, 'A');
  });

  it('basic #6', function() {
    var stylesheet = {
      "get": "a.d",
      "sort" : null,
      "first" : null
    };
    var output = JBJ.renderSync(stylesheet, input);
    assert.equal(output, 'A');
  });

  it('basic #7', function() {
    var stylesheet = {
      "get": "a.d",
      "length" : null,
    };
    var output = JBJ.renderSync(stylesheet, input);
    assert.equal(output, 3);
  });

  it('basic #8', function() {
    var stylesheet = {
      "get": "a.e",
      "plus" : 3,
    };
    var output = JBJ.renderSync(stylesheet, input);
    assert.equal(output, 6);
  });

  it('basic #9', function() {
    var stylesheet = {
      "get": "a.e",
      "minus" : 2,
    };
    var output = JBJ.renderSync(stylesheet, input);
    assert.equal(output, 1);
  });

  it('basic #10', function() {
    var stylesheet = {
      "get": "a.e",
      "times" : 2,
    };
    var output = JBJ.renderSync(stylesheet, input);
    assert.equal(output, 6);
  });

  it('basic #11', function() {
    var stylesheet = {
      "get": "a.e",
      "times" : 2,
      "dividedBy" : 3
    };
    var output = JBJ.renderSync(stylesheet, input);
    assert.equal(output, 2);
  });

  it('basic #12', function() {
    var stylesheet = {
      "get": "a.d",
      "join" : "/"
    };
    var output = JBJ.renderSync(stylesheet, input);
    assert.equal(output, 'C/B/A');
  });

  it('basic #13', function() {
    var stylesheet = {
      "get": "a.d",
      "join" : "/",
      "truncate": 3
    };
    var output = JBJ.renderSync(stylesheet, input);
    assert.equal(output, 'C/B');
  });


  it('basic #14', function() {
    var stylesheet = {
      "get": "a.d",
      "join" : " ",
      "truncateWords": 2
    };
    var output = JBJ.renderSync(stylesheet, input);
    assert.equal(output, 'C B');
  });

  it('basic #15', function() {
    var stylesheet = {
      "get": "a.e",
      "cast" : "string",
      "prepend": "#"
    };
    var output = JBJ.renderSync(stylesheet, input);
    assert.equal(output, '#3');
  });

   it('basic #16', function() {
    var stylesheet = {
      "get": "a.d",
      "join" : "/",
      "truncate": 3,
      "append": "..."
    };
    var output = JBJ.renderSync(stylesheet, input);
    assert.equal(output, 'C/B...');
  });

  it('basic #17', function() {
    var stylesheet = {
      "get": "a.d",
      "join" : "/",
      "truncate": 3,
      "shift": 2,
    };
    var output = JBJ.renderSync(stylesheet, input);
    assert.equal(output, 'B');
  });

  it('basic #18', function() {
    var stylesheet = {
      "get": "a.d",
      "join" : "/",
      "replace": "/",
    };
    var output = JBJ.renderSync(stylesheet, input);
    assert.equal(output, 'CBA');
  });

  it('basic #19', function() {
    var stylesheet = {
      "get": "a.d",
      "join" : "/",
      "replace": ["/", "|"],
    };
    var output = JBJ.renderSync(stylesheet, input);
    assert.equal(output, 'C|B|A');
  });





});
