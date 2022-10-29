const CatStat = require('./CatStat');
let catStat = new CatStat;

/** This class sorts a JSON object containing unsorted data,
 * and performs operations on it using other classes. */
class AutoCat {
	/** Given an object, auto categorise it.
	 * Store the categorisation in an array
	 * @param obj The data to categorise
	 */
	parseObject(obj) {
		let returned = catStat.gatherInfo(obj);
		let dataArray = returned.retArray;
		let objPlacement = returned.objPlaces;
		for (let i = 0; i < objPlacement.length; i++) { //if there are still objects in our array, sort them again.
			let index = objPlacement[i];
			for (const [key, value] of Object.entries(dataArray[index])) {//this needs to be completed so it sorts arrays and objects differently
				let newReturned = {};
				newReturned[key] = this.parseObject(this.gatherCategories(value));
				dataArray.splice(index, 1, newReturned);
			}
		}
		return dataArray;
	}

	/** Given an object, gather the categories together.
	 * Stores categorisations as class member variables
	 * @param obj The object to parse
	 */
	gatherCategories(obj) {
		let arrayObj
		if (Array.isArray(obj)) { //we need to make the data an array to sort it. (this needs to be completed)
			arrayObj = obj;
		}
		else {
			arrayObj = [obj];
		}
		let dataSet = {};
		// For each key, check if it is in our category list, if not then add it
		for (let i = 0; i < arrayObj.length; i++) {
			let entry = arrayObj[i];
			for (const [key, value] of Object.entries(entry)) {
				//if the key isnt already in the this.categories add it
				if (dataSet.hasOwnProperty(key) == false) {
					dataSet[key] = [value];
				}
				else { //otherwise just add to the end of the existing key
					dataSet[key].push(value);
				}
			}
		}
		return dataSet;
	}
}

module.exports = AutoCat; 