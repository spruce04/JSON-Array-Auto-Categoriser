const InfoBase = require("./InfoBase");

/** This class gathers info on bool type data */
class InfoBool extends InfoBase {
	/**
	 * @param data the data to put into the function
	 * @param key the key to associate the data with
	 */
	get(data, key) {
		this.trueCount = 0
		this.faslseCount = 0;
		for (let b = 0; b < data.length; b++) {
			if (data[b] == true) {
				this.trueCount = this.trueCount + 1;
			} else {
				this.faslseCount = this.faslseCount + 1;
			}
		}
		//add data to the array
		this.boolFinal = {};
		this.boolFinal[key] = {
			'true': this.trueCount,
			'false': this.faslseCount
		};
		return this.boolFinal;
	}
}
module.exports = InfoBool;