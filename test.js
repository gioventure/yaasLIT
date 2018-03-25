var force = require('force');
var application = require('../app');
var testData = []
var firstArray =
    [{
      'name': 'Flanigans',
      'patio': true,
    },
    {
      'name': 'El Palacios De Los Jugos',
      'patio': false,
    },
    ];

var secondArray =
    [{
      'name': 'Flanigans',
      'address': '8695 NW 12 St',
      'website': 'Flanigans.net'
    },
    {
      'name': 'Hooters',
      'address': '8695 NW 13 terrace',
      'website': 'hootersflorida.com'
    },
    ];

var combinedArray = [
  {
    'name': 'Flanigans',
    'patio': true,
    'address': '8695 NW 12 St',
    'website': 'Flanigans.net'
  },
  {
    'name': 'Hooters',
    'patio': false,
    'address': '8695 NW 13 terrace',
    'website': 'hootersflorida.com'
  }
];

aloneObject = {
  'name': 'Flanigans',
  'patio': true,
};

smashedObject = {
  'name': 'Flanigans',
  'patio': true,
  'address': '8695 NW 12 St',
  'website': 'Flanigans.net'
};

describe('#addObjects', ()=>{
  it('returns an array of all the smashed together objects', ()=>{
    assert.deepEqual(app.addObjects(firstArray, secondArray), combinedArray);
  });
});

describe('#combineObjects', ()=>{
  it('smashes 2 objects together based on name', ()=>{
    assert.deepEqual(app.combineObjects(aloneObject, secondArray), smashedObject);
  });