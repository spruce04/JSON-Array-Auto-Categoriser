const InfoBase = require("./InfoBase");

/** This class gathers info on string type data */
class InfoString extends InfoBase {
	/**
	 * @param data the data to put into the function
	 * @param key the key to associate the data with
	 */
	get(data, key) {
		let stringData = {};
		for (let a = 0; a < data.length; a++) {
			if (stringData.hasOwnProperty(data[a]) == false) { //add the string if it isn't there
				stringData[data[a]] = 1;
			} else { //if the string has been added already, increase its count
				stringData[data[a]] = stringData[data[a]] + 1;
			}
		} //sorting the string data by count
		this.sorted = Object.fromEntries(Object.entries(stringData).sort((a, b) => a[1] - b[1]).reverse());
		//add data to the array
		this.stringSorted = {};
		this.stringSorted[key] = this.sorted;
		return this.stringSorted;
	}
}

module.exports = InfoString;