const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const data = require('./data/data.js');
const cors = require('cors');
let updatedData = [];
let testData = [];
const bodyParser = require('body-parser');
let happyData = data.happyData;
let locationData = data.locationData;

app.use(cors());
app.use(bodyParser.json());

function addObjects (array1, array2) {
  return array1.map(item => {
    return combineObjects(item, array2);
  });
}

function combineObjects(oneObject, locationArray) {
  for (var i = 0; i < locationArray.length; i++) {
    if (oneObject.name === locationArray[i].name) {
      var newObject = Object.assign(oneObject, locationArray[i]);
      updatedData.push(newObject);
    }
  }
  return newObject;
}

addObjects(happyData, locationData);

app.get('/', (req, res) => {
  res.json(updatedData);
});

app.post('/', (req, res) => {
  updatedData.push(req.body);
  res.json("It works");
});

app.listen(port, () => {
  console.log('listening here ', port);
});

module.exports = {
  addObjects,
  combineObjects
};