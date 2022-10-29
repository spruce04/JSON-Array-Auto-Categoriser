/** This class is a template class for data gathering */
class InfoBase {
	/**
	 * @param data the data to put into the function
	 * @param key the key to associate the data with
	 */
	get(data, key) {
		console.log('called base function');
		return data;
	}
}

module.exports = InfoBase;