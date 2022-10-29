# JSON AutoArray Categoriser

## What is the project
JSON AutoArray Categoriser is a program which takes a JSON array, groups different keys in the file, and gives information about data from these keys.
This program is my first attempt at using node-JS, working with JSON, and using classes.

## How to run the project
1. Clone the repository ```git clone https://github.com/spruce04/JSON-AutoArray-Categoriser.git```.
2. Add a data file to the *JSONData* folder, or use the sample data.
3. Change the *dataPath* and/or the *resultsPath* variable in **./paths.js** to represent the new path to the data and output location.
4. Move to the src directory ```cd src```.
5. Run the program ```node index.js```.
6. Move to the tmp directory (or wherever the data is being outputted) and open the **results.txt** file (or whichever file you have redirected the output to) to view the categorised data.

## Limitations
- The program can attempt to sort JSON objects, but will encounter inaccuracies when compared to sorting JSON arrays.
- When sorting nested arrays, the program treats them like objects and associates them with a key even though there is no key to associate them with. An example of this is in the sample dataset.
- There are probably many other limitations which I am unaware of.
- I'll work at fixing these limitation at some stage in the future

## Contributing/Feedback
- If you want to contribute or give feedback, email me: ```sam.flax2005@gmail.com```
- Please note that this is just a side project i've been working on in my own time and my programming knowledge is self taught :)
