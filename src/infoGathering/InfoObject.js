const InfoBase = require("./InfoBase");

/** This class ships objects back to AutoCat so they can be sorted again */
class InfoObject extends InfoBase {
	/**
	 * @param data the data to put into the function
	 * @param key the key to associate the data with
	 */
	get(data, key) {
		let object = {};
		object[key] = data;
		return object;
	}
}

module.exports = InfoObject; 