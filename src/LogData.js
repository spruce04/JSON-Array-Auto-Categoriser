/** This class takes an array of data and statistics and prints it to a file. */
class LogData {
	constructor() {
		this.fs = require("fs");
		this.holdContent = "";
	}

	/** Structure the data in a way where it can easily be written to a document.
	 * @param outputLocation The name to save the data to.
	 * @param dataArray The array of data to write.
	 */
	writeData(outputLocation, dataArray) {
		for (let i = 0; i < dataArray.length; i++) {
			for (const [key, value] of Object.entries(dataArray[i])) {
				this.holdContent += `\n${key} \n`;
				if (Array.isArray(value)) {//if we have nested objects, we need to get their key:value pairs again
					this.writeData(outputLocation, value);
				}
				else { //if not we can just take the value as is
					for (const [k, v] of Object.entries(value))
					this.holdContent += `${k} : ${JSON.stringify(v)} \n`;
				}
			}
		}
		try { //writing data to the file
			this.fs.writeFile(outputLocation, this.holdContent, () => {});
			console.log(`data has been logged in ${outputLocation}`);
		} catch (err) {
			console.log(err);
		}
	}
}

module.exports = LogData;