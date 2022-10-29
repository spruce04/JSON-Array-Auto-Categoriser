const AutoCat = require('./AutoCat');
const paths = require('../paths');
const LogData = require('./LogData');
let autoCat = new AutoCat;
let logData = new LogData;
const chosenFile = require(paths.dataPath);//path to the file containing data
const output = paths.resultsPath;//path to log the data

//runs the program
logData.writeData(output, autoCat.parseObject(autoCat.gatherCategories(chosenFile)));