//getting classes for sorting data
const InfoInt = require('./infoGathering/InfoInt');
const InfoBool = require('./infoGathering/InfoBool');
const InfoString = require('./infoGathering/InfoString');
const InfoObject = require('./infoGathering/InfoObject');
let infoInt = new InfoInt;
let infoBool = new InfoBool;
let infoString = new InfoString;
let infoObject = new InfoObject;

/** This class works on arrays of sorted data and gathers stats on them */
class CatStat {
	/**
	 * loop through the sorted data and gather info on it based on its type
	 * @param sortedData sorted data from AutoCat to gather information on
	 */
	gatherInfo(sortedData) {
		let retArray = [];
		let objPlaces = [];
		for (let [key, value] of Object.entries(sortedData)) {
			let type = typeof(sortedData[key][0]); //get the type of items in the value

			switch (type) {
				//Do different things depending on type of data
				case 'string':
					retArray.push(infoString.get(value, key));
					break;

				case 'number':
					retArray.push(infoInt.get(value, key));
					break;

				case 'object':
					retArray.push(infoObject.get(value, key));
					objPlaces.push(retArray.length - 1); //Keeping track of the location of objects in our array so we can sort them again
					break;

				case 'boolean':
					retArray.push(infoBool.get(value, key));
					break;

				default:
					console.log(`${type}, I haven't been taught to sort this data structure.`);
			}
		}
		return {
			retArray,
			objPlaces
		};
	}
}

module.exports = CatStat;