const InfoBase = require("./InfoBase");

/** This class gathers info on int type data */
class InfoInt extends InfoBase {
	/**
	 * @param data the data to put into the function
	 * @param key the key to associate the data with
	 */
	get(data, key) {
		let numberData = [];
		for (let a = 0; a < data.length; a++) { //put numbers in array
			numberData.push(data[a].toFixed(2)); //fix this so that it handles arrays full of very small numeric values
		}
		//put numbers in descending order
		numberData.sort((a, b) => b - a);
		//calculate frequency of numbers
		this.numberFrequency = {};
		for (let n = 0; n < numberData.length; n++) {
			if (this.numberFrequency.hasOwnProperty(numberData[n]) == false) {
				this.numberFrequency[numberData[n]] = 1;
			} else { //works the same as stringData
				this.numberFrequency[numberData[n]] = this.numberFrequency[numberData[n]] + 1;
			}
		}
		//max and min
		this.max = numberData[0];
		this.min = numberData[numberData.length - 1];
		//add data to the array
		this.numSorted = {};
		this.numSorted[key] = {
			'maximum value': this.max,
			'minimum value': this.min,
			'number frequency': this.numberFrequency
		};
		return this.numSorted;
	}
}

module.exports = InfoInt; 